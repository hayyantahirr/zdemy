"use client";
import ContactCard from "@/components/contactUsComponents/ContactCard";
import Pagination from "@/components/Pagination";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form logic here
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    const data = {
      service_id: "service_bt91rjf", // from EmailJS
      template_id: "template_89nyp3r", // your auto reply template ID
      user_id: "weOrWij0wVzYHCqoz", // from EmailJS account
      template_params: {
        user_name: user_name.current?.value || "",
        user_email: user_email.current?.value || "",
        user_address: user_address.current?.value || "",
        position_name: position_name.current?.value || "",
        submission_date: currentDate,
        currentYear: new Date().getFullYear(),
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("EmailJS Response:", res.data);
      alert("Your application was submitted successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Pagination currentRoute="Contact us" />

      <div className="container mx-auto lg:p-25">
        <div className="flex flex-col items-center ">
          {/* Contact Info Section with Map */}
          <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.2}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mt-5">
                Contact & <span className="text-[#ff725e]">Find Us</span>
              </h2>
              <div className=" w-48 h-5 mx-auto">
                <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
                <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" duration={1.2} delay={0.4}>
            <div className="flex w-full flex-col lg:flex-row bg-[#ff725e] text-white rounded-md ">
              <div className="p-8 ">
                <div className="w-[80%] mx-auto">
                  <h2 className="text-2xl font-extrabold mb-6 text-[#22343D]">
                    CONTACT INFO
                  </h2>

                  <p className="mb-6 text-[#22343D]  font-semibold ">
                    You can always reach us via following contact details. We
                    will give our best to reach you as possible.
                  </p>

                  <div className="mb-4 flex ">
                    <span className="font-semibold text-[#22343D]">Phone:</span>
                    <div className="flex flex-col ml-5">
                      <p>+234 805 029 1265</p>
                      <p>+234 907 228 0656</p>
                    </div>
                  </div>

                  <div className="mb-4 flex ">
                    <span className="font-semibold text-[#22343D]">Email:</span>
                    <div className="flex flex-col ml-5">
                      <p>info20@gmail.com</p>
                      <p>info21@gmail.com</p>
                    </div>
                  </div>

                  <div className=" flex ">
                    <p className="font-semibold text-[#22343D]">Address:</p>
                    <p className="ml-5">
                      1 law castle agbole aro opp. fidelity bank omida,
                      abeokuta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full  bg-gray-200 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3230812419187!2d3.3416163!3d7.1551088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4cec798b9285%3A0x24e75dc4877a3c19!2sAbeokuta%2C%20Nigeria!5e0!3m2!1sen!2s!4v1654321234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </AnimateOnScroll>

          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Page;
