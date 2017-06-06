var gulp = require('gulp');
var template = require('gulp-template');
var data = require('gulp-data');
var fs = require('fs');
var createFile = require('create-file');

var linkObject = {
  "linkOne": {
   "title": "",
   "url": ""
 },
 "linkTwo": {
  "title": "",
  "url": ""
 }
};

gulp.task('create', () =>
  createFile('data/index.json', JSON.stringify(linkObject), function (err) {
    console.log(err);
  })
);

gulp.task('build', () =>
  gulp.src('src/index.html')
  .pipe(data(function(file) {
    return JSON.parse(fs.readFileSync('./data/index.json'));
  }))
  .pipe(template())
  .pipe(gulp.dest('build'))
);
