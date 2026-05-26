import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const InstructorDashboard = ({
  user,
}) => {
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
        {/* HERO SECTION */}

        <Card
          className="border-0 overflow-hidden mb-5"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#06b6d4)",
            borderRadius: "30px",
          }}
        >
          <Card.Body className="p-5 text-white">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
              <div>
                <Badge
                  bg="light"
                  text="dark"
                  className="px-3 py-2 rounded-pill mb-3"
                >
                  Instructor Panel
                </Badge>

                <h1 className="fw-bold mb-3">
                  Welcome Back,
                  {" "}
                  {user?.name}
                </h1>

                <p
                  style={{
                    maxWidth:
                      "600px",
                    opacity: "0.92",
                    lineHeight:
                      "1.8",
                  }}
                >
                  Manage your
                  courses, upload
                  learning content,
                  and grow your
                  educational
                  platform from one
                  modern dashboard.
                </p>
              </div>

              {/* ICON */}

              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius:
                    "30px",
                  background:
                    "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  fontSize: "4rem",
                }}
              >
                👨‍🏫
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* STATS */}

        <Row className="g-4 mb-5">
          {/* TOTAL COURSES */}

          <Col md={4}>
            <Card
              className="border-0 stats-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "24px",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      Total Courses
                    </p>

                    <h2 className="fw-bold text-white">
                      12
                    </h2>
                  </div>

                  <div
                    style={{
                      width:
                        "70px",
                      height:
                        "70px",
                      borderRadius:
                        "22px",
                      background:
                        "linear-gradient(to bottom right,#3b82f6,#06b6d4)",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      fontSize:
                        "2rem",
                    }}
                  >
                    📚
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* STUDENTS */}

          <Col md={4}>
            <Card
              className="border-0 stats-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "24px",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      Students
                    </p>

                    <h2 className="fw-bold text-white">
                      340
                    </h2>
                  </div>

                  <div
                    style={{
                      width:
                        "70px",
                      height:
                        "70px",
                      borderRadius:
                        "22px",
                      background:
                        "linear-gradient(to bottom right,#22c55e,#16a34a)",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      fontSize:
                        "2rem",
                    }}
                  >
                    👨‍🎓
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* REVENUE */}

          <Col md={4}>
            <Card
              className="border-0 stats-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "24px",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      Revenue
                    </p>

                    <h2 className="fw-bold text-white">
                      Rs. 25,000
                    </h2>
                  </div>

                  <div
                    style={{
                      width:
                        "70px",
                      height:
                        "70px",
                      borderRadius:
                        "22px",
                      background:
                        "linear-gradient(to bottom right,#f59e0b,#f97316)",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      fontSize:
                        "2rem",
                    }}
                  >
                    💰
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ACTION CARDS */}

        <Row className="g-4">
          {/* CREATE COURSE */}

          <Col lg={4} md={6}>
            <Card
              className="border-0 h-100 action-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "28px",
              }}
            >
              <Card.Body className="p-5 text-center d-flex flex-column">
                <div
                  className="mb-4"
                  style={{
                    fontSize:
                      "4rem",
                  }}
                >
                  ➕
                </div>

                <h3 className="fw-bold text-white mb-3">
                  Create Course
                </h3>

                <p
                  style={{
                    color:
                      "#cbd5e1",
                    lineHeight:
                      "1.8",
                    flexGrow: 1,
                  }}
                >
                  Build and publish
                  engaging learning
                  experiences for
                  your students.
                </p>

                <Button
                  as={Link}
                  to="/create-course"
                  className="rounded-pill fw-semibold py-2"
                  style={{
                    background:
                      "linear-gradient(to right,#2563eb,#06b6d4)",
                    border:
                      "none",
                  }}
                >
                  Create Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* MANAGE COURSES */}

          <Col lg={4} md={6}>
            <Card
              className="border-0 h-100 action-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "28px",
              }}
            >
              <Card.Body className="p-5 text-center d-flex flex-column">
                <div
                  className="mb-4"
                  style={{
                    fontSize:
                      "4rem",
                  }}
                >
                  📚
                </div>

                <h3 className="fw-bold text-white mb-3">
                  Manage Courses
                </h3>

                <p
                  style={{
                    color:
                      "#cbd5e1",
                    lineHeight:
                      "1.8",
                    flexGrow: 1,
                  }}
                >
                  Update, edit, and
                  organize all your
                  existing courses.
                </p>

                <Button
                  as={Link}
                  to="/instructor/manage-courses"
                  className="rounded-pill fw-semibold py-2"
                  style={{
                    background:
                      "linear-gradient(to right,#22c55e,#16a34a)",
                    border:
                      "none",
                  }}
                >
                  Manage Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* UPLOAD LESSONS */}

          <Col lg={4} md={6}>
            <Card
              className="border-0 h-100 action-card"
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                backdropFilter:
                  "blur(14px)",
                borderRadius:
                  "28px",
              }}
            >
              <Card.Body className="p-5 text-center d-flex flex-column">
                <div
                  className="mb-4"
                  style={{
                    fontSize:
                      "4rem",
                  }}
                >
                  🎥
                </div>

                <h3 className="fw-bold text-white mb-3">
                  Upload Lessons
                </h3>

                <p
                  style={{
                    color:
                      "#cbd5e1",
                    lineHeight:
                      "1.8",
                    flexGrow: 1,
                  }}
                >
                  Add videos,
                  documents, and
                  materials to your
                  courses.
                </p>

                <Button
                  as={Link}
                  to="/instructor/manage-courses"
                  className="rounded-pill fw-semibold py-2"
                  style={{
                    background:
                      "linear-gradient(to right,#f59e0b,#f97316)",
                    border:
                      "none",
                  }}
                >
                  Upload Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CUSTOM STYLE */}

      <style>
        {`
        .stats-card{
          transition:0.3s ease;
        }

        .stats-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 50px rgba(0,0,0,0.25);
        }

        .action-card{
          transition:0.3s ease;
        }

        .action-card:hover{
          transform:translateY(-10px);
          box-shadow:0 30px 60px rgba(0,0,0,0.3);
        }
        `}
      </style>
    </div>
  );
};

export default InstructorDashboard;