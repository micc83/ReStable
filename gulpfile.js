
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('minify-css', function () {
	return gulp.src('jquery.restable.css')
		.pipe($.csso())
		.pipe($.rename({suffix: '.min'}))
		.pipe($.header(banner, {pkg:pkg}))
		.pipe(gulp.dest(''))
		.pipe($.size());
});

gulp.task('minify-js', function () {
	return gulp.src('jquery.restable.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe($.header(banner, {pkg:pkg}))
		.pipe(gulp.dest(''))
		.pipe($.size());
});

gulp.task('default', ['minify-css', 'minify-js']);
