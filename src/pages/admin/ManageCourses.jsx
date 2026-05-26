import { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
  Alert,
  Badge,
} from "react-bootstrap";

import {
  getAllCourses,
  deleteCourse,
} from "../../api/course.api";

import { toast } from "react-toastify";

const ManageCourses = () => {
  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedCourse,
    setSelectedCourse] =
    useState(null);

  // FETCH COURSES

  const fetchCourses = async () => {
    try {
      const res =
        await getAllCourses();

      const courseData =
        res.data?.courses ||
        res.data?.data ||
        res.data ||
        [];

      setCourses(
        Array.isArray(courseData)
          ? courseData
          : []
      );
    } catch (error) {
      toast.error(
        "Failed to fetch courses"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // OPEN DELETE MODAL

  const handleDeleteClick = (
    course
  ) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  // CONFIRM DELETE

  const confirmDelete = async () => {
    try {
      await deleteCourse(
        selectedCourse._id
      );

      toast.success(
        "Course deleted successfully"
      );

      setCourses((prev) =>
        prev.filter(
          (c) =>
            c._id !==
            selectedCourse._id
        )
      );
    } catch (error) {
      toast.error("Delete failed");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#0f172a,#111827,#1e293b)",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* HEADER */}

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
          <div>
            <h1
              className="fw-bold text-white mb-2"
            >
              Manage Courses
            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Monitor and manage all
              LMS platform courses.
            </p>
          </div>

          <Badge
            bg="primary"
            className="px-4 py-3 fs-6 rounded-pill"
          >
            {courses.length} Courses
          </Badge>
        </div>

        {/* LOADING */}

        {loading ? (
          <div className="text-center py-5">
            <Spinner
              animation="border"
              variant="light"
            />
          </div>
        ) : !Array.isArray(courses) ||
          courses.length === 0 ? (
          <Alert
            variant="light"
            className="text-center border-0 shadow-sm"
          >
            No courses found.
            Create one to get
            started.
          </Alert>
        ) : (
          <Row className="g-4">
            {courses.map(
              (course, index) => (
                <Col
                  lg={4}
                  md={6}
                  key={course._id}
                >
                  <Card
                    className="border-0 h-100 course-card"
                    style={{
                      background:
                        "rgba(255,255,255,0.06)",
                      backdropFilter:
                        "blur(16px)",
                      borderRadius:
                        "24px",
                      overflow:
                        "hidden",
                    }}
                  >
                    {/* IMAGE */}

                    <div
                      style={{
                        height: "200px",
                        overflow:
                          "hidden",
                      }}
                    >
                      <Card.Img
                        src={
                          course.image ||
                          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        }
                        style={{
                          height:
                            "100%",
                          objectFit:
                            "cover",
                        }}
                      />
                    </div>

                    <Card.Body className="p-4 d-flex flex-column">
                      {/* TOP */}

                      <div className="mb-3 d-flex justify-content-between align-items-start">
                        <Badge
                          bg="info"
                          className="px-3 py-2 rounded-pill"
                        >
                          Course #{index + 1}
                        </Badge>

                        <span
                          className="fw-bold"
                          style={{
                            color:
                              "#4ade80",
                          }}
                        >
                          Rs{" "}
                          {course.price ||
                            0}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h4
                        className="fw-bold text-white mb-3"
                      >
                        {course.title}
                      </h4>

                      {/* DESCRIPTION */}

                      <p
                        style={{
                          color:
                            "#cbd5e1",
                          lineHeight:
                            "1.7",
                          flexGrow: 1,
                        }}
                      >
                        {course.description
                          ? course.description.length >
                            120
                            ? course.description.substring(
                                0,
                                120
                              ) +
                              "..."
                            : course.description
                          : "No description available."}
                      </p>

                      {/* INSTRUCTOR */}

                      <div
                        className="mt-3 mb-4"
                        style={{
                          color:
                            "#94a3b8",
                        }}
                      >
                        👨‍🏫 Instructor:
                        <strong className="ms-2 text-white">
                          {course
                            ?.instructor
                            ?.name ||
                            "N/A"}
                        </strong>
                      </div>

                      {/* ACTION */}

                      <Button
                        variant="danger"
                        className="rounded-pill fw-semibold py-2"
                        onClick={() =>
                          handleDeleteClick(
                            course
                          )
                        }
                      >
                        Delete Course
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        )}

        {/* DELETE MODAL */}

        <Modal
          show={showModal}
          onHide={() =>
            setShowModal(false)
          }
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Delete Course
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Are you sure you want
            to permanently delete{" "}
            <strong>
              {
                selectedCourse?.title
              }
            </strong>
            ?
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                setShowModal(false)
              }
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              onClick={confirmDelete}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* CUSTOM STYLE */}

      <style>
        {`
        .course-card{
          transition:0.3s ease;
        }

        .course-card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 45px rgba(0,0,0,0.25);
        }
        `}
      </style>
    </div>
  );
};

export default ManageCourses;