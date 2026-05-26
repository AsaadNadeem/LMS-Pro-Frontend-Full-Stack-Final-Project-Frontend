import { useEffect, useState } from "react";
import { Container, Card, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getLessonById } from "../../api/lesson.api";

const LessonDetails = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLesson();
  }, []);

  const fetchLesson = async () => {
    try {
      const { data } = await getLessonById(id);
      setLesson(data.data);
    } catch {
      toast.error("Failed to load lesson");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Preparing your lesson..." />;
  if (!lesson) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#111827,#0f172a)",
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <Container>

        {/* ===== HEADER ===== */}
        <div className="mb-4 text-white">
          <Badge bg="light" text="dark" className="mb-2 px-3 py-2 rounded-pill">
            📘 Lesson
          </Badge>

          <h2 className="fw-bold">{lesson.title}</h2>

          <p style={{ opacity: 0.7 }}>
            Focus on learning step by step. Take notes and practice regularly.
          </p>
        </div>

        {/* ===== CONTENT CARD ===== */}
        <Card
          className="border-0"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            borderRadius: "18px",
            color: "white",
          }}
        >
          <Card.Body className="p-4">

            {/* CONTENT */}
            <div
              style={{
                fontSize: "1rem",
                lineHeight: "1.9",
                whiteSpace: "pre-wrap",
                opacity: 0.9,
              }}
            >
              {lesson.content}
            </div>

          </Card.Body>
        </Card>

        {/* ===== FOOTER ACTIONS ===== */}
        <div className="mt-4 d-flex justify-content-between align-items-center">

          <Button
            variant="light"
            className="rounded-pill px-4 fw-semibold"
            onClick={() => window.history.back()}
          >
            ← Back
          </Button>

          <small style={{ color: "white", opacity: 0.5 }}>
            LMS Learning Module
          </small>

        </div>

      </Container>
    </div>
  );
};

export default LessonDetails;