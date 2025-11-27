import React from "react";
import { FileUser, Users, UserCog, UserPlus, GraduationCap } from "lucide-react";

const items = [
  {
    id: "1",
    title: "Professor",
    count: 12,
    icon: <FileUser size={40} />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "2",
    title: "Students",
    count: 350,
    icon: <GraduationCap size={40} />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: "3",
    title: "Staff",
    count: 22,
    icon: <UserCog size={40} />,
    gradient: "from-green-500 to-green-700",
  },

  {
    id: "4",
    title: " Guest Faculty",
    count: 18,
    icon: <Users size={40} />,
    gradient: "from-orange-500 to-orange-700",
  },
];

const DashBoard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((e) => (
        <div
          key={e.id}
          className={`rounded-2xl p-5 text-white shadow-lg 
          bg-gradient-to-br ${e.gradient} 
          hover:scale-105 hover:shadow-2xl duration-300`}
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
              {e.icon}
            </div>

            <div>
              <p className="uppercase text-sm font-semibold">{e.title}</p>
              <h1 className="text-3xl font-bold">{e.count}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
