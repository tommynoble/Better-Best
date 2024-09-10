import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SiteMap from '../components/SiteMap';
import Container from '../components/Container';

const ApplyForCare = () => {
  const form = useRef();
  const btnRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    btnRef.current.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_pbu6m34';
    const userID = '4vIgrg82Tt_S-6qpT';

    const formData = {
      from_name: e.target.first_name.value + ' ' + e.target.last_name.value,
      to_name: "Better Best Team",
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      age: e.target.age.value,
      sex: e.target.sex.value,
      address: e.target.address.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      user_email: e.target.user_email.value,
      department: e.target.department.value,
      appointment_date: e.target.appointment_date.value,
      problem: e.target.problem.value,
      remark: e.target.remark.value,
      reply_to: e.target.user_email.value, // EmailJS reply-to field
    };

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then(() => {
        btnRef.current.value = 'GET IN APPOINTMENT';
        setPopupMessage('Reservation request sent successfully! We will contact you soon.');
        setShowPopup(true);
      }, (err) => {
        btnRef.current.value = 'GET IN APPOINTMENT';
        setPopupMessage('Failed to send reservation request. Please try again later.');
        setShowPopup(true);
      });

    e.target.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SiteMap />
        <div className="container mx-auto py-24  max-sm:p-4">
          <div className="container max-w-1280 mx-auto p-4 mt-0">
            <h1 className="text-5xl  max-sm:text-4xl font-extrabold text-primary text-center mb-6">Apply for Care</h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Apply today to receive personalized, compassionate in-home care tailored to your unique needs and well-being.
            </p>
          </div>
          <h3 className="text-xl font-bold mt-10">Personal Information</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="text" name="first_name" id="firstName" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="text" name="last_name" id="lastName" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">Age</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="number" name="age" id="age" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="sex">Sex</label>
                <select className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" name="sex" id="sex" required>
                  <option>Select Sex</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="address">Address</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="text" name="address" id="address" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="city">City</label>
                <select className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" name="city" id="city" required>
                  <option>Select City</option>
                  <option>Option One</option>
                  <option>Option Two</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Phone/Mobile</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="number" name="phone" id="phone" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="email" name="user_email" id="email" required />
              </div>
            </div>
            <h3 className="text-xl font-bold mt-10">Services Needed</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="department">Department</label>
                <select className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" name="department" id="department" required>
                  <option>Select Service</option>
                  <option>Personal Care</option>
                  <option>Companion Care</option>
                  <option>Live-In</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="appointmentDate">Date of Service</label>
                <input className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg" type="date" name="appointment_date" id="appointmentDate" required />
              </div>
            </div>
            <h3 className="text-xl font-bold mt-10">Your Message</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="problem">Describe Services Needed</label>
                <textarea className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg h-64" name="problem" id="problem" required></textarea>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="remark">Special Request</label>
                <textarea className="appearance-none border w-full py-4 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-primary focus:border-primary rounded-lg h-64" name="remark" id="remark"></textarea>
              </div>
            </div>
            <div className="flex mt-12">
              <input
                ref={btnRef}
                type="submit"
                value="Apply for Care"
                className="bg-primary hover:bg-green-700 duration-150 text-white font-bold py-4 px-8 text-center mx-auto cursor-pointer rounded-lg"
                id="button"
              />
            </div>
          </form>
        </div>

        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-secondary text-white p-4 rounded-lg shadow-lg z-50">
            {popupMessage}
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default ApplyForCare;
