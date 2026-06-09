import { useEffect, useState } from "react";
import { getProfile } from "../services/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function EditProfile() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
    instagram: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();

      setForm({
        name: res.data.name || "",
        title: res.data.title || "",
        description: res.data.description || "",
        phone: res.data.phone || "",
        email: res.data.email || "",
        location: res.data.location || "",
        linkedin: res.data.linkedin || "",
        github: res.data.github || "",
        instagram: res.data.instagram || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Data:", form);

    alert("Profile Updated Successfully");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-6">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-3xl opacity-20 rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-600 blur-3xl opacity-20 rounded-full bottom-0 right-0"></div>

      <motion.form
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full max-w-2xl text-white shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Edit Profile
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Update your profile information
        </p>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Professional Title"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <h2 className="text-lg font-semibold pt-4">
            Social Profiles
          </h2>

          <input
            type="url"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="url"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

          <input
            type="url"
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram URL"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 hover:border-purple-400 focus:border-purple-400 outline-none transition-all"
          />

        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          type="submit"
          className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
        >
          Save Changes
        </motion.button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full mt-3 bg-white/10 hover:bg-white/20 py-3 rounded-xl transition-all"
        >
          Back to Profile
        </button>

      </motion.form>
    </div>
  );
}

export default EditProfile;