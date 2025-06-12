const express = require('express');
const principioAtivoRoutes = require('./src/routes/principioAtivoRoute.js');
const clienteRoutes = require('./src/routes/clienteRoute.js');
const industriaRoutes = require('./src/routes/industriaRoute.js');
const medicamentoRoutes = require('./src/routes/medicamentoRoute.js');
const filialRoutes = require('./src/routes/filialRoute.js');
const estoqueRoutes = require('./src/routes/estoqueRoute.js');
const estoqueMedicamentoRoutes = require('./src/routes/estoqueMedicamentoRoute.js');
const cotacaoRoutes = require('./src/routes/cotacaoRoute.js');
const compraRoutes = require('./src/routes/compraRoute.js');
const notaFiscalRoutes = require('./src/routes/notaFiscalRoute.js');
const funcionarioRoutes = require('./src/routes/funcionarioRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/principios-ativos', principioAtivoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/industrias', industriaRoutes);
app.use('/medicamentos', medicamentoRoutes);
app.use('/filiais', filialRoutes);
app.use('/estoques', estoqueRoutes);
app.use('/estoque-medicamentos', estoqueMedicamentoRoutes);
app.use('/cotacoes', cotacaoRoutes);
app.use('/compras', compraRoutes);
app.use('/notas-fiscais', notaFiscalRoutes);
app.use('/funcionarios', funcionarioRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('API rodando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse a API em http://localhost:${PORT}`);
});