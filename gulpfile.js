const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();


const sassDir = 'app/scss';
const cssDir = 'app/css';

let sassFiles = [ sassDir + "/*.scss" ];

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('css', function () {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(cssDir))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(sassDir + '/*.scss', ['css']);
    gulp.watch("app/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['css', 'watch', 'browser-sync']);