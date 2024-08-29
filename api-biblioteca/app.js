const express = require("express");
const cors = require("cors");
const livroRoutes = require("./routes/livroRoutes");
require("dotenv").config();
require("./config/database"); // Conectando ao banco de dados


const app = express();

// Middlewares
// Configura o middleware CORS
app.use(cors());
app.use(express.json());

// Rotas
app.use("/livros", livroRoutes);

// Exportando a aplicação configurada
module.exports = app;
