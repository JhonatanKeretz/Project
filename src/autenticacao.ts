// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Autenticacao {

    interface IUsuario {

        email: string;
        senha: string;

    }

    interface ICadastro {

        nome: string;
        email: string;
        senha: string;
        dataDeNascimento: Date;

    }

    export class LoginRegistro {

        login(usuario: IUsuario) {
            return usuario;

        }

        registro(novoUsuario: ICadastro) {
            return novoUsuario;
        }
    
    }

    export class Recuperacao {

        recuperarSenha(){
            return "Enviando e-mail para recuperação de Senha"
        }
        recuperarUsuario(){
            return "Enviando e-mail para recuperação de nome de Usuário"
        }

    }

}