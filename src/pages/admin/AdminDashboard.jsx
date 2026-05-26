import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
} from "react-bootstrap";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import Loader from "../../components/common/Loader";

import { getAnalytics } from "../../api/admin.api";

const AdminDashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data } =
        await getAnalytics();

      setAnalytics(data.data);
    } catch {
      toast.error(
        "Failed to load analytics"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Loader message="Loading Admin Dashboard..." />
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #0f172a, #111827, #1e293b)",
        overflow: "hidden",
      }}
    >
      <Container fluid>
        <Row>
          {/* SIDEBAR */}

          <Col
            lg={2}
            md={3}
            className="p-0"
          >
            <div
              style={{
                minHeight: "100vh",
                background:
                  "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                borderRight:
                  "1px solid rgba(255,255,255,0.08)",
                padding: "30px 20px",
              }}
            >
              {/* LOGO */}

              <div className="mb-5">
                <div
                  className="d-flex align-items-center"
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(to right,#2563eb,#38bdf8)",
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      marginRight: "12px",
                      fontSize: "1.3rem",
                    }}
                  >
                    ⚡
                  </div>

                  <div>
                    <h4
                      className="fw-bold text-white mb-0"
                    >
                      Admin
                    </h4>

                    <small
                      style={{
                        color:
                          "#94a3b8",
                      }}
                    >
                      Dashboard
                    </small>
                  </div>
                </div>
              </div>

              {/* NAVIGATION */}

              <Nav className="flex-column gap-3">
                <SidebarItem
                  label="Dashboard"
                  icon="📊"
                  onClick={() =>
                    navigate(
                      "/admin/dashboard"
                    )
                  }
                />

                <SidebarItem
                  label="Users"
                  icon="👥"
                  onClick={() =>
                    navigate(
                      "/admin/users"
                    )
                  }
                />

                <SidebarItem
                  label="Courses"
                  icon="📚"
                  onClick={() =>
                    navigate(
                      "/admin/manage-courses"
                    )
                  }
                />

                <SidebarItem
                  label="Create Instructor"
                  icon="👨‍🏫"
                  onClick={() =>
                    navigate(
                      "/admin/create-instructor"
                    )
                  }
                />
              </Nav>
            </div>
          </Col>

          {/* MAIN CONTENT */}

          <Col
            lg={10}
            md={9}
            className="p-4 p-lg-5"
          >
            {/* HERO */}

            <Card
              className="border-0 mb-5"
              style={{
                background:
                  "linear-gradient(to right,#2563eb,#38bdf8)",
                borderRadius: "28px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position:
                    "absolute",
                  width: "300px",
                  height: "300px",
                  borderRadius:
                    "50%",
                  background:
                    "rgba(255,255,255,0.12)",
                  top: "-120px",
                  right: "-120px",
                }}
              />

              <Card.Body
                style={{
                  padding: "50px",
                  color: "white",
                  position:
                    "relative",
                }}
              >
                <h6
                  className="mb-2"
                  style={{
                    opacity: "0.8",
                    letterSpacing:
                      "1px",
                  }}
                >
                  ADMIN CONTROL CENTER
                </h6>

                <h1 className="fw-bold mb-3">
                  Welcome Back 👋
                </h1>

                <p
                  style={{
                    maxWidth:
                      "650px",
                    lineHeight: "1.9",
                    opacity: "0.92",
                  }}
                >
                  Monitor your LMS
                  performance, manage
                  users, courses, and
                  instructors through
                  a modern centralized
                  dashboard.
                </p>
              </Card.Body>
            </Card>

            {/* ANALYTICS */}

            <Row className="g-4 mb-5">
              <AnalyticsCard
                title="Total Users"
                value={
                  analytics.totalUsers
                }
                icon="👥"
              />

              <AnalyticsCard
                title="Courses"
                value={
                  analytics.totalCourses
                }
                icon="📚"
              />

              <AnalyticsCard
                title="Enrollments"
                value={
                  analytics.totalEnrollments
                }
                icon="📈"
              />
            </Row>

            {/* QUICK ACTIONS */}

            <div className="mb-4">
              <h3
                className="fw-bold text-white mb-2"
              >
                Quick Actions
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                Access important
                management tools
                quickly.
              </p>
            </div>

            <Row className="g-4">
              <ActionCard
                title="Manage Users"
                description="View, edit and control platform users."
                icon="👥"
                button="Go to Users"
                onClick={() =>
                  navigate(
                    "/admin/users"
                  )
                }
              />

              <ActionCard
                title="Manage Courses"
                description="Review and manage all published courses."
                icon="📚"
                button="Go to Courses"
                onClick={() =>
                  navigate(
                    "/admin/manage-courses"
                  )
                }
              />

              <ActionCard
                title="Create Instructor"
                description="Add instructors and expand your teaching staff."
                icon="👨‍🏫"
                button="Create Instructor"
                onClick={() =>
                  navigate(
                    "/admin/create-instructor"
                  )
                }
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

/* ANALYTICS CARD */

const AnalyticsCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <Col lg={4}>
      <Card
        className="border-0 h-100"
        style={{
          background:
            "rgba(255,255,255,0.06)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter:
            "blur(12px)",
          borderRadius: "24px",
          color: "white",
        }}
      >
        <Card.Body className="p-4">
          <div
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                {title}
              </p>

              <h1 className="fw-bold">
                {value}
              </h1>
            </div>

            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "22px",
                background:
                  "linear-gradient(to right,#2563eb,#38bdf8)",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                fontSize: "1.8rem",
              }}
            >
              {icon}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

/* ACTION CARD */

const ActionCard = ({
  title,
  description,
  icon,
  button,
  onClick,
}) => {
  return (
    <Col lg={4}>
      <Card
        className="border-0 h-100"
        style={{
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter:
            "blur(12px)",
          borderRadius: "28px",
          color: "white",
          transition: "0.3s",
        }}
      >
        <Card.Body className="p-4 text-center">
          <div
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "26px",
              background:
                "linear-gradient(to right,#2563eb,#38bdf8)",
              display: "flex",
              alignItems:
                "center",
              justifyContent:
                "center",
              margin:
                "0 auto 24px auto",
              fontSize: "2rem",
            }}
          >
            {icon}
          </div>

          <h4 className="fw-bold mb-3">
            {title}
          </h4>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            {description}
          </p>

          <Button
            onClick={onClick}
            style={{
              background:
                "linear-gradient(to right,#2563eb,#38bdf8)",
              border: "none",
              borderRadius: "14px",
              padding:
                "12px 24px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {button}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

/* SIDEBAR ITEM */

const SidebarItem = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <Nav.Link
      onClick={onClick}
      style={{
        background:
          "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "14px 18px",
        color: "white",
        fontWeight: "500",
        transition: "0.3s",
      }}
    >
      <span className="me-3">
        {icon}
      </span>

      {label}
    </Nav.Link>
  );
};

export default AdminDashboard;