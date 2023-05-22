/**
 * VARIÁVEIS
 */

// TIPOS PRIMITIVOS: boolean, number, string
let ligado: boolean = false;
let nome: string = "Jaque";
let idade: number = 30;
let altura: number = 1.9;

// TIPOS ESPECIAIS: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// TIPOS ABRANGENTES: any, void
let retorno: void;
let retornoView: any = false;

// OBJETO - sem previsibilidade
let produto: object = {
  name: "Jaqueline",
  cidade: "SP",
  idade: 30,
};

// OBJETO TIPADO - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

/**
 * ARRAYS
 * 
 * No caso de um array multi-type, independente da ordem declarada, as 
 * informações podem ser adicionadas em qualquer ordem
 */

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = [322, "felipe"];

/**
 * TUPLAS
 * 
 * As informações devem ser informadas na exata ordem como foram declaradas
 */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/**
 * ARRAYS MÉTODOS (São os mesmos do Javascript)
 */
dados.pop();

/**
 * DATAS
 */
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
