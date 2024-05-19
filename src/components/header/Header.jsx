import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { GrSearch, GrCamera } from "react-icons/gr";
import { CgHeart, CgShoppingCart } from "react-icons/cg";
import { SiTaichilang } from "react-icons/si";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showHamburger, setShowHamburger] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  const handleImageSearch = () => {
    navigate("/image-search");
  };

  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          {/* <SiTaichilang />
          <span className="brand-name">BASH</span> */}
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input
          onKeyDown={(e) => {
            e.key === "Enter" && navigate("/product-listing");
          }}
          placeholder="Search"
        />
        <button>
          <GrSearch size={16} />
        </button>
        <label
          htmlFor="imageUpload"
          className="image-upload-icon"
          onClick={handleImageSearch}
        >
          <GrCamera size={16} />
        </label>
      </div>

      {uploadedImage && (
        <div className="uploaded-image-section">
          <div>
            <img src={uploadedImage} alt="Uploaded Preview" />
            <button onClick={handleRemoveImage} className="image-remove-icon">
              x
            </button>
          </div>
        </div>
      )}

      <div
        className={
          !showHamburger
            ? "nav-link-container-mobile nav-link-container"
            : "nav-link-container"
        }
      >
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to={true ? "/profile" : "/login"}
        >
          {!true ? "Login" : "Profile"}
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="wishlist"
        >
          <CgHeart size={25} className="wishlist" />
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/cart"
        >
          <CgShoppingCart size={25} className="cart" />
        </NavLink>
      </div>
      {showHamburger && (
        <div className="hamburger-icon" onClick={() => setShowHamburger(false)}>
          <RxHamburgerMenu size={20} />
        </div>
      )}
      {!showHamburger && (
        <div
          className="cross-tab-icon cross-tab-icon-mobile"
          onClick={() => setShowHamburger(true)}
        >
          <RxCross2 color={"rgb(106, 106, 65)"} size={25} />
        </div>
      )}
    </nav>
  );
};

export default Header;
