var populacao;
function setup() {

  createCanvas(400, 400);
  populacao = new Populacao(1,2,25)

}

function draw() {
  background(220);

  populacao.passarTurno();


}
