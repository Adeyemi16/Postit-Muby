import { Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../config/store";
import { useEffect } from "react";
export default function Landing() {
  const { show, setShow, currentUser } = useStore();
  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser])

  useEffect(() => {
    document.title = "Postit Muby";
  });
  return (
    <section className="pt-1">
      <div className="banner">
        <div className="layout-container d-flex flex-column justify-content-center lg:align-items-start align-items-center h-100 pt-5 px-5">
          <h1 className="fs-1 fw-bold">Stay Curious</h1>
          <p className="text-center fs-4 fw-light mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cum iusto enim sit accusamus
          </p>
          <Link to="">
            <Button
              className="rounded-2 inputRegBox"
              style={{ width: "140px", backgroundColor: "#0086B0" }}
              onClick={() => setShow(!show)}
            >
              Sign-in
            </Button>
          </Link>
        </div>
      </div>

      <Col></Col>
    </section>
  );
}
