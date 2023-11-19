import React, { Component } from "react";
import Ashish from "../images/Ashish.jpg";
import Badal from "../images/badal.jpg";
import node from "../images/node-js-1174925.png";
import express from "../images/ExpressJS.png";
import mongodb from "../images/mongodb-226029.png";
import mongoose from "../images/7552965.png";
import heroku from "../images/heroku-1-282458.png";
import "../App.css";
export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-center" id="top">
              Developed By 👇
            </h1>
            <div className="card border-dark">
              <img src={Ashish} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Gautam </h3>
                <p className="card-text mt-3">
                  <a
                    href="https://www.linkedin.com/in/gautam-kumar-sharma-29a9b5214/ "
                    className="btn btn-outline-primary"
                    
                  >
                    LinkedIn <i class="fab fa-linkedin-in"></i>
                  </a>
                  &nbsp;
                  <a
                    href="https://github.com/gautam5722"
                    className="btn btn-outline-primary"
                  >
                    facebook <i class="fab fa-facebook-f"></i>
                  </a>
                  &nbsp;
                  <a
                    href="https://www.instagram.com/boss.gautam/"
                    className="btn btn-outline-dark"
                  >
                    Github <i class="fab fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card border-dark mt-1">
              <img src={Badal} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Gautam</h3>
                <p className="card-text mt-3">
                  <a
                    href="https://www.linkedin.com/in/badal-shukla-555992192"
                    className="btn btn-outline-primary"
                  >
                    LinkedIn <i class="fab fa-linkedin-in"></i>
                  </a>
                  &nbsp;
                  <a
                    href="https://www.facebook.com/badal.shukla.94"
                    className="btn btn-outline-primary"
                  >
                    facebook <i class="fab fa-facebook-f"></i>
                  </a>
                  &nbsp;
                  <a
                    href="https://github.com/badalshukla"
                    className="btn btn-outline-dark"
                  >
                    Github <i class="fab fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h1 className="text-center">Tech Used 👇</h1>
            <div className="card">
              <img
                src={node}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Node.js</div>
            </div>
            <div className="card">
              <img
                src={express}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Express</div>
            </div>
            <div className="card">
              <img
                src={mongodb}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Mongo DB</div>
            </div>
            <div className="card">
              <img
                src={mongoose}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Mongoose</div>
            </div>
            <div className="card">
              <img
                src={heroku}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Heroku</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
