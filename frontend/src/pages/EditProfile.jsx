import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function EditProfile() {
  const [form, setForm] = useState({
  name: "",
  title: "",
  about: "",
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
      setForm(res.data || {});
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await updateProfile(form);

    alert("Profile Updated Successfully 🚀");

    navigate("/");
  } catch (err) {
    console.log(err);

    alert("Failed to update profile");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-6">

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Edit Profile Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">

        {/* LEFT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl h-full"
        >

          <h2 className="text-lg font-semibold text-purple-300 mb-4">
            Edit Details
          </h2>

          <div className="space-y-4">

            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="Job Title" name="title" value={form.title} onChange={handleChange} />

            <TextArea
  label="About Me"
  name="about"
  value={form.about}
  onChange={handleChange}
/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
              <Input label="Email" name="email" value={form.email} onChange={handleChange} />
              <Input label="Location" name="location" value={form.location} onChange={handleChange} />
            </div>

            <h3 className="text-purple-300 font-semibold mt-4">Social Links</h3>

            <Input label="LinkedIn" name="linkedin" value={form.linkedin} onChange={handleChange} />
            <Input label="GitHub" name="github" value={form.github} onChange={handleChange} />
            <Input label="Instagram" name="instagram" value={form.instagram} onChange={handleChange} />

          </div>

          <motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl font-semibold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.6)] transition-all duration-300"
>
  Save Changes 🚀
</motion.button>
        </motion.form>

        {/* RIGHT SIDE - LIVE PREVIEW */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
 className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col items-center text-center h-full justify-between"
>
  <div className="w-full text-center mb-6"></div>
  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
    Live Preview
  </h2>

  <p className="text-sm text-gray-400 mt-2 mb-8">
    See how your profile will appear after saving changes
  </p>

  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold mb-5 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
    {form.name
      ? form.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      : "U"}
  </div>

  <h2 className="text-2xl font-bold">
    {form.name || "Your Name"}
  </h2>

  <p className="text-purple-300 mt-1">
    {form.title || "Your Title"}
  </p>

  <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 w-full">
    <p className="text-sm text-gray-400 mb-2">
      About Me
    </p>

    <p className="text-gray-300 text-sm leading-7 max-h-32 overflow-hidden">
      {form.about || "Your About Me section will appear here..."}
    </p>
  </div>

  <div className="grid gap-3 mt-6 w-full text-sm text-gray-300">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
      📞 {form.phone || "Phone"}
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 break-all">
      📧 {form.email || "Email"}
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
      📍 {form.location || "Location"}
    </div>

  </div>
          <div className="flex gap-4 mt-6">

  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-500/30">
    <FaLinkedin className="text-blue-400 text-xl" />
  </div>

  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20">
    <FaGithub className="text-white text-xl" />
  </div>

  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-500/20 border border-pink-500/30">
    <FaInstagram className="text-pink-400 text-xl" />
  </div>

</div>

          <button
  onClick={() => navigate("/")}
  className="mt-8 w-full bg-white/10 border border-white/20 hover:bg-white/20 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
>
  ← Back to Profile
</button>
<div className="mt-6 w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4">
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <p className="text-sm text-gray-400">
      Changes will be reflected instantly on your profile page after saving.
    </p>
  </div>
</div>

        </motion.div>

      </div>
    </div>
  );
}

/* INPUT COMPONENT */
const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-300">{label}</label>
    <input
      {...props}
     className="w-full p-4 rounded-2xl bg-white/5 border border-white/10
focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30
outline-none transition-all duration-300 hover:border-white/20"
    />
  </div>
);

/* TEXTAREA */
const TextArea = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-300">{label}</label>
    <textarea
  {...props}
  rows="5"
  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10
  focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30
  outline-none transition-all duration-300 hover:border-white/20 resize-none"
/>
  </div>
);

/* SOCIAL ICON BUTTON */
const Social = ({ label }) => (
  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
    {label}
  </div>
);

export default EditProfile;