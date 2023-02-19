export default function Storyes(){

let nome = 
[
    {src: "9gag.svg", name: "9gag"}, 
    {src: "meowed.svg", name: "meowed"},
    {src: "barked.svg", name: "barked"},
    {src: "nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},
    {src: "wawawicomics.svg", name: "wawawicomics"},
    {src: "respondeai.svg", name: "respondeai"},
    {src: "filomoderna.svg", name: "filomoderna"},
    {src: "memeriagourmet.svg", name: "memeriagourmet"},
] 

    return(
        <div class="stories">
            {nome.map(nome => 
                <div class="story">
                <div class="imagem">
                    <img src="assets/img/memeriagourmet.svg" />
                </div>
                <div class="usuario">
                    {nome.name}
                </div>
            </div>
            )}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        </div>
    )
}


