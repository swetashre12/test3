'use client';

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import './ContactForm.css'

type FormFields = {
  firstname: string;
  lastname: string;
  useremail: string;
  phone: string;
  message: string;
  service: string;
};

type Errors = Partial<Record<keyof FormFields, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormFields>({
    firstname: "",
    lastname: "",
    useremail: "",
    phone: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormFields]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): Errors => {
    const formErrors: Errors = {};
    if (!formData.firstname) formErrors.firstname = "First name is required";
    if (!formData.lastname) formErrors.lastname = "Last name is required";
    if (!formData.useremail) formErrors.useremail = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.service) formErrors.service = "Service selection is required";

    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const userID = "Xxqs16cfH1fyhjbKZ";
    const serviceID = "service_6tw5yoq";
    const templateID = "template_u5u3wml";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        toast.success(
          "Thank you for reaching out to Neelgai. We will get back to you as soon as we can."
        );
        setFormData({
          firstname: "",
          lastname: "",
          useremail: "",
          phone: "",
          message: "",
          service: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send email.");
      });
  };

  return (
    <div className="form_box text-center">
     <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form_inputs_box">
                    <div className="form_user_info row">
                      <div className="input_container col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className={errors.firstname ? "error" : ""}
                          />
                        </div>
                        {errors.firstname && (
                          <div className="error-message">
                            {errors.firstname}
                          </div>
                        )}
                      </div>
                      <div className="input_container col-md-6 pt-4 pt-md-0">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className={errors.lastname ? "error" : ""}
                          />
                        </div>
                        {errors.lastname && (
                          <div className="error-message">{errors.lastname}</div>
                        )}
                      </div>
                    </div>
                    <div className="form_user_info row">
                      <div className="input_container col-md-6 mt-4 pt-2">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Email"
                            name="useremail"
                            value={formData.useremail}
                            onChange={handleChange}
                            className={errors.useremail ? "error" : ""}
                          />
                        </div>
                        {errors.useremail && (
                          <div className="error-message">
                            {errors.useremail}
                          </div>
                        )}
                      </div>
                      <div className="input_container col-md-6 my-4 py-2">
                        <div className="form-group">
                          <input
                            type="tel"
                            placeholder="Phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? "error" : ""}
                          />
                        </div>
                        {errors.phone && (
                          <div className="error-message">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="input_container ">
                      <select
                        id="selectOption"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={errors.service ? "error" : ""}
                      >
                        <option value="" disabled>
                          Select a service *
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Android/IOS Development">
                          Android/IOS Development
                        </option>
                        <option value="Web App Development">
                          {" "}
                          Web App Development
                        </option>
                        <option value="Infrastructure Management">
                          Infrastructure Management
                        </option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                      {errors.service && (
                        <div className="error-message">{errors.service}</div>
                      )}
                    </div>
                    <div className="input_container my-4 py-2">
                      <textarea
                        id="textarea"
                        placeholder="Additional Information"
                        rows={8}
                        cols={50}
                        className={`w-100 pt-3 plmessage ${
                          errors.message ? "error" : ""
                        }`}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <div className="error-message">{errors.message}</div>
                      )}
                    </div>
                  </div>
                  <button
                    className="btn btn-info my-3 my-md-5 "
                    type="submit"
                    value="Send"
                  >
                    Send
                  </button>
                </form>
      <ToastContainer className="custom-toast" />
    </div>
  );
};

export default ContactForm;
