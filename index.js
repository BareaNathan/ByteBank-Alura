import {Cliente} from "./Cliente.js"
import { Diretor } from "./Funcionários/Diretor.js"
import { Funcionario } from "./Funcionários/Funcionario.js"
import { Gerente } from "./Funcionários/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345678910);

const logado = SistemaAutenticacao.login(diretor,"123456");
console.log(logado);