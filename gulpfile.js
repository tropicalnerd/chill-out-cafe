'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
	return gulp.src('./src/site/_sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(
			'./src/site/_scss'));
});

gulp.task('watch', function () {
	gulp.watch('./src/site/_sass/**/*.sass', gulp.series('sass'));
});