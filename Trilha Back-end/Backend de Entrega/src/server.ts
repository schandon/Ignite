import express  from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

// app.get("/", (req, res) => {
//     return res.json({
//       message : "Relatório do Japão",
//     });
// });

app.listen(4444, ()=> console.log("Relatório do Japão Rodandos 🚀"));