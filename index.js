const tipos = [
  ["mago", "magia"],
  ["guerreiro", "espada"],
  ["monge", "artes marciais"],
  ["ninja", "shuriken"],
];

const HeroiClass = {
  nome: "Vinicius",
  idade: 21,
  tipo: "mago",
};

atacar(HeroiClass);

function atacar(heroi) {
  for (let i = 0; i < tipos.length; i++) {
    if (heroi.tipo == tipos[i][0]) {
      console.log(`O ${heroi.tipo} atacou usando ${tipos[i][1]}`);
    }
  }
}
