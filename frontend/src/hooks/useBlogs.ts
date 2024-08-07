import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface IBlog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: { name: string };
  authorId: string;
}

export const useBlogs = () => {
  const [ blogsState, setBlogsState ] = useState<IBlog[]>([]);
  const [ loading, setLoading ] = useState(true);


  const fetchBlogs = async () => {

   try {
     const response = await axios.get(BACKEND_URL + "/api/v1/blog/bulk", {
         headers: {
             Authorization: localStorage.getItem("Authorization")
         }
     });
     const blogs = response.data;
     setLoading(false)
     setBlogsState(blogs);
   } catch (error) {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            alert(error.response.data.msg)
        } else {
            alert(error.message)
        }
    } else {
        console.log(error)
    }
   }
  }

    useEffect(() => {
        try {
            fetchBlogs();
        } catch (error) {
            console.log(error)
        }
    }, [])

    return {blogsState, loading}
};
