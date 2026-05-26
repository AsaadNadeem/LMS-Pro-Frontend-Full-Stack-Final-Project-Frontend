import { useState } from "react";

import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

import { toast } from "react-toastify";

import { registerUser } from "../../api/user.api";

import { useNavigate, Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData);

      toast.success("Registration successful!");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f172a, #111827, #1e293b)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      className="py-3"
    >
      {/* BACKGROUND EFFECTS */}

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "#2563eb",
          borderRadius: "50%",
          top: "-120px",
          left: "-120px",
          opacity: "0.25",
          filter: "blur(50px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#38bdf8",
          borderRadius: "50%",
          bottom: "-100px",
          right: "-100px",
          opacity: "0.2",
          filter: "blur(40px)",
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Row className="align-items-center gy-5">
          {/* LEFT SIDE */}

          <Col lg={6}>
            <div style={{ color: "white" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  display: "inline-block",
                  padding: "10px 22px",
                  borderRadius: "50px",
                  marginBottom: "30px",
                  backdropFilter: "blur(10px)",
                }}
              >
                🚀 Modern LMS Platform
              </div>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "4rem",
                  lineHeight: "1.2",
                }}
              >
                Create Your
                <span style={{ color: "#38bdf8" }}>
                  {" "}
                  Learning Account
                </span>
              </h1>

              <p
                className="mt-4"
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  maxWidth: "650px",
                }}
              >
                Join our professional learning platform and
                start building industry-level skills through
                interactive online courses and modern learning
                tools.
              </p>

              {/* FEATURES */}

              <div className="mt-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "18px",
                      fontSize: "1.5rem",
                    }}
                  >
                    📚
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Interactive Learning
                    </h5>

                    <p
                      className="mb-0"
                      style={{ color: "#cbd5e1" }}
                    >
                      Learn with structured modern courses.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "18px",
                      fontSize: "1.5rem",
                    }}
                  >
                    🔐
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Secure Authentication
                    </h5>

                    <p
                      className="mb-0"
                      style={{ color: "#cbd5e1" }}
                    >
                      Protected registration and login system.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "18px",
                      fontSize: "1.5rem",
                    }}
                  >
                    ⚡
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      Responsive Experience
                    </h5>

                    <p
                      className="mb-0"
                      style={{ color: "#cbd5e1" }}
                    >
                      Access learning from any device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}

          <Col lg={6}>
            <Card
              className="border-0 shadow-lg mx-auto"
              style={{
                maxWidth: "520px",
                borderRadius: "35px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                color: "white",
              }}
            >
              <Card.Body className="p-5">
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-3">
                    Create Account
                  </h2>

                  <p
                    style={{
                      color: "#cbd5e1",
                    }}
                  >
                    Register to start your learning journey
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {/* NAME */}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Full Name
                    </Form.Label>

                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                        }}
                      >
                        <FaUser />
                      </InputGroup.Text>

                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                          padding: "14px",
                        }}
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* EMAIL */}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Email Address
                    </Form.Label>

                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                        }}
                      >
                        <FaEnvelope />
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                          padding: "14px",
                        }}
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* PASSWORD */}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Password
                    </Form.Label>

                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                        }}
                      >
                        <FaLock />
                      </InputGroup.Text>

                      <Form.Control
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{
                          background:
                            "rgba(255,255,255,0.08)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                          padding: "14px",
                        }}
                      />

                      <Button
                        variant="dark"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        style={{
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {showPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* SUBMIT */}

                  <Button
                    type="submit"
                    className="w-100 fw-bold"
                    style={{
                      background:
                        "linear-gradient(to right, #2563eb, #38bdf8)",
                      border: "none",
                      padding: "14px",
                      borderRadius: "14px",
                      fontSize: "1rem",
                    }}
                  >
                    Create Account
                  </Button>
                </Form>

                {/* FOOTER */}

                <div className="text-center mt-4">
                  <small style={{ color: "#cbd5e1" }}>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{
                        color: "#38bdf8",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      Login here
                    </Link>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;