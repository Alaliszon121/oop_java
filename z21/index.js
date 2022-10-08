function stanowisko() {
    var wybor = document.getElementById("wybor").value;
    var specjalizacja = document.getElementById("specjalizacja");
    var oddzial = document.getElementById("oddzial");

    if(wybor == "pracownik") 
    {
        specjalizacja.disabled = true;
        oddzial.disabled = true;
    } 
    else if(wybor == "lekarz") 
    {
        specjalizacja.disabled = false;
        oddzial.disabled = true;
    } 
    else 
    {
        specjalizacja.disabled = false;
        oddzial.disabled = false;
    }
}

function Pracownik(imie, nazwisko, pesel) {
    this._imie = imie;
    this._nazwisko = nazwisko;
    this._pesel = pesel;
}

function Lekarz(imie, nazwisko, pesel, specjalizacja) {
    Pracownik.call(this, imie, nazwisko, pesel);
    this._specjalizacja = specjalizacja;
}

function Ordynator(imie, nazwisko, pesel, specjalizacja, oddzial) {
    Lekarz.call(this, imie, nazwisko, pesel, specjalizacja);
    this._oddzial = oddzial;
}

function add(obj) {
    var row = document.getElementById("tabela").insertRow();

    Object.keys(obj).forEach(key => {
        row.insertCell().innerHTML = obj[key];
    });
}


function dodaj() {
    var wybor = document.getElementById("wybor").value;
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var pesel = document.getElementById("pesel").value;

    if(wybor == "pracownik") 
    {
        var pracownik = new Pracownik(imie, nazwisko, pesel);

        Object.defineProperty(pracownik, 'imie', {
            get: function() {
                return this._imie;
            },
            set: function(imie) {
                this._imie = imie;
            }
        });
        Object.defineProperty(pracownik, 'nazwisko', {
            get: function() {
                return this._nazwisko;
            },
            set: function(nazwisko) {
                this._nazwisko = nazwisko;
            }
        });
        Object.defineProperty(pracownik, 'pesel', {
            get: function() {
                return this._pesel;
            },
            set: function(pesel) {
                this._pesel = pesel;
            }
        });

        add(pracownik);
    } 
    else if(wybor == "lekarz") 
    {
        var specjalizacja = document.getElementById("specjalizacja").value;
        var lekarz = new Lekarz(imie, nazwisko, pesel, specjalizacja);

        Object.defineProperty(lekarz, 'imie', {
            get: function() {
                return this._imie;
            },
            set: function(imie) {
                this._imie = imie;
            }
        });
        Object.defineProperty(lekarz, 'nazwisko', {
            get: function() {
                return this._nazwisko;
            },
            set: function(nazwisko) {
                this._nazwisko = nazwisko;
            }
        });
        Object.defineProperty(lekarz, 'pesel', {
            get: function() {
                return this._pesel;
            },
            set: function(pesel) {
                this._pesel = pesel;
            }
        });
        Object.defineProperty(lekarz, 'specjalizacja', {
            get: function() {
                return this._specjalizacja;
            },
            set: function(specjalizacja) {
                this._specjalizacja = specjalizacja;
            }
        });

        add(lekarz);
    } 
    else 
    {
        var specjalizacja = document.getElementById("specjalizacja").value;
        var oddzial = document.getElementById("oddzial").value;
        var ordynator = new Ordynator(imie, nazwisko, pesel, specjalizacja, oddzial);

        Object.defineProperty(ordynator, 'imie', {
            get: function() {
                return this._imie;
            },
            set: function(imie) {
                this._imie = imie;
            }
        });
        Object.defineProperty(ordynator, 'nazwisko', {
            get: function() {
                return this._nazwisko;
            },
            set: function(nazwisko) {
                this._nazwisko = nazwisko;
            }
        });
        Object.defineProperty(ordynator, 'pesel', {
            get: function() {
                return this._pesel;
            },
            set: function(pesel) {
                this._pesel = pesel;
            }
        });
        Object.defineProperty(ordynator, 'specjalizacja', {
            get: function() {
                return this._specjalizacja;
            },
            set: function(specjalizacja) {
                this._specjalizacja = specjalizacja;
            }
        });
        Object.defineProperty(ordynator, 'oddzial', {
            get: function() {
                return this._oddzial;
            },
            set: function(oddzial) {
                this._oddzial = oddzial;
            }
        });

        add(ordynator);
    }
}