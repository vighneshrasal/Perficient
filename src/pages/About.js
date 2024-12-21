import homepic from "../assets/images/home page main image.png";

export const About = () => {
  return (
    <main className="">
      <div className="no-scrollbar">
        <h1 className="text-2xl">What we do</h1>

        <br />

        <p className="text-justify">At Perficient Patterns & Cast , we specialize in bringing visions to life through Tensile Architecture design. From concept to fabrication, our team offers complete consultancy services, utilizing cutting-edge software and adhering to industry standards. Our mission is to craft atmospheres that reflect the essence of each property, employing advanced 3D modeling and creative expertise. With a flexible approach, we welcome captivating projects from across the globe.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={homepic} alt="fabricimagetop" />
      </div>

      <br />

      
    </main>
  )
}
