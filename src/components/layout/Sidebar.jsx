import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <h5 className="fw-bold mb-4 text-white">LMS Dashboard</h5>

      <Nav className="flex-column gap-2">

        {/* ================= STUDENT ================= */}
        {user?.role === "student" && (
          <>
            <Nav.Link
              as={Link}
              to="/student/my-courses"
              className={isActive("/student/my-courses") ? "active" : ""}
            >
              📚 My Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/profile"
              className={isActive("/profile") ? "active" : ""}
            >
              👤 Profile
            </Nav.Link>
          </>
        )}

        {/* ================= INSTRUCTOR ================= */}
        {user?.role === "instructor" && (
          <>
            <Nav.Link
              as={Link}
              to="/instructor/create-course"
              className={
                isActive("/instructor/create-course") ? "active" : ""
              }
            >
              ➕ Create Course
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/instructor/manage-courses"
              className={
                isActive("/instructor/manage-courses") ? "active" : ""
              }
            >
              📦 Manage Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/instructor/upload-lessons"
              className={
                isActive("/instructor/upload-lessons") ? "active" : ""
              }
            >
              🎥 Upload Lessons
            </Nav.Link>
          </>
        )}

        {/* ================= ADMIN ================= */}
        {user?.role === "admin" && (
          <>
            <Nav.Link
              as={Link}
              to="/admin/users"
              className={isActive("/admin/users") ? "active" : ""}
            >
              👥 Manage Users
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/admin/courses"
              className={isActive("/admin/courses") ? "active" : ""}
            >
              📚 Manage Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/admin/analytics"
              className={isActive("/admin/analytics") ? "active" : ""}
            >
              📊 Analytics
            </Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
