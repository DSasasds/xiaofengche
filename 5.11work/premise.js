
const http = require('http');
const fs = require('fs');
const server = http.createServer(async (req, res) => {
    // 设置响应头，声明返回的数据类型为 JSON 格式
    res.setHeader('Content-Type', 'application/json');
  if (req.method === 'GET') {
    // "http://url?name=lisi"
    if(req.url.indexOf('name') !== -1) {
        await sleep(3);//睡眠3秒
        res.end(JSON.stringify({
            id:98,
            name:'lisi',
        }));
    }
    if(req.url.indexOf('id') !== -1 && req.url.split('=')[1]==98) {
         // 构造要返回的数据对象
        const data = {
            name: 'lisi',
            age: 20,
            gender: '男',
            id: 98,
            phone: '13811111111',
            email: '123@qq.com',
            score:568
        };
      
      // 将数据对象转换成 JSON 字符串，并返回给客户端
      res.end(JSON.stringify(data));
    }
    if (req.url === '/image') {
        // 设置响应头，声明返回的数据类型为图片格式
        res.setHeader('Content-Type', 'image/png');
    
        // 读取本地的图片文件，并将其内容作为响应返回给客户端
        fs.readFile('./imgs/x2.jpg', (err, data) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            res.end(data);
          }
        });
      }
  } else {
    // 如果请求不是 GET /api/data，则返回 404 错误
    res.statusCode = 404;
    res.end('Not Found');
  }
  
});
async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
 
server.listen(3001, () => {
  console.log('服务器已启动，正在监听 3000 端口...');
  console.log('http://localhost:3000/api?name=lisi');
  console.log('http://localhost:3000/api?id=98');
});
