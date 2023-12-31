import NavBar from './NavBar';
import Footer from './Footer';


export default function HomePage() {

    return (
        <div>
                
            <div class="loader">
                <div class="loader-inner">
                    <div class="circle"></div>
                </div>
            </div>

       
            <NavBar></NavBar>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="product-section ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="section-title">
                                <h3><span class="orange-text">Our</span> Products</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p class="product-price"><span>Per Kg</span> 85$ </p>
                                <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                                </div>
                                <h3>Berry</h3>
                                <p class="product-price"><span>Per Kg</span> 70$ </p>
                                <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p class="product-price"><span>Per Kg</span> 35$ </p>
                                <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

            <div class="latest-news pt-150 pb-150">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="section-title">
                                <h3><span class="orange-text">Our</span> News</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-latest-news">
                                <a href="single-news.html"><div class="latest-news-bg news-bg-1"></div></a>
                                <div class="news-text-box">
                                    <h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
                                    <p class="blog-meta">
                                        <span class="author"><i class="fas fa-user"></i> Admin</span>
                                        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-latest-news">
                                <a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
                                <div class="news-text-box">
                                    <h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
                                    <p class="blog-meta">
                                        <span class="author"><i class="fas fa-user"></i> Admin</span>
                                        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div class="single-latest-news">
                                <a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
                                <div class="news-text-box">
                                    <h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
                                    <p class="blog-meta">
                                        <span class="author"><i class="fas fa-user"></i> Admin</span>
                                        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <a href="news.html" class="boxed-btn">More News</a>
                        </div>
                    </div>
                </div>
            </div>

           
            <Footer></Footer>
        </div>
    )
}