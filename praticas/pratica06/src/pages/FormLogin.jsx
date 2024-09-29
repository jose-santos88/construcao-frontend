import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";
import { useState } from "react";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    return (
        <form>
            <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
            <InputSenha valor={senha} mudaValor={(e) => setSenha(e.target.vale)} />
            <Botao texto="Entrar" navegaPara={props.navegaPara} />
        </form>
    );
}

export default FormLogin;