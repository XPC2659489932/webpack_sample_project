module.exports = {
	entry: __dirname+"/app/main.js",//已多次提及的唯一入口文件 
	output:{
		path: __dirname+"/public",//打包后文件存放的地方 
		filename:"bundle.js"//打包后输出文件的文件名
	}
}//__dirname是node.js的全局变量，它指向当前执行脚本所在的目录