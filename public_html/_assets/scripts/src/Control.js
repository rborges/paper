/*Esta classe é responsavel por escutar o teclado 
 * e setar a direção que deve ser seguida
 */
class Control {
    init(Cart) {
        document.addEventListener('keydown', function (event) {
            const keys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
            if (keys.indexOf(event.key) > -1) {
                if (event.key !== 'undefined') {
                    Cart.setDirection(event.key);
                    Cart.move();
                }
            }
            event.preventDefault();
        });
    }
}