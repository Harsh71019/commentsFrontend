import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../components/base/Navbar";
import RegisterImage from "../images/register.svg";
const Register = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 p-5">
              <img src={RegisterImage} className="w-100 p-5"  alt="register"/>
            </div>
            <div className="col-md-6 col-12">
              <div className="mt-5">
                <Form className="form-max-width px-md-5 px-1">
                  <h3 className="">Register</h3>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="tel" placeholder="Please enter mobile" />
                  </Form.Group>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Date of Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter Date of birth"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 w-100"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary w-100" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
