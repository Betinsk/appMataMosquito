

var altura = 0	
var largura = 0

function ajustaTamanhoPalcoJogo() {
altura = window.innerHeight
largura = window.innerWidth


}

ajustaTamanhoPalcoJogo()

	function posicaoRandomica() {


var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90
	
	posicaoX = posicaoX < 0 ? 0 : posicaoX
		posicaoY= posicaoY < 0 ? 0 : posicaoY



//criando o elemento html

 var mosquito = document.createElement('img')
 mosquito.src = 'imagens/mosquito.png'
 mosquito.className = tamanhoAleatorio()+ ' '+  ladoAleatorio()
 mosquito.style.left = posicaoX + 'px'
 mosquito.style.top = posicaoY + 'px'
 mosquito.style.position = 'absolute'


document.body.appendChild(mosquito)

}
	

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)


	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'

	}
}


function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	console.log(classe)


	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}