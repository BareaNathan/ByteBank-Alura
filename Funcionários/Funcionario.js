export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = cpf;

        this._bonificação = 1;
        this._senha;
    }
    get senha(){
        return this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    
    cadastrarSenha(senha){
        this._senha = senha;
    }
}