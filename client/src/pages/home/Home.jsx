import Hero from "../../components/hero/Hero";
import Kit from "../../components/kit/Kit";
import Navigation from "../../components/nav/Navigation";
import SetKit from "../../components/setkit/SetKit";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      {/* <Kit />
      <SetKit /> */}
    </div>
  );
};

export default Home;
