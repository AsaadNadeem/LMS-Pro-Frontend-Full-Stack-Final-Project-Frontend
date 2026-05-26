import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllCourses } from "../../api/course.api";
import Loader from "../../components/common/Loader";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const response = await getAllCourses();

      const courseData = response?.data?.data || [];

      setCourses(courseData);
    } catch (err) {
      console.error("Fetch Courses Error:", err);

      setError("Failed to fetch courses");

      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading courses..." />;

  if (error)
    return (
      <Container className="py-5">
        <Alert
          variant="danger"
          className="text-center rounded-4"
        >
          {error}
        </Alert>
      </Container>
    );

  return (
    <div
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          background:
            "linear-gradient(to right, #0f172a, #1e293b, #334155)",
          padding: "80px 0 140px",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={8}>
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  display: "inline-block",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  marginBottom: "25px",
                }}
              >
                📚 Professional Learning Marketplace
              </div>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "4rem",
                  lineHeight: "1.2",
                }}
              >
                Explore Premium
                <span style={{ color: "#38bdf8" }}>
                  {" "}
                  Online Courses
                </span>
              </h1>

              <p
                className="mt-4"
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  lineHeight: "1.9",
                }}
              >
                Discover high-quality courses designed to help
                students build modern technical and professional
                skills through interactive learning experiences.
              </p>
            </Col>

            <Col lg={4}>
              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: "30px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                }}
              >
                <Card.Body className="p-5 text-center">
                  <h1
                    className="fw-bold"
                    style={{
                      fontSize: "4rem",
                    }}
                  >
                    {courses.length}
                  </h1>

                  <p
                    style={{
                      color: "#cbd5e1",
                      marginBottom: "0",
                    }}
                  >
                    Courses Available
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* COURSE GRID */}

      <Container style={{ marginTop: "-90px" }}>
        {courses.length === 0 ? (
          <Alert
            variant="info"
            className="text-center rounded-4 shadow-sm"
          >
            No courses available at the moment.
          </Alert>
        ) : (
          <Row className="g-4">
            {courses.map((course) => (
              <Col lg={4} md={6} key={course._id}>
                <Card
                  className="border-0 h-100 shadow-sm"
                  style={{
                    borderRadius: "28px",
                    overflow: "hidden",
                    transition: "0.35s",
                    background: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  {/* IMAGE */}

                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        course.image ||
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                      }
                      style={{
                        height: "240px",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: "18px",
                        left: "18px",
                      }}
                    >
                      <Badge
                        bg="light"
                        text="dark"
                        className="px-3 py-2"
                      >
                        {course.category || "General"}
                      </Badge>
                    </div>
                  </div>

                  {/* BODY */}

                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-3">
                      <small
                        style={{
                          color: "#64748b",
                          fontWeight: "500",
                        }}
                      >
                        👨‍🏫 Instructor
                      </small>

                      <h6 className="fw-bold mt-1 mb-0">
                        {course.instructor?.name ||
                          "Unknown"}
                      </h6>
                    </div>

                    <Card.Title
                      className="fw-bold"
                      style={{
                        fontSize: "1.4rem",
                        lineHeight: "1.5",
                        color: "#0f172a",
                      }}
                    >
                      {course.title}
                    </Card.Title>

                    <Card.Text
                      className="mt-3 flex-grow-1"
                      style={{
                        color: "#64748b",
                        lineHeight: "1.8",
                        fontSize: "0.95rem",
                      }}
                    >
                      {course.description
                        ? course.description.length > 120
                          ? course.description.substring(
                              0,
                              120
                            ) + "..."
                          : course.description
                        : "No description available."}
                    </Card.Text>

                    <div
                      className="mt-4 pt-3"
                      style={{
                        borderTop: "1px solid #e2e8f0",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p
                            className="mb-1"
                            style={{
                              color: "#64748b",
                              fontSize: "0.9rem",
                            }}
                          >
                            Course Fee
                          </p>

                          <h4
                            className="fw-bold mb-0"
                            style={{
                              color: "#16a34a",
                            }}
                          >
                            Rs. {course.price || 0}
                          </h4>
                        </div>

                        <Button
                          as={Link}
                          to={`/courses/${course._id}`}
                          style={{
                            background:
                              "linear-gradient(to right, #2563eb, #38bdf8)",
                            border: "none",
                            borderRadius: "14px",
                            padding: "12px 20px",
                            fontWeight: "600",
                          }}
                        >
                          Details →
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* BOTTOM CTA */}

      <Container className="py-5 mt-5">
        <Card
          className="border-0 shadow-lg"
          style={{
            borderRadius: "35px",
            background:
              "linear-gradient(to right, #0f172a, #1e293b)",
            color: "white",
          }}
        >
          <Card.Body className="p-5 text-center">
            <h2 className="fw-bold mb-4">
              Start Learning New Skills Today
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                maxWidth: "700px",
                margin: "auto",
                lineHeight: "1.9",
              }}
            >
              Browse our growing collection of professional
              courses and improve your knowledge with modern
              online education.
            </p>

            <div className="mt-4">
              <Badge
                bg="light"
                text="dark"
                className="px-4 py-3 fs-6"
              >
                {courses.length} Courses Available
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CourseList;