export default function PageLayout({ children }) {
  return (
    <div className="py-lg-3 py-2 mt-3 mt-lg-0" style={{minHeight: "80vh"}}>
      <div className=" mt-5 py-lg-4 px-3 d-flex align-items-center justify-content-center h-100">
        {children}
      </div>
    </div>
  );
}
