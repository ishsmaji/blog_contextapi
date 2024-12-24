import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { useContext, useEffect } from 'react';
import { Appcontext } from './Context/Appcontext';

function App() {

  const { fetchblogpost } = useContext(Appcontext);

  useEffect(() => {
    fetchblogpost();
  }, [fetchblogpost]); // Add fetchblogpost to the dependency array

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/blog/:blogId" element={<BlogPage/>}/>
    //   <Route path="/tags/:tag" element={<TagPage/>}/>
    //   <Route path="/categories/:category" element={<CategoryPage/>}/>
    // </Routes>
  );
}

export default App;
