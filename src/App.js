import React, {Component} from "react";
import CarListing from "./components/CarListing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentYear: null,
      currentMake: null
    };
  }
  render() {
    const {carsForSale, vehicleData, allYears} = this.props.state;

    console.log(this.state.currentMake);
    console.log(this.state.currentYear);
    console.log(carsForSale);

    let yearOptions = allYears.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      );
    });

    let makeOptions = vehicleData.map((item, i) => {
      return (
        <option key={i} value={item.value}>{item.title}</option>
      );
    });

    let filteredCars = carsForSale.filter((item) => {
      if (this.state.currentYear) {
        return item.year === this.state.currentYear;
      } else if (this.state.currentMake) {
        return item.make.toUpperCase() === this.state.currentMake;
      } else {
        return item.id > 0;
      }
    });

    let carListings = filteredCars.map((item, i) => {
      return <CarListing car={item} />;
    });

    return (
      <div >
        <div className="switcher-wrapper">
          <div className="demo_changer">
            <div className="demo-icon customBgColor">
              <i className="fa fa-cog fa-spin fa-2x"></i>
            </div>
            <div className="form_holder">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="predefined_styles">
                    <div className="skin-theme-switcher">
                      <h4>Color</h4>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="red" className="styleswitch" style={{
                        backgroundColor: "#de302f"
                      }}></a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="orange" className="styleswitch" style={{
                        backgroundColor: "#f76d2b"
                      }}></a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="blue" className="styleswitch" style={{
                        backgroundColor: "#228dcb"
                      }}></a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="pink" className="styleswitch" style={{
                        backgroundColor: "#FF2761"
                      }}></a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="green" className="styleswitch" style={{
                        backgroundColor: "#2dcc70"
                      }}></a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-switchcolor="purple" className="styleswitch" style={{
                        backgroundColor: "#6054c2"
                      }}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className="default-header">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-md-2">
                  <div className="logo">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/index.html"><img src="./logo.png" alt=""/></a>
                  </div>
                </div>
                <div className="col-sm-9 col-md-10">
                  <div className="header_info">
                    <div className="header_widgets">
                      <div className="circle_icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                      <p className="uppercase_text">For Support Mail us :
                      </p>
                      <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=info@example.com" target="_blank">info@example.com</a>
                    </div>
                    <div className="header_widgets">
                      <div className="circle_icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <p className="uppercase_text">Service Helpline Call Us:
                      </p>
                      <a href="tel:61-1234-5678-09">+61-1234-5678-9</a>
                    </div>
                    <div className="social-follow">
                      <ul>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                            <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="login_btn">
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#loginform" className="btn btn-xs uppercase" data-toggle="modal" data-dismiss="modal">Login / Register</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav id="navigation_bar" className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button id="menu_slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="header_wrap">
                <div className="user_login">
                  <ul>
                    <li className="dropdown">
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        Jhon Anderson
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/profile-settings.html">Profile Settings</a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/my-vehicles.html">My Vehicles</a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/post-vehicle.html">Post a Vehicle</a>
                        </li>
                        <li>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Sign Out</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="header_search">
                  <div id="search_toggle">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                  <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="get" id="header-search-form">
                    <input type="text" placeholder="Search..." className="form-control"/>
                    <button type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/index.html">Home Page 1</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/index-2.html">Home Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/about-us.html">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inventory</a>
                    <ul className="dropdown-menu">
                      <li className="active">
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html">Grid Style</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-classic.html">Classic Style</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-detail.html">Detail Page Style 1</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-detail-2.html">Detail Page Style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dealers</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/dealers-list.html">List View</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/dealers-profile.html">Detail Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/services.html">Services</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/compare.html">Compare Vehicles</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/404.html">404 Error</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/coming-soon.html">Coming Soon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/blog-detail.html">Blog Detail</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </header>

        <section className="listing-page">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-push-3">
                <div className="result-sorting-wrapper">
                  <div className="sorting-count">
                    <p>1 - 12
                      <span>of 50 Results for your search.</span>
                    </p>
                  </div>
                  <div className="result-sorting-by">
                    <p>Sort by:</p>
                    <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="post">
                      <div className="form-group select sorting-select">
                        <select className="form-control ">
                          <option>Price (low to high)</option>
                          <option>Price (high to low)</option>
                          <option>Newest Items</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  {carListings}
                </div>
                <div className="pagination">
                  <ul>
                    <li className="current">1</li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">2</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">3</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">4</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">5</a>
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="col-md-3 col-md-pull-9">
                <div className="sidebar_widget">
                  <div className="widget_heading">
                    <h5>
                      <i className="fa fa-filter" aria-hidden="true"></i>
                      Find Your Dream Car
                    </h5>
                  </div>
                  <div className="sidebar_filter">
                    <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="get">
                      <div className="form-group select">
                        <select className="form-control" onChange={(e) => {
                          this.setState({
                            currentYear: e.target.value
                          });
                        }}>
                          <option>Select Year</option>
                          {yearOptions}
                        </select>
                      </div>
                      <div className="form-group select">
                        <select className="form-control">
                          <option>Select Location</option>
                          <option>Audi</option>
                          <option>BMW</option>
                          <option>Nissan</option>
                          <option>Toyota</option>
                          <option>Volvo</option>
                          <option>Mazda</option>
                          <option>Mercedes-Benz</option>
                          <option>Lotus</option>
                        </select>
                      </div>
                      <div className="form-group select">
                        <select className="form-control" onChange={(e) => {
                          this.setState({
                            currentMake: e.target.value
                          });
                        }}>
                          <option>Select Brand</option>
                          {makeOptions}
                        </select>
                      </div>
                      <div className="form-group select">
                        <select className="form-control">
                          <option>Select Model</option>
                          <option>Series 1</option>
                          <option>Series 2</option>
                          <option>Series 3</option>
                          <option>Series 4</option>
                          <option>Series 6</option>
                        </select>
                      </div>
                      <div className="form-group select">
                        <select className="form-control">
                          <option>Year of Model
                          </option>
                          <option>2016</option>
                          <option>2015</option>
                          <option>2014</option>
                          <option>2013</option>
                          <option>2012</option>
                          <option>2011</option>
                          <option>2010</option>
                          <option>2009</option>
                          <option>2008</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Price Range ($)
                        </label>
                        <div className="slider slider-horizontal" id="">
                          <div className="slider-track">
                            <div className="slider-track-low" style={{
                              left: "0px",
                              width: "15.9664%"
                            }}></div>
                            <div className="slider-selection" style={{
                              left: "15.9664%",
                              width: "67.2269%"
                            }}></div>
                            <div className="slider-track-high" style={{
                              right: "0px",
                              width: "16.8067%"
                            }}></div>
                          </div>
                          <div className="tooltip tooltip-main top" role="presentation" style={{
                            left: "49.5798%",
                            marginLeft: "-40px"
                          }}>
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">1000 : 5000</div>
                          </div>
                          <div className="tooltip tooltip-min top" role="presentation" style={{
                            left: "15.9664%",
                            marginLeft: "-21.5px"
                          }}>
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">1000</div>
                          </div>
                          <div className="tooltip tooltip-max top" role="presentation" style={{
                            left: "83.1933%",
                            marginLeft: "-21.5px"
                          }}>
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">5000</div>
                          </div>
                          <div className="slider-handle min-slider-handle round" role="slider" aria-valuemin="50" aria-valuemax="6000" aria-valuenow="1000" tabindex="0" style={{
                            left: "15.9664%"
                          }}></div>
                          <div className="slider-handle max-slider-handle round" role="slider" aria-valuemin="50" aria-valuemax="6000" aria-valuenow="5000" tabindex="0" style={{
                            left: "83.1933%"
                          }}></div>
                        </div>
                        <input id="price_range" type="text" className="span2" value="1000,5000" data-slider-min="50" data-slider-max="6000" data-slider-step="5" data-slider-value="[1000,5000]" data-value="1000,5000" style={{
                          display: "none"
                        }}/>
                      </div>
                      <div className="form-group select">
                        <select className="form-control">
                          <option>Type of Car
                          </option>
                          <option>New Car</option>
                          <option>Used Car</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-block">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          Search Car</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar_widget sell_car_quote">
                  <div className="white-text div_zindex text-center">
                    <h3>Sell Your Car</h3>
                    <p>Request a quote and sell your car now!</p>
                    <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn">Request a Quote
                      <span className="angle_arrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                  <div className="dark-overlay"></div>
                </div>
                <div className="sidebar_widget">
                  <div className="widget_heading">
                    <h5>
                      <i className="fa fa-car" aria-hidden="true"></i>
                      Recently Listed Cars</h5>
                  </div>
                  <div className="recent_addedcars">
                    <ul>
                      <li className="gray-bg">
                        <div className="recent_post_img">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./post_200x200_1.jpg" alt=""/></a>
                        </div>
                        <div className="recent_post_title">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Ford Shelby GT350</a>
                          <p className="widget_price">$92,000</p>
                        </div>
                      </li>
                      <li className="gray-bg">
                        <div className="recent_post_img">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./post_200x200_2.jpg" alt=""/></a>
                        </div>
                        <div className="recent_post_title">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">BMW 535i</a>
                          <p className="widget_price">$92,000</p>
                        </div>
                      </li>
                      <li className="gray-bg">
                        <div className="recent_post_img">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./post_200x200_3.jpg" alt=""/></a>
                        </div>
                        <div className="recent_post_title">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Mazda CX-5 SX, V6, ABS, Sunroof
                          </a>
                          <p className="widget_price">$92,000</p>
                        </div>
                      </li>
                      <li className="gray-bg">
                        <div className="recent_post_img">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./post_200x200_4.jpg" alt=""/></a>
                        </div>
                        <div className="recent_post_title">
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Ford Shelby GT350
                          </a>
                          <p className="widget_price">$92,000</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="brand-section gray-bg">
          <div className="container">
            <div className="brand-hadding">
              <h5>Popular Brands</h5>
            </div>
            <div className="brand-logo-list">
              <div id="popular_brands" className="owl-carousel owl-theme" style={{
                opacity: "1",
                display: "block"
              }}>
                <div className="owl-wrapper-outer">
                  <div className="owl-wrapper" style={{
                    width: "2040px",
                    left: "0px",
                    display: "block",
                    transition: "all 800ms ease",
                    transform: "translate3d(-204px, 0px, 0px)"
                  }}>
                    <div className="owl-item" style={{
                      width: "204px"
                    }}>
                      <div>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./brand-logo-1.png" className="img-responsive" alt=""/></a>
                      </div>
                    </div>
                    <div className="owl-item" style={{
                      width: "204px"
                    }}>
                      <div>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <img src="./brand-logo-2.png" className="img-responsive" alt=""/></a>
                      </div>
                    </div>
                    <div className="owl-item" style={{
                      width: "204px"
                    }}>
                      <div>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./brand-logo-3.png" className="img-responsive" alt=""/></a>
                      </div>
                    </div>
                    <div className="owl-item" style={{
                      width: "204px"
                    }}>
                      <div>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <img src="./brand-logo-4.png" className="img-responsive" alt=""/></a>
                      </div>
                    </div>
                    <div className="owl-item" style={{
                      width: "204px"
                    }}>
                      <div>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#"><img src="./brand-logo-5.png" className="img-responsive" alt=""/></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="owl-controls clickable" style={{
                  display: "block"
                }}>
                  <div className="owl-pagination">
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                    <div className="owl-page active">
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <h6>Top Categores</h6>
                  <ul>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Crossovers</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Hybrids</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Hybrid Cars</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Hybrid SUVs</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Concept Vehicles</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h6>About Us</h6>
                  <ul>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Privacy</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Hybrid Cars</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Cookies</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Trademarks</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Terms of use</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h6>Useful Links</h6>
                  <ul>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Our Partners</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Careers</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Sitemap</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Investors</a>
                    </li>
                    <li>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Request a Quote</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h6>Subscribe Newsletter</h6>
                  <div className="newsletter-form">
                    <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                      <div className="form-group">
                        <input type="email" className="form-control newsletter-input" required="" placeholder="Enter Email Address"/>
                      </div>
                      <button type="submit" className="btn btn-block">Subscribe
                        <span className="angle_arrow">
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                    </form>
                    <p className="subscribed-text">*We send great deals and latest auto news to our subscribed users very week.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-push-6 text-right">
                  <div className="footer_widget">
                    <p>Download Our APP:</p>
                    <ul>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-android" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-apple" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_widget">
                    <p>Connect with Us:</p>
                    <ul>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                  <p className="copy-right">Copyright © 2017 CarForYou. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div id="back-top" className="back-top" style={{
          display: "none"
        }}>
          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#top">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        </div>

        <div className="modal fade" id="loginform">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h3 className="modal-title">Login</h3>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="login_wrap">
                    <div className="col-md-6 col-sm-6">
                      <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="get">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username or Email address*"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password*"/>
                        </div>
                        <div className="form-group checkbox">
                          <input type="checkbox" id="remember"/>
                          <label for="remember">Remember Me</label>
                        </div>
                        <div className="form-group">
                          <input type="submit" value="Login" className="btn btn-block"/>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h6 className="gray_text">Login the Quick Way</h6>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block facebook-btn">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        Login with Facebook</a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block twitter-btn">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        Login with Twitter</a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block googleplus-btn">
                        <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                        Login with Google+</a>
                    </div>
                    <div className="mid_divider"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer text-center">
                <p>Don't have an account?
                  <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#signupform" data-toggle="modal" data-dismiss="modal">Signup Here</a>
                </p>
                <p>
                  <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#forgotpassword" data-toggle="modal" data-dismiss="modal">Forgot Password ?</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="signupform">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h3 className="modal-title">Sign Up</h3>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="signup_wrap">
                    <div className="col-md-6 col-sm-6">
                      <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="get">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group checkbox">
                          <input type="checkbox" id="terms_agree"/>
                          <label for="terms_agree">I Agree with
                            <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="form-group">
                          <input type="submit" value="Sign Up" className="btn btn-block"/>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <h6 className="gray_text">Login the Quick Way</h6>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block facebook-btn">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        Login with Facebook</a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block twitter-btn">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        Login with Twitter</a>
                      <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" className="btn btn-block googleplus-btn">
                        <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                        Login with Google+</a>
                    </div>
                    <div className="mid_divider"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer text-center">
                <p>Already got an account?
                  <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#loginform" data-toggle="modal" data-dismiss="modal">Login Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="forgotpassword">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h3 className="modal-title">Password Recovery</h3>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="forgotpassword_wrap">
                    <div className="col-md-12">
                      <form action="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#" method="get">
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Your Email address*"/>
                        </div>
                        <div className="form-group">
                          <input type="submit" value="Reset My Password" className="btn btn-block"/>
                        </div>
                      </form>
                      <div className="text-center">
                        <p className="gray_text">For security reasons we don't store your password. Your password will be reset and a new one will be send.</p>
                        <p>
                          <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#loginform" data-toggle="modal" data-dismiss="modal">
                            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                            Back to Login</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
