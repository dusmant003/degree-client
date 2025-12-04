import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EditMessageModal = ({ isOpen, onClose, msg, onSave }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (msg) {
            setName(msg.name);
            setEmail(msg.email);
            setMessage(msg.message);
            setDate(msg.date);
        }

    }, [msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message || !date) {
            toast.error("all fields are required");
            return;
        }
        const newMessage = { id: msg.id, name, email, message, date };
        onSave(newMessage);
        toast.success("message added successfully !");
        onClose();

    }

    if (!isOpen) return null;
    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50' >
                <div className='bg-white p-6 w-full max-w-md shadow-lg rounded-xl'>
                    <h2 className='font-bold text-xl mb-5'>Add New Message</h2>
                    <div className='grid gap-3'>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='p-2 rounded-md focus:outline-none border' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' className='p-2 rounded-md focus:outline-none border' />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border rounded-md p-2  focus:outline-none"
                            rows="4"
                            placeholder="Enter description..."
                        ></textarea>
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder='Enter Date' className='border p-2 rounded-md focus:outline-none' />
                    </div>
                    <div className='flex justify-end items-center gap-2 mt-5 text-white '>
                        <button onClick={onClose} className='px-4 py-2 rounded-md bg-gray-400'>Cancel</button>
                        <button onClick={handleSubmit} className='px-4 py-2 rounded-md bg-blue-600'>Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditMessageModal