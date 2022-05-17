import '../styles/Cart.css'

function Cart() {
    const monstaPrice   = 7000
    const ivyPrixe      = 6500
    const flowerPrice   = 9750;

    return (
        <div className='lmj-cart'>
            <ul>
                <li>Monsters    : {monstaPrice}</li>
                <li>Lierre      : {ivyPrixe}</li>
                <li>Fleurs      : {flowerPrice}</li>
            </ul>

            Total : {monstaPrice + ivyPrixe + flowerPrice}
        </div>
    )
}

export default Cart