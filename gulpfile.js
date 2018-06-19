var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');

function swallowError (error) {
    console.log(error.toString())
    this.emit('end')
}

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            errLogToConsole: true,
            sourceComments: 'map'}))
        .on('error', swallowError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});
