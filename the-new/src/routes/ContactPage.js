import React from 'react';
import { useLocation } from 'react-router';


function ContactPage() {
  const location = useLocation();

  const test = location.state
  return(
    <>
      Contact
      {test}
    </>
  )
}

export default ContactPage;