import { useEffect, useState } from "react";
import { getProfile } from "../services/api";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function ViewProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-3xl animate-pulse">Loading Profile...</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-10 px-4">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600 blur-3xl opacity-20 rounded-full -top-32 -left-32"></div>
      <div className="absolute w-[450px] h-[450px] bg-blue-600 blur-3xl opacity-20 rounded-full -bottom-32 -right-32"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-white"
        >

          {/* Profile */}
          <div className="flex flex-col items-center">

            <img
              src={profile.photo}
              alt={profile.name}
              className="w-40 h-40 rounded-full border-4 border-purple-400 object-cover shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            />

            <TypeAnimation
              sequence={[profile.name, 2500]}
              wrapper="h1"
              speed={50}
              repeat={0}
              className="text-5xl font-bold mt-5 text-center"
            />

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl text-purple-300 mt-3 font-semibold"
            />

            <p className="text-center text-gray-300 mt-5 max-w-3xl leading-8">
              {profile.description}
            </p>

          </div>

          {/* About */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              About Me
            </h2>

            <div className="bg-white/10 rounded-xl p-5 text-gray-300 leading-8">
              {profile.about}
            </div>

          </div>

          {/* Skills */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {profile.skills?.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    rotate: 3
                  }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-sm cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                  y: -12
                }}
                whileTap={{
                  scale: 0.97
                }}
                className="bg-white/10 p-4 rounded-xl cursor-pointer border border-purple-500/20 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              >
                📞 {profile.phone}
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                  y: -12
                }}
                whileTap={{
                  scale: 0.97
                }}
                className="bg-white/10 p-4 rounded-xl break-all cursor-pointer border border-purple-500/20 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              >
                📧 {profile.email}
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                  y: -12
                }}
                whileTap={{
                  scale: 0.97
                }}
                className="bg-white/10 p-4 rounded-xl cursor-pointer border border-purple-500/20 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              >
                📍 {profile.location}
              </motion.div>

            </div>

          </div>

          {/* Social */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4 text-center">
              Social Profiles
            </h2>

            <div className="flex justify-center gap-8 text-4xl">

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-150 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 hover:scale-150 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 hover:scale-150 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-10">

            <motion.a
              whileHover={{
                scale: 1.06,
                y: -4
              }}
              whileTap={{
                scale: 0.96
              }}
              href={`tel:${profile.phone}`}
              className="bg-green-600 hover:bg-green-700 text-center py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
            >
              📞 Call Me
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.06,
                y: -4
              }}
              whileTap={{
                scale: 0.96
              }}
              href={`mailto:${profile.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              📧 Email Me
            </motion.a>

          </div>

          <Link to="/edit">
            <motion.button
              whileHover={{
                scale: 1.03,
                y: -4
              }}
              whileTap={{
                scale: 0.97
              }}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
            >
              Edit Profile
            </motion.button>
          </Link>

        </motion.div>

      </div>
    </div>
  );
}

export default ViewProfile;