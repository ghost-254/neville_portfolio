"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (360) 200-6874",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jasperjasmin@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Vancouver, Washington, USA",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSelectChange = (value) => {
    if (!formData.services.includes(value)) {
      setFormData({ ...formData, services: [...formData.services, value] });
    }
  };

  const removeService = (service) => {
    setFormData({
      ...formData,
      services: formData.services.filter((item) => item !== service),
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsLoading(true);

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setIsLoading(false);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        },
        (error) => {
          setIsLoading(false);
          alert("Failed to send the message, please try again later.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Hello and welcome to my corner! Are you interested in collaborating on a specific project? No problem. 
                Simply fill in your details and type your message below. I will respond to you as soon as possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                {emailError && <p className="text-red-500">{emailError}</p>}
                <PhoneInput
                  country={'us'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                  containerStyle={{
                    width: '100%',
                }}
                inputStyle={{
                  backgroundColor: '#27272c', // Match background color of other inputs
                  color: '#fff',              // Text color
                  borderColor: '#4b5563',     // Border color to match others
                  paddingLeft: '48px',        // Adjust padding to make space for the flag
                  height: '40px',             // Match the height of other input fields
                  borderRadius: '0.375rem',   // Match border-radius of other input fields
                  fontSize: '1rem',           // Font size to match other inputs
                }}
                buttonStyle={{
                  backgroundColor: '#27272c', // Match button background color to input
                  borderColor: '#4b5563',     // Match border color
                  padding: '0',               // Remove extra padding for better alignment
                  marginLeft: '0px', 
                  height: '40px',             // Match the height of other input fields
                  borderRadius: '0.375rem'        // Adjust margin to align with input field
                }}
                dropdownStyle={{
                  backgroundColor: '#27272c', // Dropdown background color
                  color: '#fff',              // Text color in dropdown
                }}
              />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="SEO Services">SEO Services</SelectItem>
                    <SelectItem value="Freelance & Research Work">Freelance & Research Work</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Display selected services */}
              <div className="mt-4">
                {formData.services.map((service, index) => (
                  <div key={index} className="inline-block bg-green-600 text-white px-3 py-1 rounded-full m-1">
                    {service}
                    <MdClose
                      className="inline ml-2 cursor-pointer"
                      onClick={() => removeService(service)}
                    />
                  </div>
                ))}
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Loader and Success Message Popup */}
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="p-6 bg-gray-800 text-green-500 rounded-lg">
              <p>Sending message...</p>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="p-6 bg-gray-800 text-white rounded-lg flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-500 text-2xl" />
              <p>Message Sent!</p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
