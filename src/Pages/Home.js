import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ProductData } from '../Services/ProductData';
// import {ProductsContext} from '../Contexts/ProductsContext';

const Home = () => {

	// const {prod} = useContext(ProductsContext);

        return(
            <div>
				<div id="page" class="page">


<section id="hero-2" class="bg-fixed hero-section division">
	<div class="bg-fixed bg-inner division">


		<div class="container">							
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<div class="hero-2-txt text-center">

						<h2 class="red-color shadow-txt-white">Big burger, little money</h2>

					
						<div class="hero-2-img">
							
							<img class="img-fluid" src="assets/images/hero-2-img.png" alt="hero-image" />	

						
							<div class="price-badge-sm bg-fixed white-color1">
								<div class="badge-txt">
									<h5 class="h5-md">From</h5>
									<h4 class="h4-lg">$6.99</h4>
								</div>
							</div>	

						</div>

					</div>  
				</div>	 
			</div>	
		</div>	


		<div class="bg-fixed white-overlay-wave"></div>


	</div>	 
</section>	




<section id="menu-8" class="wide-70 menu-section division">
	<div class="container">


		<div id="tabs-nav">
			 <div class="row">
				<div class="col-lg-12 text-center">
					 <ul class="tabs-1 ico-55 red-tabs clearfix">

						
						<li class="tab-link current" data-tab="tab-1">
							<span class="flaticon-burger"></span> 
							<h5 class="h5-sm">Burgers</h5>
						</li>

					
						<li class="tab-link" data-tab="tab-2">
							<span class="flaticon-fries"></span> 
							<h5 class="h5-sm">Sides</h5>
						</li>

						
						<li class="tab-link" data-tab="tab-3">
							<span class="flaticon-salad-1"></span> 
							<h5 class="h5-sm">Salads</h5>
						</li>

						
						<li class="tab-link" data-tab="tab-4">
							<span class="flaticon-doughnut"></span> 
							<h5 class="h5-sm">Desserts</h5>
						</li>

					</ul>
				</div>
			</div>	
		 </div> 


		 <div id="tabs-content">


			<div id="tab-1" class="tab-content current">
				<div class="row">


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/burger-01.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.95</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Crispy Chicken</h5>

								<p class="grey-color">Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>

	
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

					
							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/burger-02.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$9.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Ultimate Bacon</h5>

								<p class="grey-color">House beef patty, cheddar cheese, bacon, onion, mustard</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	



					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
			
								<img class="img-fluid" src="assets/images/menu/burger-06.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$7.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Smokey House</h5>

								<p class="grey-color">Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/burger-05.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.30</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Turkey Burger</h5>

								<p class="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


				</div> 
			</div>

			<div id="tab-2" class="tab-content">
				<div class="row">


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

						
							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-01.png" alt="menu-image" />

							
								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$3.85</h5>
								</div>

								
								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

		
								<h5 class="h5-sm">Onion Rings</h5>

								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-02.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$3.69</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">French Fries</h5>

								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-03.png" alt="menu-image" />

							
								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$5.25</h5>
								</div>

							
								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

							
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

					
							<div class="menu-7-txt rel">

				
								<h5 class="h5-sm">Mozzarella Sticks</h5>

						
								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

							
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


			
					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

			
							<div class="menu-7-img rel">
	
					
								<img class="img-fluid" src="assets/images/menu/side-04.png" alt="menu-image" />

				
								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$4.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

			
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

					
								<h5 class="h5-sm">Chicken Nuggets</h5>

								
								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

						
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


				</div>  
			</div>



			<div id="tab-3" class="tab-content">
				<div class="row">

					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/salad-01.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$7.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

								
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

			
								<h5 class="h5-sm">Greek Salad</h5>

							
								<p class="grey-color">Tomatoes, cucumbers, olives, feta cheese, red onion, olive oil</p>

						
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

				
							<div class="menu-7-img rel">
	
				
								<img class="img-fluid" src="assets/images/menu/salad-02.png" alt="menu-image" />

					
								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$9.30</h5>
								</div>

				
								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Chicken Salad</h5>

								<p class="grey-color">Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/salad-03.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.70</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Spinach Salad</h5>

								<p class="grey-color">Halloumi cheese, spinach, oranges, mint leaves, olive oil</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/salad-04.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.30</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Turkey Burger</h5>

								<p class="grey-color">Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	


				</div>  	
			</div>	


			<div id="tab-4" class="tab-content">
				<div class="row">



					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">

								<img class="img-fluid" src="assets/images/menu/dessert-01.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.50</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Strawberry Caken</h5>

								<p class="grey-color">Strawberry, soft cheese, icing sugar, butter softened</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/dessert-02.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$8.50</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

								<h5 class="h5-sm">Belgian Waffle</h5>

								<p class="grey-color">Berries, Greek yogurt, ice cream, chocolate sauce, peanut butter</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>	

					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">

								<img class="img-fluid" src="assets/images/menu/dessert-03.png" alt="menu-image" />

								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$7.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

	
								<h5 class="h5-sm">Cheesecake</h5>

					
								<p class="grey-color">Strawberry, double cream, icing sugar, soft cheese, biscuits</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>


					<div class="col-sm-6 col-lg-3">
						<div class="menu-7-item">

							<div class="menu-7-img rel">
	
								<img class="img-fluid" src="assets/images/menu/dessert-04.png" alt="menu-image" />

		
								<div class="menu-7-price bg-coffee">
									<h5 class="h5-xs yellow-color">$7.40</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>		
								</div>	

	
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							<div class="menu-7-txt rel">

			
								<h5 class="h5-sm">Chocolate Cake</h5>

					
								<p class="grey-color">Milk chocolate, icing sugar, cocoa powder, milk, vanilla extract</p>

						
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
					</div>


				</div>  
			</div>


		 </div>	


	</div>	 
</section>	





<section id="promo-11" class="bg-fixed promo-section division">
	<div class="container">
		<div class="row d-flex align-items-center">



			<div class="col-md-5 col-lg-4">
				<div class="pbox-11-txt mb-40 white-color">

			
					<h3 class="h3-lg">The</h3>
					<h2>County General</h2>

				
					<p class="p-md">Semper lacus cursus porta a primis feugiat ligula risus auctor rhoncus semper undo</p>

				
					<a href="product-single.html" class="btn btn-lg btn-red tra-white-hover">Order Now</a>

				</div>
			</div>



			<div class="col-md-7 col-lg-6">
				<div class="pbox-11-img mb-40">

			
					<img class="img-fluid" src="assets/images/promo-11-img.png" alt="promo-image" />

					<div class="red-badge price-badge-lg bg-fixed">
						<div class="badge-txt white-color">
							<h5 class="h5-xl">Only</h5>
							<h3 class="h3-sm">$9.99</h3>
							<span class="item-code">Code: 0841</span>
						</div>
					</div>

				</div>
			</div>


			<div class="col-lg-2">


				<div class="pbox-11-link text-center white-color">
					<a href="product-single.html">
						<img class="img-fluid" src="assets/images/menu/burger-02.png" alt="promo-image" />
						<p>Ultimate Bacon Burger</p>
					</a>
				</div>

				<div class="pbox-11-link text-center mb-40 white-color">
					<a href="product-single.html">
						<img class="img-fluid" src="assets/images/menu/burger-05.png" alt="promo-image" />
						<p>Grilled Chicken Burger</p>
					</a>
				</div>

			</div>


		</div>   	
	</div>	  	
</section>	



<section id="menu-6" class="wide-70 menu-section division">
	<div class="container">


		<div class="row">	
			<div class="col-lg-10 offset-lg-1">
				<div class="section-title mb-60 text-center">	

					<h2 class="h2-xl red-color">Our Crazy Burgers</h2>	
 
					<p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor 
					   primis libero tempus, blandit a cursus varius magna
					</p>
						
				</div>	
			</div>
		</div>


		<div class="row">

			{
			ProductData.map(p => (

				
			<div class="col-sm-6 col-lg-3">
			<div class="menu-6-item bg-white">

				<div class="menu-6-img rel">
					<div class="hover-overlay">

						<img class="img-fluid" src={p.image} alt="menu-image" />

						<span class="item-code bg-tra-dark">{p.code}</span>	


						<div class="menu-img-zoom ico-25">
							<a src={p.image} class="image-link">
								<span class="flaticon-zoom"></span>
							</a>
						</div> 

					</div>
				</div>


				<div class="menu-6-txt rel">

	
					<div class="item-rating">
						<div class="stars-rating stars-lg">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star-half-alt"></i>
						</div>		
					</div>

					<div class="like-ico ico-25">
						<a href="#"><span class="flaticon-heart"></span></a>
					</div>

		
					<h5 class="h5-sm">{p.title}</h5>

		
					<p class="grey-color">{p.ingredients}</p>

					<div class="menu-6-price bg-coffee">
						<h5 class="h5-xs yellow-color">$ {p.price}</h5>
					</div>

	
					{/* <div class="add-to-cart bg-yellow ico-10">
						{
							isInCart(product) &&
							<button onClick={() => increase(product)}>
								<span class="flaticon-shopping-bag"></span> Add More
							</button>
							
						}
						{
							!isInCart(product) &&
							<button onClick={() => addProduct(product)}>
								<span class="flaticon-shopping-bag"></span> Add to Cart
							</button>
							
						}
					</div> */}

					<div class="add-to-cart bg-yellow ico-10">
						<Link to="/Product"><span class="flaticon-shopping-bag"></span> Add to Cart</Link>
					</div>

				</div>

			</div>
		</div>

			))
			}
		</div>	  
	</div>	   
</section>	




<section id="about-1" class="bg-fixed wide-100 about-section division">
	<div class="container">
		<div class="row">


			<div class="col-xl-10 offset-xl-1">
				<div class="about-1-txt text-center">

					<h2><span class="yellow-color">Burgers…</span> what else?</h2>

	
					<p class="p-xl grey-color">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an 
					   tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer 
					   metus curae integer orci congue integer and primis in integer metus  mollis faucibus 
					</p>

			
					<div class="abox-1-wrapper ico-75">
						<div class="row">

			
							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

									
									<div class="abox-1-ico grey-color"><span class="flaticon-burger"></span></div>

					
									<h6 class="h6-xl">Burgers</h6>

								</div>
							</div>

						
							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

						
									<div class="abox-1-ico grey-color"><span class="flaticon-french-fries"></span></div>

						
									<h6 class="h6-xl">Fries</h6>

								</div>
							</div>

								
							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

							
									<div class="abox-1-ico grey-color"><span class="flaticon-fried-chicken"></span></div>

							
									<h6 class="h6-xl">Chicken</h6>

								</div>
							</div>
				
							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

									<div class="abox-1-ico grey-color"><span class="flaticon-salad"></span></div>

						
									<h6 class="h6-xl">Salads</h6>

								</div>
							</div>

							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

			
									<div class="abox-1-ico grey-color"><span class="flaticon-donut"></span></div>

				
									<h6 class="h6-xl">Desserts</h6>

								</div>
							</div>
	
							<div class="col-sm-4 col-md-2">
								<div class="abox-1 mb-40">

									<div class="abox-1-ico grey-color"><span class="flaticon-drinks"></span></div>

									<h6 class="h6-xl">Drinks</h6>

								</div>
							</div>

						</div>
					</div>
				
					<a href="menu-3.html" class="btn btn-md btn-red tra-red-hover">Explore Full Menu</a>

				</div>
			</div>


		</div>    
	</div>	  
</section>



<section id="promo-14" class="wide-100 promo-section division">
	<div class="container">
		<div class="row d-flex align-items-center">


			<div class="col-lg-5">
				<a href="product-single.html">
					<div id="pb-14-1" class="pbox-14-item bg-yellow">
						

						<div class="pbox-14-img text-center mb-25 rel">	

							<img class="img-fluid" src="assets/images/menu/burger-06.png" alt="promo-image" />

							<div class="red-badge price-badge-sm bg-fixed">
								<div class="badge-txt white-color">
									<h5 class="h5-sm">Only</h5>
									<h4 class="h4-md">$7.99</h4>
								</div>
							</div>

						</div>

						<div class="pbox-14-txt">


							<h5 class="h5-xl">Smokey House Burger</h5>


							<p>Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles</p>

						</div>
					</div>
				</a>
			</div>	



			<div class="col-lg-7">
				<div class="pbox-carousel">
					<div class="owl-carousel promo-8-carousel">
				
										
					
						<div class="pbox-14-item">

					
							<div class="pbox-14-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-04.png" alt="menu-image" />

								<div class="pbox-14-price bg-coffee">
									<h5 class="h5-xs yellow-color">$4.99</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

							
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

			
							<div class="pbox-14-txt rel">

								
								<h5 class="h5-md">Chicken Nuggets</h5>

								
								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

							
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>	

											
					
						<div class="pbox-14-item">

							<div class="pbox-14-img rel">
	
						
								<img class="img-fluid" src="assets/images/menu/side-03.png" alt="menu-image" />

						
								<div class="pbox-14-price bg-coffee">
									<h5 class="h5-xs yellow-color">$5.25</h5>
								</div>

				
								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

				
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>


							<div class="pbox-14-txt rel">

								<h5 class="h5-md">Mozzarella Sticks</h5>

								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

						
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>

													
					
						<div class="pbox-14-item">

				
							<div class="pbox-14-img rel">
	
							
								<img class="img-fluid" src="assets/images/menu/side-02.png" alt="menu-image" />

						
								<div class="pbox-14-price bg-coffee">
									<h5 class="h5-xs yellow-color">$3.69</h5>
								</div>

					
								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

							
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

				
							<div class="pbox-14-txt rel">

					
								<h5 class="h5-md">French Fries</h5>

								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>	

													
						
						<div class="pbox-14-item">

							<div class="pbox-14-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-01.png" alt="menu-image" />

					
								<div class="pbox-14-price bg-coffee">
									<h5 class="h5-xs yellow-color">$3.85</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	

							
								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>

							
							<div class="pbox-14-txt rel">

								<h5 class="h5-md">Onion Rings</h5>

								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

						
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>	


						<div class="pbox-14-item">


							<div class="pbox-14-img rel">
	
								<img class="img-fluid" src="assets/images/menu/side-06.png" alt="menu-image" />


								<div class="pbox-14-price bg-coffee">
									<h5 class="h5-xs yellow-color">$5.25</h5>
								</div>

								<div class="item-rating">
									<div class="stars-rating stars-lg">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>	


								<div class="like-ico ico-20">
									<a href="#"><span class="flaticon-heart"></span></a>
								</div>

							</div>


							<div class="pbox-14-txt rel">

								<h5 class="h5-md">Chicken Fingers</h5>

							
								<p class="grey-color">Integer ultrice an aligula lectus purus magna and tempor</p>

								
								<a href="product-single.html" class="btn btn-sm btn-tra-grey yellow-hover">
									<span class="flaticon-shopping-bag"></span> Add to Cart
								</a>

							</div>

						</div>
											

					</div>
				</div>
			</div>


		</div>   
	</div>	   
</section>




<div id="promo-3" class="promo-section division">
	<div class="container">
		<div class="row d-flex align-items-center">

			<div class="col-md-6">
				<a href="menu-3.html">
					<div class="pbox-3 mb-30">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/offer-1.jpg" alt="promo-image" />
						</div> 
					</div>
				</a>
			</div>


			<div class="col-md-6">
				<a href="menu-3.html">
					<div class="pbox-3 mb-30">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/offer-2.jpg" alt="promo-image" />
						</div> 
					</div>
				</a>
			</div>


			<div class="col-md-6">
				<a href="menu-3.html">
					<div class="pbox-3">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/offer-3.jpg" alt="promo-image" />
						</div> 
					</div>
				</a>
			</div>



			<div class="col-md-6">
				<a href="menu-3.html">
					<div class="pbox-3 pbox-3-last">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/offer-4.jpg" alt="promo-image" />
						</div> 
					</div>
				</a>
			</div>


		</div>   	
	</div>	 
</div>	




<section id="promo-8" class="wide-100 promo-section division">
	<div class="container">
		<div class="row">


		
			<div class="col-md-4">
				<div class="pbox-8 row d-flex align-items-center">

					
					<div class="col-lg-6 rel">
						<div class="pbox-8-img">
							<div class="hover-overlay"> 	

							
								<img class="img-fluid" src="assets/images/img-24.jpg" alt="promo-image" />

							
								<span class="item-code bg-yellow">Code: 0961</span>

							</div>
						</div>
					</div>

					<div id="pb-8-1" class="col-lg-6">
						<div class="pbox-8-txt">
	
							<h5 class="h5-sm"><a href="product-single.html">Tuna Salad</a></h5>

						
							<p>Vitae sapien and justo aliquet and molestie</p>

							<div class="pbox-8-price">
								<h5 class="h5-xl"><span class="red-color">$9.50</span></h5>
							</div>

						</div>
					</div>

				</div>
			</div>	



			<div class="col-md-4">
				<div class="pbox-8 row d-flex align-items-center">

					<div class="col-lg-6 rel">
						<div class="pbox-8-img">
							<div class="hover-overlay"> 		

							
								<img class="img-fluid" src="assets/images/img-21.jpg" alt="promo-image" />

								
								<span class="item-code bg-yellow">Code: 2136</span>

							</div>
						</div>
					</div>

	
					<div id="pb-8-2" class="col-lg-6">
						<div class="pbox-8-txt">
	
							<h5 class="h5-sm"><a href="product-single.html">Crispy Chicken</a></h5>

					
							<p>Vitae sapien and justo aliquet and molestie</p>

				
							<div class="pbox-8-price">
								<h5 class="h5-xl"><span class="red-color">$7.99</span></h5>
							</div>

						</div>
					</div>

				</div>
			</div>



			<div class="col-md-4">
				<div class="pbox-8 row d-flex align-items-center pbox-8-last">

					<div class="col-lg-6 rel">
						<div class="pbox-8-img">
							<div class="hover-overlay"> 		

								<img class="img-fluid" src="assets/images/img-25.jpg" alt="promo-image" />

							
								<span class="item-code bg-yellow">Code: 2164</span>

							</div>
						</div>
					</div>

			
					<div id="pb-8-3" class="col-lg-6">
						<div class="pbox-8-txt">

							
							<h5 class="h5-sm"><a href="product-single.html">Egg Sandwich</a></h5>

						
							<p>Vitae sapien and justo aliquet and molestie</p>

						
							<div class="pbox-8-price">
								<h5 class="h5-xl"><span class="red-color">$13.49</span></h5>
							</div>

						</div>
					</div>

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




<section id="about-3" class="wide-60 about-section division">
	<div class="container">
		<div class="row d-flex align-items-center">


			<div class="col-md-5 col-lg-6">
				<div class="about-3-img text-center mb-40">
					<img class="img-fluid" src="assets/images/about-01-img.png" alt="about-image" />
				</div>
			</div>


		
			<div class="col-md-7 col-lg-6">
				<div class="about-3-txt mb-40">

					
					<h2 class="h2-sm">Nothing brings people together like a good burger</h2>

					
					<p class="p-md">Semper lacus cursus porta primis ligula risus tempus and sagittis ipsum mauris lectus laoreet 
					   purus ipsum tempor enim ipsum porta justo integer ultrice aligula lectus aenean magna and pulvinar purus at 
					   pretium	gravida 
					</p>

					
					<ul class="txt-list">

						<li class="list-item">
							<p class="p-md">Fringilla risus, luctus mauris orci auctor purus euismod pretium
							   purus pretium ligula rutrum tempor sapien
							</p>
						</li>

						<li class="list-item">
							<p class="p-md">Quaerat sodales sapien euismod purus blandit</p>
						</li>

						<li class="list-item">
							<p class="p-md">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales 
							   sapien undo pretium a purus mauris
							</p>
						</li>

					</ul>

				</div>
			</div>	


		</div>	   
	</div>	   
</section>	





<div id="brands-1" class="bg-lightgrey brands-section division">
	<div class="container">					
		<div class="row">
			<div class="col text-center">	
				<div class="owl-carousel brands-carousel">
				
										
				
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-11.png" alt="brand-logo" />
					</div>
			
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-12.png" alt="brand-logo" />
					</div>
										
					
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-13.png" alt="brand-logo" />
					</div>
										
					
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-14.png" alt="brand-logo" />
					</div>
										
					
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-15.png" alt="brand-logo" />
					</div>
										
					
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-16.png" alt="brand-logo" />
					</div>

				
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-17.png" alt="brand-logo" />
					</div>
												
				
					<div class="brand-logo">
						<img class="img-fluid" src="assets/images/brand-18.png" alt="brand-logo" />
					</div>


				</div>
			</div>
		</div>     
	</div>	    
</div>





<section id="blog-1" class="wide-60 blog-section division">				
	<div class="container">


	
		<div class="row">	
			<div class="col-lg-10 offset-lg-1">
				<div class="section-title mb-60 text-center">	

		
					<h2 class="h2-xl red-color">Events & Catering</h2>	

			
					<p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor 
					   primis libero tempus, blandit a cursus varius magna
					</p>
						
				</div>	
			</div>
		</div>


	
		 <div class="row">


		
			 <div class="col-md-6 col-lg-4">
				 <div class="blog-post">

			
					 <div class="blog-post-img">
						 <div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/blog/img-01.jpg" alt="blog-post-image" />
						</div>	
					</div>

				
					<div class="blog-post-txt">

						<h5 class="h5-lg"><a href="single-post.html">Quaerat neque purus ipsum neque dolor</a></h5>

						<p class="grey-color">Quaerat neque purus ipsum neque dolor primis tempus impedit</p>

					</div>

				</div>
			 </div>


			 <div class="col-md-6 col-lg-4">
				 <div class="blog-post">

				
					 <div class="blog-post-img">
						 <div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/blog/img-02.jpg" alt="blog-post-image" />
						</div>	
					</div>

				
					<div class="blog-post-txt">

					
						<h5 class="h5-lg"><a href="single-post.html">Tempor blandit sapien at gravida donec ipsum</a></h5>

			
						<p class="grey-color">Neque dolor primis libero tempus impedit tempor sapien gravida</p>

					</div>

				</div>
			 </div>



			 <div class="col-md-6 col-lg-4">
				 <div class="blog-post">

				
					 <div class="blog-post-img">
						 <div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/blog/img-03.jpg" alt="blog-post-image" />
						</div>	
					</div>

				
					<div class="blog-post-txt">

					
						<h5 class="h5-lg"><a href="single-post.html">Neque dolor primis a libero tempus a tempor</a></h5>

					
						<p class="grey-color">Impedit tempor at donec sapien ipsum a neque dolor primis libero</p>

					</div>

				</div>
			 </div>


		</div>	


	</div>	   	
</section>	





<div id="reviews-1" class="bg-image bg-scroll reviews-section division">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 testimonials white-color">	


		
				<div class="quote-icon"></div>


			
				<div class="flexslider">											
					<ul class="slides text-center">


					
						<li class="review-1">
							<div class="review-1-txt">

								
								<img src="assets/images/review-author-1.jpg" alt="testimonial-avatar" />

						
								<p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor
								   egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "
								</p>

							
								<div class="review-rating">
									<div class="stars-rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>

							
								<p class="testimonial-autor">by Sean McMarthy</p>

							</div>																	
						</li>


						
						<li class="review-1">
							<div class="review-1-txt">

								
								<img src="assets/images/review-author-2.jpg" alt="testimonial-avatar" />

							
								<p>" At sagittis congue augue egestas egestas magna ipsum vitae purus ipsum primis in cubilia
								   laoreet augue egestas luctus donec diam ociis nullam tempor sapien, eget orci gravida porta " 
								</p>

						
								<div class="review-rating">
									<div class="stars-rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
									</div>		
								</div>

								
								<p class="testimonial-autor">by Evelyn Martinez</p>

							</div>	
									
						</li>


						
						<li class="review-1">
							<div class="review-1-txt">

						
								<img src="assets/images/review-author-3.jpg" alt="testimonial-avatar" />

							
								<p>" Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue. An orci nullam
								   tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor "
								</p>

							
								<div class="review-rating">
									<div class="stars-rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>

						
								<p class="testimonial-autor">by Robert Peterson</p>

							</div>									
																							
						</li>


						<li class="review-1">
							<div class="review-1-txt">

							
								<img src="assets/images/review-author-4.jpg" alt="testimonial-avatar" />

								<p>" An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at
								   odio velna auctor. Egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue "
								</p>

								<div class="review-rating">
									<div class="stars-rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
									</div>		
								</div>

								<p class="testimonial-autor">by Leslie Serpas</p>

							</div>										
																							
						</li>


						
						<li class="review-1">
							<div class="review-1-txt">

								<img src="assets/images/review-author-5.jpg" alt="testimonial-avatar" />

							
								<p>" Egestas egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue
								   egestas luctus donec ociis vitae purus diam integer congue magna undo impedit lacus dolor " 
								</p>

							
								<div class="review-rating">
									<div class="stars-rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
									</div>		
								</div>

							
								<p class="testimonial-autor">by Amelie Newlove</p>	

							</div>										
																							
						</li>

					</ul>
				</div>


			</div>
		 </div>	 
	</div>	 
</div>	



	
<section id="gallery-2" class="gallery-section division">
	<div class="container">


		
		<div class="row">	
			<div class="col-lg-10 offset-lg-1">
				<div class="section-title mb-60 text-center">	

					
					<h2 class="h2-xl red-color">Image Gallery</h2>	

				
					<p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor 
					   primis libero tempus, blandit a cursus varius magna
					</p>
						
				</div>	
			</div>
		</div>


	
		<div class="row">

			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-01.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-01.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

					
							<div class="img-meta white-color">
								<h5 class="h5-xs">Classic California</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.5</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(23)</span>
									</div>		
								</div>										 
							</div> 

						</div>
					</a>
				</div>
			</div>


			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-02.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-02.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

						
							<div class="img-meta white-color">
								<h5 class="h5-xs">Margherita Pizza</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.52</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(58)</span>
									</div>		
								</div>											 
							</div> 

						</div>
					</a>
				</div>
			</div>	


			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-03.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-03.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

						
							<div class="img-meta white-color">
								<h5 class="h5-xs">Grilled Ribs</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.9</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>(69)</span>
									</div>		
								</div>										 
							</div> 

						</div>
					</a>
				</div>
			</div>	


			
			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-04.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-04.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

						
							<div class="img-meta white-color">
								<h5 class="h5-xs">Field Greens Pizza</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.38</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(41)</span>
									</div>		
								</div>											 
							</div> 

						</div>
					</a>
				</div>
			</div>	


		
			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-05.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-05.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

						
							<div class="img-meta white-color">
								<h5 class="h5-xs">Mini Chicken Pizza</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>5</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>(86)</span>
									</div>		
								</div>											 
							</div> 

						</div>
					</a>
				</div>
			</div>	


	
			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-06.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-06.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

						
							<div class="img-meta white-color">
								<h5 class="h5-xs">Eggs Benedict Burger</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.65</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(30)</span>
									</div>		
								</div>											 
							</div> 

						</div>
					</a>
				</div>
			</div>	


		
			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-07.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-07.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

							<div class="img-meta white-color">
								<h5 class="h5-xs">Double Bacon Burger</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.85</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>(71)</span>
									</div>		
								</div>											 
							</div> 

						</div>
					</a>
				</div>
			</div>	


	
			  <div class="col-sm-6 col-lg-3">
				  <div class="gallery-img">
					  <a href="images/gallery/img-08.jpg" class="image-link">
						<div class="hover-overlay"> 
							<img class="img-fluid" src="assets/images/gallery/img-08.jpg" alt="gallery-image" />			
							<div class="item-overlay"></div>

							
							<div class="img-meta white-color">
								<h5 class="h5-xs">Classic California</h5>		
								<div class="txt-block-rating">
									<div class="stars-rating">
										<span>4.64</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(17)</span>
									</div>		
								</div>												 
							</div> 

						</div>
					</a>
				</div>
			</div>


		</div>	


	</div>	   
</section>	





<section id="banner-4" class="bg-fixed wide-100 banner-section division">
	<div class="container">
		 <div class="row">


			 
			<div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
				<div class="banner-4-txt text-center">

					<h4 class="h4-xl">We Guarantee</h4>
					
					<h2>30 Minutes Delivery!</h2>

				
					<p class="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, 
						blandit a cursus varius luctus neque magna
					</p>

					
					<a href="tel:123456789" class="btn btn-lg btn-red tra-red-hover">Call: 789-654-3210</a>

				</div>
			</div>


		 </div>    
	</div>	   	
</section>	

</div>
            </div>
        )
	}

export default Home;

