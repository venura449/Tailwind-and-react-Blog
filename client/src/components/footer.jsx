import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

export default function FooterComponent() {
  return (
    <Footer className="border border-t-8 border-teal-500 flex flex-col items-center justify-center">
      {/* Whole Div */}
      <div className="flex flex-col justify-center items-center">
        {/* Mid Whole */}
        <div className="mt-5 sm:flex sm:flex-row ">
          {/* Mid Left */}
          <div className="self-center">
            <Link
              to="/Home"
              className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Venu's
              </span>{" "}
              blog
            </Link>
          </div>

          {/* Mid Right */}
          <div className="flex sm:flex-1 sm:flex-row flex-col m-5">
            <div className="m-5 sm:mr-20">
              <div className="text-sm font-bold">About</div>
              <div>Javascript projects</div>
              <div>Python Projects</div>
            </div>

            <div className="m-5 sm:mr-20">
              <div className="text-sm font-bold">Projects</div>
              <div>Line Following Robot Arduino</div>
              <div>Self Driving Car using Javascript</div>
            </div>

            <div className="m-5 sm:mr-20">
              <div className="text-sm font-bold">Legal</div>
              <div>Privacy Policy</div>
              <div>Terms & conditions</div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col items-center justify-center mt-5">
          {/* Top */}
          <div className="flex flex-row gap-5">
            <Link to="https://wa.me/qr/DLIVG2CLY7TGD1" target="_blank">
              <FaWhatsapp /> {/* Whatsapp icon */}
            </Link>

            <Link
              to="https://www.instagram.com/venu_nasa?igsh=MXJ1eWxtNm1wNnF3eA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram /> {/* Instagram icon */}
            </Link>

            <Link to="https://github.com/venura449" target="_blank">
              <FaGithub /> {/* GitHub icon */}
            </Link>

            <Link to="mailto:venurajayasingha1@gmail.com?subject=About%20Website">
              <MdOutgoingMail /> {/* Email icon */}
            </Link>
          </div>

          {/* Bottom */}
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="text-md text-gray-600">2024 © Developed By "Venura Jayasingha"</div>
            <div>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
