var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cachebust = require('gulp-cache-bust');

gulp.task('default', function() {
	console.log('gulp here');
});

gulp.task('fileinclude', function() {
	gulp.src('website/src/*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('website'));
});

gulp.task('less', function() {
	gulp.src('website/less/*.less')
		.pipe(less().on('error', function(err) {
		console.error(err.toString());
		this.emit('end');
	}))
		.pipe(gulp.dest('website/css'));
});


gulp.task('watch', ['fileinclude', 'less'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	gulp.watch(['website/src/**/*.html'], ['fileinclude', browserSync.reload]);
	gulp.watch(['website/less/**/*.less'], ['less', browserSync.reload]);
	gulp.watch(['website/**/*.js'], [browserSync.reload]);
});
















/*var gulp = require('gulp');
var watch = require('gulp-watch');
var fileinclude = require('gulp-file-include');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cachebust = require('gulp-cache-bust');
var log = console.log;

var fi = fileinclude({
		prefix: '@@',
		basepath: '@file'
	});

function fileincludeHandler(location) {
	log('fileinclude');
	gulp.src('client/src/*.html')
		.pipe(fi)
		.pipe(gulp.dest('client'));
}

gulp.task('cfileinclude', function() {
	return gulp.src('client/src/*.html')
		.pipe(fi)
		.pipe(gulp.dest('client'));
})

gulp.task('mfileinclude', function() {
	return gulp.src('manager/src/*.html')
		.pipe(fi)
		.pipe(gulp.dest('manager'));
})

gulp.task('default', function() {
	watch(['client/src/*.html', 'manager/src/*.html'], function(vinyl) {
		
		if (vinyl.contents.length) {
			var location = vinyl.base.match((/client|manager/));
			gulp.start(location[0][0] + 'fileinclude');
		}
		
		fileincludeHandler('manager');
	});
})

*/