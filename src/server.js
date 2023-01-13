import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuarios');
  }

  if (method === 'Post' && url === '/users') {
    return res.end('Criação de usuários');
  }

  return res.end('Olá mundo23');
});

server.listen(5000);
