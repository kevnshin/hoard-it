var gulp = require( 'gulp' );
var debug = require( 'gulp-debug' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' );
var minify = require( 'gulp-minify' );
var nodemon = require( 'gulp-nodemon' );

gulp.task('browserSync', function () {
  browserSync({
    proxy: 'localhost:4000',
    open: false
  });
})

gulp.task('sass', function () {
  gulp.src('client/app/app.scss')
    .pipe(debug())
    .pipe(sass())
    .pipe(gulp.dest('client/app'));
})

gulp.task('develop', function () {
  nodemon({ 
    script: './server/app.js',
    //ext: 'html js',
    ignore: ['client/**']
  })
  .on('restart', function () {
    console.log('Hoard-It was restarted!')
  })
})



gulp.task('watch', ['sass', 'browserSync'], function () {
  gulp.watch('client/app/**/*.jade', ['jade']);
  gulp.watch('client/app/**/*.scss', ['sass']);
  gulp.watch('client/app/**/*', function () {
    browserSync.reload();
  });
})


gulp.task('default', ['watch', 'develop']);
