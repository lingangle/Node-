//1.导入http模块
const http = require('http')
const url = require('url')
const querystring = require('querystring')

//2.创建server
const server = http.createServer()

//3.请求、处理、响应
server.on('request',(req,res)=>{
    const result = {
        status : 0,
        message:'登录成功'
    }

    //处理
    if(req.url.includes('login')){
        //1.先获取到url
        const urlString = req.url
        //console.log(req)

        //2.通过url模块，把urlString变成js对象
        const urlObj = url.parse(urlString)
        // console.log(urlObj)

        //3.利用req，通过监听事件的方式，来获取客户端发送过来的POST请求
        //data事件，当我们客户端传递了几次数据它就会调用几次
        let body=''
        req.on('data',chunk=>{
            body+=chunk
        })

        //end事件，当客户端把所有的数据传输完毕之后，只会调用一次
        req.on('end',()=>{
            // console.log(body)
            // 利用querystring模块转成js对象
            const params = querystring.parse(body)
            console.log(params)
        })
    }

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