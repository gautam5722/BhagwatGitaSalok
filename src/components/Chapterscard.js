import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Chapterscard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function shloklist(versecount, chapter) {
    console.log(versecount, chapter);
    var shloklist = [];
    for (var i = 1; i <= versecount; i++) {
      shloklist.push(
        <Link to={`/shlok/${chapter}/${i}` }>
        {/* <Link to={`/shlok/${chapter}/${i}` } key={i}> */}
        
          <ListGroup.Item key={i} variant="warning" className="text-center">
          {/* <ListGroup.Item  variant="warning" className="text-center"> */}
            Shlok-{i}
          </ListGroup.Item>
        </Link>
      );
    }
    //console.log(shloklist);
    return shloklist;
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title className="text-center">
            All Shlok From Chapter {props.data.chapter_number}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {shloklist(props.data.verses_count, props.data.chapter_number)}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card border-warning">
        <div className="card-body">
          <h5 className="card-title">
            {props.data.chapter_number}. {props.data.name}
          </h5>
          <p className="card-text">
            {props.data.meaning.en} / {props.data.meaning.hi}
          </p>
          <p className="card-text">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hindi Summary</Accordion.Header>
                <Accordion.Body>
                  <b>{props.data.summary.hi}</b>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>English Summary</Accordion.Header>
                <Accordion.Body>
                  <b>{props.data.summary.en}</b>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
          </p>
          <p className="card-text text-center">
            <button className="btn btn-outline-danger " onClick={handleShow}>
              Read Sholks
            </button>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Chapterscard;
