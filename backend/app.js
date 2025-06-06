const express = require('express');
const principioAtivoRoutes = require('./src/routes/principioAtivoRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas do princípio ativo
app.use('/principios-ativos', principioAtivoRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('API de Princípios Ativos rodando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});