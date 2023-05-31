import React from "react";
import { Link } from "react-router-dom";
import facebook_dark_theme from "../assets/images/facebook_dark_theme.svg";
import instagram_dark_theme from "../assets/images/instagram_dark_theme.svg";
import twitter_dark_theme from "../assets/images/twitter_dark_theme.svg";
import aboutimg from "../assets/images/aboutimg.jpg";
import logo_branca from "../assets/images/logo_branca.svg";



const MobHome = () => {
  return (
    <div className="flex flex-col items-center bg-cover min-h-[80vh]" style={{backgroundImage: `url(${aboutimg})`}}>
      <div>
      <img className="h-80 w-80 mr-5" src={logo_branca} alt="Logo" />
      </div>

      <div>
        <Link className="" to="/LoginPage">
          <button className="font-bold px-12 py-3 mb-12 bg-white rounded uppercase">
            Connect
          </button>
        </Link>
      </div>

      <div className="flex">
        <div>
          <img className="h-14 w-14  m-2" src={facebook_dark_theme} alt="Logo" />
        </div>

        <div>
          <img className="h-14 w-14 m-2" src={twitter_dark_theme} alt="Logo" />
        </div>

        <div>
          <img className="h-14 w-14  m-2" src={instagram_dark_theme} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default MobHome;
