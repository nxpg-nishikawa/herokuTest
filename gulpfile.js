//gulp
const gulp = require('gulp');
const plumber = require("gulp-plumber");

//webpack
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

const webpackConfigApp = require("./webpackApp.config");
gulp.task('webpack', function() {
		gulp.src('src/js/entry.js')
		.pipe(plumber())
		.pipe(webpackStream(webpackConfigApp, webpack))
		.pipe(gulp.dest('dist/js/'))
});

//js_vendor
const concat = require('gulp-concat');
gulp.task('jsVendor', () => {
	gulp.src('src/js/_include/_vendor/' + '**/*.js')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/js/'));
});

//pug
const pug = require('gulp-pug');
const pugOptions = {
	pretty: true
}

gulp.task('pug', () => {
	gulp.src(['src/pug/' + '**/*.pug', '!' + 'src/pug/' + '**/_*.pug'])
		.pipe(plumber())
		.pipe(pug(pugOptions))
		.pipe(gulp.dest('dist/'));
});

//stylus
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
	gulp.src('src/stylus/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('stylus02', () => {
	gulp.src('src/pug/' + '**/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('dist'))
});


//images
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const changed  = require('gulp-changed');

gulp.task('images', () => {
	gulp.src('src/images/' + '/**/*.{png,jpg,gif,svg}')
		.pipe(changed('dist/images/'))  // src と dist を比較して異なるものだけ処理
		.pipe(imagemin([
		pngquant({
			quality: '65-80',  // 画質
			speed: 1,  // 最低のスピード
			floyd: 0,  // ディザリングなし
		}),
		mozjpeg({
			quality: 85, // 画質
			progressive: true
		}),
		imagemin.svgo(),
		imagemin.optipng(),
		imagemin.gifsicle()
	]))
	.pipe(gulp.dest('dist/images/'))  // 保存
	.pipe(notify('&#x1f363; images task finished &#x1f363;'));
});


//Browser Sync
const browserSync = require("browser-sync");

gulp.task('browser-sync', () => {
	// browserSync({
	// 	server: {
	// 		baseDir:'dist/'
	// 	}
	// });
	gulp.watch('dist/' + "**/*.html", ['reload']);
	gulp.watch('dist/' + "**/*.js", ['reload']);
	gulp.watch('dist/' + "**/*.css", ['reload']);
	gulp.watch('dist/' + "**/*.{png,jpg,gif,svg}", ['reload']);
});

gulp.task('reload', () => {
	browserSync.reload();
});

//watch
gulp.task('watch', function () {
	gulp.watch('src/js/entry.js', ['webpack']);
	gulp.watch('src/js/_include/' + '**/*.js', ['webpack']);
	gulp.watch('src/js/_include/_vendor' + '**/*.js', ['jsVendor']);
	gulp.watch(['src/pug/' + '**/*.pug', '!' + 'src/' + '**/_*.pug'], ['pug']);
	gulp.watch('src/pug/' + '**/*.styl', ['stylus02']);
	gulp.watch('src/stylus/' + '**/*.styl', ['stylus']);
	gulp.watch('src/images/' + '/**/*.{png,jpg,gif,svg}', ['images']);
});


gulp.task('default', ['browser-sync', 'watch']);