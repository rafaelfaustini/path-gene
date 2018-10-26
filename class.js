function novoMovimento(){
  return Math.floor(Math.random() * 4);
}

class elemento(){
  constructor(l){
    this.x;
    this.y;
    this.gene;
    this.fitness;

    for(var i=0; i<l; i++){
      this.gene[i] = novoMovimento();
    }

  }

  Fitness(canvas,tamanho){
    var fitness = 0;

    baruffi = (100 * x) / canvas.width;
    var n = 2;
    baruffi *= 7.5;
    var half_height = canvas.height / 2;

    var baruffi2 = Math.pow((y - half_height), 2);
    baruffi2 = 1 / (baruffi2 + 1);
    baruffi2 = Math.pow(baruffi2, 1 / n);
    baruffi2 *= 250;

    baruffi += baruffi2;
    baruffi /= 10;

    this.fitness = baruffi;

  }

}

class populacao {
  constructor(resultado,taxa,tamanho) {
    this.populacao;
    this.geracoes=0;
    this.TaxaMutacao=taxa;
    this.AmbienteCruzamento;
    this.MediaFitness;
    this.Resultado = resultado;

    this.populacao = [];
    this.AmbienteCruzamento=[];

    for(var i = 0; i < tamanho; i++){
      this.populacao[i] = new elemento(this.resultado.length);
    }

    this.CalcularFitness();

  }

  CalcularFitness(){
    for(var i=0; i<this.populacao.length;i++){
      this.populacao[i].Fitness(this.populacao.length);
    }
  }




}
