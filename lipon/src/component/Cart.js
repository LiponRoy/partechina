import React, { useState } from 'react';

const Cart = ({ cart, emptyCart, ChooseOne }) => {
	const [ran, setRandom] = useState(0);
	// let randomNumber = 0;
	const arr = [12, 13, 14, 15, 16];

	var randomNumber = 0;

	const genRandom = () => {
		randomNumber = Math.floor(Math.random() * cart.length);
		setRandom(randomNumber);
	};

	// let Total_price = 0;
	// let Shipping = 0;

	// for (let i of cart) {
	// 	Total_price = Total_price + parseInt(i.price);
	// 	Shipping = Shipping + parseInt(i.Shipping);
	// }

	// let tex = (Total_price * 5) / 100;
	// let grandTotal = Total_price + Shipping + tex;
	// const randddom =()=>{

	// }

	return (
		<div>
			{cart.map(dat => (
				<div key={dat.id} className='cartItem'>
					<img src={dat.img} alt='' width='50px' />
					<span>{dat.name}</span>
				</div>
			))}
			<button onClick={emptyCart}>Remove all</button>
			<br></br>
			{/* <button onClick={ChooseOne}>Choose 1 for me</button> */}
			{cart ? <span>{cart[ran].name}</span> : <span>not found</span>}

			<br></br>
			<button onClick={genRandom}>Choose 1 for me</button>
		</div>
	);
};

export default Cart;
