import { Package, Truck, DollarSign } from 'lucide-react';

const MedicineStats = () => {
  const medicineStats = [
    {
      id: 1,
      name: 'Medicine Available',
      value: '10k+',
      description: 'Medicines and healthcare products',
      icon: Package,
    },
    {
      id: 2,
      name: 'Delivery Time',
      value: '24-48 hrs',
      description: 'Fast and reliable delivery',
      icon: Truck,
    },
    {
      id: 3,
      name: 'Service Charge',
      value: 'Free',
      description: 'No hidden charges on purchases',
      icon: DollarSign,
    },
  ];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto mt-12 md:mt-20">
      <div className="">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Medicine Services at a Glance
          </h2>
          <p className="text-start text-md text-gray-600 ">
            Ensuring availability, timely delivery, and affordable services for our customers
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicineStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-green-50 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <dt className="text-sm font-medium text-gray-500 text-center">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-green-600">
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

export default MedicineStats;
