import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentDashboard = ({ user }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container>

        {/* ===== HERO SECTION ===== */}
        <div
          className="text-center mb-5"
          style={{ color: "white" }}
        >
          <h1 className="fw-bold mb-2">
            Welcome back, {user?.name}
          </h1>

          <p style={{ opacity: 0.8 }}>
            Your learning space is ready. Continue where you left off.
          </p>
        </div>

        {/* ===== DASHBOARD CARDS ===== */}
        <Row className="g-4 justify-content-center">

          {/* MY COURSES */}
          <Col md={4}>
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
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <Card.Body className="text-center p-4">

                <div style={{ fontSize: "40px" }}>📚</div>

                <h5 className="fw-bold mt-3">My Learning</h5>

                <p style={{ opacity: 0.8 }}>
                  Access your enrolled courses and continue learning anytime.
                </p>

                <Button
                  as={Link}
                  to="/my-courses"
                  variant="light"
                  className="fw-semibold px-4 rounded-pill mt-2"
                >
                  Open
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* PROFILE */}
          <Col md={4}>
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
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <Card.Body className="text-center p-4">

                <div style={{ fontSize: "40px" }}>👤</div>

                <h5 className="fw-bold mt-3">Profile Center</h5>

                <p style={{ opacity: 0.8 }}>
                  Update your personal details and account settings.
                </p>

                <Button
                  as={Link}
                  to="/update-user-details"
                  variant="light"
                  className="fw-semibold px-4 rounded-pill mt-2"
                >
                  Edit
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* CHANGE PASSWORD */}
          <Col md={4}>
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
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <Card.Body className="text-center p-4">

                <div style={{ fontSize: "40px" }}>🔐</div>

                <h5 className="fw-bold mt-3">Security</h5>

                <p style={{ opacity: 0.8 }}>
                  Keep your account safe by updating your password.
                </p>

                <Button
                  as={Link}
                  to="/change-password"
                  variant="light"
                  className="fw-semibold px-4 rounded-pill mt-2"
                >
                  Update
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* ===== FOOTER NOTE ===== */}
        <div className="text-center mt-5" style={{ color: "white", opacity: 0.6 }}>
          <small>Student Dashboard • LMS Platform</small>
        </div>

      </Container>
    </div>
  );
};

export default StudentDashboard;