const express = require('express');
const principioAtivoRoutes = require('./src/routes/principioAtivoRoute.js');
const clienteRoutes = require('./src/routes/clienteRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/principios-ativos', principioAtivoRoutes);
app.use('/clientes', clienteRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('API rodando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});