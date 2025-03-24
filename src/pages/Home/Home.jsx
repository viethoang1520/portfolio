import Contact from "@/components/Contact/Contact.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Project from "@/components/Project/Project.jsx";
import SkillPage from "@/pages/Skill/SkillPage.jsx";

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