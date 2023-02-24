//variáveis para posição inicial da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 30;
let raio = dBolinha / 2;
let colidiu = false;

//velocidade da bolinha
let posicaoXBolinha = 6;
let posicaoYBolinha = 6;

//raquete variáveis(posição, largura e comp.)
let xRaquete = 5;
let yRaquete = 150;
let largRaquete = 10;
let altRaquete = 90;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//placar de pontos
let meusPontos = 0;
let pontosDoOponente = 0;

function desenhaBolinha() {
  circle(xBolinha, yBolinha, dBolinha)
}

function movimentaBolinha() {
  xBolinha += posicaoXBolinha; // xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha += posicaoYBolinha; // yBolinha = yBolinha + velocidadeXBolinha;

}

function verificaColisaoBorda() {
  if(xBolinha + raio > width || 
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

function desenhaRaquete(x, y) {
  rect(x, y, largRaquete, altRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete() {
  if(xBolinha - raio < xRaquete + largRaquete 
    && yBolinha - raio < yRaquete + altRaquete
    && yBolinha + raio > yRaquete){
    posicaoXBolinha *= -1;
  }
}

function verificaColisaoRaqueteBiblio(x, y) {
  colidiu = collideRectCircle(x,y,largRaquete,altRaquete,xBolinha,yBolinha,raio);
  if(colidiu){
    posicaoXBolinha *= -1;
  }
}

function marcaPonto() {
  if(xBolinha > 587) {
    meusPontos += 1;
  }
  if(xBolinha < 16) {
    pontosDoOponente += 1;
  }
}

function incluiPlacar() {
  fill(255);
  text(meusPontos, 250, 26);
  text(pontosDoOponente, 321, 26);
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desenhaRaquete(xRaquete, yRaquete);
  movimentaRaquete();
//  verificaColisaoRaquete();
  verificaColisaoRaqueteBiblio(xRaquete, yRaquete);
  verificaColisaoRaqueteBiblio(xRaqueteOponente, yRaqueteOponente);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}
