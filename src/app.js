const express = require("express"); // Variável para representar o servidor
const routes = require("./routes"); // Variável para representar as rotas da API

class App {
  constructor() {
    // Construtor, é chamado automaticamente quando instanciamos a classe, 
    // quando a classe é chamada este método constructor será executado automaticamente.
    // Obs.: Esta classe será chamada somente uma vez    
    this.server = express(); // Variável server, utilizada para execução dos métodos HTTP 
    this.middlewares(); // Executa o método middlewares() 
    this.routes(); // Executa o método routes()
  }

  middlewares() {
    this.server.use(express.json()); 
    // Aqui habilitamos a nossa aplicação para receber requsisições no formato JSON
  }

  routes() {
    this.server.use(routes); // As rotas serão declaradas no arquivo ./routes.js
  }
}

module.exports = new App().server; 
// Exportamos uma nova instância da nossa aplicação (App) 
// E a única coisa que poderá ser acessada desta classe é o server 
