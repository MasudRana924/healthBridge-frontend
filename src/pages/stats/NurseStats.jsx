import { UserCheck, Home, Clock } from 'lucide-react';

const NurseStats = () => {
  const nurseStats = [
    {
      id: 1,
      name: 'Qualified Nurses',
      value: '500+',
      description: 'Certified and experienced nursing staff',
      icon: UserCheck,
    },
    {
      id: 2,
      name: 'Home Care Services',
      value: '24/7',
      description: 'Round-the-clock nursing care at home',
      icon: Home,
    },
    {
      id: 3,
      name: 'Response Time',
      value: '30 min',
      description: 'Quick and efficient nurse assignment',
      icon: Clock,
    },
  ];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Nursing Services at a Glance
          </h2>
          <p className="text-start text-md text-gray-600">
            Providing skilled nursing care with compassion and reliability
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nurseStats.map((stat) => (
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

export default NurseStats;
