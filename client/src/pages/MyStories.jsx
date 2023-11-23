import { useEffect } from "react";
import { PageLayout } from "../components";
import LoaderB from "../utils/LoaderB";
import useFetchData from "../hooks/fetchData";
import { deleteStory, getUserStories } from "../config/api";
import { useStore } from "../config/store";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { PiNotepadDuotone } from "react-icons/pi";

export default function MyStories() {
  const { currentUser } = useStore();
  const { error, data, loading, setData } = useFetchData(
    getUserStories,
    currentUser?.user?._id,
    currentUser.access_token
  );
  console.log(data);
  console.log(currentUser);
  useEffect(() => {
    document.title = `My Stories (${data.length})`;
  });

  const handleDelete = async (storyId) => {
    try {
      await deleteStory(storyId, currentUser?.access_token);
      toast.success("Story deleted successfully");
      setData(data.filter((item) => item._id !== storyId));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  {
    error && <p className="mt-5 fs-5">{error.message}</p>;
  }
  return (
    <PageLayout>
      {loading ? (
        <LoaderB title={"Getting your stories"} />
      ) : (
        <>
          <div
            className="d-flex flex-column h-auto justify-content-evenly gap-5 position-relative"
            style={{ width: "90vw", height: "100%" }}
          >
            <div
              id="heading"
              className="d-flex justify-content-between align-items-center"
              style={{ width: "100%" }}
            >
              <p className="fs-3 font-bold">My stories</p>
              <NavLink
                className="d-flex text-purple-600 h-4"
                style={{
                  alignItems: "center",
                  gap: "4px",
                  justifyContent: "center",
                }}
                to={"/new-story"}
              >
                <AiOutlinePlus />
                <p style={{ marginBottom: "0" }}>Add new Story</p>
              </NavLink>
            </div>
            {data?.length < 1 ? (
              <div
                className="align-items-center justify-content-center position-absolute d-flex flex-column gap-4 top-75"
                style={{ top: "300%", width: "100%" }}
              >
                <p className="fw-bold fs-2">No story yet</p>
                <PiNotepadDuotone size={"50px"} />
                <NavLink to={"/"} style={{ textDecorationLine: "underline" }}>
                  Go back home
                </NavLink>
              </div>
            ) : (
              <>
                {data.map((item, i) => {
                  const { title, description, createdAt, tag, _id } = item;
                  return (
                    <div
                      key={i}
                      id="task"
                      className=""
                      style={{
                        width: "100%",
                        borderStyle: "solid",
                        borderColor: "lightgrey",
                        borderWidth: "thin",
                        borderRadius: "3px",
                        minHeight: "13rem",
                        height: "auto",
                      }}
                    >
                      <div
                        id="tag"
                        className="d-flex justify-content-between px-2 py-2"
                        style={{ alignItems: "center" }}
                      >
                        <p
                          className={
                            tag === "Urgent" ? "text-red-400" : "text-green-400"
                          }
                        >
                          {tag}
                        </p>
                        <div className="flex gap-2">
                          <NavLink to={`/tasks/edit/${_id}`}>
                            <Button className="text-white bg-purple-500 gap-2">
                              <AiFillEdit />
                              <p>Edit</p>
                            </Button>
                          </NavLink>

                          <Button
                            className="text-purple-500 gap-2 border-solid border-purple-500"
                            style={{ borderWidth: "thin" }}
                            onClick={() => handleDelete(_id)}
                          >
                            <BsTrash />
                            <p>Delete</p>
                          </Button>
                        </div>
                      </div>
                      <hr />
                      <div
                        id="content"
                        className="flex flex-col py-5 px-3 justify-evenly gap-3 h-36"
                      >
                        <div className="flex justify-between h-auto">
                          <p
                            className="font-semibold text-xl"
                            style={{ height: "auto" }}
                          >
                            {title}
                          </p>
                          <p
                            className="text-gray-400 "
                            style={{ textAlign: "right" }}
                          >
                            Created at: {createdAt}
                          </p>
                        </div>

                        <p
                          className="text-gray-500"
                          style={{ textOverflow: "clip" }}
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
        // </div>
      )}
    </PageLayout>
  );
}
