import { Nav } from "react-bootstrap";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #0f172a, #111827, #1e293b)",
        padding: "30px 20px",
        borderRight:
          "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND EFFECT */}

      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "#2563eb",
          top: "-60px",
          right: "-60px",
          opacity: "0.18",
          filter: "blur(40px)",
        }}
      />

      {/* LOGO / HEADER */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "40px",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            marginBottom: "18px",
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
              fontSize: "1.3rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            🎓
          </div>

          <div>
            <h4
              className="fw-bold text-white mb-1"
              style={{
                letterSpacing: "1px",
              }}
            >
              LMS Nexus
            </h4>

            <small
              style={{
                color: "#94a3b8",
              }}
            >
              Dashboard Panel
            </small>
          </div>
        </div>

        {/* ROLE BADGE */}

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "12px 16px",
            color: "white",
            backdropFilter: "blur(10px)",
          }}
        >
          Logged in as{" "}
          <span
            style={{
              color: "#38bdf8",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            {user?.role}
          </span>
        </div>
      </div>

      {/* NAVIGATION */}

      <Nav
        className="flex-column gap-2"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* STUDENT */}

        {user?.role === "student" && (
          <>
            <SidebarItem
              to="/student/my-courses"
              active={isActive(
                "/student/my-courses"
              )}
              icon="📚"
              label="My Courses"
            />

            <SidebarItem
              to="/profile"
              active={isActive("/profile")}
              icon="👤"
              label="Profile"
            />
          </>
        )}

        {/* INSTRUCTOR */}

        {user?.role === "instructor" && (
          <>
            <SidebarItem
              to="/instructor/create-course"
              active={isActive(
                "/instructor/create-course"
              )}
              icon="➕"
              label="Create Course"
            />

            <SidebarItem
              to="/instructor/manage-courses"
              active={isActive(
                "/instructor/manage-courses"
              )}
              icon="📦"
              label="Manage Courses"
            />

            <SidebarItem
              to="/instructor/upload-lessons"
              active={isActive(
                "/instructor/upload-lessons"
              )}
              icon="🎥"
              label="Upload Lessons"
            />
          </>
        )}

        {/* ADMIN */}

        {user?.role === "admin" && (
          <>
            <SidebarItem
              to="/admin/users"
              active={isActive("/admin/users")}
              icon="👥"
              label="Manage Users"
            />

            <SidebarItem
              to="/admin/courses"
              active={isActive("/admin/courses")}
              icon="📚"
              label="Manage Courses"
            />

            <SidebarItem
              to="/admin/analytics"
              active={isActive(
                "/admin/analytics"
              )}
              icon="📊"
              label="Analytics"
            />
          </>
        )}
      </Nav>
    </div>
  );
};

/* SIDEBAR ITEM */

const SidebarItem = ({
  to,
  active,
  icon,
  label,
}) => {
  return (
    <Nav.Link
      as={Link}
      to={to}
      style={{
        background: active
          ? "linear-gradient(to right, #2563eb, #38bdf8)"
          : "rgba(255,255,255,0.05)",

        color: "white",

        border: active
          ? "none"
          : "1px solid rgba(255,255,255,0.06)",

        borderRadius: "18px",

        padding: "14px 18px",

        display: "flex",

        alignItems: "center",

        fontWeight: active ? "700" : "500",

        transition: "0.3s",

        backdropFilter: "blur(10px)",
      }}
    >
      <span
        style={{
          marginRight: "14px",
          fontSize: "1.1rem",
        }}
      >
        {icon}
      </span>

      {label}
    </Nav.Link>
  );
};

export default Sidebar;