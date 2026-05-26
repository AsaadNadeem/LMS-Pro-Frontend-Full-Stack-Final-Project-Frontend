import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Alert,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { getCourseById } from "../../api/course.api";
import { enrollCourse } from "../../api/enrollment.api";
import Loader from "../../components/common/Loader";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      setLoading(true);

      const response = await getCourseById(id);

      const courseData = response?.data?.data || null;

      if (!courseData) {
        setError("Course not found");
        return;
      }

      setCourse(courseData);
    } catch (err) {
      console.error("Fetch Course Error:", err);
      setError("Failed to load course");
      toast.error("Course not found");
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!course?._id) return;

    try {
      setEnrolling(true);

      await enrollCourse(course._id);

      toast.success("Successfully enrolled!");
    } catch (err) {
      console.error("Enroll Error:", err);

      toast.error(
        "Enrollment failed. You are not authorized or already enrolled."
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <Loader message="Loading course..." />;

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
      {/* HERO */}

      <div
        style={{
          background:
            "linear-gradient(to right, #0f172a, #1e293b, #334155)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            {/* LEFT SIDE */}

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
                Professional Online Course
              </div>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "1.2",
                }}
              >
                {course?.title || "Untitled Course"}
              </h1>

              <p
                className="mt-4"
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  maxWidth: "800px",
                }}
              >
                {course?.description ||
                  "No description available."}
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Badge
                  bg="light"
                  text="dark"
                  className="px-3 py-2 fs-6"
                >
                  👨‍🏫 Instructor:{" "}
                  {course?.instructor?.name || "Unknown"}
                </Badge>

                <Badge
                  bg="secondary"
                  className="px-3 py-2 fs-6"
                >
                  📚 {course?.category || "General"}
                </Badge>
              </div>
            </Col>

            {/* RIGHT SIDE */}

            <Col lg={4}>
              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right, #38bdf8, #2563eb)",
                    color: "white",
                    padding: "45px 30px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      letterSpacing: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    COURSE PRICE
                  </p>

                  <h1
                    className="fw-bold"
                    style={{
                      fontSize: "3.5rem",
                    }}
                  >
                    Rs. {course?.price || "Free"}
                  </h1>

                  <p className="mt-3 mb-4">
                    Lifetime access to all course materials
                  </p>

                  <Button
                    size="lg"
                    onClick={handleEnroll}
                    disabled={enrolling}
                    style={{
                      background: "white",
                      color: "#2563eb",
                      border: "none",
                      borderRadius: "14px",
                      padding: "14px 30px",
                      fontWeight: "600",
                      width: "100%",
                    }}
                  >
                    {enrolling
                      ? "Enrolling..."
                      : "Enroll Now"}
                  </Button>
                </div>

                <Card.Body className="p-4">
                  <div className="mb-4">
                    <h6 className="fw-bold">
                      ✔ Full Course Access
                    </h6>

                    <p className="text-muted mb-0">
                      Access all course lessons and resources.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">
                      ✔ Learn Anytime
                    </h6>

                    <p className="text-muted mb-0">
                      Study from desktop, tablet, or mobile.
                    </p>
                  </div>

                  <div>
                    <h6 className="fw-bold">
                      ✔ Professional Content
                    </h6>

                    <p className="text-muted mb-0">
                      Practical learning with structured material.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* COURSE DETAILS SECTION */}

      <Container className="py-5">
        <Row className="g-4">
          {/* DESCRIPTION */}

          <Col lg={8}>
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: "30px",
              }}
            >
              <Card.Body className="p-5">
                <h3 className="fw-bold mb-4">
                  Course Overview
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "2",
                    fontSize: "1.05rem",
                  }}
                >
                  {course?.description ||
                    "No detailed description available."}
                </p>

                <hr className="my-5" />

                <Row className="g-4">
                  <Col md={6}>
                    <div
                      style={{
                        background: "#f1f5f9",
                        padding: "25px",
                        borderRadius: "20px",
                      }}
                    >
                      <h5 className="fw-bold mb-3">
                        📘 Course Category
                      </h5>

                      <p className="text-muted mb-0">
                        {course?.category || "General"}
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div
                      style={{
                        background: "#f1f5f9",
                        padding: "25px",
                        borderRadius: "20px",
                      }}
                    >
                      <h5 className="fw-bold mb-3">
                        👨‍🏫 Instructor
                      </h5>

                      <p className="text-muted mb-0">
                        {course?.instructor?.name ||
                          "Unknown"}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* SIDE PANEL */}

          <Col lg={4}>
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: "30px",
              }}
            >
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">
                  What You'll Get
                </h4>

                {[
                  "Structured learning experience",
                  "Access to premium course content",
                  "Responsive learning platform",
                  "Modern MERN-based LMS system",
                  "Secure student dashboard",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mb-4"
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        background: "#2563eb",
                        borderRadius: "50%",
                        marginTop: "8px",
                        marginRight: "12px",
                        flexShrink: 0,
                      }}
                    />

                    <p
                      className="mb-0"
                      style={{
                        color: "#475569",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;