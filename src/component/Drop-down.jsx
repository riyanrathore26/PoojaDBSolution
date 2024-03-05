import React from "react";
export default function Dropdown(props) {
    const [count, setCount] = useState(0);
    // const { products } = props; // Destructure products from props

    // const toggleDropdown = () => {
    //   // Your toggleDropdown function logic here
    // };
    const catPre = () => {
        setCount(count + 1);
      };
    
      const catNext = () => {
        setCount(count - 1);
      };
    
      const catSlider = () => {
        const category = document.querySelectorAll('.category-product');
        category.forEach((slide) => {
          slide.style.transform = `translateX(${count * 230}px)`;
        });
      };
      
  const toggleDropdown = (event) => {
    event.target.classList.toggle('active');
  };
    return (
        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            {props.title}
            <span><img src="./pictures/download.svg" alt="" /></span>
          </button>
          <div className="dropdown-container">
            <p>{props.content}</p>
            {/* You can use products here */}
          </div>
        </div>
      );
    }