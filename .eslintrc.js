module.exports = {
	'env': {
		'node': true
	},
	'parserOptions': {
		'ecmaVersion': 8
	},
	'rules': {
		'eol-last': 'error',
		'eqeqeq': [ 'error', 'allow-null' ],
		'indent': [ 'error', 'tab', { 'SwitchCase': 1 } ],
		'no-trailing-spaces': 'error',
		'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true } ]
	}
};
