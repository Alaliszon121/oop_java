function stanowisko() {
    var wybor = document.getElementById("wybor").value;
    var spec = document.getElementById("specjalizacja");
    var oddzial = document.getElementById("oddzial");

    if(wybor == "pracownik") 
    {
        spec.disabled = true;
        oddzial.disabled = true;
    } 
    else if(wybor == "lekarz") 
    {
        spec.disabled = false;
        oddzial.disabled = true;
    } 
    else 
    {
        spec.disabled = false;
        oddzial.disabled = false;
    }
}

class Pracownik {
    constructor(imie, nazwisko, pesel) {
        this._imie = imie;
        this._nazwisko = nazwisko;
        this._pesel = pesel;
    }

    get imie() {
        return this._imie;
    }
    set imie(nowe) {
        this._imie = nowe;
    }

    get nazwisko() {
        return this._nazwisko;
    }
    set nazwisko(nowe) {
        this._nazwisko = nowe;
    }

    get pesel() {
        return this._pesel;
    }
    set pesel(nowe) {
        this._pesel = nowe;
    }

    add() {
    var row = document.getElementById("tabela").insertRow();
    Object.keys(this).forEach(key => {
        row.insertCell().innerHTML = this[key];
    });
    }
}

class Lekarz extends Pracownik {
    constructor(imie, nazwisko, pesel, specjalizacja) {
        super(imie, nazwisko, pesel);
        this._specjalizacja = specjalizacja
    }

    get specjalizacja() {
        return this._specjalizacja;
    }
    set specjalizacja(nowe) {
        this._specjalizacja = nowe;
    }
}

class Ordynator extends Lekarz {
    constructor(imie, nazwisko, pesel, specjalizacja, oddzial) {
        super(imie, nazwisko, pesel, specjalizacja);
        this._oddzial = oddzial;
    }

    get oddzial() {
        return this._oddzial;
    }
    set oddzial(nowe) {
        this._oddzial = nowe;
    }
}

function dodaj() {
    var wybor = document.getElementById("wybor").value;
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var pesel = document.getElementById("pesel").value;

    if(wybor == "pracownik") {
        var pracownik = new Pracownik(imie, nazwisko, pesel);
        pracownik.add();
    } else if(wybor == "lekarz") {
        var specjalizacja = document.getElementById("specjalizacja").value;
        var lekarz = new Lekarz(imie, nazwisko, pesel, specjalizacja);
        lekarz.add();
    } else {
        var specjalizacja = document.getElementById("specjalizacja").value;
        var oddzial = document.getElementById("oddzial").value;
        var ordynator = new Ordynator(imie, nazwisko, pesel, specjalizacja, oddzial);
        ordynator.add();
    }
}