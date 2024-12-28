import React from 'react';

const Dashboard = () => {
  const cardData = [
    { title: 'Total Tickets', count: 12, bgColor: 'bg-blue-500' },
    { title: 'Total Solved', count: 8, bgColor: 'bg-green-500' },
    { title: 'Total Awaiting Approval', count: 2, bgColor: 'bg-red-500' },
    { title: 'Total in Progress', count: 2, bgColor: 'bg-yellow-500' },
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="flex justify-center gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 w-[20%] rounded-2xl ${card.bgColor} text-[#05386B] rounded-lg shadow-xl flex flex-col items-center justify-center gap-3`}
          >
            <p className="text-lg">{card.title}</p>
            <p className="text-6xl font-semibold">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
