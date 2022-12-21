import express from 'express';

const app = express();

app.get( '/' , (request, response) => {
  return response.json({ message: 'Coe Galerinha'})
})


app.listen(3003, () => console.log('Server rodando em 3003')); 