class Cor {
  constructor(r,g,b) {
    this.r = r
    this.g = g
    this.b = b
}
}

class Circulo {
  constructor(r) {
    this.x = r/2 + 1
    this.y = height/2
    this.r = r
    this.cor = new Cor(random(255), random(255), random(255))
    this.fitness = 0.0
    this.andar = [];
    for(let i= 0; i < 100; i++){
      append(this.andar, int(random(0, 4)))
    }

  }
  mostrar(){
    fill(this.cor.r,this.cor.g,this.cor.b)
    ellipse(this.x,this.y,this.r);
  }

  excAndar(){
    for(let i= 0; i < this.andar.length; i++){
      switch(this.andar[i]){
        case 0:
          if(this.y - this.r >= 0){
            this.y -= 10
          }
          break

       case 1:
          if(this.y + this.r <= height){
            this.y += 10
          }
          break

      case 2:
          if(this.x - this.r >= 0){
              this.x -= 10
          }
          break

      case 3:
          if(this.x + this.r <= width){
            this.x += 10
          }
          break
      }
    }
  }

  setFitness(f){
      this.fitness = f;
  }

  calcFitness(n){
    var tamanho = n;
    var b = (100 * this.x) / width;
    b *= 7.5;
    var half_height = height / 2;

    var b2 = Math.pow((this.y - half_height), 2);
    b2 = 1 / (b2 + 1);
    b2 = Math.pow(b2, 1 / 2);
    b2 *= 250;

    b += b2;
    b /= 10;

    this.setFitness(b);
  }


}


class Populacao {
  constructor(m,n,r) {
    this.populacao
    this.arrayCruzamentos
    this.geracoes = 0
    this.taxaMutacao = m
    this.fim = false
    this.populacao = []
    for(let i= 0; i < n; i++){
      this.populacao[i] = new Circulo(r)
    }

  }

  passarTurno(){
    for(let i=0;i< this.populacao.length; i++){
      let circulo = this.populacao[i];

      circulo.excAndar();
      circulo.mostrar();
      circulo.calcFitness(this.populacao.length)
    }

    this.geracoes+= 1;
    noLoop();

}
}
