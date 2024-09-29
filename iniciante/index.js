//array, objetos
let meta = {
  value: "ler um livro",
  adress:2
  checked: true,
  log: (info) => {
    console.log(info);
  },
};

let metas = [
    meta,{
        value:"caminhar 20 minutos todos dias",
        checked:false
    }
]

meta.log(meta.value);


//function //arrow function
const criarMeta = () => {};
