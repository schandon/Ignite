import http from 'http';
import { Transform} from 'node:stream'


class InverseNumberStream extends Transform{
  _transform(chunck, encoding, callback){
    const transformed = Number(chunck.toString())* -1
    
    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}
//Se formos seguir o exemplo anterior. 
// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res)=>{
  const buffers = []

  for await (const chunck of req){
    buffers.push(chunck)
  }

  const fullStringContent = Buffer.concat(buffers).toString()

  console.log(fullStringContent)
  
  return res.end(fullStringContent)
})

server.listen(3334);