import { useState } from "react";

export default function Donations() {
  const donors = [
    {
      name: "Thunderbird Foundation Grant",
      amount: "$500",
      description: "Supporting community soccer coaching programs.",
      logo: "thunderbirdlogo.png",
    },
    {
      name: "City of Bellevue Community Programming Fund",
      amount: "$1,000",
      description: "Helping expand equal-access soccer opportunities.",
      logo: "logo_bellevue.webp",
    },
    {
      name: "Google Ad Grants",
      amount: "$13,000",
      description: "Advertising to expand nonprofit missions.",
      logo: "googlelogo.webp",
    }
  ];

  return (
    <div className="flex flex-col gap-16 px-8 sm:px-16 md:px-24 py-12 animate-fade-in">
      {/* Top message */}
      <section className="text-left max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Thank You to All Our Donors!
        </h1>
        <p className="text-gray-700 text-lg text-center">
          Your generous support helps us provide accessible soccer coaching to
          youth with equal opportunity, fostering skills, confidence, and
          teamwork for all.
        </p>
      </section>

      {/* Donations box */}
      <section className="bg-white p-10 rounded-lg shadow-md w-full flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-semibold text-emerald-600">Donations</h2>
        <p className="text-gray-700 text-lg text-center max-w-2xl">
          Every donation helps us make soccer more inclusive and impactful.
          Thank you for contributing to our mission!
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Left side: GiveButter */}
          <div className="flex flex-col gap-6 items-center">
            <a
              href="https://givebutter.com/soccerforchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-semibold underline hover:text-emerald-700"
            >
              Donate via GiveButter
            </a>
            <div className="flex flex-col items-center">
              <img
                src="givebutter-qr.png"
                alt="GiveButter QR code"
                className="w-48 h-48 object-contain"
                loading="lazy"
              />
              <p className="mt-2 text-gray-600 text-center">
                Scan to donate with GiveButter
              </p>
            </div>
          </div>

          {/* Right side: Mailing address + EIN */}
          <div className="flex flex-col gap-8 items-center">
            <div className="text-center">
              <h3 className="font-semibold text-emerald-600">
                Mailing Address for Checks:
              </h3>
              <address className="not-italic text-gray-700">
                Soccer for Change <br />
                10510 NE 24th St <br />
                Bellevue, WA 98004
              </address>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-emerald-600">EIN:</h3>
              <p className="text-gray-700">99-0417811</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grants section */}
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-semibold text-emerald-600">
          Our Grants
        </h2>
        <p className="text-gray-700 text-lg text-center max-w-2xl">
          We are deeply grateful to the organizations that make our programs
          possible through their generous grants.
        </p>

        {/* Donors grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {donors.map((donor, i) => (
            <DonorCard key={i} {...donor} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DonorCard({ name, amount, description, logo }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-72 flex flex-col gap-4 hover:scale-[1.05] transition-transform duration-300">
      {logo && (
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-16 w-auto object-contain mx-auto"
          loading="lazy"
        />
      )}
      <h3 className="font-semibold text-emerald-600 text-lg text-center">
        {name}
      </h3>
      <p className="text-gray-700 font-semibold text-center">{amount}</p>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
}



