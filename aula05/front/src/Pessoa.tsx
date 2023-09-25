import { useState } from "react";

interface Props {
    nome: string;
    idade: string;
}

export default function Pessoa() {
  const [nome, setNome] = useState("Ana");
  const [idade, setIdade] = useState("21");
  const [lista, setLista] = useState([] as Props[]);

  function salvar (){
    const temp = [...lista, {nome, idade}];
    setLista(temp);

  }
  return <div>
    olá {nome} {idade}
    <input value={nome} onChange={ (e) => setNome(e.target.value)}/>
    <input value={idade} onChange={ (e) => setIdade(e.target.value)} />
    <button onClick={salvar}>Salvar</button>
    </div>;
}
