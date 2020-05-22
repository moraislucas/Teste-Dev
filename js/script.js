function initWrite() {
    const titulo = document.querySelectorAll('[data-anima="writer"]');
    if (titulo.length) {
        titulo.forEach(item => {
            writer(item);
        });

        function writer(elemento) {
            const arrayTitulo = elemento.innerText.split('');
            elemento.innerHTML = '';
            arrayTitulo.forEach((letra, index) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                }, 85 * index);
            });
        }
    }

}
initWrite();


function initAnimaScroll() {
    const elementos = document.querySelectorAll('[data-anima]');

    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
        elementos.forEach((item) => {
            const elementoTop = item.getBoundingClientRect().top;
            const isElementoVisible = (elementoTop - windowMetade) < 0;
            if (isElementoVisible) {
                item.classList.add('ativo');
            } else if (item.classList.contains('ativo')) {
                item.classList.remove('ativo');
            }
        });
    }
    if (elementos.length) {
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }


}

initAnimaScroll();