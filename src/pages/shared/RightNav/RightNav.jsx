import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
             <br />
      <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>

      <div className='mt-3'>
        <h4>Find us On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook />FaceBook </ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram </ListGroup.Item>
     
    </ListGroup>

      </div>
      <Qzone></Qzone>
        </div>
    );
};

export default RightNav;