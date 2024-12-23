import { Users, UserPlus, Clock, Stethoscope } from 'lucide-react';
const Stats = () => {
  const stats = [
    { 
      id: 1, 
      name: 'Satisfied Patients', 
      value: '20k+',
      description: 'Happy patients treated',
      icon: Users
    },
    { 
      id: 2, 
      name: 'Medical Staff', 
      value: '150+',
      description: 'Experienced healthcare professionals',
      icon: UserPlus
    },
    { 
      id: 3, 
      name: 'Years of Service', 
      value: '25+',
      description: 'Dedicated to healthcare excellence',
      icon: Clock
    },
    { 
      id: 4, 
      name: 'Specializations', 
      value: '30+',
      description: 'Medical departments',
      icon: Stethoscope
    }
  ];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto ">
      <div className="">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Healthcare Impact
          </h2>
          <p className="text-start text-md text-gray-600 ">
            Delivering excellence in healthcare through our dedicated team of medical professionals
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-50 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-violet-600" />
                </div>
                <dt className="text-sm font-medium text-gray-500 text-center">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-violet-600">
                  {stat.value}
                </dd>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;