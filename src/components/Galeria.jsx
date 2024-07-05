import "./Galeria.css";

const Jogos = [
    { cod: 1, nomeDojogo: "EA FC 2024", ano: 2023, imagem: "/img/EAFC24.jpg" },
    { cod: 2, nomeDojogo: "Call of Duty", ano: 2024, imagem: "/img/Callofduty.jpg" },
    { cod: 3, nomeDojogo: "GTA VI", ano: 2025, imagem: "/img/gtav.jpg" },
    { cod: 4, nomeDojogo: "Street Fighter", ano: 2024, imagem: "/img/street.jpg" },
    { cod: 5, nomeDojogo: "Mario Kart", ano: 2018, imagem: "/img/mariokart.jpg" },
    { cod: 6, nomeDojogo: "Elder Ring", ano: 2023, imagem: "/img/elderring.jpg" },
    { cod: 7, nomeDojogo: "Hollow Knight", ano: 2016, imagem: "/img/hollowknigth.jpg" },
    { cod: 8, nomeDojogo: "God of War", ano: 2023, imagem: "/img/godofwar.jpg" },
    { cod: 9, nomeDojogo: "Legue of Legends", ano:2014, imagem:"/img/lol.jpg"}
];

function Galeria() {

    const cardsJogos = Jogos.map((jogo) => {
        return (
            <article key={jogo.cod} className="game-card">
                <img src={jogo.imagem} alt={jogo.nomeDojogo} width={300} />
                <h3 className="game-title">{jogo.nomeDojogo}</h3>
                <p className="game-year">Ano: {jogo.ano}</p>
                <button className="play-button" aria-label={`Jogue ${jogo.nomeDojogo} agora`}>Jogue Agora</button>
            </article>
        );
    });

    return (
        <>
            <hr />
            <h2>Divirta-se!</h2>
            <section className="games-gallery">{cardsJogos}</section>
            <hr />
        </>
    );
}

export default Galeria;
