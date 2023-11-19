import React, { Component } from "react";

export default class Shlokcard extends Component {
  render() {
    return (
      <div
        className="card mt-4 p-2 mb-4 border-danger"
        data-aos="fade-left"
        data-aos-duration={2000}
      >
        <div className="card-header text-center">
          {this.props.t ? "श्लोक" : "आज का श्लोक"}
        </div>
        <div className="card-body mt-4 pt-4">
          <div className="card-text">
            {this.props.loading ? (
              <p className="text-center">
                <i className="fas fa-spinner fa-2x fa-spin"></i>
              </p>
            ) : (
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className="slok">
                    <b>{this.props.data.slok}</b>
                  </p>
                </blockquote>
                <blockquote className="blockquote">
                  <p className="slokmeaning">{this.props.data.tej.ht}</p>
                  <p className="slokmeaning">{this.props.data.gambir.et}</p>
                </blockquote>
                <figcaption className="blockquote-footer mt-4 pt-4">
                  Bhagavad Gita &nbsp;
                  <cite title="Source Title">
                    Chapter &nbsp; {this.props.data.chapter} .{" "}
                    {this.props.data.verse}
                    <hr />
                    <button className="btn btn-outline-success">
                      <i className="fab fa-whatsapp-square fa-2x"></i>
                    </button>
                    &nbsp;
                    <button className="btn btn-outline-primary">
                      <i className="fab fa-facebook-square fa-2x"></i>
                    </button>
                  </cite>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    );
  }
}
