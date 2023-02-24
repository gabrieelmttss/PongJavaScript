//variáveis para posição inicial da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha / 2;
let colidiu = false;

//velocidade da bolinha
let posicaoXBolinha = 6;
let posicaoYBolinha = 6;

//raquete variáveis(posição, largura e comp.)
let xRaquete = 3;
let yRaquete = 150;
let largRaquete = 8;
let altRaquete = 90;

//raquete oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;

//placar de pontos
let meusPontos = 0;
let pontosDoOponente = 0;

//variárveis dos sons do jogo
let raquetada;
let marcouPonto;
let trilhaSonora;

function preload() {
  trilhaSonora = loadSound("trilha.mp3");
  marcouPonto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

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
  // trilhaSonora.loop();
}

function desenhaRaquete(x, y) {
  rect(xRaquete, yRaquete, largRaquete, altRaquete);
}

function desenhaRaqueteOponente(x, y) {
  rect(xRaqueteOponente, yRaqueteOponente, largRaquete, altRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
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
    raquetada.play();
  }
}

function marcaPonto() {
  if(xBolinha > 593) {
    meusPontos += 1;
    marcouPonto.play();
  }
  if(xBolinha < 7) {
    pontosDoOponente += 1;
    marcouPonto.play();
  }
}

function incluiPlacar() {
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 128, 0));
  rect(130, 11, 40, 20); // Minha caixa de pontos
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(255, 128, 0));
  rect(430, 11, 40, 20); // Caixa de pntos do oponente
  fill(255);
  text(pontosDoOponente, 450, 26);
}

function raqueteBordaCimaBaixo() {
  if (yRaquete < -50){
    yRaquete *= -1;
  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
  xBolinha = 23
  }
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desenhaRaquete();
  movimentaRaquete();
//  verificaColisaoRaquete();
  verificaColisaoRaqueteBiblio(xRaquete, yRaquete);
  verificaColisaoRaqueteBiblio(xRaqueteOponente, yRaqueteOponente);
  desenhaRaqueteOponente();
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
//  raqueteBordaCimaBaixo();
  bolinhaNaoFicaPresa();
}
