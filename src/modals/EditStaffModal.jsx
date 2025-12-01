import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditStaffModal = ({ isOpen, onClose, staff, onSave }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (staff) {
            setName(staff.name || "");
            setDesignation(staff.designation || "");
            setDepartment(staff.department || "");
            setPhone(staff.phone || "");
            setEmail(staff.email || "");
        }
    }, [staff]);

    const handleSave = () => {
        const updatedStaff = {
            id: staff.id, // IMPORTANT
            name,
            designation,
            department,
            phone,
            email
        };

        onSave(updatedStaff);
        toast.success("Staff updated successfully!");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="font-bold text-xl mb-4">Edit Staff</h2>

                <div className="grid gap-3">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        className="border p-2 rounded-md"
                    />

                    <select
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">Select Designation</option>
                        <option value="Professor">Professor</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                        <option value="Staff">Staff</option>
                    </select>

                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">Select Department</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Mechanical">Mechanical</option>
                    </select>

                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder="Phone"
                        className="border p-2 rounded-md"
                    />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded-md"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-5">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 px-4 py-2 rounded-lg text-white"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="bg-blue-600 px-4 py-2 rounded-lg text-white"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditStaffModal;
