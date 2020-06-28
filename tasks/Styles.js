const {dest, src} = require('../node_modules/gulp');

const {preprocessor} = require('./helpers/VariableHelper.js');
const {paths} = require('./helpers/PathsHelper');

const sass         = require('gulp-sass');
const scss         = require('gulp-sass');
const less         = require('gulp-less');
const stylus       = require('gulp-stylus');
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
			  
let x = paths.src;
console.log(x);

function styles() {
	return src(paths.styles.src)
	.pipe(sass())
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
	.pipe(dest('./dist'))
	.pipe(browserSync.stream())
}

exports.styles = styles;