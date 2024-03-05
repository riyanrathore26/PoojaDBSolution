import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../component1/style.css';
import Navbar from './Navbar';
import Header from './Header';
import Post from './Post';


function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch data from the backend (replace with your actual backend URL)
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching post data:', error);
      });
  }, []);

  return (
    <>
      <style>
    {`
.white-box {
    width: 100%;
    padding: 100px 200px;
    font-size: 10px;
}

.download-box {
    width: 100%;
    height: 350px;
    display: flex;
    position: relative;
    background-color: white;
    margin-bottom: 50px;
}

.mobile-input-box {
    width: 50%;
    height: 100%;
}

.appstoreimage img {
    width: 150px;
    height: 50px;
    /* margin-left: 10px; */
}

.mobile-input-box h1 {
    margin: 0 10px 40px 0;
}

.mobile-input-box h3 {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 100;
    width: 80%;
}

.mobile-input-box input {
    margin-bottom: 30px;
    width: 80%;
    height: 55px;
    border: 1px #c0c0c0 solid;
}

.mobile-input-box button {
    width: 80px;
    height: 45px;
    position: absolute;
    left: 360px;
    top: 166px;
    background-color: #aa2b57;
    border: none;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 5px;
}

.mobile-input-image {
    width: 50%;
    height: 100%;
}

.mobile-input-image img {
    width: 100%;
    height: 100%;
}
  `}
  </style>
      <Navbar />
      <Header />
      <div className="dropdown-section">
          {products.length > 0 && (
            <Post products={products} />
          )}
          {/* <Dropdown
            title="Salon at Home"
            content="Going to the salon can be quite tedious but we have a very convenient way out for you. Get rid of all hassles related to getting yourself treated in a salon and consider getting your next beautician at the comfort of your home instead of making the trip. We at Yes Madam offer salon services at home that save you time and money whilst delivering outstanding results for you. Our beauticians bring salon services straight to your home, so there won't be any worry about booking haircut slots anymore, as Yes Madam will bring your desired haircut service at home for you. You won't have to go to Google and search 'Salon at home near me or Salon services near me', just 2 words- Yes Madam, and the job will be done. Our team of service professionals will be at your doorstep to do the needful with the entire setup and safety precautions."
            products={products} // Pass products as a prop
          /> */}
          {/* Repeat other Dropdown components with different titles and content */}
        </div>
      <div className="white-box">
        <div className="download-box">
          <div className="mobile-input-box">
            <h1>Download via SMS</h1>
            <h3>Get a link via SMS to install the app. Fill your number down here.</h3>
            <input type="text" /><button>send</button>
            <div className="appstoreimage">
              <img src="https://www.yesmadam.com/static/images/app_img.webp" alt="" />
              <img src="https://www.yesmadam.com/static/images/google_play.webp" alt="" />
            </div>
          </div>
          <div className="mobile-input-image"><img src="./pictures/app_img.webp" alt="" /></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
