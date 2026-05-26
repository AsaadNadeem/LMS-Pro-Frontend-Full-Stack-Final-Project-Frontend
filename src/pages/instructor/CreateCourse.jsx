import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { createCourse } from "../../api/course.api";
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaLayerGroup,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCourse(formData);

      toast.success("Course created successfully!");

      navigate("/manage-courses");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Creation failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(120deg,#0f172a 0%,#111827 45%,#1e293b 100%)",
        padding: "40px 0",
      }}
    >
      <Container>

        {/* HEADER */}
        <div className="text-center mb-5">

          <Badge
            bg="light"
            text="dark"
            className="px-3 py-2 rounded-pill mb-3"
          >
            Instructor Workspace
          </Badge>

          <h1
            className="fw-bold text-white"
            style={{ letterSpacing: "1px" }}
          >
            Create A New Course
          </h1>

          <p
            className="text-light opacity-75 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Design your next learning experience and publish
            professional content for students around the world.
          </p>

        </div>

        <Row className="g-4 align-items-stretch">

          {/* LEFT SIDE */}
          <Col lg={7}>

            <Card
              className="border-0 shadow-lg h-100"
              style={{
                borderRadius: "24px",
                background: "#ffffff",
              }}
            >
              <Card.Body className="p-4 p-lg-5">

                <div className="d-flex align-items-center mb-4">

                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg,#2563eb,#7c3aed)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "24px",
                    }}
                  >
                    <FaBookOpen />
                  </div>

                  <div className="ms-3">
                    <h3 className="fw-bold mb-1">
                      Course Information
                    </h3>

                    <p className="text-muted mb-0">
                      Enter course details below
                    </p>
                  </div>

                </div>

                <Form onSubmit={handleSubmit}>

                  {/* TITLE */}
                  <Form.Group className="mb-4">

                    <Form.Label className="fw-semibold">
                      Course Title
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="e.g Advanced React Development"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "14px",
                        borderRadius: "14px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    />

                  </Form.Group>

                  {/* DESCRIPTION */}
                  <Form.Group className="mb-4">

                    <Form.Label className="fw-semibold">
                      Description
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Write course overview..."
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "14px",
                        borderRadius: "14px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        resize: "none",
                      }}
                    />

                  </Form.Group>

                  <Row>

                    {/* CATEGORY */}
                    <Col md={6}>

                      <Form.Group className="mb-4">

                        <Form.Label className="fw-semibold">
                          Category
                        </Form.Label>

                        <div className="position-relative">

                          <FaLayerGroup
                            style={{
                              position: "absolute",
                              top: "16px",
                              left: "14px",
                              color: "#64748b",
                            }}
                          />

                          <Form.Control
                            type="text"
                            placeholder="Web Development"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            style={{
                              padding: "14px 14px 14px 42px",
                              borderRadius: "14px",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                            }}
                          />

                        </div>

                      </Form.Group>

                    </Col>

                    {/* PRICE */}
                    <Col md={6}>

                      <Form.Group className="mb-4">

                        <Form.Label className="fw-semibold">
                          Course Price
                        </Form.Label>

                        <div className="position-relative">

                          <FaMoneyBillWave
                            style={{
                              position: "absolute",
                              top: "16px",
                              left: "14px",
                              color: "#64748b",
                            }}
                          />

                          <Form.Control
                            type="number"
                            placeholder="2500"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            style={{
                              padding: "14px 14px 14px 42px",
                              borderRadius: "14px",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                            }}
                          />

                        </div>

                      </Form.Group>

                    </Col>

                  </Row>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    className="w-100 border-0 fw-semibold mt-2"
                    style={{
                      padding: "14px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg,#2563eb,#7c3aed)",
                      fontSize: "15px",
                    }}
                  >
                    Publish Course
                    <FaArrowRight className="ms-2" />
                  </Button>

                </Form>

              </Card.Body>
            </Card>

          </Col>

          {/* RIGHT SIDE */}
          <Col lg={5}>

            <Card
              className="border-0 shadow-lg h-100 overflow-hidden"
              style={{
                borderRadius: "24px",
                background: "#111827",
                color: "#fff",
              }}
            >

              {/* TOP */}
              <div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed,#9333ea)",
                  position: "relative",
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    bottom: "-35px",
                    left: "30px",
                    width: "75px",
                    height: "75px",
                    borderRadius: "20px",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#111",
                    fontSize: "28px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                >
                  📘
                </div>

              </div>

              <Card.Body style={{ paddingTop: "55px" }}>

                <div className="mb-3">

                  <Badge
                    bg="light"
                    text="dark"
                    className="rounded-pill px-3 py-2"
                  >
                    {formData.category || "Category"}
                  </Badge>

                </div>

                <h3 className="fw-bold mb-3">
                  {formData.title || "Your Course Title"}
                </h3>

                <p
                  className="text-light opacity-75"
                  style={{
                    lineHeight: "1.8",
                    minHeight: "120px",
                  }}
                >
                  {formData.description ||
                    "Your course description preview will appear here while typing."}
                </p>

                <div
                  className="d-flex justify-content-between align-items-center mt-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "16px",
                    borderRadius: "16px",
                  }}
                >

                  <div>
                    <small className="opacity-75">
                      Estimated Price
                    </small>

                    <h4 className="fw-bold mb-0 mt-1">
                      Rs. {formData.price || "0"}
                    </h4>
                  </div>

                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg,#2563eb,#7c3aed)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    🚀
                  </div>

                </div>

                {/* FEATURES */}
                <div className="mt-5">

                  <h6 className="fw-bold mb-3">
                    Course Highlights
                  </h6>

                  <div className="d-flex flex-column gap-3">

                    <div className="d-flex align-items-center">
                      <span className="me-3">✔</span>
                      Professional Learning Experience
                    </div>

                    <div className="d-flex align-items-center">
                      <span className="me-3">✔</span>
                      Instructor Managed Content
                    </div>

                    <div className="d-flex align-items-center">
                      <span className="me-3">✔</span>
                      Mobile Friendly Access
                    </div>

                  </div>

                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default CreateCourse;