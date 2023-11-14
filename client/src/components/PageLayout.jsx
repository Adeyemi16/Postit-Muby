export default function PageLayout({ children }) {
  return (
    <div className="py-lg-5 py-2 mt-3 mt-lg-0">
      <div className=" mt-5 py-lg-4 px-3 d-flex align-items-center justify-content-center">
        {children}
      </div>
    </div>
  );
}
