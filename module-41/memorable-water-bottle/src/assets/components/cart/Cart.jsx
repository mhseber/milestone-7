import PropTypes from 'prop-types'
import './cart.css'


const Cart = () => {
    return (
        <div>
            <h4>Cart:{ }</h4>
            <h2>Memorable Water Bottle</h2>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;