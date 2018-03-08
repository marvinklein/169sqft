# 169sqft
We’re making an adorable 169 square-foot store for [an_erin](https://an-erin.com) in Boston’s Seaport district.

## Setup
First, install node dependencies with
```
npm install
```

Then, start the local preview server. This starts a [connnect](https://www.npmjs.com/package/connect) server with [livereload](https://www.npmjs.com/package/connect-livereload) on port 8888.
```
npm start
```

Finally, publish the site to AWS S3. You’ll need to have your credentials and AWS bucket policy set up correctly. You can easily do this using `aws configure`. Publishing also creates an AWS CloudFront invalidation for the changed resources.
```
npm run s3
```
