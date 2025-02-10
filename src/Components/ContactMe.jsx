"use client";

import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactMe = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message cannot be empty"),
  });

  return (
    <motion.div
      id="contactme"
      className="lg:px-[96px] md:px-[64px] sm:px-4 flex flex-col items-center gap-12 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg sm:text-xl font-medium uppercase">Contact Me</p>
        <h3 className="text-3xl sm:text-5xl font-medium text-[#9024B6]">
          Let’s Connect
        </h3>
        <p className="text-center max-w-2xl">
          Have a project in mind or just want to say hello? Feel free to get in
          touch!
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12">
        {/* Personal Details */}
        <motion.div
          className="md:w-1/2 space-y-4 text-center flex flex-col justify-between"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#AC5BC8]">
            Personal Details
          </h2>
          <p className="text-base">
            <span className="font-semibold">Phone:</span> <br />
            +92 302 786004 <br />
            +92 302 780007
          </p>
          <p className="text-base">
            <span className="font-semibold">Email:</span> <br />
            hammadmasood038@gmail.com
          </p>
          <p className="text-base">
            <span className="font-semibold">Address:</span> <br />
            House 188, Street No 1, New Satellite Town, <br />
            Sargodha
          </p>
        </motion.div>

        {/* Contact Form with Formik */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted:", values);
              alert("Message Sent Successfully!");
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name here"
                    className="bg-[#F5F5F5] rounded-2xl h-[60px] px-4 text-black w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="bg-[#F5F5F5] rounded-2xl h-[60px] px-4 text-black w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Write Something...."
                    className="bg-[#F5F5F5] rounded-2xl h-[120px] px-4 py-2 resize-none text-black w-full"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    className="bg-[#9024B6] text-white font-medium py-3 rounded-2xl w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
