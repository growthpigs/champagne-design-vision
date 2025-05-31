
import React from 'react';

const ThreeWayComparison = () => {
  const comparisonData = [
    {
      feature: "Material Certifications",
      urbano: "Dekton/Laminam/MaxFine Elite",
      premium: "Basic training",
      standard: "None"
    },
    {
      feature: "Timeline Guarantee", 
      urbano: "12-week ironclad",
      premium: "\"Best effort\"",
      standard: "\"When we get to it\""
    },
    {
      feature: "Project Communication",
      urbano: "Daily SMS + photos",
      premium: "Weekly check-ins", 
      standard: "Radio silence"
    },
    {
      feature: "Warranty Coverage",
      urbano: "25-year craftsmanship",
      premium: "2-year limited",
      standard: "90 days"
    },
    {
      feature: "Ottawa Experience",
      urbano: "427 homes completed",
      premium: "50-100 projects",
      standard: "Occasional work"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-5xl font-bold text-primary mb-6">
            Why We Crush The Competition
          </h2>
          <p className="text-xl text-gray-600">
            See the Urbano difference compared to other Ottawa contractors
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-poppins font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-poppins font-semibold bg-accent">
                    Urbano Design
                  </th>
                  <th className="px-6 py-4 text-center font-poppins font-semibold">
                    Premium Contractors
                  </th>
                  <th className="px-6 py-4 text-center font-poppins font-semibold">
                    Standard Contractors
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-primary border-r border-gray-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-accent border-r border-gray-200 bg-accent/5">
                      {row.urbano}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 border-r border-gray-200">
                      {row.premium}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {row.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            The choice is clear. Don't compromise on your investment.
          </p>
          <div className="bg-accent/10 border border-accent rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-accent font-semibold">
              "We chose Urbano after getting three quotes. The difference in expertise was immediately obvious. 
              Best decision we made for our Rockcliffe renovation."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Sarah M., Rockcliffe Park</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeWayComparison;
