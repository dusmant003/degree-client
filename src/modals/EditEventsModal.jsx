import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditEventsModal = ({ isOpen, onClose, event, onSave }) => {
    if (!isOpen) return null;

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [scheduledAt, setScheduledAt] = useState("");
    const [scheduledOn, setScheduledOn] = useState("");

    // Fill input values when event data arrives
    useEffect(() => {
        if (event) {
            setEventName(event.EventName || "");
            setDescription(event.Description || "");
            setScheduledAt(event.ScheduledAt || "");
            setScheduledOn(event.ScheduledOn || "");
        }
    }, [event]);

    // Save updated event
    const handleSave = () => {
        const updatedEvent = {
            id: event.id,  // IMPORTANT — required to identify event
            EventName: eventName,
            Description: description,
            ScheduledAt: scheduledAt,
            ScheduledOn: scheduledOn,
        };

        onSave(updatedEvent);
        toast.success("Event updated successfully!");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="font-bold text-xl mb-4">Edit Event</h2>

                <div className="grid gap-3">

                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Event Name"
                        className="border p-2 rounded-md focus:outline-none"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded-md p-2 focus:outline-none"
                        rows="4"
                        placeholder="Enter description..."
                    ></textarea>

                    <div>
                        <label className="font-medium">Schedule At</label>
                        <input
                            type="text"
                            value={scheduledAt}
                            onChange={(e) => setScheduledAt(e.target.value)}
                            placeholder="e.g. 10:30 AM"
                            className="border rounded-md px-3 py-2 w-full focus:outline-none mt-1"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Schedule On</label>
                        <input
                            type="date"
                            value={scheduledOn}
                            onChange={(e) => setScheduledOn(e.target.value)}
                            className="border rounded-md px-3 py-2 w-full focus:outline-none mt-1"
                        />
                    </div>
                </div>

                {/* Buttons */}
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

export default EditEventsModal;
