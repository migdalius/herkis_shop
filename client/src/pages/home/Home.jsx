import "../home/home.css";
import Navigation from "../../components/nav/Navigation";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
