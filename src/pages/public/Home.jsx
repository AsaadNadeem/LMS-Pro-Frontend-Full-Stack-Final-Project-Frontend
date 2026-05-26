import { useContext } from "react";
import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ background: "#f5f7fb" }}>
      {/* HERO SECTION */}

      <div
        style={{
          background: "linear-gradient(135deg,#143b5f 0%,#2f7d8c 100%)",
          color: "white",
        }}
      >
        <Container className="py-5">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/214/759/non_2x/lms-letter-technology-logo-design-on-white-background-lms-creative-initials-letter-it-logo-concept-lms-letter-design-vector.jpg"
            alt="LMS Pro logo"
            className="w-25 float-end border border-secondary rounded-5 p-2 bg-white"
            style={{ width: "500px" }}
          ></img>

          <Row className="align-items-center gy-4">
            <Col md={6}>
              <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                Modern LMS Platform
              </Badge>

              <h2>
                <b>For Admin : </b>
              </h2>
              <h3>Eamil : asaadnadeem686@gmail.com Password : asaad#3428</h3>
              <h4>Learn. Build. Grow.</h4>

              <p className="fs-5 mb-4">
                {!user
                  ? "A professional Learning Management System built with MERN Stack. Discover courses, learn industry skills, and grow your career."
                  : `Welcome back, ${user.name}! Continue learning and upgrade your skills.`}
              </p>

              <div className="d-flex gap-3 flex-wrap">
                {!user ? (
                  <>
                    <Button
                      as={Link}
                      to="/register"
                      variant="light"
                      size="lg"
                      className="fw-semibold"
                    >
                      Get Started
                    </Button>

                    <Button
                      as={Link}
                      to="/login"
                      variant="outline-light"
                      size="lg"
                    >
                      Login
                    </Button>
                  </>
                ) : (
                  <Button as={Link} to="/courses" variant="light" size="lg">
                    Browse Courses
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* STATS SECTION */}

      <Container className="py-5">
        <Row className="text-center g-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-primary">100+</h2>
              <p className="text-muted mb-0">Courses</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-success">5000+</h2>
              <p className="text-muted mb-0">Students</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-danger">50+</h2>
              <p className="text-muted mb-0">Instructors</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-warning">24/7</h2>
              <p className="text-muted mb-0">Learning</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FEATURES */}

      <Container className="pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Our LMS?</h2>

          <p className="text-muted">
            A modern learning platform built with industry technologies.
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>📚</h3>
              <h5 className="fw-bold">Professional Courses</h5>
              <p className="text-muted">
                Learn real-world skills from experienced instructors.
              </p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>🔐</h3>
              <h5 className="fw-bold">Secure Platform</h5>
              <p className="text-muted">
                JWT authentication and role-based access control ensure
                security.
              </p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>📈</h3>
              <h5 className="fw-bold">Career Growth</h5>
              <p className="text-muted">
                Gain knowledge, improve skills, and advance your career.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA SECTION */}

      <div
        style={{
          background: "#17202a",
          color: "white",
        }}
      >
        <Container className="py-5 text-center">
          <h2 className="fw-bold mb-3">Start Your Learning Journey Today</h2>

          <p className="mb-4">
            Join thousands of students learning new skills online.
          </p>

          <Button as={Link} to="/courses" variant="light" size="lg">
            Explore Courses
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
