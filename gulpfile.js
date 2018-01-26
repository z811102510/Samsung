/**
 * @author 张天喜
 */
var gulp = require("gulp");
	sass = require("gulp-sass");
gulp.task("sass",function(){
	gulp.src("css/sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css/css"));
});
gulp.task("images",function(){
	gulp.src('img/**/**')
	.pipe(gulp.dest('D:/phpStudy/WWW/Samsung/img'))
})
gulp.task("css",function(){
	gulp.src('css/**/**')
	.pipe(gulp.dest('D:/phpStudy/WWW/Samsung/css'))
})
gulp.task("js",function(){
	gulp.src('js/**/**')
	.pipe(gulp.dest('D:/phpStudy/WWW/Samsung/js'))
})
gulp.task("php",function(){
	gulp.src('*.php')
	.pipe(gulp.dest('D:/phpStudy/WWW/Samsung'))
})
gulp.task("html",function(){
	gulp.src('*.html')
	.pipe(gulp.dest('D:/phpStudy/WWW/Samsung'))
})
gulp.task("watch",function(){
	gulp.watch("css/sass/*.scss",["sass"]);
	gulp.watch("img/**/**",["images"]);
	gulp.watch("*.html",["html"]);
	gulp.watch("js/**/**",["js"]);
	gulp.watch("*.php",["php"]);
	
});
