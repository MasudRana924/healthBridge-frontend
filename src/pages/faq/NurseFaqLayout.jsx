import { 
    UserCheck, 
    Home, 
    HeartPulse, 
    Clock 
  } from 'lucide-react';
  
  const NurseFaqLayout = () => {
    const nurseBenefits = [
      {
        icon: UserCheck,
        title: "Certified Nurses",
        description: "Highly trained and certified nursing professionals providing expert care in a variety of medical situations.",
        highlight: "500+ Qualified Staff",
      },
      {
        icon: Home,
        title: "Home Nursing Care",
        description: "Get personalized nursing care at your home for post-surgery recovery, elderly care, or chronic illness support.",
        highlight: "24/7 Availability",
      },
      {
        icon: HeartPulse,
        title: "Critical Care Support",
        description: "Experienced in handling critical care patients, including ventilator management and emergency response.",
        highlight: "Expert Care",
      },
      {
        icon: Clock,
        title: "Fast Response Time",
        description: "Quick nurse deployment to your location with an average response time of under 30 minutes.",
        highlight: "Rapid Assistance",
      }
      
    ];
  
    return (
      <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto mt-8 md:mt-28">
        <div className="text-start mb-12">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl mb-4">
            Why Choose Our Nursing Services?
          </h1>
          <p className="text-sm text-gray-600">
            Providing compassionate and professional nursing care tailored to your needs—trusted by families and healthcare providers alike.
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nurseBenefits.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
  
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NurseFaqLayout;
  