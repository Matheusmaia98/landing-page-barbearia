const modal = document.querySelector('.modal')
const mascara = document.querySelector('.mascara-modal')

function mostrarModal() {
    modal.style.top = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal() {
    modal.style.top = '150%'
    mascara.style.visibility = 'hidden'
}

function trocarVideo() {
    const video = document.querySelector('.video-pc');
    const source = document.getElementById("video-source");
    const largura = window.innerWidth;

    if (largura <= 768) {
        source.src = "videos/video-mobile.mp4";
    } else {
        source.src = "videos/barber-2.mp4"
    }
}