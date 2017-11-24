//我要创建任务
//我通过gulp 去创建任务，我要引入gulp
var gulp=require("gulp");



//引入对应的less文件
var less=require("gulp-less");

//引入css 压缩插件
var cssmin=require("gulp-cssmin");
//引入对应的less文件
var fixcss=require("gulp-autoprefixer");

var htmlmin=require("gulp-htmlmin");

var imagemin=require("gulp-imagemin");

//有了这个对象，我调用对象下面的方法创建任务
gulp.task("cssmin",function(){
        //压缩我的css 代码
        //我要压缩的资源
        gulp.src("less/*.css").pipe(cssmin()).pipe(gulp.dest("./release/css"));
});

gulp.task("lessmin",function(){
        //压缩我的css 代码
        //我要压缩的资源
        gulp.src("less/*.less").pipe(less()).pipe(gulp.dest("./release/less"));
});

//一步到位.
gulp.task("fixmin",function(){
        //压缩我的css 代码
        //我要压缩的资源 构建任务失败.
        gulp.src("css/main.css").pipe(fixcss({
                browsers: ['last 2 versions'],
                cascade: false
        })).pipe(gulp.dest("./release"));
});

gulp.task("htmlmin",function(){
       /*
       * 我们需要查看文档的.
       *htmlmin 方法需要去掉空格collapseWhitespace: true
       * 还需要去掉注释
       * */
       gulp.src("views/*.html").pipe(htmlmin({collapseWhitespace: true,removeComments:true})).pipe(gulp.dest("./release/html"))
});

/*图片压缩*/
gulp.task("imagemin",function(){
        gulp.src("images/*.gif").pipe(imagemin()).pipe(gulp.dest("./release/image"))
});

//welp



















