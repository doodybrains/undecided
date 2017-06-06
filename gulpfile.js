var gulp = require('gulp');
var template = require('gulp-template');
var data = require('gulp-data');
var fs = require('fs');

gulp.task('build', () =>
  gulp.src('src/index.html')
  .pipe(data(function(file) {
    return JSON.parse(fs.readFileSync('./data/index.json'));
  }))
  .pipe(template())
  .pipe(gulp.dest('build'))
);

module.exports.createDirectoryStructure = createDirectoryStructure;
