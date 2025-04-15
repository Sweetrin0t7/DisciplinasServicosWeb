import crypto from "crypto";

const disciplinasRepository = () => {
  const disciplinas = [];

  const create = ({ nome, cargaHoraria, obrigatoria }) => {
    const novaDisciplina = {
      id: crypto.randomUUID(),
      nome,
      cargaHoraria,
      obrigatoria: !!obrigatoria,
    };
    disciplinas.push(novaDisciplina);
    return novaDisciplina;
  };

  const list = (nome = "") => {
    return disciplinas.filter((d) => {
      return d.nome.toLowerCase().includes(nome.toLowerCase());
    });
  };

  const findById = (id) => {
    return disciplinas.find((d) => d.id === id);
  };

  const update = (id, data) => {
    const disciplina = disciplinas.find((d) => d.id === id);
    if (!disciplina) return null;

    disciplina.nome = data.nome;
    disciplina.cargaHoraria = data.cargaHoraria;
    disciplina.obrigatoria = data.obrigatoria;
    return disciplina;
  };

  const remove = (id) => {
    const index = disciplinas.findIndex((d) => d.id === id);
    if (index === -1) return false;
    disciplinas.splice(index, 1);
    return true;
  };

  return {
    create,
    list,
    findById,
    update,
    remove,
  };
};

export default disciplinasRepository;
