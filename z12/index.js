const submitBtn = document.getElementById("submitBtn");
const wyniki = document.getElementsByClassName("results");

class Prostopadloscian {
  constructor(a, b, h) 
  {
    this._a = a;
    this._b = b;
    this._h = h;
  }

  getValueA() {
    return this._a;
  }

  getValueB() {
    return this._b;
  }

  getValueH() {
    return this._h;
  }

  setValueA(a) {
    this._a = a;
  }

  setValueB(b) {
    this._b = b;
  }

  setValueH(h) {
    this._h = h;
  }

  obliczObj(a = this._a, b = this._b, h = this._h) {
    const obj = a * b * h;
    return obj;
  }

  obliczPole(a = this._a, b = this._b, h = this._h) {
    const pole = 2 * a + 2 * b + 2 * h;
    return pole;
  }

  obliczSumeKrawedzi(a = this._a, b = this._b, h = this._h) {
    const suma = a * 4 + b * 4 + h * 4;
    return suma;
  }

  getWyniki() {
    return [
      this.obliczObj(),
      this.obliczPole(),
      this.obliczSumeKrawedzi(),
    ];
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const valA = document.getElementById("a").value;
  const valB = document.getElementById("b").value;
  const valH = document.getElementById("h").value;
  const prostopadloscian = new Prostopadloscian(+valA, +valB, +valH);
  const res = prostopadloscian.getWyniki();
  res.forEach((item, i) => {
    wyniki[i].textContent = item;
  });
});
