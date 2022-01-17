//Classe abstrata
export class Conta{
    constructor(saldoinicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente");
        }

        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

//acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

//metodos
    //metodo abstrato
    sacar(valor) {
        throw new Error("O metodo sacar da conta é abstrato");
    }

    _sacar(valor,taxa){
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado && valor > 0) {
            this._saldo -= valorSacado;
            return valorSacado;
        } 

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return console.log("return");
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}