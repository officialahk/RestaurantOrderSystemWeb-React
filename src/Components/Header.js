import React, {Component, useContext} from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Route, Link, BrowserRouter } from 'react-router-dom';

const Header = () => {

    // const {itemCount} = useContext(CartContext);

    return ( 
            <div>

				<div id="loader-wrapper">
					<div id="loader">
						<div class="cssload-spinner">
							<div class="cssload-ball cssload-ball-1"></div>
							<div class="cssload-ball cssload-ball-2"></div>
							<div class="cssload-ball cssload-ball-3"></div>
							<div class="cssload-ball cssload-ball-4"></div>
						</div>
					</div>
				</div>

				<header id="header-1" class="header navik-header header-shadow center-menu-1 header-transparent">
			<div class="container">


			
				<div class="navik-header-container">


			
				    <div class="callusbtn"><a href="tel:123456789"><i class="fas fa-phone"></i></a></div>

					
			
	                <div class="logo" data-mobile-logo="assets/images/logo-01.png" data-sticky-logo="assets/images/logo-01.png">
	                	<Link to="/"><img src="assets/images/logo-01.png" alt="header-logo"/></Link>
					</div>

					
				
					<div class="burger-menu">
						<div class="line-menu line-half first-line"></div>
						<div class="line-menu"></div>
						<div class="line-menu line-half last-line"></div>
					</div>


					
	                <nav class="navik-menu menu-caret navik-yellow">
	                	<ul class="top-list">

	                
	                		<li><a href="#">About</a>
	                			<ul>
	                            	<li><a href="about.html">About Testo</a></li>
	                            	<li><a href="team.html">Meet The Team</a></li>
									<li><a href="gallery.html">Images Gallery</a></li>
									<li><a href="gift-cards.html">Gift Cards</a></li>
									<li><a href="faqs.html">F.A.Q.s</a></li>
									<li><a href="terms.html">Terms & Privacy</a></li>
	                            </ul>
	                		</li>

	                	
	                    	<li><a href="#">Our Menu</a>
	                        	<ul>
	                            	<li><a href="menu-1.html">Menu v.1 - Tabs Cards</a></li>
									<li><a href="menu-2.html">Menu v.2 - Cards</a></li>
									<li><a href="menu-3.html">Menu v.3 - Sections</a></li>
	                            </ul>
	                        </li>

	                  
	                        <li class="mega-menu"><a href="#">Megamenu</a>
								<ul>
									<li>

										<div class="mega-menu-container">
											<div class="row">

												
												<div class="col-md-6 col-lg-4">

													<div class="mega-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-05.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Aliquam and lobortis...</a></h4>
																<div class="mega-menu-desc">
																	Donec nec faucibus lobortis viverra blandit sem justo
																</div>
															</div>
														</div>
													</div>

													<div class="mega-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-01.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Donec neca faucibus...</a></h4>
																<div class="mega-menu-desc">
																	Aliquam ultrices ullamcoroe ultrices gravida dictum
																</div>
															</div>
														</div>
													</div>

													<div class="mega-menu-box last-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-07.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Lobortis sem mauris...</a></h4>
																<div class="mega-menu-desc">
																	Integer aliquet magna neca tellus orci quis semper
																</div>
															</div>
														</div>
													</div>

												</div>

												
												<div class="col-md-6 col-lg-4">

													<div class="mega-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-08.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Fusce semper aliquet...</a></h4>
																<div class="mega-menu-desc">
																	Laoreet tellus a consectetur bibendum dolor posuere
																</div>
															</div>
														</div>
													</div>

													<div class="mega-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-09.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Aliquam libero ipsum...</a></h4>
																<div class="mega-menu-desc">
																	Sollicitudin ut gravida libero commodo sit malesuada
																</div>
															</div>
														</div>
													</div>

													<div class="mega-menu-box last-menu-box">
														<div class="mega-menu-media">
															<div class="mega-menu-media-img">
																<div class="mega-menu-thumbnail">
																	<a href="blog-listing.html">
																		<img src="assets/images/img-10.jpg" alt="thumbnail"/>
																	</a>
																</div>
															</div>
															<div class="mega-menu-media-info">
																<h4 class="mega-menu-heading"><a href="blog-listing.html">Posuere himenaeos...</a></h4>
																<div class="mega-menu-desc">
																	Porta gravida hendrerit vitae blandit in phasellus ipsum
																</div>
															</div>
														</div>
													</div>

												</div>

											
												<div class="col-lg-4">

													<div class="mega-menu-box last-menu-box">
														<div class="mega-menu-thumbnail">
															<a href="blog-listing.html">
																<img src="assets/images/img-26.jpg" alt="thumbnail"/>
															</a>
														</div>
														<h4 class="mega-menu-heading"><a href="blog-listing.html">Etiam semper mauris...</a></h4>
														<div class="mega-menu-desc">
															Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero 
															tempus, blandit a cursus varius magna
														</div>
													</div>

												</div>

											</div>
										</div>

									</li>
								</ul>
							</li>	

						</ul>
						<ul>

							
	                		<li><a href="#">Shop</a>
	                			<ul>
	                            	<li><Link to="/Product">Single Product</Link></li>
									<li><Link to="/Cart">Shopping Cart</Link></li>
	                            </ul>
	                		</li>

							
							<li><a href="#">Blog</a>
								<ul>
	                            	<li><a href="blog-listing.html">Blog Listing</a></li>
									<li><a href="single-post.html">Single Post</a></li>
	                            </ul>
							</li>

	                       
							<li><a href="#">Contacts</a>
								<ul>
		                        	<li><a href="booking.html">Book A Table</a></li>
		                        	<li><a href="locations.html">Our Locations</a></li>
									<li><a href="contacts.html">Contact Us</a></li>
								</ul>
							</li>

						
							<li class="basket-ico ico-30">
					        	<Link to="/Cart">
					        		<span class="ico-holder"><span class="flaticon-shopping-bag"></span> <em class="roundpoint">2</em></span>
								</Link>
					        </li>

	                    </ul>
	                </nav>	


				</div>	


			</div>
		</header>
			</div>
        );
    }

export default Header;