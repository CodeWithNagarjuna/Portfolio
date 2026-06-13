import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { SiCodepen } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <h4 className="text-6xl font-bold mb-6">
        CONTACT
      </h4>

      <p className="text-gray-400 text-lg mb-12">
        Let's connect and build something meaningful together.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <a
          href="mailto:yannanagarjunareddy@gmail.com"
          className="glass rounded-2xl p-6 flex items-center gap-4"
        >
          <FaEnvelope size={24} />
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-gray-400">
              yannanagarjunareddy@gmail.com
            </p>
          </div>
        </a>

        <a
          href="tel:+918688701104"
          className="glass rounded-2xl p-6 flex items-center gap-4"
        >
          <FaPhone size={24} />
          <div>
            <h3 className="font-bold">Phone</h3>
            <p className="text-gray-400">
              +91 8688701104
            </p>
          </div>
        </a>

        <a
          href="https://github.com/CodeWithNagarjuna"
          target="_blank"
          rel="noreferrer"
          className="glass rounded-2xl p-6 flex items-center gap-4"
        >
          <FaGithub size={24} />
          <div>
            <h3 className="font-bold">GitHub</h3>
            <p className="text-gray-400">
              github.com/CodeWithNagarjuna
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/nagarjuna-reddy-yanna-5a4233379/"
          target="_blank"
          rel="noreferrer"
          className="glass rounded-2xl p-6 flex items-center gap-4"
        >
          <FaLinkedin size={24} />
          <div>
            <h3 className="font-bold">LinkedIn</h3>
            <p className="text-gray-400">
              Connect with me
            </p>
          </div>
        </a>

        <div className="flex justify-center md:col-span-2">
  <a
    href="https://codepen.io/Nagarjuna1366"
    target="_blank"
    rel="noreferrer"
    className="glass rounded-2xl p-6 flex items-center gap-4 w-full md:w-[500px]"
  >
    <SiCodepen size={24} />
    <div>
      <h3 className="font-bold">CodePen</h3>
      <p className="text-gray-400">
        codepen.io/Nagarjuna1366
      </p>
    </div>
  </a>
</div>

      </div>
    </section>
  );
}