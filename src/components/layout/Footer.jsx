import {
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to right, #0f172a, #111827, #1e293b)",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* BACKGROUND EFFECTS */}

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#2563eb",
          borderRadius: "50%",
          top: "-120px",
          left: "-120px",
          opacity: "0.12",
          filter: "blur(50px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#38bdf8",
          borderRadius: "50%",
          bottom: "-100px",
          right: "-100px",
          opacity: "0.1",
          filter: "blur(40px)",
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "80px",
          paddingBottom: "35px",
        }}
      >
        <Row className="gy-5">
          {/* PROJECT INFO */}

          <Col lg={4} md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(to right, #2563eb, #38bdf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "14px",
                  fontSize: "1.4rem",
                }}
              >
                🎓
              </div>

              <div>
                <h4
                  className="fw-bold mb-1"
                  style={{
                    letterSpacing: "1px",
                  }}
                >
                  LMS Nexus
                </h4>

                <Badge
                  bg="light"
                  text="dark"
                  className="px-3 py-2"
                >
                  MERN STACK
                </Badge>
              </div>
            </div>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.9",
                maxWidth: "420px",
              }}
            >
              A modern learning management platform built
              using the MERN stack architecture with secure
              authentication, responsive design, and scalable
              online education features.
            </p>
          </Col>

          {/* QUICK LINKS */}

          <Col lg={2} md={6}>
            <h5
              className="fw-bold mb-4"
              style={{
                color: "#38bdf8",
              }}
            >
              Navigation
            </h5>

            <div className="d-flex flex-column gap-3">
              <Link
                to="/"
                style={footerLinkStyle}
              >
                Home
              </Link>

              <Link
                to="/courses"
                style={footerLinkStyle}
              >
                Courses
              </Link>

              <Link
                to="/instructor/manage-courses"
                style={footerLinkStyle}
              >
                Instructor Panel
              </Link>

              <Link
                to="/admin/users"
                style={footerLinkStyle}
              >
                Admin Panel
              </Link>
            </div>
          </Col>

          {/* CONTACT */}

          <Col lg={3} md={6}>
            <h5
              className="fw-bold mb-4"
              style={{
                color: "#38bdf8",
              }}
            >
              Connect With Me
            </h5>

            <div className="d-flex gap-3 flex-wrap">
              <a
                href="mailto:asaadnadeem686@gmail.com"
                style={socialStyle}
              >
                <FaEnvelope />
              </a>

              <a
                href="tel:+9217953957"
                style={socialStyle}
              >
                <FaPhone />
              </a>

              <a
                href="https://github.com/AsaadNadeem"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/asaadnadeem686"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <FaLinkedin />
              </a>
            </div>

            <div
              className="mt-4"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.9",
              }}
            >
              Available for MERN stack projects, Java
              development, and UI/UX design collaborations.
            </div>
          </Col>

          {/* DEVELOPER */}

          <Col lg={3} md={6}>
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "28px",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="mb-2"
                style={{
                  color: "#94a3b8",
                }}
              >
                Developed By
              </p>

              <h4 className="fw-bold mb-3">
                Asaad Nadeem
              </h4>

              <div
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.9",
                }}
              >
                MERN Stack Developer
                <br />
                Java Programmer
                <br />
                UI/UX Designer
              </div>

              <div
                className="mt-4"
                style={{
                  color: "#38bdf8",
                  fontWeight: "600",
                }}
              >
                © {new Date().getFullYear()}
              </div>
            </div>
          </Col>
        </Row>

        {/* DIVIDER */}

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginTop: "60px",
            marginBottom: "30px",
          }}
        />

        {/* BOTTOM */}

        <Row>
          <Col className="text-center">
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "0",
                letterSpacing: "1px",
              }}
            >
              Built for modern education • Secure • Fast •
              Scalable
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

/* STYLES */

const footerLinkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

const socialStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "1.2rem",
  textDecoration: "none",
  backdropFilter: "blur(10px)",
  transition: "0.3s",
};

export default Footer;