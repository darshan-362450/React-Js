import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <div className="h-screen bg-black  text-white">
      <Navbar />
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    
      
        <Route path='/product' element={<Product/>} />

          {/* Nested Route */}
        <Route path="/product/men" element={<Men />} />


         <Route path="*" element={<NotFound />} />


         {/* Dynamic Routing  */}
         <Route path="/courses" element={<Courses/>}>Courses</Route>
         <Route path="/courses/:course" element={<CourseDetails/>}/>
      </Routes>
     
      <Footer />
    </div>
  );
};

export default App;
