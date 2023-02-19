export default function Slidebar(){
    return(
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <SugestaoUser/>

            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
    </div>
)}

let users = [
{name: "bad.vibes.memes", img:"assets/img/bad.vibes.memes.svg", segueVc: true},
{name: "adorable_animals", img:"assets/img/bad.vibes.memes.svg", segueVc: false},
{name: "smallcutecats", img:"assets/img/bad.vibes.memes.svg", segueVc: false},
{name: "razoesparaacreditar", img:"assets/img/bad.vibes.memes.svg", segueVc: true},
{name: "chibirdart", img:"assets/img/bad.vibes.memes.svg", segueVc: false}
]

function SugestaoUser(){
    return( 
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {users.map(item => 
                <div class="sugestao">
                    <div class="usuario">
                        <img src={item.img} />
                        <div class="texto">
                            <div class="nome"> {item.name} </div>
                            <div class="razao">
                                {item.segueVc ? "Segue você" : "Novo no Instagram" }
                            </div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )}

        </div>
    )
}
