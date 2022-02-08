import React from "react"
import "./Reviews.css"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "react-bootstrap/Modal"
import CommentBox from "./CommentBox"

function Reviews() {
  const [lgShow, setLgShow] = useState(false)

  return (
    <>
      <h2 onClick={() => setLgShow(true)}>Reviews</h2>

      <Modal
        show={lgShow}
        onHide={() => setLgShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="Rev-header" closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="Rev-title"
          >
            <h2>Want to share your experience?</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Rev-body">
          <CommentBox/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Reviews
