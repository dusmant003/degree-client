import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Staff = [
    {
        id: 1,
        name: "Rahul Sharma",
        designation: "Professor",
        department: "Computer Science",
        phone: "9876543210",
        email: "rahul.sharma@example.com",
    },
    {
        id: 2,
        name: "Priya Mehta",
        designation: "Assistant Professor",
        department: "Electronics",
        phone: "9988776655",
        email: "priya.mehta@example.com",
    },
    {
        id: 3,
        name: "Amit Verma",
        designation: "Staff",
        department: "Mechanical",
        phone: "9123456789",
        email: "amit.verma@example.com",
    },
    {
        id: 4,
        name: "Rahul Sharma",
        designation: "Staff",
        department: "Electronics",
        phone: "9876543210",
        email: "rahul.sharma@example.com",
    },
];

const ManageStaff = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedDesignation, setSelectedDesignation] = useState("All");
    const [selectedDepartment, setSelectedDepartment] = useState("All");

    // search filter
    const filteredStaff = Staff.filter((s) => {
        return (
            s.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (selectedDesignation === "All" || s.designation === selectedDesignation) &&
            (selectedDepartment === "All" || s.department === selectedDepartment)
        );
    });


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Manage Staff</h1>

            <p className="flex items-center gap-2 cursor-pointer">
                <Link to="/adminportal">Home </Link><ChevronRight size={18} /> Manage Staff
            </p>
            {/* Filters Section */}
            <div className="bg-white p-4 mt-4 rounded-2xl shadow-sm">

                {/* GRID FILTERS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by name"
                        onChange={(e) => setSearchText(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full focus:outline-none"
                    />

                    {/* Designation */}
                    <select value={selectedDesignation} onChange={(e) => setSelectedDesignation(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full focus:outline-none">
                        <option>All Designations</option>
                        <option>Professor</option>
                        <option>Assistant Professor</option>
                        <option>Staff</option>
                    </select>

                    {/* Subject */}
                    <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} className="border rounded-lg px-4 py-2 w-full focus:outline-none">
                        <option>All Subject</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Mechanical</option>
                    </select>
                </div>

                {/* BUTTON OUTSIDE GRID AND RIGHT-ALIGNED */}
                <div className="flex justify-end mt-4">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-200">
                        + Add New
                    </button>
                </div>

            </div>


            {/* Total Count */}
            <p className="mt-4 font-semibold">Total : {Staff.length}</p>

            {/* Staff Table */}
            <div className="mt-2 bg-white rounded-2xl shadow-sm overflow-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Designation</th>
                            <th className="p-3 font-semibold">Department</th>
                            <th className="p-3 font-semibold">Phone</th>
                            <th className="p-3 font-semibold">Email</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredStaff.map((s) => (
                            <tr key={s.id} className="border-b text-sm">
                                <td className="p-3">{s.name}</td>
                                <td className="p-3">{s.designation}</td>
                                <td className="p-3">{s.department}</td>
                                <td className="p-3">{s.phone}</td>
                                <td className="p-3">{s.email}</td>
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

export default ManageStaff;
