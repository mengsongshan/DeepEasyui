'use strict';

var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;

var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');
var less = require('gulp-less');
var concat = require('gulp-concat');
var svn = require('gulp-svn');
var copy = require('gulp-copy');
var gulpSequence = require('gulp-sequence');
var moment = require('moment');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var header = require('gulp-header');
var footer = require('gulp-footer');
var rename = require("gulp-rename");
var merge2 = require('merge2');
var replace = require('gulp-replace');

var packageJson = require('./package.json');

var handlebarsDeclare = require('./tool/handlebars/handlebars_declare');

var config = {
    build: 'build',
    cssPaths: [
        'src/res/css/**/*.css',
        '!src/res/css/all.css'
    ],
    appSrc: [
        'src/**/*',
        '!src/stub/*.webm'
    ],
    appDest: 'build/template',
    templatesSrc: ['src/templates/**/*.hbs'],
    templatesDest: 'src/templates',
    temp: 'build/temp'
};

gulp.task('clean.dist', function () {
    return del([config.appDest, config.build + '/*.zip']);
});

gulp.task('clean.temp', function () {
    return del([config.temp, config.appDest + '/eBase.html']);
});

gulp.task('svn:update', function (cb) {
    return svn.update('./', function (err) {
        if (err) {
            throw err;
        }
        cb();
    });
});

gulp.task('seajs', function (cb) {
    exec('grunt', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('less', function () {
    return gulp.src(config.cssPaths)
        .pipe(less({
            paths: [path.join(__dirname, 'src/res')]
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('src/res/css'));
});

gulp.task('handlebars', function () {
    return gulp.src(config.templatesSrc)
        .pipe(handlebars({
            handlebars: require('handlebars'),
            compilerOptions: {
                knownHelpers: {
                    image: true,
                    text: true,
                    ifCond: true,
                    times: true
                },
                knownHelpersOnly: true
            }
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(handlebarsDeclare({
            namespace: 'templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(header(fs.readFileSync('tool/handlebars/prepend.js', 'utf8')))
        .pipe(footer('\n' + fs.readFileSync('tool/handlebars/append.js', 'utf8')))
        .pipe(gulp.dest(config.templatesDest));
});

gulp.task('copy.src', function () {
    return gulp.src(config.appSrc)
        .pipe(copy(config.appDest, {
            prefix: 1
        }));
});

gulp.task('copy.temp', function () {
    return gulp.src(config.temp + '/**/*.js')
        .pipe(gulp.dest(config.appDest));
});

gulp.task('rename', function () {
    return merge2(
            gulp.src(config.appDest + '/index.html')
            .pipe(rename('index_debug.html')),
            gulp.src(config.appDest + '/eBase.html')
            .pipe(rename('index.html'))
        )
        .pipe(gulp.dest(config.appDest));
});

gulp.task('zip:template', function () {
    return gulp.src([config.appDest + '/**/*'])
        .pipe(zip('legoepg' + moment().format('YYYYMMDD_HHmmss') + '.zip'))
        .pipe(gulp.dest(config.build));
});

gulp.task('watch', ['less', 'handlebars'], function () {
    gulp.watch(config.cssPaths, ['less']);
    gulp.watch(config.templatesSrc, ['handlebars']);
});

gulp.task('update:version', function () {
    return gulp.src(['TemplateVersion.html'])
        .pipe(replace('#DATE_VERSION', moment().format('YYYY/MM/DD HH:mm:ss')))
        .pipe(replace('#EPG_VERSION', packageJson.version))
        .pipe(gulp.dest(config.appDest));
});

gulp.task('compile', ['less', 'handlebars']);

gulp.task('default', gulpSequence(['clean.dist', 'clean.temp'], 'svn:update', ['seajs', 'less', 'handlebars'], ['copy.src', 'copy.temp'],
    'rename', 'update:version', 'zip:template', 'clean.temp'));

gulp.task('CI', gulpSequence(['clean.dist', 'clean.temp'], ['seajs', 'less', 'handlebars'], ['copy.src', 'copy.temp'],
    'rename', 'update:version', 'zip:template', 'clean.temp'));