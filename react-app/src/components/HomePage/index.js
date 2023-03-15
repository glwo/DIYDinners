import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  return (
    <div>
      <div className="HomePageCompleteDiv"></div>
      <div className="homePageButtons">
        <div>
          <OpenModalButton
            buttonText="Log In"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
          />
        </div>
        <div>
          <OpenModalButton
            buttonText="Sign Up"
            onItemClick={closeMenu}
            modalComponent={<SignupFormModal />}
          />
        </div>
      </div>
      <div className="footers">
        <div className="footer">
          DIYDinners is a free service of The App Academy Times. It is a digital
          cookbook and cooking guide alike, available on one platform, that
          helps home cooks of every level discover, save and organize the
          world’s most simple dinner recipes, while also helping them become
          better, more competent cooks. No subscription needed for full access!
        </div>
        <div className="rightside-footer">
          <div>
            <a
              className="link-footer"
              href="https://github.com/glwo"
              rel="noreferrer"
              target="_blank"
            >
              Glen's Github
              | <i className="fa-brands fa-github fa-xl" />
            </a>
          </div>
          <div>
            <a
              className="link-footer"
              href="https://www.linkedin.com/in/glen-wojnar-74449b269/"
              rel="noreferrer"
              target="_blank"
            >
              Glen's LinkedIn
              | <i className="fa-brands fa-linkedin fa-xl" />
            </a>
          </div>
          <div>
            <a
              className="link-footer"
              href="https://github.com/glwo/DIYDinners"
              rel="noreferrer"
              target="_blank"
            >
              Project Repo
              | <i className="fa-brands fa-github fa-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
