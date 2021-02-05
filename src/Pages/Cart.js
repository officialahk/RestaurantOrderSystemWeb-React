import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Contexts/CartContext';
import { ProductData } from '../Services/ProductData';

const Cart = ({product}) => {

    // const {  removeProduct } = useContext(CartContext);

        return(
        <div id="page" class="page">


            <div id="cart-page" class="page-hero-section division">
                <div class="container">	
                    <div class="row">	
                        <div class="col-lg-10 offset-lg-1">
                            <div class="hero-txt text-center white-color">


                                <div id="breadcrumb">
                                    <div class="row">						
                                        <div class="col">
                                            <div class="breadcrumb-nav">
                                                <nav aria-label="breadcrumb">
                                                    <ol class="breadcrumb">
                                                        <li class="breadcrumb-item"><a href="demo-1.html">Home</a></li>
                                                        <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <h2 class="h2-xl">Shopping Cart</h2>

                            </div>
                        </div>	
                    </div>	 
                </div>	  
            </div>	




			<section id="cart-1" class="wide-100 cart-page division">
				<div class="container">


					<div class="row">
						<div class="col-md-12">
							<div class="cart-table mb-70">
								<table id="myTable">
									<thead>
									    <tr>
									      	<th scope="col">Product</th>
									      	<th scope="col">Price</th>
									      	<th scope="col">Quantity</th>
									      	<th scope="col">Total</th>
									      	<th scope="col">Delete</th>
									    </tr>
									 </thead>

									<tbody>

								{
									ProductData.map(p =>(

									

									    <tr>
									      	<td data-label="Product" class="product-name">

												<div class="cart-product-img"><img src={p.image} alt="cart-preview" /></div>

												<div class="cart-product-desc">
										      		<h5 class="h5-sm">{p.title}</h5>
										      		<p class="p-sm">{p.ingredients}</p>
										      	</div>

									      	</td>

									      	<td data-label="Price" class="product-price"><h5 class="h5-md">${p.price}</h5></td>
									      	<td>
									      		<input type="number" min="1" max="20" value={p.qty} />
									      	</td>
									      	<td data-label="Total" class="product-price-total"><h5 class="h5-md">${p.price * p.qty}</h5></td>
									      	<td data-label="Delete" class="td-trash">
												  <i class="far fa-trash-alt"></i>
												  {/* onClick={() =>removeProduct(product)} */}
											</td>

									    </tr>
										) 
									)
								}
									</tbody>

								</table>
							</div>
						</div>
					</div>	

	
					<div class="row">


						<div class="col-lg-8">
							<div class="discount-coupon row pt-15">

								<div class="col-md-8 col-lg-7">
									<form class="discount-form">
												
										<div class="input-group">
											<input type="text" class="form-control" placeholder="Coupon Code" id="discount-code" />								
											<span class="input-group-btn">
												<button type="submit" class="btn btn-salmon tra-salmon-hover">Apply Coupon</button>
											</span>										
										</div>
													
									</form>	
								</div>


								<div class="col-md-4 col-lg-5 text-right">
									<a onClick="window.location.reload()" class="btn btn-md btn-salmon tra-salmon-hover">Update Cart</a>
								</div>

							</div>
						</div>


			
						<div class="col-lg-4">
							<div class="cart-checkout bg-lightgrey">

				
								<h5 class="h5-lg">Cart Total</h5>

							
								<table>
									<tbody>
									    <tr>
									      	<td>Subtotal</td>
									      	<td> </td>
									      	<td class="text-right">$35.95</td>
									    </tr>
									    <tr class="last-tr">
									      	<td>Total</td>
									      	<td> </td>
									      	<td class="text-right">$35.95</td>
									    </tr>
									  </tbody>
								</table>

								
								<a href="#" class="btn btn-md btn-salmon tra-salmon-hover">Proceed To Checkout</a>

							</div>
						</div>	


					</div>	  


				</div>	   
			</section>		




			<section id="banner-3" class="bg-yellow banner-section division">
				<div class="container">
			 		<div class="row d-flex align-items-center">


						<div class="col-md-7 col-lg-6">
							<div class="banner-3-txt coffee-color">

								<h4 class="h4-xl">Download mobile App and</h4>
								<h2>save up to 20%</h2>
	
								<p class="p-md">Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, 
									blandit varius
								</p>


								<div class="stores-badge">


									<a href="#" class="store">
										<img class="appstore-original" src="assets/images/appstore.png" alt="appstore-logo" />
									</a>

									<a href="#" class="store">
										<img class="googleplay-original" src="assets/images/googleplay.png" alt="googleplay-logo" />
									</a>
												
								</div>

							</div>
						</div>


						<div class="col-md-5 col-lg-6">
							<div class="banner-3-img">
								<img class="img-fluid" src="assets/images/e-shop.png" alt="banner-image" />
							</div>
						</div>


			 		</div>     
				</div>	    	
			</section>	



    </div>



        )
    }

	export default Cart;