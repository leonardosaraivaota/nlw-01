import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();
/*
app.use(
  cors({
    origin: "https://www.site.com.br",
  })
);
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar 1 ou mais informações do backend
//POST: Criar uma nova informação
//PUT: Atualizar 1 informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST -> http://localhost:3333/users = Criar um usuário
//GET -> http://localhost:3333/users = Listar usuários
//GET -> http://localhost:3333/users/5  Buscar dados do usuário com ID 5

//Request Param: Parâmetros que vem na própria rota que identificamos  um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações

/*
const users = [
  "Diego", //0
  "Cleiton", //1
  "Robson", //2
  "Daniel", //3
];

app.get("/users", (request, response) => {
  const search = String(request.query.search);
  //console.log(search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  console.log("Listagem de usuários");

  //response.send('Hello World');
  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;
  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});
*/

app.use(errors());

app.listen(3333);
