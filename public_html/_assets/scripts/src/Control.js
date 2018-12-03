/*Esta classe é responsavel por escutar o teclado 
 * e setar a direção que deve ser seguida
 */
class Control {
    init(cart) {
        document.addEventListener('keydown', function (event) {
            const keys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
            if (keys.indexOf(event.key) > -1) {
                if (event.key !== 'undefined') {
                    cart.setDirection(event.key.replace('Arrow', '').toLowerCase());
                    // cart.move();
                }
            }
            event.preventDefault();
        });
    }
}