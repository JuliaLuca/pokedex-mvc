const express = require('express');
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex =[
    {
        id:1,
        nome:"Bulbasaur",
        tipo: "relva",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descrição:"Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
        altura:"0.7m",
        peso:"6.9 kg",
        habilidade: "crescer demais",
        categoria: "semente"
    },

    {
        id:2,
        nome:"Charmander",
        tipo: "fogo",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        descrição:"Há uma preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
        altura:"0.6m",
        peso:"8.5 kg",
        habilidade: "chama",
        categoria: "lagarto"
    },

    {
        id:3,
        nome:"Caterpie",
        tipo: "bug",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        descrição:"Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.",
        altura:"0.3m",
        peso:"2.9 kg",
        habilidade: "escudo de poeira",
        categoria: "minhoca"
    },
];


app.get('/', (req, res) => {
  res.render('index', {pokedex});
});

app.post("/add", (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    res.redirect("/");
})

app.get("/descricao/:id", (req, res) => {
    const id = +req.params.id;
    const pokemon = pokedex.find(pokedex => pokedex.id === id);
    res.render("descricao", {pokemon});
});

app.listen(3000, ( ) => console.log("Servidor rodando em http://localhost:3000"));