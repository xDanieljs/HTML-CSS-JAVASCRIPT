console.log('mostrar o document', document);

//colocar a  classe modal do html dentro de uma variavel const para ser manipulada no javascript//
const botaoTrailer = document.querySelector(".botao-trailer");

//variavel para tirar audio do video após o fechamento da página//
const videox = document.getElementById("video");

// atribuiu o document acima e armazenou dentro da variavel "const botaoTrailer".//
const modal = document.querySelector(".modal");

// console log funcciona o metodo no dev tools, assim podendo verificar e estar funcionado o co
console.log(videox.src);

// varaiavel de armazenamento do link do video em html//
const linkDoVideo = videox.src;


// função para armazenar do codigo quando repetir varias vezes, "toggle" analisa quando utiliza a mesma função//
function altenarModal() {
    modal.classList.toggle("aberto");

}

//função para identificar quando clicar no botão//
botaoTrailer.addEventListener("click", () =>{

//busca representação da modal, acessa a lista classe da modal e adiciona mais uma classe "ABERTO".

//codigo normal:  modal.classList.add("aberto"); OU codigo por uma funçao: altenarModal();//
altenarModal();


//função quando video fecha e clicar novamenete para abrir e aparacer o video//   
videox.setAttribute("src" ,linkDoVideo);
    
});

//colocar classe fechar-botao dentro de uma variavel const//
const botaoFecharModal = document.querySelector(".fechar-modal");

//função para fechar a modal//
botaoFecharModal.addEventListener("click" , () => {

    //fechar o modal//
    //codigo normal:  modal.classList.add("aberto"); OU codigo por uma funçao: altenarModal();//
    altenarModal();
    
    //função quando fechar o video nao ficar tocando o audio//
    videox.setAttribute("src", "");
 
});

