//variáveis para posição inicial da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 30;
let raio = dBolinha / 2;

//velocidade da bolinha
let posicaoXBolinha = 6;
let posicaoYBolinha = 6;

//raquete variáveis(posição, largura e comp.)
let xRaquete = 5;
let yRaquete = 150;
let largRaquete = 10;
let altRaquete = 90;

function mostraBolinha() {
  circle(xBolinha, yBolinha, dBolinha)
}

function movimentaBolinha() {
  xBolinha += posicaoXBolinha; // xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha += posicaoYBolinha; // yBolinha = yBolinha + velocidadeXBolinha;

}

function verificaColisaoBorda() {
  if(xBolinha + raio> width || 
    xBolinha - raio < 0){
    posicaoXBolinha *= -1; // posicaoXBolinha = posicaoXBolinha * -1;
  }

  if(yBolinha + raio > height || 
    yBolinha - raio < 0)
  posicaoYBolinha *= -1;
}

function setup() {
  createCanvas(600, 400);
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, largRaquete, altRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function draw() {
  background(0);
  mostraBolinha();
  //movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
}
