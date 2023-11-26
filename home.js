import React from 'react';
import '../components/home.css';
import sne from '../components/images/sne3.jpg'
import jac from '../components/images/jac3.jpg'
import pol from '../components/images/pol1.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import sto from '../components/images/sta2.jpg';
import { Link } from 'react-router-dom';
function Home(){
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
    return(
        <>
       
       <nav className="navbar">
       
      <li className="but">
     <button className="openbtn"  onClick={openNav}>&#9776;</button>
     </li>
      <div className="logo">StockHub</div>
      <form className="search-form">
        <input
        className='searchbox'
          type="text"
          placeholder="Search..."
          style={{padding:'20px 20px'}}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div id="mySidepanel" className="sidepanel">
<a  className="closebtn" onClick={closeNav}>&times;</a>
<Link to='/stock'>Reports</Link>
<a>Feedback</a>
<a>Stocks</a>
 
<a>Help</a>
</div>
    <div className='stock'>
    {/* <img src={sto}/> */}
    <h1 style={{marginTop:'-250px'}}>Managing inventory can be hard. We fixed it – it's easy now.</h1>
<h3>Simple to use, beautifully designed, customizable inventory software system for any business buying and selling goods.</h3>
   <button className='explore'><Link to='/product' style={{textDecoration:'none',color:'whitesmoke'}}>Explore</Link></button>
    </div>
    <div className='salesbox'>
    <h2 style={{marginLeft:'640px'}}>SALES ACTIVITY</h2>
    <br/>
    <div className="sales-activity">
      <div className="sales-card">
        <h3>To Be Packed</h3>
        <p>25 orders</p>
      </div>
      <div className="sales-card">
        <h3>To Be Shipped</h3>
        <p>15 orders</p>
      </div>
      <div className="sales-card">
        <h3>To Be Delivered</h3>
        <p>10 orders</p>
      </div>
      </div>
    </div>

    <div>
    <section className="layer -sunrise">
    <h2 style={{marginLeft:'550px',fontFamily:'sans-serif'}}>Top Selling Products</h2>
  <div className="cardsWithImages__container">
    <ul className="cardsWithImages__list">
      <li className="cardsWithImages__listItem">
        <article className="cardsWithImages__card">
          <div className="cardsWithImages__meta">
            <h3 className="cardsWithImages__cardTitle">Look at how Stylish</h3>
            <div className="cardsWithImages__cardBody">
              <p className="small">
              Elevate your stride with our latest collection of sneakers, 
              blending classic comfort with 
              timeless style. Walk the talk of fashion and functionality!
              Step into a world where every step is an expression of style and strength.
               Our sneakers empower you to conquer every path, one step at a time.
              </p>
              <button>Details</button>
            </div>
          </div>
          <div className="cardsWithImages__cardImageWrapper">
            <img
              className="cardsWithImages__cardImage"
              src={sne}
            />
          </div>
        </article>
      </li>
      <li className="cardsWithImages__listItem">
        <article className="cardsWithImages__card -offset {{ cardModifier }}">
          <div className="cardsWithImages__meta">
            <h3 className="cardsWithImages__cardTitle">
            Conquer the Cold in Style
            </h3>
            <div className="cardsWithImages__cardBody">
              <p className="small">
              Wrap yourself in warmth and style with our latest collection of jackets.
               Conquer the cold while making a bold fashion statement.
               Ready for any adventure, our jackets are designed to keep you warm, dry, 
               and looking sharp. Wherever you go, let your style lead the way.
              </p>
              <button>Details</button>
            </div>
          </div>
          <div className="cardsWithImages__cardImageWrapper">
            <img
              className="cardsWithImages__cardImage lazyload"
              src={jac}
            />
          </div>
        </article>
      </li>
      <li className="cardsWithImages__listItem">
        <article className="cardsWithImages__card {{ cardModifier }}">
          <div className="cardsWithImages__meta">
            <h3 className="cardsWithImages__cardTitle">
            Capture Every Moment in Perfect Detail
            </h3>
            <div className="cardsWithImages__cardBody">
              <p className="small">
              Elevate your photography game with our advanced cameras. 
              From breathtaking landscapes to intimate portraits, capture every moment in perfect detail.
              Our cameras are not just tools; they're your gateway to unleashing your creative vision. 
              Capture the world as you see it and turn every click into a masterpiece.
              </p>
              <button>Details</button>
            </div>
          </div>
          <div className="cardsWithImages__cardImageWrapper">
            <img
              className="cardsWithImages__cardImage lazyload"
              src={pol}
            />
          </div>
        </article>
      </li>
    </ul>
  </div>
</section>


<div className="footer-basic">
  <footer>
    <div className="social">
      <a href="#">
      <InstagramIcon  className="icon ion-social-instagram" />
     
      </a>
      <a href="#">
        < LinkedInIcon  className="icon ion-social-snapchat" />
      </a>
      <a href="#">
        <TwitterIcon className="icon ion-social-twitter" />
      </a>
      <a href="#">
        <FacebookIcon className="icon ion-social-facebook" />
      </a>
    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a >Home</a>
      </li>
      <li className="list-inline-item">
        <a >Services</a>
      </li>
      <li className="list-inline-item">
        <a href="#">About</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Terms</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">StockHub © 2018</p>
  </footer>
</div>

      </div>
        </>
    );
}
export default Home;