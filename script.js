
function ativar(){
    var btnProjects = document.getElementById('btnShowProjects')
    document.querySelector(".projects2").classList.toggle("show");

     if(document.querySelector(".projects2").classList.contains("show")) {
         btnProjects.innerHTML = "Ver menos"
    } else {
        btnProjects.innerHTML = "Ver mais"
    }


}; 

function showNav(){
    document.querySelector(".navResponsive").classList.toggle("showNav");
}

const textTyping = document.getElementById('textTyping');
const titleTyping = document.getElementById('titleTyping')
const titleHeader = document.getElementById('titleHeader')

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 100*index)
    })
    console.log(textoArray)

}

setTimeout(typeWriter(titleTyping), 2000);

function activateForm(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso.')
}
/*
<script>
    // Função para criar estrelas aleatórias
    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
      document.body.appendChild(star);
    }
  
    // Crie estrelas aleatórias a cada segundo
    setInterval(createStar, 1000);
  </script>*/