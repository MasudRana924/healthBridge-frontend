import { Droplet, Heart, Clock } from 'lucide-react';

const BloodStats = () => {
  const bloodStats = [
    {
      id: 1,
      name: 'Blood Groups Available',
      value: '8+',
      description: 'All common blood groups',
      icon: Droplet,
    },
    {
      id: 2,
      name: 'Donors Connected',
      value: '5k+',
      description: 'Verified blood donors in your area',
      icon: Heart,
    },
    {
      id: 3,
      name: 'Availability Time',
      value: '24/7',
      description: 'Round-the-clock assistance',
      icon: Clock,
    },
  ];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto mt-12 md:mt-36">
      <div className="">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Blood Services at a Glance
          </h2>
          <p className="text-start text-md text-gray-600">
            Providing life-saving connections and resources for those in need of blood
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bloodStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-red-50 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <dt className="text-sm font-medium text-gray-500 text-center">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-red-600">
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

export default BloodStats;
