import { NavLink } from "react-router-dom";
import homepic from "../assets/images/home page main image.png";

export const About = () => {
  return (
    <main>
      <div>
        <h1 className="text-2xl">What we do</h1>

        <br />

        <p className="text-justify">At Perficient Patterns & Cast , we specialize in bringing visions to life through Tensile Architecture design. From concept to fabrication, our team offers complete consultancy services, utilizing cutting-edge software and adhering to industry standards. Our mission is to craft atmospheres that reflect the essence of each property, employing advanced 3D modeling and creative expertise. With a flexible approach, we welcome captivating projects from across the globe.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={homepic} alt="fabricimagetop" />
      </div>

      <br />

      <div className="mt-10">
        <h1 className="text-2xl">Services we offer</h1>
      </div>

      <br />

      <div>
        <ul className="flex justify-between">
          <div>
            <li><NavLink to="/3dconceptdevelopment"><u>3D Concept Development</u></NavLink></li><br />
            <li><NavLink to="/rendering"><u>3D Renderings</u></NavLink></li><br />
            <li><a href=""><u>Structural Reactions and Analysis Report</u></a></li><br />
            <li><a href=""><u>Steel General Arrangement Drawing </u></a></li><br />
          </div>

          <div>
            <li><a href=""><u>Steel Fabrication Drawing</u></a></li><br />
            <li><a href=""><u>Fabric Form finding, Pattering & Nesting</u></a></li><br />
            <li><a href=""><u>Fabric Accessories and Quantity list</u></a></li>
          </div>
        </ul>
      </div>
    </main>
  )
}
