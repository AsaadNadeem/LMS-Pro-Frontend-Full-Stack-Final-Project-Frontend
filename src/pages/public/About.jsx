import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const About = () => {
  return (
    <div
      style={{
        background: "#edf2f7",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          background:
            "linear-gradient(to right, #0f172a, #1e293b, #334155)",
          padding: "90px 0",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={7}>
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  display: "inline-block",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  marginBottom: "25px",
                }}
              >
                Modern MERN Learning Platform
              </div>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "4rem",
                  lineHeight: "1.2",
                }}
              >
                Transforming Online
                <span style={{ color: "#38bdf8" }}>
                  {" "}
                  Learning Experience
                </span>
              </h1>

              <p
                className="mt-4"
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                  maxWidth: "650px",
                }}
              >
                A powerful and secure Learning Management System
                developed using modern MERN technologies to provide
                seamless interaction between students, instructors,
                and administrators.
              </p>
            </Col>

            <Col lg={5}>
              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: "30px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                }}
              >
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">
                    Platform Highlights
                  </h3>

                  <div className="mb-4">
                    <h5>📚 Smart Course Management</h5>
                    <p className="text-light mb-0">
                      Organize and manage learning resources
                      efficiently.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5>🔐 Secure Authentication</h5>
                    <p className="text-light mb-0">
                      Role-based protected access using JWT.
                    </p>
                  </div>

                  <div>
                    <h5>⚡ Responsive Experience</h5>
                    <p className="text-light mb-0">
                      Optimized for desktop, tablet, and mobile.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* USER ROLES */}

      <Container className="py-5">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.8rem",
              color: "#0f172a",
            }}
          >
            Built For Every User
          </h2>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Our LMS provides a specialized experience for students,
            instructors, and administrators.
          </p>
        </div>

        <Row className="g-4">
          {[
            {
              icon: "🎓",
              title: "Students",
              text:
                "Students can enroll in courses, track progress, and learn efficiently through a clean and organized dashboard.",
            },
            {
              icon: "👨‍🏫",
              title: "Instructors",
              text:
                "Instructors can manage lessons, upload learning material, and create engaging educational content.",
            },
            {
              icon: "🛠",
              title: "Administrators",
              text:
                "Admins monitor platform activity, manage users, and maintain complete system control securely.",
            },
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{
                  borderRadius: "28px",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#dbeafe",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "25px",
                  }}
                >
                  {item.icon}
                </div>

                <h4 className="fw-bold mb-3">
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.8",
                  }}
                >
                  {item.text}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* TECHNOLOGY STACK */}

      <Container className="pb-5">
        <Card
          className="border-0 shadow-lg"
          style={{
            borderRadius: "35px",
            overflow: "hidden",
          }}
        >
          <Row className="g-0">
            <Col lg={4}>
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, #0f172a, #1e293b)",
                  height: "100%",
                  color: "white",
                  padding: "50px 35px",
                }}
              >
                <h2 className="fw-bold mb-4">
                  Technology Stack
                </h2>

                <p style={{ color: "#cbd5e1" }}>
                  Built with modern technologies to ensure
                  scalability, security, and high performance.
                </p>
              </div>
            </Col>

            <Col lg={8}>
              <div className="p-5">
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    Frontend Technologies
                  </h5>

                  <Badge bg="primary" className="me-2 p-2">
                    React
                  </Badge>

                  <Badge bg="primary" className="me-2 p-2">
                    React Router
                  </Badge>

                  <Badge bg="primary" className="me-2 p-2">
                    Axios
                  </Badge>

                  <Badge bg="primary" className="p-2">
                    React Bootstrap
                  </Badge>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    Backend Technologies
                  </h5>

                  <Badge bg="dark" className="me-2 p-2">
                    Node.js
                  </Badge>

                  <Badge bg="dark" className="p-2">
                    Express.js
                  </Badge>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    Database
                  </h5>

                  <Badge bg="success" className="me-2 p-2">
                    MongoDB
                  </Badge>

                  <Badge bg="success" className="p-2">
                    Mongoose
                  </Badge>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold mb-3">
                    Security Features
                  </h5>

                  <Badge
                    bg="warning"
                    text="dark"
                    className="me-2 p-2"
                  >
                    JWT Authentication
                  </Badge>

                  <Badge
                    bg="warning"
                    text="dark"
                    className="me-2 p-2"
                  >
                    Bcrypt Hashing
                  </Badge>

                  <Badge
                    bg="warning"
                    text="dark"
                    className="p-2"
                  >
                    Role-Based Access
                  </Badge>
                </div>

                <div>
                  <h5 className="fw-bold mb-3">
                    Additional Features
                  </h5>

                  <Badge
                    bg="secondary"
                    className="me-2 p-2"
                  >
                    REST APIs
                  </Badge>

                  <Badge
                    bg="secondary"
                    className="me-2 p-2"
                  >
                    Responsive UI
                  </Badge>

                  <Badge bg="secondary" className="p-2">
                    Protected Routes
                  </Badge>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* MISSION */}

      <Container className="pb-5">
        <Row className="align-items-center gy-4">
          <Col lg={6}>
            <div>
              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "3rem",
                  color: "#0f172a",
                }}
              >
                Our Mission
              </h2>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.9",
                }}
              >
                Our mission is to simplify online education by
                providing a secure, scalable, and easy-to-use
                learning environment for all users.
              </p>

              <ul
                style={{
                  color: "#475569",
                  lineHeight: "2",
                }}
              >
                <li>Interactive dashboards for all roles</li>
                <li>Modern and secure authentication</li>
                <li>Easy course management system</li>
                <li>Responsive across all devices</li>
                <li>Professional MERN architecture</li>
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <Card
              className="border-0 shadow-lg"
              style={{
                borderRadius: "30px",
                background:
                  "linear-gradient(to right, #38bdf8, #2563eb)",
                color: "white",
              }}
            >
              <Card.Body className="p-5">
                <h3 className="fw-bold mb-4">
                  Why This Platform?
                </h3>

                <p style={{ lineHeight: "1.9" }}>
                  This LMS is designed to provide a professional
                  online learning experience with strong focus on
                  usability, performance, and scalability.
                </p>

                <div className="mt-4">
                  <h1 className="fw-bold">100+</h1>
                  <p>Courses & Learning Resources</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* SUBMISSION */}

      <Container className="pb-5">
        <Card
          className="border-0 shadow-sm"
          style={{
            borderRadius: "25px",
            background: "#ffffff",
          }}
        >
          <Card.Body className="text-center p-5">
            <h4 className="fw-bold mb-3">
              Project Submission Details
            </h4>

            <p
              className="mb-2"
              style={{
                color: "#0f172a",
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              Asaad Nadeem
            </p>

            <p
              style={{
                color: "#64748b",
                maxWidth: "700px",
                margin: "auto",
              }}
            >
              I confirm that this project represents my own work
              and follows academic integrity guidelines.
            </p>

            <div
              className="mt-4"
              style={{
                background: "#f1f5f9",
                display: "inline-block",
                padding: "12px 25px",
                borderRadius: "50px",
                fontWeight: "600",
              }}
            >
              Date: 27-05-2026
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default About;