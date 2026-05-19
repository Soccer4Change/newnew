import React from "react";

export default function Register() {
  const camps = [
    {
      name: "Soccer Training Camp",
      description:
        "Sign up today to secure your spot in our free soccer camp! Our camp is open to all skill levels, with players grouped accordingly and coached by top-tier high school athletes from premier and select teams. Whether your child is looking to sharpen their skills with position-specific training or just wants to have fun and learn the game, there’s a place for everyone. Along the way, campers will build confidence, make new friends, and be guided by mentors who care about growth both on and off the field.",
      image: "Purchase Camp.webp",
      date: "October 4-25th on Saturdays from 3-5PM",
      location: "Enatai Elementary School, Bellevue, WA",
      price: "Free",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSewtSg3kTJEKceTCQYMwNO0FAo-V60KeS1X_LDXeXIqnjPgew/viewform",
      buttonText: "Camp No Longer Available",
      disabled: true,
    },
    {
      name: "Mid-Winter Break Camp",
      description:
        "This camp is designed for kids ages 7-12 of all skill levels. Participants will train in small groups with focused drills and competitive games, while meeting new people and developing their skills. Our camps are taught by varsity and premier high school athletes.",
      image: "Purchase Camp.webp",
      date: "Febuary 16th-20th, 9 AM-11 AM",
      location: "Enatai Elementary School, 10700 SE 25th St, Bellevue, WA 98004",
      price: "Free",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdbv9lFuyIwjGQfyznXIrWE-NzgNnjFSBu_P4vMtn3j0eckdw/viewform",
      buttonText: "Register Now",
      disabled: false, 
    },
  ];

  const handleRegister = (formLink, disabled) => {
    if (disabled) return; // do nothing if disabled
    window.open(formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8 sm:px-24">
      <h1 className="text-4xl font-semibold text-center text-emerald-600 mb-12">
        Camp Registration
      </h1>

      {camps.map((camp, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden transition-transform hover:scale-105 mb-8"
        >
          {/* Image */}
          <img
            className="w-full md:w-64 h-56 object-cover"
            src={camp.image}
            alt={camp.name}
            loading="lazy"
          />

          {/* Details */}
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {camp.name}
              </h2>
              <p className="text-gray-600 mt-2">{camp.description}</p>

              {/* Date, Location, Price */}
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-700">
                <div className="flex items-center">
                  📅 <span className="ml-1 font-semibold">{camp.date}</span>
                </div>
                <div className="flex items-center">
                  📍 <span className="ml-1 font-semibold">{camp.location}</span>
                </div>
                <div className="flex items-center">
                  💰{" "}
                  <span className="ml-1 font-semibold">
                    {camp.price} for all participants
                  </span>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button
              onClick={() => handleRegister(camp.formLink, camp.disabled)}
              disabled={camp.disabled}
              className={`mt-6 text-white font-semibold py-3 px-6 rounded-md transition ${
                camp.disabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {camp.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
