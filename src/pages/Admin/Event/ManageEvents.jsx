import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AddNewEventModal from "../../../modals/AddNewEventModal";
import EditEventsModal from "../../../modals/EditEventsModal";
import ConfirmDeleteEvent from "../../../modals/ConfirmDeleteEvent";

// Dummy initial events
const initialEvents = [
    { id: 1, name: "Event A", description: "Desc A", scheduledAt: "10 AM", scheduledOn: "2025-12-05" },
    { id: 2, name: "Event B", description: "Desc B", scheduledAt: "11 AM", scheduledOn: "2025-12-06" },
    { id: 3, name: "Event C", description: "Desc C", scheduledAt: "12 PM", scheduledOn: "2025-12-07" },
];

const ManageEvents = () => {
    const [events, setEvents] = useState(initialEvents);
    const [searchEvent, setSearchEvent] = useState("");
    const [isAddOpenModal, setIsAddOpenModal] = useState(false);
    const [isEditOpenModal, setIsEditOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Search Filter
    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchEvent.toLowerCase())
    );

    // Add Event
    const handleAddEvent = (newEvent) => {
        setEvents((prev) => [...prev, { id: prev.length + 1, ...newEvent }]);
        setIsAddOpenModal(false);
    };

    // Open Edit
    const handleEdit = (event) => {
        setSelectedEvent(event);
        setIsEditOpenModal(true);
    };

    // Update event
    const handleUpdateEvent = (updatedEvent) => {
        setEvents((prev) =>
            prev.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
        );
        setIsEditOpenModal(false);
    };

    // Delete event
    const handleDeleteEvent = (id) => {
        setEvents((prev) => prev.filter((ev) => ev.id !== id));
        toast.success("Event deleted successfully!");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Manage Events</h1>

            <p className="flex items-center gap-2 cursor-pointer">
                <Link to="/adminportal">Home</Link>
                <ChevronRight size={18} /> Manage Events
            </p>

            {/* Search + Add */}
            <div className="bg-white p-4 mt-4 rounded-2xl shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <input
                        type="text"
                        placeholder="Search Event Name"
                        value={searchEvent}
                        onChange={(e) => setSearchEvent(e.target.value)}
                        className="focus:outline-none border p-2 rounded-md w-full lg:w-auto"
                    />

                    <button
                        onClick={() => setIsAddOpenModal(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 duration-200"
                    >
                        + Add New
                    </button>
                </div>
            </div>

            <p className="mt-4 font-semibold">Total: {filteredEvents.length}</p>

            {/* Table */}
            <div className="mt-2 bg-white rounded-2xl shadow-sm overflow-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 font-semibold">ID</th>
                            <th className="p-3 font-semibold">Event Name</th>
                            <th className="p-3 font-semibold">Description</th>
                            <th className="p-3 font-semibold">Scheduled At</th>
                            <th className="p-3 font-semibold">Scheduled On</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredEvents.map((ev) => (
                            <tr key={ev.id} className="border-b text-sm">
                                <td className="p-3">{ev.id}</td>
                                <td className="p-3">{ev.name}</td>
                                <td className="p-3">{ev.description}</td>
                                <td className="p-3">{ev.scheduledAt}</td>
                                <td className="p-3">{ev.scheduledOn}</td>

                                <td className="p-3 flex gap-2">
                                    {/* EDIT */}
                                    <button
                                        onClick={() => handleEdit(ev)}
                                        className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 duration-200"
                                    >
                                        <Pencil size={16} />
                                    </button>

                                    {/* DELETE */}
                                    <button
                                        onClick={() =>
                                            toast.info(
                                                <ConfirmDeleteEvent
                                                    message="Are you sure you want to delete this event?"
                                                    onConfirm={() => handleDeleteEvent(ev.id)}
                                                />,
                                                { autoClose: false }
                                            )
                                        }
                                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ADD MODAL */}
            <AddNewEventModal
                isOpen={isAddOpenModal}
                onClose={() => setIsAddOpenModal(false)}
                onSave={handleAddEvent}
            />

            {/* EDIT MODAL */}
            <EditEventsModal
                isOpen={isEditOpenModal}
                onClose={() => setIsEditOpenModal(false)}
                event={selectedEvent}
                onSave={handleUpdateEvent}
            />
        </div>
    );
};

export default ManageEvents;
