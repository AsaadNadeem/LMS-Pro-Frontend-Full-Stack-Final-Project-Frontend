import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ProgressBar,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getMyCourses } from "../../api/enrollment.api";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      setLoading(true);
      const response = await getMyCourses();

      const enrollments = response?.data?.data || [];

      const extractedCourses = enrollments.map((enrollment) => ({
        enrollmentId: enrollment._id,
        progress: enrollment.progress || 0,
        ...enrollment.course,
      }));

      setCourses(extractedCourses);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to fetch enrolled courses"
      );
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Loading your learning space..." />;
  }

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchSearch && course.progress === 100;
    }

    if (filter === "progress") {
      return matchSearch && course.progress < 100;
    }

    return matchSearch;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#111827,#0f172a)",
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <Container>

        {/* ===== HEADER ===== */}
        <div className="d-flex justify-content-between align-items-center mb-4 text-white">
          <div>
            <h2 className="fw-bold mb-1">📚 Your Learning Space</h2>
            <p style={{ opacity: 0.7 }}>
              Continue learning where you left off
            </p>
          </div>

          <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">
            {courses.length} Enrolled
          </Badge>
        </div>

        {/* ===== SEARCH + FILTER BAR ===== */}
        <Card
          className="mb-4 border-0"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            borderRadius: "14px",
          }}
        >
          <Card.Body>
            <Row className="g-3">
              <Col md={7}>
                <Form.Control
                  placeholder="Search your courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "white",
                  }}
                />
              </Col>

              <Col md={3}>
                <Form.Select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "black",
                  }}
                >
                  <option value="all">All Courses</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* ===== EMPTY STATE ===== */}
        {filteredCourses.length === 0 ? (
          <Card
            className="text-center p-5 border-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "16px",
            }}
          >
            <h5>No courses found</h5>
            <p style={{ opacity: 0.7 }}>
              Try adjusting your search or filters
            </p>
          </Card>
        ) : (
          <Row className="g-4">

            {filteredCourses.map((course) => (
              <Col lg={4} md={6} key={course.enrollmentId}>

                <Card
                  className="border-0 h-100"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "18px",
                    color: "white",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-8px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(0px)")
                  }
                >

                  {/* IMAGE */}
                  <Card.Img
                    src={
                      course.image ||
                      "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg"
                    }
                    style={{
                      height: "170px",
                      objectFit: "cover",
                      borderTopLeftRadius: "18px",
                      borderTopRightRadius: "18px",
                    }}
                  />

                  <Card.Body className="d-flex flex-column">

                    {/* TITLE */}
                    <h5 className="fw-bold">{course.title}</h5>

                    {/* INSTRUCTOR */}
                    <small style={{ opacity: 0.7 }}>
                      Instructor:{" "}
                      <strong>
                        {course.instructor?.name || "Unknown"}
                      </strong>
                    </small>

                    {/* DESCRIPTION */}
                    <p
                      style={{ opacity: 0.75, fontSize: "0.9rem" }}
                      className="flex-grow-1 mt-2"
                    >
                      {course.description
                        ? course.description.slice(0, 90) + "..."
                        : "No description available."}
                    </p>

                    {/* PROGRESS */}
                    <div className="mb-2">
                      <div className="d-flex justify-content-between">
                        <small>Progress</small>
                        <small>{course.progress}%</small>
                      </div>

                      <ProgressBar
                        now={course.progress}
                        variant={
                          course.progress === 100
                            ? "success"
                            : "info"
                        }
                      />
                    </div>

                    {/* FOOTER */}
                    <div className="d-flex justify-content-between align-items-center mt-3">

                      <span className="fw-bold text-info">
                        Rs. {course.price || 0}
                      </span>

                      <Button
                        size="sm"
                        variant="light"
                        className="rounded-pill fw-semibold px-3"
                        onClick={() =>
                          navigate(`/lesson/${course._id}`)
                        }
                      >
                        Continue
                      </Button>

                    </div>

                  </Card.Body>
                </Card>

              </Col>
            ))}

          </Row>
        )}

      </Container>
    </div>
  );
};

export default MyCourses;