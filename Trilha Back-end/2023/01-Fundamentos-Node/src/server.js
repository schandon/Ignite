import http from 'http';

const users = []

const server = http.createServer( async (request, response)=>{
 const { method, url } = request;
 
 const buffers = []

 for await (const chunck of request){
   buffers.push(chunck)
 }
  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch{
    request.body = null
  }
  console.log(request.body)

 if (method === 'GET' && url ==='/users'){
  return response
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
 }
 if (method === 'POST' && url ==='/users'){
   
  const { name, email } = request.body
  
    users.push({
      id: 1,
      name,
      email,
    })

    return response.writeHead(201).end()
 }
  return response.writeHead(404).end('Not Found');

})

server.listen(3333);