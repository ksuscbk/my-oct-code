var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
// 定义任务调用task方法  通过全局安装的gulp来执行任务
    //将less转成css
gulp.task('less2css', function() {
    // 通过hulp.src指定需要将哪些资源进行转换
    // 通过gulp-less(第三方模块)来实现转换
    gulp.src('./less/*.less').pipe(less()).pipe(gulp.dest('./css'));
})

// 合并js
gulp.task('hebing', function () {
    // 通过gulp.src指定需要将哪些资源进行转换    
    // 通过gulp-concat(第三方模块)来实现合并js文件
    gulp.src('./libs/*.js').pipe(concat('a.js')).pipe(gulp.dest('./js'));
})