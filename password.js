class Password {
    
    abcMin = new Array();
    abcMay = new Array();

    constructor(longitud){
        this.generaAbcedario();
        this.longitud = longitud;
        if(this.longitud < 8){
            throw Error("No es posible generar una contraseña con menos de 8 caracteres");
        }
        this.generarContrasenia();
    }

    esFuerte(contrasenia) {
        let regexp = new RegExp(/[A-Z]{2,}[a-z]{1,}[0-9]{5,}$/gm);
        return (contrasenia.match(regexp) != null) ? true : false;
    }

    get longitud(){
        return this._longitud;
    }

    set longitud(value){
        this._longitud = value;
    }

    get contrasenia(){
        return this._contrasenia;
    }

    set contrasenia(value){
        this._contrasenia = value;
    }

    generarContrasenia(){
        let passMayus = `${this.abcMay[this.generaNumeroAleatorio(26)]}${this.abcMay[this.generaNumeroAleatorio(26)]}`;
        let passMin = `${this.abcMin[this.generaNumeroAleatorio(26)]}${this.abcMin[this.generaNumeroAleatorio(26)]}`;
        let passNum =  `${this.generaNumeroAleatorio(5)}${this.generaNumeroAleatorio(5)}${this.generaNumeroAleatorio(5)}${this.generaNumeroAleatorio(5)}${this.generaNumeroAleatorio(5)}`;
        this.contrasenia = `${passMayus}${passMin}${passNum}`;
        this.esFuerte(this.contrasenia);
        console.log(`La contraseña es: ${this.contrasenia} y ¿es fuerte? ${this.esFuerte(this.contrasenia)}`);
    }
    
    generaNumeroAleatorio(seed){
        return  Math.round(Math.random(1) * seed);
    }

    generaAbcedario(){
        for (let i = 0; i < 26; i++) {
            this.abcMin.push((i+10).toString(36));
            this.abcMay.push((i+10).toString(36).toUpperCase());
        }

    }
}