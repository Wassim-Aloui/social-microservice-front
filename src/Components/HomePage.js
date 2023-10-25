import NavBar from "./NavBar";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      {/* <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div> */}

      <NavBar></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="product-section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="assets/img/products/product-img-1.jpg" alt="" />
                  </a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 85${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="assets/img/products/product-img-2.jpg" alt="" />
                  </a>
                </div>
                <h3>Berry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 70${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="assets/img/products/product-img-3.jpg" alt="" />
                  </a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price">
                  <span>Per Kg</span> 35${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-news pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> News
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-1"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      You will vainly look for fruit on it in autumn.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-2"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      A man's worth has its season, like tomato.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-3"></div>
                </a>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      Good thoughts bear good fresh juicy fruit.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="news.html" className="boxed-btn">
                More News
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
