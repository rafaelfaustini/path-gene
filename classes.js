
class Circulo {
  constructor(r) {
    this.x = r/2 + 1
    this.y = height/2
    this.r = r
    this.fitness = 0.0
    this.andar = [];
    for(let i= 0; i < 100; i++){
      append(this.andar, int(random(0, 4)))
    }
    console.log(this.andar);

  }
  mostrar(){
    ellipse(this.x,this.y,this.r);
  }

  excAndar(){
    for(let i= 0; i < this.andar.length; i++){
      switch(this.andar[i]){
        case 0:
          if(this.y - this.r >= 0){
            this.y -= 1
          }
          this.mostrar()
          break

       case 1:
          if(this.y + this.r <= height){
            this.y += 1
          }
          this.mostrar()
          break

      case 2:
          if(this.x - this.r >= 0){
              this.x -= 1
          }
          this.mostrar()
          break

      case 3:
          if(this.x + this.r <= width){
            this.x += 1
          }
          this.mostrar()
          break
      }
    }
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
    }
    this.geracoes+= 1;

}
}
