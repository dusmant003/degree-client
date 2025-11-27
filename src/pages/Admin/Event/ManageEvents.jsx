import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Staff = [
  {
    id: 1,
    EventName: "Rahul Sharma",
    Description: "rahul.sharma@example.com",
    ScheduledAt: "Professor",
    ScheduledOn: "Computer Science",
  },
  {
    id: 2,
    EventName: "Rahul Sharma",
    Description: "rahul.sharma@example.com",
    ScheduledAt: "Professor",
    ScheduledOn: "Computer Science",
  },
  {
    id: 3,
    EventName: "Rahul Sharma",
    Description: "rahul.sharma@example.com",
    ScheduledAt: "Professor",
    ScheduledOn: "Computer Science",
  },
  {
    id: 4,
    EventName: "Rahul Sharma",
    Description: "rahul.sharma@example.com",
    ScheduledAt: "Professor",
    ScheduledOn: "Computer Science",
  },
];

const ManageEvents = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Manage Events</h1>

      <p className="flex items-center gap-2 cursor-pointer">
        <Link to="/adminportal">Home </Link><ChevronRight size={18} /> Manage Events
      </p>

      {/* Add New Button */}
      <div className="p-4 mt-4">
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-200">
            + Add New
          </button>
        </div>
      </div>

      {/* Total Count */}
      <p className="mt-4 font-semibold">Total : {Staff.length}</p>

      {/* Table */}
      <div className="mt-2 bg-white rounded-2xl shadow-sm overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 font-semibold">ID</th>
              <th className="p-3 font-semibold"> Event Name</th>
              <th className="p-3 font-semibold">Description</th>
              <th className="p-3 font-semibold">Scheduled At</th>
              <th className="p-3 font-semibold">Scheduled On</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Staff.map((s) => (
              <tr key={s.id} className="border-b text-sm">
                <td className="p-3">{s.id}</td>
                <td className="p-3">{s.EventName}</td>
                <td className="p-3">{s.Description}</td>
                <td className="p-3">{s.ScheduledAt}</td>
                <td className="p-3">{s.ScheduledOn}</td>

                <td className="p-3 flex gap-2">
                  <div className="flex items-center gap-3">

                    {/* Edit Icon */}
                    <button className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 duration-200">
                      <Pencil size={16} />
                    </button>

                    {/* Delete Icon */}
                    <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvents;
