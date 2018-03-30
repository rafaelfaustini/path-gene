var popula = [];
soma_pesos = 0;

function selecionar(soma) {
  peso_aleatorio = int(random(1, soma));
  peso_aleatorio2 = int(random(1, soma));
  quantidade_pop = popula.length;
  for (i = 0; i < quantidade_pop; i++) {
    peso_aleatorio = peso_aleatorio - popula[i].fitness;
    if (peso_aleatorio <= 0) {
      pai_index = 0;

    }
    peso_aleatorio2 = peso_aleatorio2 - popula[i].fitness;
    if (peso_aleatorio2 <= 0) {
      mae_index = 0;
    }
  }
}

function procriar() {
  var temp = new Array;
  quantidade_pop = popula.length;
  tamanho_nome = nome.length;
  for (v = 0; v < quantidade_pop; v++) {
    selecionar(soma_pesos);
    append(temp, mutacao(popula[pai_index].gene.substr(0, (tamanho_nome / 2)) + popula[mae_index].gene.substr(tamanho_nome / 2, tamanho_nome), Mutação / 100))
  }
  for (i = 0; i < quantidade_pop; i++) {

    popula[i].gene = temp[i];
  }
  temp = [];
  geracao += 1;
  fitness();

}


function criar_inicial(tamanho) {
  for (j = 0; j < tamanho; j++) {
    var pessoa = function(x, y, seq, fitness, finish) { // Colocar o objeto pessoa no vetor
      this.x = 0;
      this.y = 200;
      this.seq = "" + int(random(0, 4)) + int(random(0, 4)) + int(random(0, 4)) + int(random(0, 4)) + int(random(0, 4));;
      this.fitness = 0;
      this.finish = false;

    };
    append(popula, new pessoa);
  }

}

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function fitness(pos, x, y) {

  var tamanho = popula.length;
  var n = 2;


  baruffi = (100 * x) / width;
  baruffi *= 7.5;
  var half_height = height / 2;

  var baruffi2 = Math.pow((y - half_height), 2);
  baruffi2 = 1 / (baruffi2 + 1);
  baruffi2 = Math.pow(baruffi2, 1 / n);
  baruffi2 *= 250;

  baruffi += baruffi2;
  baruffi /= 10;

  popula[pos].fitness = baruffi;
  soma_pesos += baruffi;
  popula.sort(dynamicSort("-fitness"));
  console.log('Fitness é:' + popula[0].fitness + ' x é ' + x + ' y é ' + y);

}

function andar() {

  var x = (popula[0].seq)
    .length;


  var tamanho_vetor = popula.length;
  var temp_random;
  for (i = 0; i < tamanho_vetor; i++) {
    //console.log("O tamanho do x de "+i+" é "+popula[i].x);
    for (j = 0; j < x; j++) {
      temp_random = int(random(10));
      var temp = popula[i][j];
      if (popula[i].seq[j] == 1 && popula[i].finish == false) {
        popula[i].y -= temp_random;
        if (popula[i].y < 0) {
          popula[i].y += temp_random;
          popula[i].finish = true;
          fitness(i, popula[i].x, popula[i].y);
          soma_pesos = 0;
        }
      }
      if (popula[i].seq[j] == 2 && popula[i].finish == false) {
        popula[i].y += temp_random;

        if (popula[i].y >= height) {
          popula[i].y -= temp_random;
          popula[i].finish = true;
          fitness(i, popula[i].x, popula[i].y);
          soma_pesos = 0;
        }
      }
      if (popula[i].seq[j] == 3 && popula[i].finish == false) {
        popula[i].x += temp_random;
        if (popula[i].x < 0) {
          popula[i].x -= temp_random;
          popula[i].finish = true;
          fitness(i, popula[i].x, popula[i].y);
          soma_pesos = 0;
        }
      }
      if (popula[i].seq[j] == 4 && popula[i].finish == false) {
        popula[i].x += temp_random;

        if (popula[i].x >= width) {
          popula[i].x -= temp_random;
          popula[i].finish = true;
          fitness(i, popula[i].x, popula[i].y);
          soma_pesos = 0;
        }
      }

    }
    ellipse(popula[i].x, popula[i].y, 55, 55);

  }
}

function setup() {

  createCanvas(400, 400);
  criar_inicial(2);

}

function draw() {


  background(220);
  andar(5);


}