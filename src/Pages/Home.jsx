import React from "react";
import MainSection from "../components/MainSection";
import MidSection from "../components/MidSection";
import PlaySection from "../components/PlaySection";

const Home = () => {
  return (
    <div>
      <MainSection
        img="https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg"
        heading="Learn. Grow. Achieve."
        paragraph="Every correct answer helps your knowledge blossom."
      />
      <MidSection
        head="Welcome to test your knowledge"
        para="think answer and learn"
      />
      <PlaySection />
    </div>
  );
};

export default Home;
