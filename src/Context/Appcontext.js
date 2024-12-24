import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../baseUrl";

export const Appcontext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalpages, setTotalpages] = useState(null);

  const fetchblogpost = useCallback(async (pages = 1) => {
    setLoading(true);
   
    let url = `${baseUrl}?page=${pages}`;

    try {
      const response = await fetch(url);
      const data = await response.json(); 
      
      console.log(data);
      setPages(data.page);
      setPosts(data.posts);
      setTotalpages(data.totalPages);
    } catch (error) {
      console.log(error);
      setPages(1);
      setPosts([]);
      setTotalpages(null);
    }
    setLoading(false);
  }, []);

  const handelPageChange = (pages) => {
    setPages(pages);
    fetchblogpost(pages);
  };

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    pages,
    setPages,
    totalpages,
    setTotalpages,
    handelPageChange,
    fetchblogpost,
  };

  return (
    <Appcontext.Provider value={value}>
      {children}
    </Appcontext.Provider>
  );
}
