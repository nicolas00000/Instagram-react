import Acoes from "./Acoes"
export default function Post(){
    return(
        <div class="posts">
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src="assets/img/meowed.svg" />
                meowed
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
            <img src="assets/img/gato-telefone.svg" />
            </div>

            <div class="fundo">
            
            {/* botao de curtida e comentario */}
            <Acoes/>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
            </div>
        </div>

        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src="assets/img/barked.svg" />
                barked
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
            <img src="assets/img/dog.svg" />
            </div>

            <div class="fundo">
             {/* botao de curtida e comentario */}
            <Acoes/>

            <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
            </div>
        </div>
        </div>
)
}