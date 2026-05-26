import { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "#eef2f7" }}>
      {/* HERO SECTION */}

      <Container fluid className="px-0">
        <div
          style={{
            background:
              "linear-gradient(to right, #0f172a, #1e293b, #334155)",
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container>
            <Row className="align-items-center gy-5">
              {/* LEFT CONTENT */}

              <Col lg={6}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "14px 20px",
                    borderRadius: "50px",
                    display: "inline-block",
                    marginBottom: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  🚀 Smart Learning Platform
                </div>

                <h1
                  className="fw-bold"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1.2",
                  }}
                >
                  Upgrade Your
                  <span style={{ color: "#38bdf8" }}> Skills </span>
                  With Modern Learning
                </h1>

                <p
                  className="mt-4"
                  style={{
                    color: "#cbd5e1",
                    fontSize: "1.1rem",
                    maxWidth: "550px",
                  }}
                >
                  {!user
                    ? "Learn industry-level skills through interactive courses, expert guidance, and a modern LMS experience built using MERN Stack."
                    : `Welcome back, ${user.name}. Continue your learning journey and explore new courses.`}
                </p>

                <div className="d-flex gap-3 flex-wrap mt-4">
                  {!user ? (
                    <>
                      <Button
                        as={Link}
                        to="/register"
                        size="lg"
                        style={{
                          backgroundColor: "#38bdf8",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Join Now
                      </Button>

                      <Button
                        as={Link}
                        to="/login"
                        variant="outline-light"
                        size="lg"
                        style={{
                          borderRadius: "12px",
                          padding: "12px 30px",
                        }}
                      >
                        Login
                      </Button>
                    </>
                  ) : (
                    <Button
                      as={Link}
                      to="/courses"
                      size="lg"
                      style={{
                        backgroundColor: "#38bdf8",
                        border: "none",
                        padding: "12px 30px",
                        borderRadius: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Browse Courses
                    </Button>
                  )}
                </div>

                {/* ADMIN INFO */}

                <div
                  className="mt-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "20px",
                    maxWidth: "500px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h5 className="fw-bold mb-3">Admin Access</h5>

                  <p className="mb-1 text-light">
                    Email: asaadnadeem686@gmail.com
                  </p>

                  <p className="mb-0 text-light">
                    Password: asaad#3428
                  </p>
                </div>
              </Col>

              {/* RIGHT SIDE */}

              <Col lg={6} className="text-center">
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "40px",
                    padding: "30px",
                    backdropFilter: "blur(10px)",
                    display: "inline-block",
                  }}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/010/214/759/non_2x/lms-letter-technology-logo-design-on-white-background-lms-creative-initials-letter-it-logo-concept-lms-letter-design-vector.jpg"
                    alt="LMS"
                    style={{
                      width: "100%",
                      maxWidth: "420px",
                      borderRadius: "25px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      {/* STATS */}

      <Container style={{ marginTop: "-70px" }}>
        <Row className="g-4">
          {[
            {
              number: "100+",
              title: "Courses Available",
            },
            {
              number: "5000+",
              title: "Active Students",
            },
            {
              number: "50+",
              title: "Expert Instructors",
            },
            {
              number: "24/7",
              title: "Learning Access",
            },
          ].map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card
                className="border-0 shadow-lg text-center h-100"
                style={{
                  borderRadius: "24px",
                  padding: "35px 20px",
                }}
              >
                <h1
                  className="fw-bold"
                  style={{
                    color: "#0f172a",
                    fontSize: "3rem",
                  }}
                >
                  {item.number}
                </h1>

                <p
                  className="mb-0"
                  style={{
                    color: "#64748b",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* FEATURES */}

      <Container className="py-5 mt-5">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.7rem",
              color: "#0f172a",
            }}
          >
            Why Students Love Our Platform
          </h2>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Everything you need to learn efficiently, build skills,
            and grow professionally in one modern platform.
          </p>
        </div>

        <Row className="g-4">
          {[
            {
              icon: "🎯",
              title: "Practical Learning",
              text: "Gain real-world experience with structured and engaging courses.",
            },
            {
              icon: "🔒",
              title: "Secure Experience",
              text: "Protected authentication system with role-based access control.",
            },
            {
              icon: "⚡",
              title: "Fast & Responsive",
              text: "Smooth and modern experience across desktop and mobile devices.",
            },
          ].map((feature, index) => (
            <Col md={4} key={index}>
              <Card
                className="border-0 h-100 shadow-sm"
                style={{
                  borderRadius: "25px",
                  padding: "35px 25px",
                  transition: "0.3s",
                }}
              >
                <div style={{ fontSize: "3rem" }}>
                  {feature.icon}
                </div>

                <h4 className="fw-bold mt-4">
                  {feature.title}
                </h4>

                <p
                  className="mt-3 mb-0"
                  style={{ color: "#64748b" }}
                >
                  {feature.text}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA */}

      <Container className="pb-5">
        <div
          style={{
            background:
              "linear-gradient(to right, #0f172a, #1e293b)",
            borderRadius: "35px",
            padding: "70px 30px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 className="fw-bold mb-4">
            Start Learning Today
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              maxWidth: "650px",
              margin: "auto",
            }}
          >
            Join thousands of learners building their future through
            modern online education.
          </p>

          <Button
            as={Link}
            to="/courses"
            size="lg"
            className="mt-4"
            style={{
              backgroundColor: "#38bdf8",
              border: "none",
              padding: "14px 35px",
              borderRadius: "14px",
              fontWeight: "600",
            }}
          >
            Explore Courses
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;