import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AddNewStaffModal from "../../../modals/AddNewStaffModal";
import EditStaffModal from "../../../modals/EditStaffModal";
import ConfirmDeleteStaff from "../../../modals/ConfirmDeleteStaff";

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
];

const ManageStaff = () => {
    const [staffData, setStaffData] = useState(Staff);
    const [searchText, setSearchText] = useState("");
    const [selectedDesignation, setSelectedDesignation] = useState("All");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [isAddOpenModal, setIsAddOpenModal] = useState(false);
    const [isEditOpenModal, setIsEditOpenModal] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);  // for editStaff modal

    const filteredStaff = staffData.filter((s) => {
        return (
            s.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (selectedDesignation === "All" || s.designation === selectedDesignation) &&
            (selectedDepartment === "All" || s.department === selectedDepartment)
        );
    });

    const handleSaveStaff = (newStaff) => {
        setStaffData((prev) => [
            ...prev,
            { id: prev.length + 1, ...newStaff },
        ]);
    };

    const handleUpdateStaff = (updatedStaff) => {
        setStaffData((prev) =>
            prev.map((s) => (s.id === updatedStaff.id ? updatedStaff : s))
        );
    };

    const handleDeleteStaff = (id) => {
        setStaffData((prev) => prev.filter((s) => s.id !== id));
        toast.success("Event deleted successfully!");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Manage Staff</h1>

            <p className="flex items-center gap-2 cursor-pointer">
                <Link to="/adminportal">Home</Link>
                <ChevronRight size={18} /> Manage Staff
            </p>

            <div className="bg-white p-4 mt-4 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full"
                    />

                    <select
                        value={selectedDesignation}
                        onChange={(e) => setSelectedDesignation(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full"
                    >
                        <option>All</option>
                        <option>Professor</option>
                        <option>Assistant Professor</option>
                        <option>Staff</option>
                    </select>

                    <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full"
                    >
                        <option>All</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Mechanical</option>
                    </select>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => setIsAddOpenModal(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                        + Add New
                    </button>
                </div>
            </div>

            <p className="mt-4 font-semibold">Total : {staffData.length}</p>

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
                                    <button
                                        onClick={() => {
                                            setSelectedStaff(s);
                                            setIsEditOpenModal(true);
                                        }}
                                        className="p-2 bg-yellow-500 text-white rounded-md"
                                    >
                                        <Pencil size={16} />
                                    </button>

                                    <button
                                        onClick={() =>
                                            toast.info(
                                                <ConfirmDeleteStaff
                                                    message="Are you sure you want to delete this Staff?"
                                                    onConfirm={() => handleDeleteStaff(s.id)}
                                                />,
                                                { autoClose: false }
                                            )
                                        }
                                        className="p-2 bg-red-500 text-white rounded-md"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddNewStaffModal
                isOpen={isAddOpenModal}
                onClose={() => setIsAddOpenModal(false)}
                onSave={handleSaveStaff}
            />

            <EditStaffModal
                isOpen={isEditOpenModal}
                onClose={() => setIsEditOpenModal(false)}
                staff={selectedStaff}
                onSave={handleUpdateStaff}
            />
        </div>
    );
};

export default ManageStaff;
