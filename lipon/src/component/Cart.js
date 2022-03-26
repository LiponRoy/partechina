import React from 'react';

const Cart = ({ cart, emptyCart, ChooseOne }) => {
	let randomNumber = 0;
	const arr = [12, 13, 14, 15, 16];

	const genRandom = () => {
		// let step1 = max - min + 1;
		// let step2 = Math.random() * step1;
		// let result = Math.floor(step2) + min;
		randomNumber = 2;

		return randomNumber;

		console.log('ami valo achi');
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
			<span>{arr[randomNumber]}</span>;<br></br>
			<button onClick={genRandom()}>Choose 1 for me</button>
		</div>
	);
};

export default Cart;
