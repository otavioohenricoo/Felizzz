function abrirImagem(src){

    const lightbox = document.getElementById("lightbox");
    const imagemGrande = document.getElementById("imagemGrande");


    imagemGrande.src = src;

    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";

}





function fecharImagem(){

    const lightbox = document.getElementById("lightbox");


    lightbox.style.display = "none";


    document.body.style.overflow = "auto";

}





// Fechar com tecla ESC

document.addEventListener("keydown", function(event){


    if(event.key === "Escape"){

        fecharImagem();

    }


});



const botoesFiltro = document.querySelectorAll(".filtro");

const cards = document.querySelectorAll(".card");



botoesFiltro.forEach(botao => {


    botao.addEventListener("click", function(){



        // remove seleção dos outros botões

        botoesFiltro.forEach(btn => {

            btn.classList.remove("ativo");

        });



        // ativa botão clicado

        this.classList.add("ativo");



        let categoria = this.dataset.categoria;



        cards.forEach(card => {



            let categoriaCard = card.dataset.categoria;



            if(
                categoria === "todos" ||
                categoria === categoriaCard
            ){


                card.style.display = "inline-block";


                setTimeout(()=>{

                    card.style.opacity="1";

                },100);



            }

            else{


                card.style.opacity="0";


                setTimeout(()=>{

                    card.style.display="none";

                },300);


            }



        });



    });



});



const pesquisa = document.getElementById("pesquisa");



pesquisa.addEventListener("keyup", function(){



    let texto = this.value.toLowerCase();



    cards.forEach(card => {



        let conteudo = card.innerText.toLowerCase();



        if(conteudo.includes(texto)){


            card.style.display="inline-block";


            setTimeout(()=>{

                card.style.opacity="1";

            },100);


        }

        else{


            card.style.opacity="0";


            setTimeout(()=>{

                card.style.display="none";

            },300);


        }



    });



});



const observador = new IntersectionObserver((entradas)=>{


    entradas.forEach(entrada=>{


        if(entrada.isIntersecting){


            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";


        }


    });


});





cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(30px)";

    card.style.transition="0.5s ease";


    observador.observe(card);


});


document
.getElementById("imagemGrande")
.addEventListener("dblclick", function(){


    fecharImagem();


});