import React from "react";
import { Announcement,
         Navbar,
         Slider,
         Categories,
         Products,
         Footer,
         Newsletter
} from "../components/index";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
