import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Yuval', id: 1 },
    { title: 'Job is shit', body: 'lorem ipsum...', author: 'Polina', id: 2 },
    { title: 'Allah Ohacbar', body: 'lorem ipsum...', author: 'Hamas', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs= {blogs} title="All the blogs:"/> 
    </div>//prop
  );
}
 
export default Home;