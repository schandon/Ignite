import http from 'http'
import { randomUUID } from 'node:crypto'
import { json } from './middlewares/json.js'
import { Database } from './database.js'


const database = new Database

const server = http.createServer( async (request, response)=>{
 const { method, url } = request;

 await json(request, response)
 
  console.log(request.body)

 if (method === 'GET' && url ==='/users'){
  const user = database.select('users')

  return response.end(JSON.stringify(user));
 }
 if (method === 'POST' && url ==='/users'){
   
  const { name, email } = request.body
  
    const user = ({
      id: randomUUID(),
      name,
      email,
    })

    database.insert('users', user)

    return response.writeHead(201).end()
 }
  return response.writeHead(404).end('Not Found');

})

server.listen(3333);