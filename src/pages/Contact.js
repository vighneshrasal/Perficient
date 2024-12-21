import fblogo from "../assets/logos/facebook.png";
import instalogo from "../assets/logos/instagram.png";

export const Contact = () => {
  return (
    <main className="flex flex-col justify-between pb-36">
      <div>
        <h1 className="text-2xl text-center">Connect With Us</h1>
      </div>
      
      <div className="flex justify-evenly items-center">
        <div>
          <div>
            <span>email - </span>
            <a href="mailto:perficient6262@gmail.com" className="hover:underline me-4 md:me-6">perficient6262@gmail.com</a>
          </div>

          <br />

          <div>
            <span>Contact - 9892127608</span>
          </div>

          <br />

          <div className="flex">
            <a href=""><img className="max-w-10" src={fblogo} alt="fblogo" /></a>
            <a href="" className="pt-2 pl-2"><span>Perficient Creations</span></a>
          </div>
          <br />
          <div className="flex">
            <a href=""><img className="max-w-10" src={instalogo} alt="fblogo" /></a>
            <a href="" className="pt-2 pl-2"><span>Perficient Patterns & Cast</span></a>
          </div>
        </div>

        <div className="max-w-80">
          <p className="italic">"We're dedicated to your project's success. Offering support through phone consultations, site visits, and meetings, we ensure seamless coordination from start to finish, making sure every detail is taken care of until the project is completed and handed over."</p>
        </div>
      </div>

    </main>
  )
}
