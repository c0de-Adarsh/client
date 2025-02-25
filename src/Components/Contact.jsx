import React from 'react';

function Contact() {
  const contacts = [
    {
      name: "Nishi Gupta",
      position: "Sales Executive",
      email: "nishi@brandgraphixdesign.in",
      phone: "+91 911 891 1172"
    },
    {
      name: "Disha Singh",
      position: "Sales Executive",
      email: "disha@brandgraphixdesign.in",
      phone: "+91 911 891 1171"
    }
  ];

  return (
    <div className=" bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#3D0000]">Our Contacts</h1>
          <div className="w-48 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#3D0000] mb-2">{contact.name}</h2>
              <p className="text-gray-600 mb-2">{contact.position}</p>
              <a href={`mailto:${contact.email}`} className="text-blue-600 block mb-2">
                {contact.email}
              </a>
              <p className="text-gray-800 mb-6">{contact.phone}</p>
              <button className="bg-[#3D0000] text-white px-8 py-3 rounded font-semibold hover:bg-[#2D0000] transition-colors">
                Call Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;