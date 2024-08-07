import { BlogPreview } from "../components/BlogPreview";
import { useBlogs } from "../hooks/useBlogs";


export const Blogs = () => {

  const {blogsState, loading} = useBlogs()

  return (
    <div className="p-5 h-screen w-full flex flex-col place-items-center">
      {
        loading ?
        <div className="h-full w-2/3 p-10 flex flex-col justify-center place-items-center">loading...</div> :
        <div className="w-2/3 p-10 flex flex-col">
        <div className="border-b-2 border-gray-200 flex gap-5 justify-start p-4">
          <span className="cursor-pointer">Create new </span>
          <span className="border-b-2 border-black cursor-pointer">For you</span>
        </div>
        <div className="w-full h-auto flex flex-col gap-7 justify-center place-items-center ">
          {
            blogsState.map((blog) => (<BlogPreview key={blog.id} blog={blog} />))
          }
        </div>
      </div>
      }
    </div>
  )
}
