"use client";

const boardOfDirectors = [
  { name: "Mr. Arun Pradeep", role: "Founder & CEO, Global" },
  { name: "Mr. Emmanuel Mani", role: "Co-Founder & CTO, Global" },
  {
    name: "Mr. Ravindran Subramaniam",
    role: "Co-Founder & Head of Client Engagements, USA",
  },
  {
    name: "Mrs. Tabitha Emmanuel",
    role: "Co-Founder & Head of Security & Compliances, Global",
  },
  {
    name: "Mr. Praveen Kumar",
    role: "Regional Head of Business Development, India",
  },
];

const advisoryBoard = [
  { name: "Mr. CR Venkatesh (CRV)", role: "Founder & CEO – Dot Com Infoway" },
  {
    name: "Mr. Sethuraman Sathappan",
    role: "COO (Retired) – Emirates NBD Bank, India",
  },
  {
    name: "Mrs. Ramadevi S",
    role: "Founder & CEO – Elangi Thanga Maaligai",
  },
];

const Leadership = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#6816EF]/5 via-white to-[#6816EF]/10">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* BOARD OF DIRECTORS */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#6816EF] mb-16">
            Board of Directors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardOfDirectors.map((member) => (
              <div
                key={member.name}
                className="relative bg-white rounded-2xl p-7 shadow-md border border-[#6816EF]/15"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-[#6816EF]" />

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ADVISORY BOARD */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#6816EF] mb-16">
            Advisory Board
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {advisoryBoard.map((member) => (
              <div
                key={member.name}
                className="relative bg-white rounded-2xl p-7 shadow-md border border-[#6816EF]/15"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-[#6816EF]" />

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
