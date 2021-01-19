import React from 'react';

import SectionHeading from 'src/components/SectionHeading';
import ContactInfo from './ContactInfo';
import Contact from './Contact';

const ContactUs = () => {
  return (
    <section className="contact-us pt-12">
      <SectionHeading
        title="Contact With Us"
        description="Your next level Product developemnt company assets"
      />
      <ContactInfo />
      <Contact />
    </section>
  );
};

export default ContactUs;
