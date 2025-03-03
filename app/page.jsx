import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import { Social } from "../components/Social";
import { Photo } from "../components/Photo";
import { Stats } from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer & Designer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br></br>
              <span className="text-accent">Barkat Singh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              "Combining technical expertise with creative vision, I craft
              digital experiences that are functional, user-friendly, and
              visually engaging. Whether building full-stack applications,
              designing intuitive interfaces, or creating immersive game worlds,
              I thrive at the intersection of design and technology."
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Adding a Downlaod Link */}
              <a
                href="assets/Resume/Resume Barkat Singh.pdf"
                download="Barkat-Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 text-white hover:text-black"
                >
                  <span>Download Resumé</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social></Social>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
            {/* ERROR WHEN RENDERIng PHOTO */}
          </div>
        </div>
      </div>

      <Stats></Stats>
    </section>
  );
};

export default Home;
