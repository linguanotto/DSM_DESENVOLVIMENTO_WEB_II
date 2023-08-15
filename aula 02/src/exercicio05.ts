import { listar } from './exercicio04';

const legumesString: string = "Beterraba,Cenoura,Tomate,Repolho";
const legumesArray: string[] = legumesString.split(',');
const resultadoLegumes: string = listar(legumesArray);
console.log(resultadoLegumes);

