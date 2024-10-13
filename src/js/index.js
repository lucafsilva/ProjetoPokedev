//passo1
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//passo2
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",() =>{
        //passo 3
        const CartaoPokedevAberto = document.querySelector(".aberto");
        CartaoPokedevAberto.classList.remove("aberto");

        //passo 4
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDocartaopokedevparaabrir = "cartao-" + idPokedevSelecionado;
        const CartaoPokedevparaabrir = document.getElementById(idDocartaopokedevparaabrir);
        CartaoPokedevparaabrir.classList.add("aberto");

        //passo 5
        const pokedevativonalistagem =document.querySelector(".ativo");
        pokedevativonalistagem.classList.remove("ativo");

        //passo 6
        const PokedevSelecionadonalistagem =document.getElementById(idPokedevSelecionado);
        PokedevSelecionadonalistagem.classList.add("ativo");
    });
})

