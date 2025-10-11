"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactCard = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  // 🧠 handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // 📧 basic email validation
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // 🚀 handle form submit
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!isValidEmail(email)) newErrors.email = "Enter a valid email.";
    if (!message.trim()) newErrors.message = "Message is required.";
    else if (message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        "service_bt91rjf", // your service ID
        "template_89nyp3r", // your template ID
        formRef.current,
        "weOrWij0wVzYHCqoz" // your public key
      );

      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus(
        err?.text ||
          "Something went wrong. Please try again later. ❌"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8 mb-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Get In <span className="text-[#ff725e]">Touch</span>
        </h2>
        <div className="w-48 h-5 mx-auto">
          <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded"></div>
          <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
        </div>
      </div>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <input
            ref={nameRef}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            className={`w-full p-5 bg-gray-100 rounded-md focus:outline-none ${
              errors.name ? "border border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-5 bg-gray-100 rounded-md focus:outline-none ${
              errors.email ? "border border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-5 bg-gray-100 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <textarea
            ref={messageRef}
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Message here..."
            rows="6"
            className={`w-full p-5 bg-gray-100 rounded-md focus:outline-none ${
              errors.message ? "border border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#2d3748] text-white py-3 px-8 rounded-md transition-colors ${
              isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-[#1a202c]"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </div>

        {status && (
          <p
            className={`text-center mt-4 ${
              status.includes("✅")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactCard;
