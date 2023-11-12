import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <div
      className="layout-container mt-5 text-white px-lg-5 px-lg-1 py-lg-3  d-flex flex-column justify-content-between"
      style={{ minHeight: "270px", backgroundColor: "#292929" }}
    >
      <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center py-3">
        <div className="d-flex flex-column gap-2">
          <p className="fs-5">About Postit.</p>
          <p style={{ width: "350px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div className="d-flex py-2 px-3 gap-lg-5 w-100 pad">
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li className="fs-5">Quick Menu</li>
            <div>
              <li>Home</li>
              <li>Stories</li>
              <li>Trending Stories</li>
              <li>Popular Stories</li>
            </div>
          </ul>

          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>Sign-Up</li>
            <li>Log in</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="border-0 border-top border-grey mb-3" />
        <div className="d-flex justify-content-between align-items-center">
          <span>© 2023 ShopNBuy™. All Rights Reserved.</span>
          <a
            href="https://github.com/Adeyemi16/shopnbuyadeyemi"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size="24px" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
}
