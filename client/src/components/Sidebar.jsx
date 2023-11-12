import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
// import { useStore } from "../config/store";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <BiMenuAltLeft
        style={{ cursor: "pointer" }}
        size="30px"
        className="d-lg-none me-2"
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <NavLink
              to="/"
              className="fs-2 fw-bold text-black"
              onClick={handleClose}
            >
              SHOP
            </NavLink>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h1 className="mb-2 fs-3 fw-bold">Collections</h1>
              <>
                
              </>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
