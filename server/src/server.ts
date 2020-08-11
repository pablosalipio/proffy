import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);


app.listen(3333);






//          rota        / recurso
// http://localhost:3333/users

//metodos
// GET : Buscar ou listar informação
// POST: criar alguma nova informação
// PUT : Atualzar uma informação existente
// DELETE : deletar uma informação

//parametros

// Corpo (request body): dados para criação ou atualização de um registro
// Route Params: identificar qual recurso eu quero atualizar ou deletar
// Query Params: paginação, filtros



// SELECT * FROM users
// knex('users').select('*')


/*
app.get('/users/', (request, response) => {
    console.log(request.query)

    const users = [
        {name : "Diego", age: 25},
        {name : "Vini", age: 21}
    ]
    return response.json(users);
});
*/