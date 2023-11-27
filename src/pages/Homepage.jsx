import { Link } from "react-router-dom";

import whoweare from "../assets/who-we-are.png";
import whychooseus1 from "../assets/why-choose-1.png";
import whychooseus2 from "../assets/why-choose-2.png";
import whychooseus3 from "../assets/why-choose-3.png";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedin.svg";

// dummy data for why-choose-us and testimonial

const whychooseevovle = [
  {
    img: whychooseus1,
    heading: "Farmers' Ally",
    sub: "Farmers are the backbone of our world, and we're here to be your ally. Our user-friendly interface is designed to make your life easier. No more second-guessing, just intuitive insights that guide you towards success",
  },
  {
    img: whychooseus2,
    heading: "Yield-Boosting Magic",
    sub: "Unleash the magic of precision farming! Say goodbye to average yields and hello to bumper crops. Our solution helps you tap into the full potential of your land by optimizing planting and harvesting schedules",
  },
  {
    img: whychooseus3,
    heading: "Dynamic Predictions",
    sub: "Our solution is your farming companion. Dynamic predictions powered by AI analyze a series of factors, ensuring you plant and harvest when the conditions are just right",
  },
];

const testimonialList = [
  {
    img: testimonial1,
    name: "Tosin Adeyeyi",
    comment:
      "I've been farming for years, and tech isn't really my thing. But Evolve changed the game for me. It's so easy to use - no tech headaches. Now, I know the best times to plant and harvest without any fuss. My yields are up, and I feel more in control. It's like having a friendly farming expert by my side. If I can use it, anyone can. It's made my farm better, simple as that!",
  },
  {
    img: testimonial2,
    name: "Bashir Musa",
    comment:
      "I've been farming for years, and tech isn't really my thing. But Evolve changed the game for me. It's so easy to use - no tech headaches. Now, I know the best times to plant and harvest without any fuss. My yields are up, and I feel more in control. It's like having a friendly farming expert by my side. If I can use it, anyone can. It's made my farm better, simple as that!",
  },
  {
    img: testimonial3,
    name: "Fatai Owolabi",
    comment:
      "I've been farming for over two decades, and I've never seen anything like Evolve. It's like having a personal farming advisor that understands my fields, the weather, and the soil. Since I started using this solution, my yields have consistently exceeded expectations. It's a game-changer for any farmer serious about maximizing their harvests.",
  },
];
const Homepage = () => {
  const style = {
    list: "hover:border-b-2 border-primary",
  };
  return (
    <div className="w-full">
      <nav className="flex justify-between h-24 items-center shadow-sm px-4 md:px-8 xl:px-24">
        <Link to="/">
          <p className="text-4xl font-bold text-primary">Evolve Farm</p>
        </Link>
        <div className="flex gap-24 items-center">
          <ul className="hidden lg:flex items-center gap-16">
            <li className={style.list}>
              <a href="#about">About</a>
            </li>
            <li className={style.list}>
              <a href="#testimony">Testimonial</a>
            </li>
            <li className={style.list}>
              <a href="#choose">Why Choose Us</a>
            </li>
          </ul>
          <div className="flex gap-8 items-center">
            <Link to="/signin">
              <button className="border-2 font-semibold border-primary rounded-md text-primary px-5 py-2">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="hidden lg:block bg-primary px-5 font-semibold py-2 rounded-md text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className="hero">
        <div className="flex lg:w-1/2 justify-center items-center text-white flex-col gap-4 text-center">
          <h3 className="text-4xl font-bold">
            Plant Like a Pro, Harvest Like a Hero
          </h3>
          <p className="w-3/4">
            Empower your farm with our precision farming solution. From expert
            planting guidance to innovative harvest planning, our tools are
            designed to elevate your farming experience
          </p>
          <Link to="/signup">
            <button className="bg-primary px-5 font-semibold py-2 rounded-md text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="lg:flex gap-8 mb-12 mt-20 px-4 md:px-8 xl:px-24 items-center"
      >
        <div className="flex-1 block md:flex justify-center items-center">
          <div className="lg:w-3/4 flex flex-col gap-4">
            <span className="text-[#FFA500] uppercase font-semibold">
              Who We Are
            </span>
            <h3 className="text-3xl font-bold">
              Step into the future of farming with Evolve
            </h3>
            <p className="font-normal">
              We've cultivated a groundbreaking solution that predicts the prime
              moments to sow seeds and harvest crops, tailored to your local
              weather and soil conditions. Get ready to supercharge your yields
              and revolutionize your farming journey
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <img src={whoweare} alt="who we are" className="lg:w-3/4" />
        </div>
      </section>
      <section id="choose" className="py-16 relative bg-">
        <p className="text-[#FFA500] uppercase text-center mb-8 font-semibold">
          Why Choose Us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-8 xl:px-24">
          {whychooseevovle.map((why, id) => (
            <div
              className="flex flex-col rounded-xl text-center shadow-lg hover:shadow-2xl bg-white z-20"
              key={id}
            >
              <img src={why.img} alt="why choose us" />
              <div className="p-6">
                <span className="text-xl font-semibold">{why.heading}</span>
                <p className="mt-2 text-sm">{why.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-primary h-72 w-full opacity-20 absolute top-72"></div>
      </section>
      <section
        id="testimony"
        className="py-16 text-center px-4 md:px-8 xl:px-24"
      >
        <p className="text-[#FFA500] uppercase text-center mb-2 font-semibold">
          Testmonial
        </p>
        <span className="text-4xl font-bold">
          What other farmers are saying about us
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-8">
          {testimonialList.map((testimony, id) => (
            <div
              className="bg-white px-4 py-8 rounded-2xl flex flex-col justify-between gap-4"
              key={id}
            >
              <div className="flex gap-4 items-center mb-2">
                <img src={testimony.img} alt="testimonial" />
                <span className="font-semibold text-primary">
                  {testimony.name}
                </span>
              </div>
              <p className="text-sm">{testimony.comment}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="px-4 md:px-8 xl:px-24 py-8 bg-primary text-white flex flex-col">
        <div className="md:flex items-center justify-between gap-4">
          <div className="md:w-1/2">
            <Link to="/">
              <p className="text-4xl font-bold text-white mb-4">Evolve Farm</p>
            </Link>
            <p className="lg:w-3/4 text-sm">
              Empower your farm with our precision farming solution. From expert
              planting guidance to innovative harvest planning, our tools are
              designed to elevate your farming experience
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm mt-4">
            <span>Phone: +234 8100453289</span>
            <span>Email: info@Evolve.com</span>
          </div>
          <div className="flex gap-4 mt-4">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
        <p className="mt-8 text-center">&#169;Evolve farm 2023</p>
      </footer>
    </div>
  );
};

export default Homepage;
