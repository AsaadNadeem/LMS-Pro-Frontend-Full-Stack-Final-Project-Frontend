import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
} from "react-bootstrap";

import { useContext } from "react";

import {
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const AppNavbar = () => {
  const { user, handleLogout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(14px)",
        borderBottom:
          "1px solid rgba(255,255,255,0.08)",
        paddingTop: "14px",
        paddingBottom: "14px",
        zIndex: "999",
      }}
    >
      <Container>
        {/* BRAND */}

        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{
            fontWeight: "800",
            fontSize: "1.5rem",
            letterSpacing: "1px",
            color: "white",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              background:
                "linear-gradient(to right, #2563eb, #38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              fontSize: "1.2rem",
              color: "white",
            }}
          >
            🎓
          </div>

          <span>
            LMS{" "}
            <span style={{ color: "#38bdf8" }}>
              Nexus
            </span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          style={{
            background: "white",
            border: "none",
          }}
        />

        <Navbar.Collapse id="main-navbar">
          {/* LEFT LINKS */}

          <Nav className="me-auto ms-4 align-items-lg-center">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: isActive("/")
                  ? "#38bdf8"
                  : "#e2e8f0",
                fontWeight: isActive("/")
                  ? "700"
                  : "500",
                marginRight: "14px",
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              style={{
                color: isActive("/about")
                  ? "#38bdf8"
                  : "#e2e8f0",
                fontWeight: isActive("/about")
                  ? "700"
                  : "500",
                marginRight: "14px",
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/courses"
              style={{
                color: isActive("/courses")
                  ? "#38bdf8"
                  : "#e2e8f0",
                fontWeight: isActive("/courses")
                  ? "700"
                  : "500",
                marginRight: "14px",
              }}
            >
              Courses
            </Nav.Link>

            {/* INSTRUCTOR PANEL */}

            {user?.role === "instructor" && (
              <NavDropdown
                title="Instructor"
                id="instructor-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/instructor/dashboard"
                >
                  📊 Dashboard
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/create-course"
                >
                  ➕ Create Course
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/courses"
                >
                  📚 My Courses
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/instructor/manage-students"
                >
                  👨‍🎓 Manage Students
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/instructor/analytics"
                >
                  📈 Analytics
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* ADMIN PANEL */}

            {user?.role === "admin" && (
              <NavDropdown
                title="Admin"
                id="admin-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/admin/dashboard"
                >
                  Dashboard
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/admin/users"
                >
                  Manage Users
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/admin/manage-courses"
                >
                  Manage Courses
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/admin/create-instructor"
                >
                  Create Instructor
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/admin/analytics"
                >
                  Analytics
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {/* RIGHT SIDE */}

          <Nav className="align-items-lg-center">
            {!user && (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{
                    color: "#e2e8f0",
                    fontWeight: "500",
                    marginRight: "10px",
                  }}
                >
                  Login
                </Nav.Link>

                <Button
                  onClick={() =>
                    navigate("/register")
                  }
                  style={{
                    background:
                      "linear-gradient(to right, #2563eb, #38bdf8)",
                    border: "none",
                    borderRadius: "14px",
                    padding: "10px 22px",
                    fontWeight: "600",
                  }}
                >
                  Get Started
                </Button>
              </>
            )}

            {user && (
              <>
                {/* STUDENT QUICK ACCESS */}

                {user.role === "student" && (
                  <Nav.Link
                    as={Link}
                    to="/my-courses"
                    style={{
                      color: "#e2e8f0",
                      fontWeight: "500",
                      marginRight: "10px",
                    }}
                  >
                    My Courses
                  </Nav.Link>
                )}

                {/* USER DROPDOWN */}

                <NavDropdown
                  align="end"
                  id="user-dropdown"
                  menuVariant="dark"
                  title={
                    <span className="d-inline-flex align-items-center text-white">
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "14px",
                          background:
                            "linear-gradient(to right, #2563eb, #38bdf8)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "700",
                          marginRight: "10px",
                          color: "white",
                        }}
                      >
                        {user.name
                          ?.charAt(0)
                          .toUpperCase()}
                      </div>

                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {user.name}
                      </span>
                    </span>
                  }
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/update-user-details"
                  >
                    👤 Update Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/change-password"
                  >
                    🔒 Change Password
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="text-danger"
                  >
                    🚪 Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;