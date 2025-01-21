import fblogo from "../assets/logos/facebook.png";
import instalogo from "../assets/logos/instagram.png";
import email from "../assets/logos/message.png";
import contact from "../assets/logos/viber.png";

export const Contact = () => {
  return (
    <main className="flex flex-col justify-between pb-36">
      <div>
        <h1 className="text-2xl text-center">Connect With Us</h1>
      </div>

      <div className="md:flex justify-evenly items-center">
        <div>
          <div className="flex">
            <a href="mailto:gkenterprises0119@gmail.com"><img className="max-w-10" src={email} alt="email" /></a>
            <a href="mailto:gkenterprises0119@gmail.com" className="pt-2 pl-2"><span>gkenterprises0119@gmail.com</span></a>
          </div>

          <br />

          <div className="flex">
            <img className="max-w-10" src={contact} alt="contact" />
            <span className="pt-2 pl-2">9892127608</span>
          </div>

          <br />

          <div className="flex">
            <a href="https://www.bing.com/search?q=facebook&filters=ufn%3a%22Facebook%22+sid%3a%224bc8f781-7083-d1a0-f781-9466e0eb62e7%22&asbe=SS&qs=MB&pq=face&sc=8-4&cvid=C36E9813C52F410D99A9FF091D824F16&FORM=QBRE&sp=1&ghc=1&lq=0"><img className="max-w-10" src={fblogo} alt="fblogo" /></a>
            <a href="https://www.bing.com/search?q=facebook&filters=ufn%3a%22Facebook%22+sid%3a%224bc8f781-7083-d1a0-f781-9466e0eb62e7%22&asbe=SS&qs=MB&pq=face&sc=8-4&cvid=C36E9813C52F410D99A9FF091D824F16&FORM=QBRE&sp=1&ghc=1&lq=0" className="pt-2 pl-2"><span>Perficient Creations</span></a>
          </div>
          <br />
          <div className="flex">
            <a href="https://www.bing.com/search?q=instagram&filters=ufn%3a%22Instagram%22+sid%3a%22a2113d26-7976-df57-241f-77b7bbb1b4f7%22&asbe=HS&qs=MB&pq=inst&sc=8-4&cvid=7BCEF1863CB14765B9DC86BDAFC7AE72&FORM=QBRE&sp=1&ghc=1&lq=0"><img className="max-w-10" src={instalogo} alt="instalogo" /></a>
            <a href="https://www.bing.com/search?q=instagram&filters=ufn%3a%22Instagram%22+sid%3a%22a2113d26-7976-df57-241f-77b7bbb1b4f7%22&asbe=HS&qs=MB&pq=inst&sc=8-4&cvid=7BCEF1863CB14765B9DC86BDAFC7AE72&FORM=QBRE&sp=1&ghc=1&lq=0" className="pt-2 pl-2"><span>Perficient Patterns & Cast</span></a>
          </div>
        </div>

        <div className="max-w-80 md:pt-8">
          <p className="italic">"We're dedicated to your project's success. Offering support through phone consultations, site visits, and meetings, we ensure seamless coordination from start to finish, making sure every detail is taken care of until the project is completed and handed over."</p>
        </div>
      </div>

    </main>
  )
}
