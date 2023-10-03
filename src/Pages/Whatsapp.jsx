import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
const Whatsapp = ({ phoneNumber }) => {
  return (
    <div className="text-cols">
      <FloatingWhatsApp phoneNumber={phoneNumber} accountName="KRIYA"  />
      </div>
  );
};

export default Whatsapp;
