AFRAME.registerComponent('light-switch', {
    init: observaEventosTeclado,
    toggleLight: function (id) {
        var light = document.getElementById(id);
        light.setAttribute('light', 'intensity', light.getAttribute('light').intensity > 0 ? 0 : 1);
    }
});

function observaEventosTeclado() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1':
                this.toggleLight('luz1');
                break;
            case '2':
                this.toggleLight('luz2');
                break;
            case '3':
                this.toggleLight('luz3');
                break;
            case '4':
                this.toggleLight('luz4');
                break;
        }
    });
}
