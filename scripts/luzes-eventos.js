AFRAME.registerComponent('luzes', {
    init: eventosTeclado,
    alternarLuz: alternarLuz
});

const luzQuartoMenor = 'luzQuartoMenor'
const luzQuartoMaior = 'luzQuartoMaior'
const luzBanheiro = 'luzBanheiro'
const luzCozinha = 'luzCozinha'
const luzEntrada = 'luzEntrada'
const luzJardim = 'luzJardim'

function eventosTeclado() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1':
                this.alternarLuz(luzQuartoMenor);
                break;
            case '2':
                this.alternarLuz(luzQuartoMaior);
                break;
            case '3':
                this.alternarLuz(luzBanheiro);
                break;
            case '4':
                this.alternarLuz(luzCozinha);
                break;
            case '5':
                this.alternarLuz(luzEntrada);
                break;
            case '6':
                this.alternarLuz(luzJardim);
                break;
        } 
    });
}

function alternarLuz(id) {
    var luz = document.getElementById(id);
    luz.setAttribute('light', 'intensity', luz.getAttribute('light').intensity > 0 ? 0 : 0.3);
}
