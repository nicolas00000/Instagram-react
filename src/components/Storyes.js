export default function Storyes(){
let nome = 
[
    {src: "assets/img/gag.svg", name: "gag"}, 
    {src: "assets/img/meowed.svg", name: "meowed"},
    {src: "assets/img/barked.svg", name: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},
    {src: "assets/img/wawawicomics.svg", name: "wawawicomics"},
    {src: "assets/img/respondeai.svg", name: "respondeai"},
    {src: "assets/img/filomoderna.svg", name: "filomoderna"},
    {src: "assets/img/memeriagourmet.svg", name: "memeriagourmet"},
] 
    return(
        <div class="stories">
            {nome.map((nome, index) => (
                <div class="story" key={index}>
                    <div class="imagem">
                        <img src={nome.src} />
                    </div>
                    <div class="usuario">
                        {nome.name}
                    </div>
                </div>
        ))}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        </div>
    )
}


