const awspublish = require('gulp-awspublish')
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish');
const connect = require('gulp-connect');
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');

const paths = {
	dist: './public',
	assets: ['./source/favicons/*','./source/assets/*'],
	css: './source/scss/**/*.scss',
	js: './source/js/**/*.scss',
	views: './source/views/**/*.pug'
};

const publisher = awspublish.create({
	region: 'us-east-1',
	params: {
		Bucket: '169sqft.store'
	}
});

const cfSettings = {
	distribution: 'E3OS81EQT94BLG', // Cloudfront distribution ID
	indexRootPath: true             // Invalidate index.html root paths (`foo/index.html` and `foo/`) (default: false)
};

gulp.task('serve', done => {
	connect.server({
		root: 'public',
		livereload: true,
		port: 8888
	});
	done();
});

gulp.task('assets', () => gulp
	.src(paths.assets)
	.pipe(gulp.dest(paths.dist))
);

gulp.task('js', () => gulp
	.src(paths.js)
	.pipe(uglify())
	.pipe(gulp.dest(`${paths.dist}/js`))
);

gulp.task('sass', () => gulp
	.src(paths.css)
	.pipe(sass())
	.pipe(gulp.dest(`${paths.dist}/css`))
	.pipe(connect.reload())
);

gulp.task('views', () => gulp
	.src(paths.views)
	.pipe(pug())
	.pipe(gulp.dest(paths.dist))
);

gulp.task('watch', done => {
	watch(paths.css, gulp.task('sass'));
	watch(paths.js, gulp.task('js'));
	watch(paths.views, gulp.task('views'));
	done();
});

gulp.task('default', gulp.parallel('assets', 'js', 'sass', 'views'));
gulp.task('serve', gulp.series('default', 'serve', 'watch'));
 
gulp.task('publish-s3', () => gulp
	.src('./public/**/*')
	.pipe(publisher.publish())
	.pipe(publisher.sync())
	.pipe(cloudfront(cfSettings))
	.pipe(publisher.cache())
	.pipe(awspublish.reporter())
);
