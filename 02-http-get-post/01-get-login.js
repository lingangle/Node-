//1.导入http模块
const http = require('http')
const url = require('url')
const querystring = require('querystring')

//2.创建server
const server = http.createServer()

//3.请求、处理、响应
server.on('request',(req,res)=>{
    // console.log('11111111111')
    const result = {
        status : 0,
        message:'登录成功'
    }

    //处理
    if(req.url.includes('login')){
        // console.log(req.url)
        // urlString ===> '/login?username=zhangsan&password=123'
        const urlString = req.url

        //1.获取url的路径，获取路径之后，就知道了浏览器的意图【使用url模块】
        const urlObj = url.parse(urlString)
        // console.log(urlObj)

        //1.1 获取到了路径，知道了意图
        const pathName = urlObj.pathname
        // console.log(pathName)

        //  'username=zhangsan&password=123'
        const query = urlObj.query
        //2.对我们获取的参数字符串，把它解析成js对象 【使用querystring】
        const params = querystring.parse(query)
        console.log(params)
    }

    

    //2.获取传递过来的参数

    res.setHeader("Content-Type","application/json;charset=utf-8")
    res.end(JSON.stringify(result))
})

//4.启动web服务
server.listen(8899,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }

    console.log('start OK')
})