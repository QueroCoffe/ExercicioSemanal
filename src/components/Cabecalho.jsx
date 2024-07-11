import "./Cabecalho.css";
import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Cabecalho(props) {
    return (
        <header>
            <div>
            {props.logado && (
                <img
                    width="58"
                    src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"
                    alt="Avatar"
                />
            )}
                <p>{props.logado ? `Bem Vindo(a)! ${props.nomeUsuario}` : "Você está desconectado!"}</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jogos</a></li>
                        {props.logado && <li><a href="#">Meu Perfil</a></li>}
                        {props.logado && <li><a href="#">Sair</a></li>}
                        {!props.logado && <li><a href="#">Entrar</a></li>}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Cabecalho;
