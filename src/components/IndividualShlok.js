import React, { Component } from "react";
import Shlokcard from "./Shlokcard";
import photo from "../images/5571946.svg";
// import { Link } from "react-router-dom";

export default class IndividualShlok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shlokchapters: props.match.params.chapter,
      shlokverse: props.match.params.verse,
      shlok: [],
      loading: true,
    };
    this.getshlok = this.getshlok.bind(this);
    this.nextshlok = this.nextshlok.bind(this);
    this.previousshlok = this.previousshlok.bind(this);
  }
  componentDidMount() {
    this.getshlok();
  }
  nextshlok() {
    this.setState({ loading: true });
    var chapternum = this.state.shlokchapters;
    const a = [
      47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
    ];
    console.log(chapternum, this.state.shlokverse);
    if (
      this.state.shlokverse < a[chapternum - 1] &&
      chapternum > 0 &&
      chapternum <= 18
    ) {
      this.setState({
        shlokverse: parseInt(this.state.shlokverse) + 1,
      });
      // this.getshlok();
    } else {
      this.setState({
        shlokchapters: parseInt(chapternum) + 1,
        shlokverse: 1,
      });
      // this.getshlok();
    }
    this.getshlok();
  }
  previousshlok() {
    this.setState({ loading: true });
    var chapternum = this.state.shlokchapters;
    const a = [
      47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
    ];
    console.log(chapternum, this.state.shlokverse);
    if (this.state.shlokverse > a[chapternum - 1]) {
      this.setState({
        shlokverse: parseInt(this.state.shlokverse) - 1,
      });
      this.getshlok();
    } else {
      this.setState({
        shlokchapters: parseInt(chapternum) - 1,
        shlokverse: a[chapternum - 2],
      });
      this.getshlok();
    }
  }
  getshlok() {
    this.setState({ loading: true });
    const chapter = Math.floor(Math.random() * 18) + 1; // Generate a random chapter number (1-18)
    const verse = Math.floor(Math.random() * 47) + 1; // Generate a random verse number (1-47)
  
    fetch(
      `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/${this.state.shlokchapters}/${this.state.shlokverse}`
      // `https://bhagavadgitaapi.in/chapters${this.state.shlokchapters}/${this.state.shlokverse}`
    )
      .then((response) => {
        if (!response.ok) {
          this.setState({ loading: false });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          shlok: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.getshlok();
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h3 className="h3 text-center">
            अध्यायः{this.state.shlokchapters} श्लोक:{this.state.shlokverse}
          </h3>
          <h3 className="h3 text-center">
            Chapter:{this.state.shlokchapters} Verse:{this.state.shlokverse}
          </h3>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-danger" onClick={this.previousshlok}>
                <i className="far fa-hand-point-left"></i>
              </button>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-danger" onClick={this.nextshlok}>
                <i className="far fa-hand-point-right"></i>
              </button>
            </div>
          </div>
          <Shlokcard
            data={this.state.shlok}
            loading={this.state.loading}
            t={true}
          />
        </div>
        <div className="col-md-3">
          <img src={photo} alt="bhagvad-gita" />
        </div>
      </div>
    );
  }
}
