import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Staff = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        message: "Professor",
        date: "Computer Science",
    },
    {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        message: "Professor",
        date: "Computer Science",
    },
    {
        id: 3,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        message: "Professor",
        date: "Computer Science",
    },
    {
        id: 4,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        message: "Professor",
        date: "Computer Science",
    }
];

const ManageMesseges = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Manage Messages</h1>

            <p className="flex items-center gap-2 cursor-pointer">
                <Link to="/adminportal">Home </Link><ChevronRight size={18} /> Manage Messages
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
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Email</th>
                            <th className="p-3 font-semibold">Message</th>
                            <th className="p-3 font-semibold">Date</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Staff.map((s) => (
                            <tr key={s.id} className="border-b text-sm">
                                <td className="p-3">{s.id}</td>
                                <td className="p-3">{s.name}</td>
                                <td className="p-3">{s.email}</td>
                                <td className="p-3">{s.message}</td>
                                <td className="p-3">{s.date}</td>

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

export default ManageMesseges;
