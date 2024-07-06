import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Galeria from"./components/Galeria";
import Footer from "./components/footer";

function App() {
    return(
        <>
        <Cabecalho logado={false} nomeUsuario="William"/>
        <Banner/>
        <Galeria/>
        <Footer/>
        </>
    );
}

export default App;