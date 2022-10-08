const submitBtn = document.getElementById("submitBtn");
const wyniki = document.getElementsByClassName("results");

function prostopadloscian(a, b, h) {
  this._a = a;
  this._b = b;
  this._h = h;

  this.getValueA = function () {
    return this._a;
  };

  this.getValueB = function () {
    return this._b;
  };

  this.getValueH = function () {
    return this._h;
  };

  this.setValueA = function (a) {
    this._a = a;
  };

  this.setValueB = function (b) {
    this._b = b;
  };

  this.setValueH = function (h) {
    this._h = h;
  };

  this.obliczObj = function (a = this._a, b = this._b, h = this._h) {
    const obj = a * b * h;
    return obj;
  };

  this.obliczPole = function (a = this._a, b = this._b, h = this._h) {
    const pole = 2 * a + 2 * b + 2 * h;
    return pole;
  };

  this.obliczSumeKrawedzi = function (a = this._a, b = this._b, h = this._h) {
    const suma = a * 4 + b * 4 + h * 4;
    return suma;
  };

  this.getInfoKonsola = function () {
    return `
    Objetosc prostopadloscianu: ${this.obliczObj()}
    Pole powierzchni: ${this.obliczPole()}
    Suma krawedzi: ${this.obliczSumeKrawedzi()}`;
  };

  this.getWyniki = function () {
    return [
      this.obliczObj(),
      this.obliczPole(),
      this.obliczSumeKrawedzi(),
    ];
  };
}

function oblicz()
{
  const valA = document.getElementById("a").value;
  const valB = document.getElementById("b").value;
  const valH = document.getElementById("h").value;
  const prst = new prostopadloscian(+valA, +valB, +valH);

  const res = prst.getWyniki();
  res.forEach((item, i) => {
    wyniki[i].textContent = item;
  });
};
