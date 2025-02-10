import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Project from "../../Components/Project/Project";
import SkillPage from "../Skill/SkillPage";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <SkillPage></SkillPage>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;