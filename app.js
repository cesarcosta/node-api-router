const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: "Olá! Esta é uma resposta do endpoint GET para status." });
});

app.post('/api/webhook', (req, res) => {
    res.json({
        message: "Dados recebidos com sucesso!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});