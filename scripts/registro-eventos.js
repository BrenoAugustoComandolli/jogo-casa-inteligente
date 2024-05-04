AFRAME.registerComponent('luzes', {
    init: eventosTeclado,
    alternarLuz: alternarLuz
});

const luzBanheiro = 'luzBanheiro'
const luzCozinha = 'luzCozinha'
const luzQuarto = 'luzQuarto'
const luzSala = 'luzSala'

function eventosTeclado() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1':
                this.alternarLuz(luzBanheiro);
                break;
            case '2':
                this.alternarLuz(luzCozinha);
                break;
            case '3':
                this.alternarLuz(luzQuarto);
                break;
            case '4':
                this.alternarLuz(luzSala);
                break;
        }
    });
}

function alternarLuz(id) {
    var luz = document.getElementById(id);
    luz.setAttribute('light', 'intensity', luz.getAttribute('light').intensity > 0 ? 0 : 1);
}
