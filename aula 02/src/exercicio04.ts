function item (entrada:string) {
    return `\t<li>${entrada}</li>\n`;
}

export function listar(elementos: string[]) {
function listar(elementos:string[]) {
    let soma = elementos.reduce((accumulator, currentValue) => {
        return accumulator + item(currentValue);
    }, '');

    return `<ul>\n${soma}</ul>\n`;
}
}

const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
console.log(resultado);