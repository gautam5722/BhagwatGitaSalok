import React, { Component } from "react";
import Chapterscard from "./Chapterscard";

export default class Moresholk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
    this.getallchapters = this.getallchapters.bind(this);
  }
  componentDidMount() {
    this.getallchapters();
  }
  getallchapters() {
    fetch("https://bhagavadgitaapi.in/chapters/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            loading: false,
            data: result,
          });
        },
        (error) => {
          this.setState({
            loading: false,
          });
        }
      )
      .catch((err) => {
        console.log(err);
        this.getallchapters();
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h3 className="display-4">Chapters / अध्याय </h3>
          <hr />
          {this.state.loading ? (
            <div className="text-center">
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div>
              {this.state.data.map((item, index) => (
                <Chapterscard key={item.chapter_number} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
