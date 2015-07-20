/* Write the variables that are going to store the plugins we installed. Example */

var gulp = require('gulp'); 
var jade = require('gulp-jade'); 
var sass = require('gulp-sass'); 

/* Write the tasks for the plugins. First putting the name of the task and then creating a funcion in which you are going to tell gulp what you want the plugin to do */

gulp.tasks('jade', function(){
//determine de source file in where your jade templates are
  return gulp.src('views/templates/**/*.jade') 
// Using the pipe method to call the jade plugin
  .pipe(jade()) 
// the file route where the compiled code is going to be stored. Remember to reload the console once you call the task to see the file with the compiled code generated.
  .pipe(gulp.dest("views")); 
});

gulp.task("sass", function(){
  return gulp.src('public/stylesheets/sass/main.scss')
// the outputStyle is and option setup for how I want to show the compiled code.
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('public/stylesheets/'));
});