import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

export default function FooterComponent() {
  return (
    <div>
      <Footer
        container
        className="border border-t-8 border-teal-500 flex sm:flex-row flex-col items-center justify-center"
      >
        <div>
          <Link
            to="/Home"
            className=" sm:self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
          >
            <span className="ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Venu's
            </span>{" "}
            blog
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row m-5">
          <div className="m-5">
            <div className="text-sm font-bold">About</div>
            <div>Javascript projects</div>
            <div>Python Projects</div>
          </div>

          <div className="m-5">
            <div className="text-sm font-bold">Projects</div>
            <div>Line Following Robot Arduino</div>
            <div>Self Driving Car using Javascript</div>
          </div>

          <div className="m-5">
            <div className="text-sm font-bold">Legal</div>
            <div>Privacy Policy</div>
            <div>Terms & conditions</div>
          </div>
        </div>
        <div className="flex flex-row  gap-3">
          <div>
            <Link to="https://wa.me/qr/DLIVG2CLY7TGD1"
            target="_blank">
              <FaWhatsapp /> {/* Whatsapp icon */}
            </Link>
          </div>

          <div>
            <Link to="https://www.instagram.com/venu_nasa?igsh=MXJ1eWxtNm1wNnF3eA%3D%3D&utm_source=qr"
            target="_blank">
              
            <FaInstagram /> {/* instgram icon */}
            </Link>
          </div>

          <div>
            <Link to="https://github.com/venura449"
            target="_blank">
              <FaGithub /> {/* GitHub icon */}
            </Link>
          </div>

          <div>
            <Link to="mailto:venurajayasingha1@gmail.com?subject=About%20Website">
              <MdOutgoingMail /> {/* Email icon */}
            </Link>
          </div>
        </div>
      </Footer>
    </div>
  );
}
