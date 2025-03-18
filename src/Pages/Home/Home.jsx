import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import SkillPage from "@/pages/Skill/SkillPage";

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