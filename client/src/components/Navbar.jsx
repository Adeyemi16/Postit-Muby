import { useStore } from "../config/store";
import { Account } from "./Account";
import { NavLink } from "react-router-dom";
import { Image, Dropdown } from "react-bootstrap";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { currentUser, logOut } = useStore();
  return (
    <nav className="lg:py-3 py-2 lg:px-5 px-3 shadow fixed-top w-100 bg-white">
      <div className="layout-container d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <Sidebar />
          <NavLink to="/">
            <Image src="Postit 1.png" />
          </NavLink>
        </div>

        <div className="d-flex gap-4 align-items-center">
          <NavLink className="text-black fs-5 navL">Stories</NavLink>
          <NavLink className="text-black fs-5 navL">Contact</NavLink>
          {currentUser ? (
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image
                  src={currentUser?.user?.profileImg}
                  alt={currentUser?.user?.username}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.ItemText className="text-capitalize fw-bold">
                  Hi, {currentUser?.user?.username}
                </Dropdown.ItemText>
                <Dropdown.Item
                  as={NavLink}
                  to={`account/user-profile/${currentUser?.user?.username}`}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to={`account/user-profile/${currentUser?.user?.username}`}
                  className="dropL"
                >
                  Stories
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to={`account/user-profile/${currentUser?.user?.username}`}
                  className="dropL"
                >
                  Contact
                </Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Account />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
