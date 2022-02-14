import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../components/base/Navbar";
import LoginImage from "../images/login.svg";
import { login } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/base/Loader";
import ButtonLoader from "../components/base/ButtonLoader";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const { loading, error, userInfo, success } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Dispatch Login
    dispatch(login(email, password));
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6  p-5 col-12">
              <img src={LoginImage} className="w-100 p-5" alt="register" />
            </div>
            <div className="col-md-6 col-12">
              <div className="mt-5">
                <Form
                  className="form-max-width px-md-5 px-1"
                  onSubmit={submitHandler}
                >
                  <h3 className="">Login</h3>
                  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={email}
                      required
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 w-100"
                    controlId="formBasicPassword"
                  >
                    {" "}
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={password}
                      required
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                  </Form.Group>
                  <Button
                    variant="primary w-100"
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    {loading ? (
                      <>
                        <ButtonLoader /> Logging
                      </>
                    ) : (
                      "Submit"
                    )}
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

export default Login;
