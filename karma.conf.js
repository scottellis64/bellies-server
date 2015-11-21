/* global module */
module.exports = function (config) {
	'use strict';
	config.set({
		autoWatch: true,
		singleRun: true,

		frameworks: ['jspm', 'jasmine'],

		files: [
			'./node_modules/babel-core/browser-polyfill.js'
		],

		jspm: {
			config: './config.js',
			loadFiles: [
				'src/test/*.spec.js'
			],
			serveFiles: [
				'src/socket/constants/*.js',
				'src/socket/reducers/*.js',
				'src/socket/store/*.js'
			]
		},

		proxies: {
			'/src/': '/base/src/',
			'/jspm_packages/': '/base/jspm_packages/'
		},

		browsers: ['PhantomJS'],

		preprocessors: {
			'src/test/!(*spec).js': ['babel', 'sourcemap', 'coverage']
		},

		babelPreprocessor: {
			options: {
				sourceMap: 'inline',
				blacklist: ['useStrict']
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		},

		reporters: ['coverage', 'progress'],

		coverageReporter: {
			instrumenters: {isparta: require('isparta')},
			instrumenter: {
				'src/test/*.js': 'isparta'
			},

			reporters: [
				{
					type: 'text-summary',
					subdir: normalizationBrowserName
				},
				{
					type: 'html',
					dir: 'coverage/',
					subdir: normalizationBrowserName
				}
			]
		}
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(/[ /-]/)[0];
	}
};
