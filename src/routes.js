const { Router } = require("express");
// Separamos a parte de roteamento do express em outro arquivo

const routes = new Router(); // A variável routes representará o Router

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes; // Exportamos as rotas
