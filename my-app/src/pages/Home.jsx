/* eslint-disable react/prop-types */
import AfterHero from "../components/AfterHero";
import Hero from "../components/Hero";
// import Footer from "../static/Footer";
const Home = (props) => {
  return (
    <div className="">
      <h1>This is the Home Page and my name is {props.myName}</h1>
      <Hero />
      <AfterHero />
    </div>
  );
};
export default Home;
