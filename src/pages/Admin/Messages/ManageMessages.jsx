import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddNewMessageModal from "../../../modals/AddNewMessageModal";
import EditMessageModal from "../../../modals/EditMessageModal";
import { toast } from "react-toastify";
import ConfirmDeleteMessage from "../../../modals/ConfirmDeleteMessage";

const Messages = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        message: "I want to know about admission process.",
        date: "02 Dec 2025",
    },
    {
        id: 2,
        name: "Priya Verma",
        email: "priya.verma@example.com",
        message: "Need information about fee structure.",
        date: "02 Dec 2025",
    },
    {
        id: 3,
        name: "Amit Gupta",
        email: "amit.gupta@example.com",
        message: "Campus tour details please.",
        date: "02 Dec 2025",
    },
    {
        id: 4,
        name: "Sneha Rao",
        email: "sneha.rao@example.com",
        message: "Library timings inquiry.",
        date: "02 Dec 2025",
    }
];

const ManageMessages = () => {
    const [message, setMessage] = useState(Messages);
    const [searchMessage, setSearchMessage] = useState('');
    const [isAddOpenModal, setIsAddOpenModal] = useState(false);
    const [isEditOpenModal, setIsEditOpenModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    // search filter
    const filteredMessages = message.filter((msg) => {
        return msg.name.toLowerCase().includes(searchMessage.toLowerCase());
    });

    const handleAddMessage = (newMessage) => {
        setMessage((prev) => [
            ...prev,
            { id: prev.length + 1, ...newMessage }
        ]);
    };

    // edit message
    const handleEditMessage = (message) => {
        setSelectedMessage(message);
        setIsEditOpenModal(true);
    }

    // update message
    const handleUpdateMessage = (updatedMessage) => {

        setMessage((prev) => {
            return prev.map((s) => s.id === updatedMessage.id ? updatedMessage : s)
        })
    }

    const handleDeleteMessage = (id) => {
        setMessage((prev) => prev.filter((s) => s.id !== id));
        toast.success("Message deleted successfully!");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Manage Messages</h1>

            <p className="flex items-center gap-2 cursor-pointer">
                <Link to="/adminportal">Home</Link>
                <ChevronRight size={18} /> Manage Messages
            </p>
            {/* add+search */}
            <div className="bg-white p-4 mt-4 rounded-2xl shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchMessage}
                        onChange={(e) => setSearchMessage(e.target.value)}
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
            {/* Total Count */}
            <p className="mt-4 font-semibold">Total : {filteredMessages.length}</p>

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
                        {filteredMessages.map((msg) => (
                            <tr key={msg.id} className="border-b text-sm">
                                <td className="p-3">{msg.id}</td>
                                <td className="p-3">{msg.name}</td>
                                <td className="p-3">{msg.email}</td>
                                <td className="p-3 max-w-[250px]">{msg.message}</td>
                                <td className="p-3">{msg.date}</td>

                                <td className="p-3">
                                    <div className="flex items-center gap-3">

                                        {/* Edit Icon */}
                                        <button onClick={() => handleEditMessage(msg)} className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 duration-200">
                                            <Pencil size={16} />
                                        </button>

                                        {/* Delete Icon */}
                                        <button
                                            onClick={() =>
                                                toast.info(
                                                    <ConfirmDeleteMessage
                                                        message="Are you sure you want to delete this event?"
                                                        onConfirm={() => handleDeleteMessage(msg.id)}
                                                    />,
                                                    { autoClose: false }
                                                )
                                            }
                                            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">
                                            <Trash2 size={16} />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* addnewmessage modal */}
            <AddNewMessageModal isOpen={isAddOpenModal} onClose={() => setIsAddOpenModal(false)} onSave={handleAddMessage} />
            <EditMessageModal isOpen={isEditOpenModal} onClose={() => setIsEditOpenModal(false)} msg={selectedMessage} onSave={handleUpdateMessage} />
        </div>
    );
};

export default ManageMessages;
