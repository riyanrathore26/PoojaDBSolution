import React from "react";
export default function Beauty_slider() {
    return(
        <div className="category-section">
        <div className="slidebtn">
          {/* <span className="sliderbtn first" onClick={catpre}>&#10094;</span>
        <span className="sliderbtn second" onClick={catnext}>&#10095;</span> */}
        </div>
        <h2>beauty</h2>
        <div className="cat-products">
          <div className="category-product">
            <div className="categoryimage">
              <img src="./pictures/body-polishing-subcategory-1-12-22.jpg" alt="" />
            </div>
            <h4>video game</h4>
          </div>
          {/* Repeat other category-product divs */}
        </div>
      </div>
    );
}