import React, {Component} from 'react';

class Product extends React.Component{
render(){
        return(
            <div id="page" class="page">

                <div id="product-page" class="page-hero-section division">
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
                                                            <li class="breadcrumb-item"><a href="menu-2.html">Menu</a></li>
                                                            <li class="breadcrumb-item active" aria-current="page">Smokey House</li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                
                                    <h2 class="h2-xl">Smokey House</h2>

                                </div>
                            </div>	
                        </div>	 
                    </div>	  
                </div>

                <section id="product-1" class="pt-100 single-product division">
				<div class="container">
					<div class="row">


					
						<div class="col-lg-7">
							<div class="product-preview">

								
							 
				 				<div class="tabs-content">

									<div id="tab-1-img" class="tab-content text-center displayed">
										<img class="img-fluid" src="assets/images/menu/burger-06.png" alt="menu-image" />
									</div>
					
									<div id="tab-2-img" class="tab-content text-center">
										<img class="img-fluid" src="assets/images/menu/burger-04.png" alt="menu-image" />
									</div>

									
									<div id="tab-3-img" class="tab-content text-center">
										<img class="img-fluid" src="assets/images/menu/burger-07.png" alt="menu-image" />
									</div>

								</div>	


						
								<div class="tabs-nav">
								 	<div class="row">
										<div class="col-lg-12 text-center">
									 		<ul class="tabs-2 clearfix">

									 			
												<li class="tab-link displayed" data-tab="tab-1-img">
													<img src="assets/images/menu/burger-06.png" alt="menu-image" />
												</li>

									
												<li class="tab-link" data-tab="tab-2-img">
													<img src="assets/images/menu/burger-04.png" alt="menu-image" />
												</li>

												<li class="tab-link" data-tab="tab-3-img">
													<img src="assets/images/menu/burger-07.png" alt="menu-image" />
												</li> 

											</ul>
										</div>
									</div>	
							 	</div>


							</div>
						</div>


						<div class="col-lg-5">
							<div class="product-description">

								<div class="project-title">

									<h2 class="h2-lg">Smokey House</h2>

									<div class="stars-rating">
										<span>4.38</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(3 Customer Reviews)</span>
									</div>		

					
									<div class="project-price">
										<h4 class="h4-xl yellow-color"><span class="old-price">$9.95</span> $8.60</h4>
									</div>

								</div>

				
								<div class="product-txt">

									<p class="p-md grey-color">Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus
									   ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium
									</p>

									<div class="product-info">
										<p>Portion Size: <span>390g</span></p>
										<p>Calories: <span>680Kj</span></p>
										<p>Allergies: <span>Lactose, Gluten, Mustard</span></p>
										<p>Tags: <span>Burgers, Fast Food, Testo</span></p>
									</div>

									<input class="qty" type="number" min="1" max="20" value="1" />


									<div class="add-to-cart-btn bg-yellow ico-20 text-center">
										<a href="cart.html"><span class="flaticon-shopping-bag"></span> Add to Cart</a>
									</div>

		
									<ul class="txt-list">
										<li class="list-item"><p class="p-sm">We accept credit cards or cash to a courier</p></li>
										<li class="list-item"><p class="p-sm">Shipping cost is $2 (Free from $35)</p></li>
										<li class="list-item"><p class="p-sm">Order before noon for same day dispatch</p></li>
									</ul>

								</div>

							</div>
						</div>


					</div>	 
				</div>	 
			</section>




			<section id="product-1-data" class="wide-80 single-product-data division">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="">

								<div class="tabs-nav">
								 	<div class="row">
										<div class="col-lg-12 text-center">
									 		<ul class="tabs-1 clearfix">

												<li class="tab-link current" data-tab="tab-1">
													<h5 class="h5-sm">Description</h5>
												</li>

											
												<li class="tab-link" data-tab="tab-2">
													<h5 class="h5-sm">Reviews (3)</h5>
												</li>

											</ul>
										</div>
									</div>	
							 	</div> 


				 				<div class="tabs-content">


									<div id="tab-1" class="tab-content current">

										<p>Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. 
										   Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae consequat tortor
										</p>

										<ul class="txt-list">

											<li class="list-item">
												<p><span class="txt-500">Quaerat sodales sapien undo euismod purus blandit velna</span> vitae auctor 
												   a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
												</p>
											</li>

											<li class="list-item">
												<p><span class="txt-500">Nemo ipsam egestas volute turpis dolores</span> ut aliquam quaerat sodales
												   sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus 
												   efficitur ipsum primis in cubilia undo pretium a purus pretium ligula
												</p>
											</li>

										</ul>

										<p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna
										   nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien
										</p>

									</div>


									<div id="tab-2" class="tab-content">


										<div class="review-2 b-bottom">

											<div class="review-2-avatar">
												<img src="assets/images/review-author-1.jpg" alt="testimonial-avatar" />
											</div>


											<div class="review-2-txt">

												<div class="stars-rating stars-lg">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star-half-alt"></i>
												</div>	

												<div class="review-info clearfix">
													<h5 class="h5-xs">Sean McMarthy</h5>
													<span class="grey-color">December 4, 2020</span>
												</div>
			
												<p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
											       an aliquet porta	vitae auctor aliqum  mullam blandit tempor sapien gravida congue eros magna
											       nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum	 			   
												</p>

											</div>	

										</div>


										<div class="review-2 b-bottom">

											
											<div class="review-2-avatar">
												<img src="assets/images/review-author-4.jpg" alt="testimonial-avatar" />
											</div>

										
											<div class="review-2-txt">

											
												<div class="stars-rating stars-lg">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star-half-alt"></i>
												</div>	

											
												<div class="review-info clearfix">
													<h5 class="h5-xs">Leslie Serpas</h5>
													<span class="grey-color">November 28, 2020</span>
												</div>
					
												
												<p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
											       aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna
											       nihil impedit tempor lacus 			   
												</p>

											</div>	

										</div>	


									
										<div class="review-2">

											
											<div class="review-2-avatar">
												<img src="assets/images/review-author-3.jpg" alt="testimonial-avatar" />
											</div>

										
											<div class="review-2-txt">

												
												<div class="stars-rating stars-lg">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star-half-alt"></i>
												</div>	

												
												<div class="review-info clearfix">
													<h5 class="h5-xs">Robert Peterson</h5>
													<span class="grey-color">November 11, 2020</span>
												</div>
					
											
												<p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus
											       an aliquet porta	vitae auctor aliqum  mullam blandit tempor sapien gravida congue eros magna
											       nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum feugiat primis in ultrice
									   			   ligula tempus undo auctor ipsum and mauris lectus enim ipsum	 			   
												</p>

											</div>	

										</div>


									</div>
										

				 				</div>	


							</div>
						</div>
					</div>	 
				</div>	   
			</section>	




		
			<section id="menu-6" class="bg-lightgrey wide-70 menu-section division">
				<div class="container">


				
					<div class="row">	
						<div class="col-lg-10 offset-lg-1">
							<div class="section-title mb-60 text-center">	

								
								<h2 class="h2-xl">Related Products</h2>	

									
								<p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor 
								   primis libero tempus, blandit a cursus varius magna
								</p>
									
							</div>	
						</div>
					</div>


					<div class="row">



						<div class="col-sm-6 col-lg-3">
							<div class="menu-6-item bg-white">

								<div class="menu-6-img rel">
									<div class="hover-overlay">

										<img class="img-fluid" src="assets/images/menu/burger-11.jpg" alt="menu-image" />

										<span class="item-code bg-tra-dark">Code: 0850</span>	

										<div class="menu-img-zoom ico-25">
											<a href="images/menu/burger-11.jpg" class="image-link">
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

									<h5 class="h5-sm">Crispy Chicken</h5>


									<p class="grey-color">Chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>


									<div class="menu-6-price bg-coffee">
										<h5 class="h5-xs yellow-color">$8.50</h5>
									</div>

									<div class="add-to-cart bg-yellow ico-10">
										<a href="#"><span class="flaticon-shopping-bag"></span> Add to Cart</a>
									</div>

								</div>

							</div>
						</div>


					
						<div class="col-sm-6 col-lg-3">
							<div class="menu-6-item bg-white">

							
								<div class="menu-6-img rel">
									<div class="hover-overlay">

										<img class="img-fluid" src="assets/images/menu/burger-12.jpg" alt="menu-image" />

										
										<span class="item-code bg-tra-dark">Code: 0858</span>	

										<div class="menu-img-zoom ico-25">
											<a href="images/menu/burger-12.jpg" class="image-link">
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
											<i class="far fa-star"></i>
										</div>		
									</div>

								
									<div class="like-ico ico-25">
										<a href="#"><span class="flaticon-heart"></span></a>
									</div>

									<h5 class="h5-sm">Ultimate Bacon</h5>

									<p class="grey-color">House beef patty, cheddar cheese, bacon, onion, mustard</p>

									<div class="menu-6-price bg-coffee">
										<h5 class="h5-xs yellow-color">$9.99</h5>
									</div>

									<div class="add-to-cart bg-yellow ico-10">
										<a href="#"><span class="flaticon-shopping-bag"></span> Add to Cart</a>
									</div>

								</div>

							</div>
						</div>

						<div class="col-sm-6 col-lg-3">
							<div class="menu-6-item bg-white">

								<div class="menu-6-img rel">
									<div class="hover-overlay">

								
										<img class="img-fluid" src="assets/images/menu/burger-13.jpg" alt="menu-image" />

							
										<span class="item-code bg-tra-dark">Code: 0847</span>	

									
										<div class="menu-img-zoom ico-25">
											<a href="images/menu/burger-13.jpg" class="image-link">
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
											<i class="fas fa-star"></i>
										</div>		
									</div>

									<div class="like-ico ico-25">
										<a href="#"><span class="flaticon-heart"></span></a>
									</div>

									<h5 class="h5-sm">Black Sheep</h5>
	
									<p class="grey-color">American cheese, tomato relish, avocado, lettuce, red onion</p>

									<div class="menu-6-price bg-coffee">
										<h5 class="h5-xs yellow-color">$9.75</h5>
									</div>

									<div class="add-to-cart bg-yellow ico-10">
										<a href="#"><span class="flaticon-shopping-bag"></span> Add to Cart</a>
									</div>

								</div>

							</div>
						</div>


						<div class="col-sm-6 col-lg-3">
							<div class="menu-6-item bg-white">

								<div class="menu-6-img rel">
									<div class="hover-overlay">

										<img class="img-fluid" src="assets/images/menu/burger-14.jpg" alt="menu-image" />

										<span class="item-code bg-tra-dark">Code: 0859</span>	

										<div class="menu-img-zoom ico-25">
											<a href="images/menu/burger-14.jpg" class="image-link">
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

									<h5 class="h5-sm">Double Burger</h5>

									<p class="grey-color">2 beef patties, cheddar cheese, mustard, pickles, tomatoes</p>

									<div class="menu-6-price bg-coffee">
										<h5 class="h5-xs yellow-color">$10.35</h5>
									</div>

									<div class="add-to-cart bg-yellow ico-10">
										<a href="#"><span class="flaticon-shopping-bag"></span> Add to Cart</a>
									</div>

								</div>

							</div>
						</div>


					</div>	  
				</div>	   
			</section>	




			
		</div>

        )
	}
}

export default Product;
