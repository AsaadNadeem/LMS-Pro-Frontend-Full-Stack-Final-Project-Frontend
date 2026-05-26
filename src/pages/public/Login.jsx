import { useState, useContext, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Spinner,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

import { toast } from "react-toastify";

import { loginUser } from "../../api/user.api";

import { AuthContext } from "../../context/AuthContext";

import { useNavigate, Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin/users");
      } else if (user.role === "instructor") {
        navigate("/instructor/manage-courses");
      } else {
        navigate("/student/my-courses");
      }
    }
  }, [user, navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");

      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");

      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");

      return false;
    }

    return true;
  };

  // Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await loginUser(formData);

      const data = response?.data;

      console.log("Login API response:", data);

      if (!data?.data) {
        throw new Error("Invalid server response");
      }

      const userData = data.data.user;

      const accessToken = data.data.accessToken;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }

      setUser(userData);

      toast.success(data.message || "Login successful!");

      if (userData.role === "admin") {
        navigate("/admin/users");
      } else if (userData.role === "instructor") {
        navigate("/instructor/manage-courses");
      } else {
        navigate("/student/my-courses");
      }
    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f172a, #111827, #1e293b)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BACKGROUND CIRCLES */}

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#2563eb",
          borderRadius: "50%",
          top: "-120px",
          left: "-120px",
          opacity: "0.25",
          filter: "blur(40px)",
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
        fluid
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            {/* LEFT SIDE */}

            <Col lg={6}>
              <div style={{ color: "white" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    display: "inline-block",
                    padding: "10px 22px",
                    borderRadius: "50px",
                    marginBottom: "30px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  🔐 Secure LMS Authentication
                </div>

                <h1
                  className="fw-bold"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1.2",
                  }}
                >
                  Welcome Back To
                  <span style={{ color: "#38bdf8" }}>
                    {" "}
                    LMS Pro
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
                  Access your courses, continue your learning
                  journey, and manage your educational experience
                  through our modern learning platform.
                </p>

                <div className="mt-5">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.1)",
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
                        Interactive Courses
                      </h5>

                      <p
                        className="mb-0"
                        style={{ color: "#cbd5e1" }}
                      >
                        Learn modern industry skills.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.1)",
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
                        Fast & Secure
                      </h5>

                      <p
                        className="mb-0"
                        style={{ color: "#cbd5e1" }}
                      >
                        Protected authentication system.
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
                  maxWidth: "500px",
                  borderRadius: "35px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                  color: "white",
                }}
              >
                <Card.Body className="p-5">
                  <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">
                      Login Account
                    </h2>

                    <p
                      style={{
                        color: "#cbd5e1",
                      }}
                    >
                      Sign in to continue learning
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
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
                      disabled={loading}
                      style={{
                        background:
                          "linear-gradient(to right, #2563eb, #38bdf8)",
                        border: "none",
                        padding: "14px",
                        borderRadius: "14px",
                        fontSize: "1rem",
                      }}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Logging in...
                        </>
                      ) : (
                        "Login Now"
                      )}
                    </Button>
                  </Form>

                  {/* FOOTER */}

                  <div className="text-center mt-4">
                    <small style={{ color: "#cbd5e1" }}>
                      Don’t have an account?{" "}
                      <Link
                        to="/register"
                        style={{
                          color: "#38bdf8",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        Register
                      </Link>
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Login;