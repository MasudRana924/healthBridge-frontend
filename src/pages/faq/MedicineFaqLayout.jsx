import { 
    Package, 
    Truck, 
    DollarSign, 
    ShieldCheck, 
    Pill, 
    Repeat, 
    MapPin, 
    Globe 
  } from 'lucide-react';
  
  const MedicineFaqLayout = () => {
    const medicineBenefits = [
      {
        icon: Package,
        title: "Extensive Medicine Inventory",
        description: "Access a wide variety of medications, including rare and hard-to-find drugs. All products are sourced from trusted and certified suppliers.",
        highlight: "10k+ Medicines",
      },
      {
        icon: Truck,
        title: "Fast & Reliable Delivery",
        description: "Get your medications delivered quickly and reliably, right to your doorstep. Enjoy flexible delivery slots to suit your schedule.",
        highlight: "Same-Day Delivery",
      },
      {
        icon: DollarSign,
        title: "Affordable Pricing",
        description: "Competitive pricing with discounts on bulk orders. No hidden fees or charges—complete transparency in costs.",
        highlight: "Save More",
      },
      {
        icon: ShieldCheck,
        title: "Certified Products",
        description: "All medications undergo strict quality checks to ensure safety and efficacy. Verified by leading pharmaceutical authorities.",
        highlight: "Guaranteed Quality",
      },
      {
        icon: Pill,
        title: "Personalized Medicine Recommendations",
        description: "AI-driven recommendations based on your prescription history. Easily find alternatives for unavailable medicines.",
        highlight: "Smart Suggestions",
      },
      {
        icon: Repeat,
        title: "Easy Refills",
        description: "Seamless refill process for recurring prescriptions. Set reminders and auto-reorder for hassle-free experience.",
        highlight: "Auto Refills",
      },
      {
        icon: MapPin,
        title: "Nationwide Coverage",
        description: "Order from anywhere in the country with our extensive delivery network. Guaranteed delivery even to remote locations.",
        highlight: "Everywhere Access",
      },
      {
        icon: Globe,
        title: "Online Order Tracking",
        description: "Track your orders in real-time with our intuitive tracking system. Get updates at every stage of the delivery process.",
        highlight: "Live Tracking",
      },
    ];
  
    return (
      <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto mt-8 md:mt-20">
        <div className="text-start mb-12">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl mb-4">
            Why Choose Our Medicine Platform?
          </h1>
          <p className="text-sm text-gray-600">
            Delivering quality medicines at your convenience—trusted by thousands for affordability, reliability, and exceptional service.
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {medicineBenefits.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg">
                <item.icon className="w-6 h-6 text-green-600" />
              </div>
  
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MedicineFaqLayout;
  