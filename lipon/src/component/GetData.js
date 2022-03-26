import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Display from './Display';

const GetData = () => {
	const [products, setProduct] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('lipon.json')
			.then(response => response.json())
			.then(data => setProduct(data));
	});

	const clickHendler = product => {
		const dd = [...cart, product];
		setCart(dd);

		// addToDb()
		// localStorage.setItem('shoping cart', product.id);
		//localStorage.setItem(product.id, JSON.stringify(product));
	};
	const emptyCart = () => {
		// const dd = [...cart, product];
		setCart([]);

		// addToDb()
		// localStorage.setItem('shoping cart', product.id);
		//localStorage.setItem(product.id, JSON.stringify(product));
	};
	const ChooseOne = () => {
		console.log('ki kormu');
	};

	return (
		<div className='container-fluid Shop'>
			<div className='productContainer'>
				<div className='row'>
					{products.map(product => (
						<div key={product.id} className='col-md-4'>
							<Display clickHendler={clickHendler} product={product}></Display>
						</div>
					))}
				</div>
			</div>
			<div className='cartContainer'>
				<Cart cart={cart} emptyCart={emptyCart} ChooseOne={ChooseOne}></Cart>
			</div>
		</div>
	);
};

export default GetData;
