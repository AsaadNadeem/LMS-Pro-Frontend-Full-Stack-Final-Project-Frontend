import { useState } from "react";

import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

import { createInstructor } from "../../api/admin.api";

import { toast } from "react-toastify";

const CreateInstructor = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await createInstructor(
        formData
      );

      toast.success(
        "Instructor created successfully"
      );

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Creation failed"
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
          "linear-gradient(to bottom right, #0f172a, #111827, #1e293b)",
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BACKGROUND EFFECTS */}

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "#2563eb",
          top: "-120px",
          left: "-120px",
          opacity: "0.18",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#38bdf8",
          bottom: "-100px",
          right: "-100px",
          opacity: "0.12",
          filter: "blur(50px)",
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Card
          className="border-0 overflow-hidden"
          style={{
            borderRadius: "32px",
            background:
              "rgba(255,255,255,0.06)",
            backdropFilter:
              "blur(16px)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Row className="g-0">
            {/* LEFT PANEL */}

            <Col
              lg={5}
              className="d-flex flex-column justify-content-center"
              style={{
                background:
                  "linear-gradient(to bottom right,#2563eb,#38bdf8)",
                color: "white",
                padding: "60px 45px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "28px",
                  background:
                    "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  fontSize: "2.5rem",
                  marginBottom: "30px",
                }}
              >
                👨‍🏫
              </div>

              <h1 className="fw-bold mb-4">
                Create New Instructor
              </h1>

              <p
                style={{
                  lineHeight: "1.9",
                  opacity: "0.92",
                }}
              >
                Add new instructors
                to your LMS platform
                and expand your
                educational team with
                secure account access.
              </p>

              <div
                className="mt-5"
                style={{
                  background:
                    "rgba(255,255,255,0.12)",
                  borderRadius:
                    "22px",
                  padding: "22px",
                }}
              >
                <h6 className="fw-bold mb-3">
                  Platform Features
                </h6>

                <div className="d-flex flex-column gap-2">
                  <span>
                    ✔ Secure account
                    creation
                  </span>

                  <span>
                    ✔ Instructor role
                    access
                  </span>

                  <span>
                    ✔ Course management
                    privileges
                  </span>

                  <span>
                    ✔ Dashboard access
                  </span>
                </div>
              </div>
            </Col>

            {/* RIGHT PANEL */}

            <Col lg={7}>
              <div
                style={{
                  padding:
                    "60px 50px",
                  color: "white",
                }}
              >
                <div className="mb-5">
                  <h2 className="fw-bold mb-2">
                    Instructor Details
                  </h2>

                  <p
                    style={{
                      color: "#cbd5e1",
                    }}
                  >
                    Fill the form below
                    to create an
                    instructor account.
                  </p>
                </div>

                <Form
                  onSubmit={
                    handleSubmit
                  }
                >
                  {/* NAME */}

                  <Form.Group className="mb-4">
                    <Form.Label
                      className="fw-semibold mb-2"
                    >
                      Full Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Enter instructor name"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleChange
                      }
                      required
                      style={
                        inputStyle
                      }
                    />
                  </Form.Group>

                  {/* EMAIL */}

                  <Form.Group className="mb-4">
                    <Form.Label
                      className="fw-semibold mb-2"
                    >
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={
                        handleChange
                      }
                      required
                      style={
                        inputStyle
                      }
                    />
                  </Form.Group>

                  {/* PASSWORD */}

                  <Form.Group className="mb-5">
                    <Form.Label
                      className="fw-semibold mb-2"
                    >
                      Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Create secure password"
                      name="password"
                      value={
                        formData.password
                      }
                      onChange={
                        handleChange
                      }
                      required
                      style={
                        inputStyle
                      }
                    />
                  </Form.Group>

                  {/* BUTTON */}

                  <Button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(to right,#2563eb,#38bdf8)",
                      border: "none",
                      borderRadius:
                        "16px",
                      padding:
                        "14px",
                      fontWeight:
                        "700",
                      fontSize:
                        "1rem",
                    }}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />
                        Creating...
                      </>
                    ) : (
                      "Create Instructor"
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

/* INPUT STYLE */

const inputStyle = {
  background:
    "rgba(255,255,255,0.06)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "14px 18px",
  borderRadius: "14px",
};

export default CreateInstructor;