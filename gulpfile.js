var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');
var minify = require("gulp-minify");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browserSync = require('browser-sync').create();

gulp.src("node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest("public/js"));
// gulp.src("node_modules/jqueryui/external/jquery/jquery.js")
//     .pipe(gulp.dest("dist/js"));
// gulp.src("node_modules/jqueryui/jquery-ui.min.css")
//     .pipe(gulp.dest("dist/css"));
// gulp.src("node_modules/bootstrap/dist/css/bootstrap.min.css")
//     .pipe(gulp.dest("public/css"));
// gulp.src("node_modules/font-awesome/fonts/*")
//     .pipe(gulp.dest("dist/fonts"));

// gulp.src("node_modules/jqueryui/jquery-ui.min.js")
//     .pipe(gulp.dest("dist/js"));

// livereload({ start: true });
// gulp.task('css', function () {
//     return gulp.src('css/**/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(uglifycss({
//             maxLineLen: 90,
//             uglifyComments: true
//         }))
//         .pipe(sourcemaps.write("./"))
//         .pipe(gulp.dest('public/css'))
//         .pipe(browserSync.reload({ stream: true }));
//     // .pipe(livereload());
//     ;
// });

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            maxLineLen: 90,
            uglifyComments: true
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({ stream: true }));
    // .pipe(livereload());
    ;
});

gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat({ path: 'main.js', stat: { mode: 0666 }}))
        .pipe(minify({
            noSource: true
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', function () {
    return gulp.src(["./*.html"])
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('templates', function () {
    return gulp.src(["./js/app/**/*.html"])
        .pipe(gulp.dest('public/js/app'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("default", function () {
    // livereload.listen();
    browserSync.init({
        server: "./public"
    });

    gulp.watch(["scss/**/*.scss", "css/**/*.css"], {
        delay: 1000
    }, gulp.task('sass'));

    gulp.watch("js/**/*.js", {
        delay: 1000
    }, gulp.task('js'));

    gulp.watch(["*.html", "js/app/**/*.html"], {
        delay: 1000
    }, gulp.task('html'));

    gulp.watch(["js/app/**/*.html"], {
        delay: 1000
    }, gulp.task('templates'));

    gulp.watch(['./public/**/*.css', './public/**/*.html', './public/**/*.js'])
        .on('change', browserSync.reload);
});
