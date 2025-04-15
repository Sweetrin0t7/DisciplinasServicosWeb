import express from "express";
import disciplinasRepository from "./repository.js";

const disciplinas = disciplinasRepository();
const app = express();
const port = 3000;

app.use(express.json());

app.get("/disciplinas", (req, res) => {
  const { nome } = req.query;
  const list = disciplinas.list(nome);
  res.set("X-Total-Count", list.length);
  res.json(list);
});

app.get("/disciplinas/:id", (req, res) => {
  const { id } = req.params;
  const disciplina = disciplinas.findById(id);
  if (!disciplina) {
    return res.status(404).json({ message: "Disciplina não encontrada" });
  }
  res.json(disciplina);
});

app.post("/disciplinas", (req, res) => {
  const { nome, cargaHoraria, obrigatoria } = req.body;
  const disciplina = disciplinas.create({ nome, cargaHoraria, obrigatoria });
  res.status(201).json(disciplina);
});

app.put("/disciplinas/:id", (req, res) => {
  const { id } = req.params;
  const { nome, cargaHoraria, obrigatoria } = req.body;
  const disciplina = disciplinas.update(id, {
    nome,
    cargaHoraria,
    obrigatoria,
  });
  if (!disciplina) {
    return res.status(404).json({ message: "Disciplina não encontrada" });
  }
  res.json(disciplina);
});

app.delete("/disciplinas/:id", (req, res) => {
  const { id } = req.params;
  const result = disciplinas.remove(id);
  if (!result) {
    return res.status(404).json({ message: "Disciplina não encontrada" });
  }
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}...`);
});
