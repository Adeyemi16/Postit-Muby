import { InfinitySpin } from "react-loader-spinner";

export default function LoaderB({ title }) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center px-2 py-2 position-absolute"
      style={{
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: "thin",
        borderRadius: "8%",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
        width: "14rem",
        height: "12rem"
      }}
    >
      <div style={{ width: "100%" }}>
        <InfinitySpin
          height="120"
          width="120"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>

      <p className="fs-4 fs-bold">{title}</p>
    </div>
  );
}
