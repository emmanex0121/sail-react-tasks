import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>About Us</h1>
      <p>{ location.pathname.split("/")[2] }</p>
    </div>
  );
};

export default About;
