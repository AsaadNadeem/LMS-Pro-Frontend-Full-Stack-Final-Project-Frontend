import { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap";

import {
  getAllUsers,
  deleteUser,
} from "../../api/admin.api";

import { toast } from "react-toastify";

import Loader from "../../components/common/Loader";

const ManageUsers = () => {
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } =
        await getAllUsers();

      setUsers(data.data);
    } catch {
      toast.error(
        "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    id
  ) => {
    if (
      !window.confirm(
        "Delete this user?"
      )
    )
      return;

    try {
      await deleteUser(id);

      toast.success(
        "User deleted successfully"
      );

      fetchUsers();
    } catch {
      toast.error(
        "Delete failed"
      );
    }
  };

  if (loading)
    return (
      <Loader message="Loading users..." />
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#0f172a,#111827,#1e293b)",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* HEADER */}

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
          <div>
            <h1 className="fw-bold text-white mb-2">
              User Management
            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Manage platform
              students,
              instructors, and
              administrators.
            </p>
          </div>

          <Badge
            bg="primary"
            className="px-4 py-3 fs-6 rounded-pill"
          >
            {users.length} Users
          </Badge>
        </div>

        {/* EMPTY STATE */}

        {users.length === 0 ? (
          <Card
            className="border-0 text-center p-5"
            style={{
              background:
                "rgba(255,255,255,0.06)",
              backdropFilter:
                "blur(14px)",
              borderRadius:
                "24px",
              color: "white",
            }}
          >
            <h4 className="fw-bold mb-3">
              No Users Found
            </h4>

            <p
              style={{
                color: "#cbd5e1",
              }}
            >
              There are currently
              no registered users
              on the platform.
            </p>
          </Card>
        ) : (
          <Row className="g-4">
            {users.map((user) => (
              <Col
                lg={4}
                md={6}
                key={user?._id}
              >
                <Card
                  className="border-0 h-100 user-card"
                  style={{
                    background:
                      "rgba(255,255,255,0.06)",
                    backdropFilter:
                      "blur(14px)",
                    borderRadius:
                      "26px",
                    overflow:
                      "hidden",
                  }}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    {/* TOP */}

                    <div className="d-flex justify-content-between align-items-start mb-4">
                      {/* AVATAR */}

                      <div className="d-flex align-items-center gap-3">
                        <div
                          style={{
                            width:
                              "60px",
                            height:
                              "60px",
                            borderRadius:
                              "20px",
                            background:
                              "linear-gradient(to bottom right,#3b82f6,#06b6d4)",
                            display:
                              "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            fontSize:
                              "1.5rem",
                            fontWeight:
                              "bold",
                            color:
                              "white",
                          }}
                        >
                          {user.name
                            ?.charAt(
                              0
                            )
                            .toUpperCase()}
                        </div>

                        <div>
                          <h5 className="fw-bold text-white mb-1">
                            {
                              user.name
                            }
                          </h5>

                          <small
                            style={{
                              color:
                                "#94a3b8",
                            }}
                          >
                            {
                              user.email
                            }
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* ROLE */}

                    <div className="mb-4">
                      {user.role ===
                        "admin" && (
                        <Badge
                          bg="danger"
                          className="px-3 py-2 rounded-pill"
                        >
                          Administrator
                        </Badge>
                      )}

                      {user.role ===
                        "instructor" && (
                        <Badge
                          bg="success"
                          className="px-3 py-2 rounded-pill"
                        >
                          Instructor
                        </Badge>
                      )}

                      {user.role ===
                        "student" && (
                        <Badge
                          bg="primary"
                          className="px-3 py-2 rounded-pill"
                        >
                          Student
                        </Badge>
                      )}
                    </div>

                    {/* FOOTER */}

                    <div className="mt-auto">
                      <Button
                        variant="outline-danger"
                        className="w-100 rounded-pill fw-semibold"
                        onClick={() =>
                          handleDelete(
                            user?._id
                          )
                        }
                      >
                        Delete User
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* CUSTOM STYLE */}

      <style>
        {`
        .user-card{
          transition:0.3s ease;
        }

        .user-card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 50px rgba(0,0,0,0.3);
        }
        `}
      </style>
    </div>
  );
};

export default ManageUsers;