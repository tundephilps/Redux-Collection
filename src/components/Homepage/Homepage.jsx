import React from "react";
import { a } from "react-router-dom";
//import Card from './Card'
import Font from "./Font";
import "../../Styles/Homepage.scss";
import { BsGithub } from "react-icons/bs";

const Homepage = () => {
  return (
    <div>
      <header className="page-header">
        <input id="menu-toggle-input" type="checkbox" />
        <label className="menu-toggle" for="menu-toggle-input">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="page-tagline">
          <a
            href="https://www.github.com/tundephilps/Redux-Projects"
            target="_blank"
          >
            <div className=" flex items-center">
              Collection of Redux Projects by TundePhilps ---&gt; <BsGithub />
            </div>
          </a>
        </div>

        <nav className="menu">
          <ol>
            <li className="" id="Form">
              <a href="https://redux-form-inky.vercel.app/" target="_blank">
                Redux Form
              </a>
            </li>
            <li className="menu-item" id="CRUD">
              <a href="https://redux-crud-lilac.vercel.app/">Redux CRUD App</a>
            </li>
            <li className="menu-item">
              <a href="#0">Coming Soon</a>
              <ol className="sub-menu">
                <li className="menu-item" id="counter">
                  <a href="https://counter-app-tau-two.vercel.app/">
                    Counter App
                  </a>{" "}
                </li>
                <li className="menu-item" id="Todo">
                  <a href="https://todo-list-green-ten.vercel.app/">
                    Todo List
                  </a>
                </li>
                <li className="menu-item" id="Login">
                  <a href="https://login-system-ruby.vercel.app/">
                    Redux Login System
                  </a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="#0">Coming Soon</a>
              <ol className="sub-menu">
                <li className="menu-item" id="Diary">
                  <a href="https://diary-app-tundephilps.vercel.app/">
                    Diary App
                  </a>
                </li>
                <li className="menu-item" id="Table">
                  <a href="https://table-app-rose.vercel.app/">
                    Redux Table Register
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#0">Coming Soon</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="#0">Coming Soon</a>
            </li>
          </ol>
        </nav>
      </header>

      <section className="page-content">
        <Font />
        <p className="info">
          Click the toggle in the top left corner href see Projects.
        </p>
      </section>
    </div>
  );
};

export default Homepage;
