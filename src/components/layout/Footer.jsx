import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">

          {/* ================= PROJECT INFO ================= */}
          <Col md={3}>
            <h5 className="fw-bold mb-2">
              LMS Pro
              <Badge bg="primary" className="ms-2 small">
                MERN
              </Badge>
            </h5>

            <p className="footer-text">
              A modern Learning Management System built with the MERN stack,
              designed for scalable online education.
            </p>
          </Col>

          {/* ================= QUICK LINKS ================= */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/instructor/manage-courses">
                Instructor Panel
              </Link>
              <Link to="/admin/users">Admin Panel</Link>
            </div>
          </Col>

          {/* ================= CONTACT ================= */}
          <Col md={3} className="text-center">
            <h6 className="fw-bold mb-3">Connect</h6>

            <div className="d-flex justify-content-center gap-4">
              <a
                href="mailto:asaadnadeem686@gmail.com"
                className="footer-icon"
              >
                <FaEnvelope />
              </a>

              <a href="tel:+9217953957" className="footer-icon">
                <FaPhone />
              </a>

              <a
                href="https://github.com/AsaadNadeem"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/asaadnadeem686"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>

          {/* ================= DEVELOPER ================= */}
          <Col md={3} className="text-md-end text-center">
            <p className="mb-1 fw-semibold">
              © {new Date().getFullYear()} LMS Pro
            </p>

            <p className="footer-text">
              Developed by:
              <span className="fw-bold text-info d-block">
                Asaad Nadeem
              </span>
              MERN Stack • Java Programmer • UI/UX Designer
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom line */}
        <Row>
          <Col className="text-center">
            <p className="footer-bottom">
              Built for modern learning • Secure • Scalable • Fast
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
