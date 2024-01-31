const express = require('express');
const app = express();
const port = 3090;

// Configurando EJS como mecanismo de modelo
app.set('view engine', 'ejs');

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static('views'));
app.use(express.static('html'));
app.use(express.static('css'));



// Rotas
app.get('/', (req, res) => {
    res.render('home');
    
  });

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.get('/contato', (req, res) => {
  res.render('contato');
});

app.get('/postagens', (req, res) => {
  const postId = req.params.id;
  // Aqui você pode adicionar lógica para recuperar detalhes do post com o ID fornecido
  res.render('postagens', { postId });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
