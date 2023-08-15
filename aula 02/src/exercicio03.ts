import Formatar from "./exercicio01";

const carros = ["Gol","Corsa","Uno","Fiesta"];
const motos = ["CG", "XRE", "Biz"];
const veiculos = [...carros,...motos];

veiculos.forEach( (item) => console.log(Formatar(item)));