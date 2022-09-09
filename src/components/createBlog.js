import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import './style.css'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {collection, addDoc} from 'firebase/firestore/lite';
import {db} from '../database/configDB'

const tags = ["Tech", "Entertainment", "Community", "Sports", "Education"];

function CreateBlog() {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle ] = useState("");
    const [category, setCategory ] = useState("");
    const [content, setContent ] = useState("");
    function UploadBlog() 
    {
      toggleShowA();
      handleClose();
      const DB = collection(db , 'blogs');
      addDoc(DB , 
          { 
              Title : title ,
              Tag : category, 
              Post :  content,
          });
        console.log("done");
    }
  return (
    <>
      <Button variant="primary" onClick={(handleShow)}>Create Blog</Button>
      <ToastContainer  className="p-3 tost" position='top-center'>
            <Toast bg="dark" show={showA} onClose={toggleShowA}>
            <Toast.Header>
                <strong className="me-auto">Blog Status</strong>
            </Toast.Header>
            <Toast.Body className='toast-text'>Blog is Uploded!! &#128526;</Toast.Body>
            </Toast>
        </ToastContainer>

      <Modal show={show} onHide={handleClose}>
        <Form action='#' onSubmit={UploadBlog}>
          <Modal.Header closeButton>
            <Modal.Title>Create Your Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body show='true' id='modelBody'>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Titile" onChange={e => setTitle(e.target.value) } required/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select placeholder='Select Category'onChange={e => setCategory(e.target.value) } required>
                <option value="" disabled selected>Select Category</option>
                {tags.map(tag => <option value={tag}>{tag}</option>)}
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e => setContent(e.target.value) } required/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit' variant="primary">ADD</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateBlog;