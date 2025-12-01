import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddNewStaffModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const resetFields = () => {
        setName("");
        setDesignation("");
        setDepartment("");
        setPhone("");
        setEmail("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !designation || !department || !phone || !email) {
            toast.error("All fields are required");
            return;
        }

        const newStaff = { name, designation, department, phone, email };
        onSave(newStaff); 

        toast.success("Staff added successfully!");

        resetFields();
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'>
            <div className='bg-white p-6 w-full rounded-xl max-w-md shadow-lg'>
                <h2 className='font-bold text-xl mb-4'>Add New Staff</h2>

                <div className='grid gap-3'>

                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        className='border p-2 rounded-md focus:outline-none'
                    />

                    <select
                        value={designation}
                        className='border p-2 rounded-md focus:outline-none'
                        onChange={(e) => setDesignation(e.target.value)}
                    >
                        <option value="">Select Designation</option>
                        <option>Professor</option>
                        <option>Assistant Professor</option>
                        <option>Staff</option>
                    </select>

                    <select
                        value={department}
                        className='border p-2 rounded-md focus:outline-none'
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="">Select Department</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Electrical</option>
                    </select>

                    <input type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Phone'
                        className='border p-2 rounded-md focus:outline-none'
                    />

                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className='border p-2 rounded-md focus:outline-none'
                    />
                </div>

                <div className='flex justify-end mt-5 gap-2'>
                    <button onClick={onClose} className='px-4 py-2 bg-gray-400 text-white rounded'>
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className='px-4 py-2 bg-blue-600 text-white rounded'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddNewStaffModal
