import Home from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./static/Footer";

const App = () => {
  const num1 = 2,
    num2 = 4;
  const sum = num1 + num2;

  return (
    <div>
      <h1>Tis is doings {sum}</h1>
      <Home myName="Phoenix" />
      <Footer />
      <Hero answer={sum} />
    </div>
  );
};

export default App;
