import React from "react";
import { Link } from "react-router-dom";
import Group_59 from "../../assets/Group_59.svg";
import "./style.css";

function Footer(props) {
  return (
    <div>
      <div className="row pb-5 pt-4 my-2 px-5 border-bottom">
        <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 d-flex align-items-center py-3">
          <img className="" src={Group_59} alt="Group_59"></img>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 py-3">
          <ul className="footer-list">
            <li className="py-1">
              <p className="font-weight-bold">Usefull Links</p>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/home">
                Home
              </Link>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/about">
                About
              </Link>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/admissions">
                Admissions
              </Link>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/Home">
                Latest Activities
              </Link>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/Home">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 py-3">
          <ul className="footer-list">
            <li className="py-1">
              <p className="font-weight-bold">Contact</p>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/home">
                info@gadschool.com
              </Link>
            </li>
            <li className="py-1">
              <Link className="footer-link" to="/about">
                (604) 595-0888
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 py-3">
          <ul className="footer-list">
            <li>
              <p className="font-weight-bold">Newsletter</p>
            </li>
            <li>
              <div className="footer-newsletter border px-2 py-1">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <input
                      className="footer-input"
                      type="email"
                      placeholder="Email Address"
                    ></input>
                  </div>
                  <div>
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pb-5 mb-3 pt-2">
        © Copyright 2021. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;