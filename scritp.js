$(document).ready(function() {
    // Mensaje al hacer clic en el botón "Comprar"
    $('.comprar').on('click', function() {
        let producto = $(this).siblings('h3').text();
        alert('Has agregado ' + producto + ' al carrito.');
    });

    // Animación al pasar el mouse sobre los productos
    $('.producto').hover(
        function() {
            $(this).css({ 'transform': 'scale(1.05)', 'transition': '0.3s' });
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Desplazamiento suave al hacer clic en el menú
    $('nav ul li a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});

