import http from 'http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js';

const server = http.createServer( async (request, response)=>{
 const { method, url } = request;

 await json(request, response)
 
 const route = routes.find(route =>{
    return route.method === method && route.path === url
 })
 
 console.log(route)

 if (route){
  return route.handler(request, response)
 }
  return response.writeHead(404).end('Not Found');
})

server.listen(3333);