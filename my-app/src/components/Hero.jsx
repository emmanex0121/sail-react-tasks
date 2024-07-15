/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Button from "./reuseable/Button";
const Hero = ({ answer }) => {
  return (
    <div className="">
      <h1>This is the Hero Page and ans = {answer}</h1>
      <Button buttonName="Readme" />
    </div>
  );
};

export default Hero;
