import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNewEventModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [scheduledAt, setScheduledAt] = useState("");
    const [scheduledOn, setScheduledOn] = useState("");

    const resetFields = () => {
        setName("");
        setDescription("");
        setScheduledAt("");
        setScheduledOn("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !scheduledAt || !scheduledOn) {
            toast.error("All fields are required");
            return;
        }

        const newEvent = { name, description, scheduledAt, scheduledOn };
        onSave(newEvent);

        toast.success("Event added successfully!");

        resetFields();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-full rounded-xl max-w-md shadow-lg">
                <h2 className="font-bold text-xl mb-4">Add New Event</h2>

                <div className="grid gap-3">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Event Name"
                        className="border p-2 rounded-md focus:outline-none"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                        rows={3}
                        className="border p-2 rounded-md focus:outline-none"
                    />

                    <input
                        type="text"
                        value={scheduledAt}
                        onChange={(e) => setScheduledAt(e.target.value)}
                        placeholder="Schedule At (e.g. 10:30 AM)"
                        className="border p-2 rounded-md focus:outline-none"
                    />

                    <input
                        type="date"
                        value={scheduledOn}
                        onChange={(e) => setScheduledOn(e.target.value)}
                        className="border p-2 rounded-md focus:outline-none"
                    />
                </div>

                <div className="flex justify-end mt-5 gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewEventModal;
