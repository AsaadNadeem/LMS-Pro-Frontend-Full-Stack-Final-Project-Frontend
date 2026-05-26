import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import { deleteCourse, getAllCourses } from "../../api/course.api";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);

    try {
      const response = await getAllCourses();
      const instructorCourses = response?.data?.data || [];
      setCourses(instructorCourses);
    } catch (error) {
      toast.error("Failed to fetch instructor courses");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(courseId);
      toast.success("Course deleted successfully");

      setCourses((prev) =>
        prev.filter((c) => c._id !== courseId)
      );
    } catch {
      toast.error("Failed to delete course");
    }
  };

  if (loading) return <Loader message="Loading your studio..." />;

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
            <h2 className="fw-bold mb-1">🎬 Instructor Studio</h2>
            <p style={{ opacity: 0.7 }}>
              Manage, edit, and grow your courses
            </p>
          </div>

          <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">
            {courses.length} Courses
          </Badge>
        </div>

        {/* ===== EMPTY STATE ===== */}
        {courses.length === 0 ? (
          <Card
            className="text-center p-5 border-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: "16px",
            }}
          >
            <h5>No courses yet</h5>
            <p style={{ opacity: 0.7 }}>
              Start creating your first course
            </p>

            <Button
              variant="light"
              className="rounded-pill px-4 fw-semibold"
              onClick={() => navigate("/create-course")}
            >
              + Create Course
            </Button>
          </Card>
        ) : (
          <Row className="g-4">

            {courses.map((course) => (
              <Col md={6} lg={4} key={course._id}>

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

                  {/* THUMBNAIL */}
                  <Card.Img
                    src={
                      course.thumbnail ||
                      "https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4765.jpg"
                    }
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderTopLeftRadius: "18px",
                      borderTopRightRadius: "18px",
                    }}
                  />

                  <Card.Body className="d-flex flex-column">

                    {/* CATEGORY */}
                    <Badge bg="light" text="dark" className="mb-2">
                      {course.category || "Course"}
                    </Badge>

                    {/* TITLE */}
                    <h5 className="fw-bold">{course.title}</h5>

                    {/* DESCRIPTION */}
                    <p
                      style={{ opacity: 0.75, fontSize: "0.9rem" }}
                      className="flex-grow-1"
                    >
                      {course.description?.slice(0, 90)}...
                    </p>

                    {/* PRICE */}
                    <div className="fw-bold text-info mb-3">
                      Rs. {course.price || 0}
                    </div>

                    {/* ACTIONS */}
                    <div className="d-flex gap-2 flex-wrap">

                      <Button
                        size="sm"
                        variant="light"
                        className="rounded-pill px-3"
                        onClick={() =>
                          navigate(
                            `/instructor/edit-course/${course._id}`
                          )
                        }
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="outline-light"
                        className="rounded-pill px-3"
                        onClick={() =>
                          navigate(
                            `/lessons/create-lesson/${course._id}`
                          )
                        }
                      >
                        + Lesson
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        className="rounded-pill px-3"
                        onClick={() => handleDelete(course._id)}
                      >
                        Delete
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

export default ManageCourses;