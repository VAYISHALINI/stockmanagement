import React from "react";
import '../components/product.css'
import { Link } from "react-router-dom";
function Product(){
    
    return(<>
     <nav className="navbar">
       
      
       <div className="logo">StockHub</div>
       <form className="search-form">
         <input
         className='searchbox'
           type="text"
           style={{padding:'20px 20px'}}
           placeholder="Search..."
           
         />
         <button type="submit">Search</button>
       </form>
       <ul className="nav-links">
         <Link to='/home' className="ho" style={{textDecoration:'none',color:'whitesmoke'}}><li>Home</li></Link>
         <li>About</li>
         <li>Contact</li>
       </ul>
     </nav>
    <section className="product-section">
        <div className="product-grid">
          <div className="card">
            <div className="card-pill">
              Sale
            </div>
            <img className="card-img" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fxfibkkiiiky07goauq6/sb-nyjah-free-skate-shoe-oKwn7N.jpg" alt="product-image" />
            <div className="flex-row space-between w-full mb-sm">
              <p className="product-brand">Nike SB</p>
              <p className="product-cat hide">Skateboarding</p>
              <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9734;</span>
            <span className="off">&#9734;</span>
            </span>
            </div>
            <h1 className="product-name">Nyjah Free 2</h1>
            <div className="flex-row">
              <p className="price strike">$<span>94.95</span></p>
              <p className="price">$<span>79.95</span></p>
              
            </div>
            <div className="btn-col">
              <a href="#" className="icon-link">
                Purchase
                <svg fill="none" className="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
                  <path d="M5.9645 17.9645l12-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-pill hide">
              Sale
            </div>
            <img className="card-img" src="http://assets.teenvogue.com/photos/55fc95e3dc0279f51d0336e7/master/pass/cropped-sweaters-for-fall-05.jpg" alt="product-image" />
            <div className="flex-row space-between w-full mb-sm">
              <p className="product-brand">Nike SB</p>
              <p className="product-cat hide">Skateboarding</p>
              <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="off">&#9734;</span>
            </span>
            </div>
            <h1 className="product-name">Charge Canvas</h1>
            <div className="flex-row">
              <p className="price strike hide">$<span>94.95</span></p>
              <p className="price">$<span>65</span></p>
            </div>
            <div className="btn-col">
              <a href="#" className="icon-link">
                Purchase
                <svg fill="none" className="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
                  <path d="M5.9645 17.9645l12-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-pill hide">
              Sale
            </div>
            <img className="card-img" src="https://wallpapercave.com/wp/wp7832576.jpg" alt="product-image" />
            <div className="flex-row space-between w-full mb-sm">
              <p className="product-brand">Nike SB</p>
              <p className="product-cat hide">Skateboarding</p>
              <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9734;</span>
            <span className="off">&#9734;</span>
            </span>
            </div>
            <h1 className="product-name">Shane O'Neill</h1>
            <div className="flex-row">
              <p className="price strike hide">$<span>94.95</span></p>
              <p className="price">$<span>80</span></p>
            </div>
            <div className="btn-col">
              <a href="#" className="icon-link">
                Purchase
                <svg fill="none" className="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
                  <path d="M5.9645 17.9645l12-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-pill hide">
              Sale
            </div>
            <img className="card-img" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3db0b166-c4c0-4321-9ef4-800314582af3/sb-blzr-court-skate-shoe-R6bVLk.jpg" alt="product-image" />
            <div className="flex-row space-between w-full mb-sm">
              <p className="product-brand">Nike SB</p>
              <p className="product-cat hide">Skateboarding</p>
              <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="off">&#9733;</span>
            </span>
            </div>
            <h1 className="product-name">BLZR Court</h1>
            <div className="flex-row">
              <p className="price strike hide">$<span>94.95</span></p>
              <p className="price">$<span>65</span></p>
            </div>
            <div className="btn-col">
              <a href="#" className="icon-link">
                Purchase
                <svg fill="none" className="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
                  <path d="M5.9645 17.9645l12-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>);
}

export default Product;