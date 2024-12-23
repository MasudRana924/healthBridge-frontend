import { 
    Stethoscope, 
    Pill, 
    UserCog, 
    Ambulance, 
    Clock, 
    CreditCard, 
    Shield, 
    Phone
  } from 'lucide-react';
 
const FaqLayout = () => {
    const benefitsData = [
        {
          icon: Stethoscope,
          title: "Easy Doctor Appointments",
          description: "Book appointments with top specialists instantly. Choose from hundreds of verified doctors, compare ratings, and find the perfect time slot that works for you.",
          highlight: "24/7 Online Booking"
        },
        {
          icon: Pill,
          title: "Online Medicine Ordering",
          description: "Order prescribed medications from certified pharmacies with doorstep delivery. Track your order in real-time and get timely refill reminders.",
          highlight: "Same-Day Delivery"
        },
        {
          icon: UserCog,
          title: "Professional Home Nursing",
          description: "Connect with qualified nurses for home care services. All our nursing staff are certified, experienced, and background-verified for your peace of mind.",
          highlight: "Verified Healthcare Staff"
        },
        {
          icon: Ambulance,
          title: "Emergency Ambulance Service",
          description: "Quick access to emergency medical transport with GPS tracking. Our ambulances are fully equipped and available 24/7 with trained paramedic staff.",
          highlight: "Rapid Response Time"
        },
        {
          icon: Clock,
          title: "24/7 Healthcare Support",
          description: "Round-the-clock medical assistance and customer support. Get immediate responses to your health queries and booking assistance anytime.",
          highlight: "Always Available"
        },
        {
          icon: CreditCard,
          title: "Secure & Easy Payments",
          description: "Multiple payment options including insurance coverage. Transparent pricing with no hidden charges and instant payment confirmation.",
          highlight: "Insurance Accepted"
        },
        {
          icon: Shield,
          title: "Quality Assured Services",
          description: "All healthcare providers on our platform are verified and monitored for quality. Regular feedback collection ensures maintaining high service standards.",
          highlight: "Certified Providers"
        },
        {
          icon: Phone,
          title: "Mobile App Access",
          description: "Manage all your healthcare needs from our user-friendly mobile app. Schedule appointments, order medicines, and access medical records on the go.",
          highlight: "Convenient Access"
        }
      ];
    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto mt-8 md:mt-20 ">
        <div className="text-start mb-12">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl mb-4">
            Why Choose Our Healthcare Platform?
          </h1>
          <p className="text-sm text-gray-600 ">
            Comprehensive healthcare solutions at your fingertips - making quality healthcare accessible, convenient, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
                <item.icon className="w-6 h-6 text-violet-600" />
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
export default FaqLayout;