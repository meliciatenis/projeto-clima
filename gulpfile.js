const gulp = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');


function ignoreError(error) {
    console.error(error.toString())
    this.emit('end')
}

function compilePug() {
    return gulp
        .src('src/**/*.pug')
        .pipe(pug())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist'))
}

function compileSass() {
    return gulp
        .src('src/**/*.scss')
        .pipe(scss())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist'))
}

function compileJs() {
    return gulp
        .src('src/**/*.js')
        .pipe(uglify())
        .on('error', ignoreError)
        .pipe(gulp.dest('dist'))
}

gulp.task('pug', compilePug)
gulp.task('sass', compileSass)
gulp.task('js', compileJs)

gulp.task('watch-pug', function() {
    watch('src/**/*.pug', compilePug)
})

gulp.task('watch-sass',function(){
    watch('src/**/*.scss',compileSass)
})

gulp.task('watch-js', function() {
    watch('src/**/*.js', compileJs)
})


gulp.task('build', gulp.series('pug', 'sass', 'js'))
gulp.task('dev', gulp.parallel('pug', 'sass', 'js', 'watch-pug', 'watch-sass', 'watch-js'))