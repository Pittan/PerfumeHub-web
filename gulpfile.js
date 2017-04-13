var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('svg-sprite-inject', function () {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src(['./src/assets/spritesheet.svg']), {
      starttag: '<!-- inject:svg-sprite -->',
      transform: function (filePath, file) {
        // return file contents as string
        return file.contents.toString('utf8');
      }
    }))
    .pipe(gulp.dest('src'));
});
