import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Pencil, Trash2 } from "lucide-react";
import AddNewNewsModal from "../../../modals/AddNewNewsModal";
import EditNewsModal from "../../../modals/EditNewsModal";
import ConfirmDeleteNews from "../../../modals/ConfirmDeleteNews";
import { toast } from "react-toastify";

const sampleNews = [
    {
        id: 1,
        title: "Campus Seminar",
        description: "A seminar on Artificial Intelligence.",
        date: "2025-02-10",
        time: "10:30 AM",
    },
    {
        id: 2,
        title: "Sports Meet",
        description: "Annual sports meet is scheduled.",
        date: "2025-02-12",
        time: "2:00 PM",
    },
];

export default function ManageNotifications() {
    const [news, setNews] = useState(sampleNews);
    const [searchTitle, setSearchTitle] = useState("");
    const [isAddOpenModal, setIsAddOpenModal] = useState(false);
    const [isEditOpenModal, setIsEditOpenModal] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

    // Search Filter
    const filteredNews = news.filter((item) =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    // Add News
    const handleSaveNews = (newNews) => {
        setNews((prev) => [...prev, { id: prev.length + 1, ...newNews }]);
        setIsAddOpenModal(false); // close modal
    };

    // Open Edit Modal
    const handleEdit = (item) => {
        setSelectedNews(item);
        setIsEditOpenModal(true);
    };

    // Update News
    const handleUpdateNews = (updatedNews) => {
        setNews((prev) =>
            prev.map((n) => (n.id === updatedNews.id ? updatedNews : n))
        );
        setIsEditOpenModal(false); // close modal after update
    };

    // delete news
    const handleDeleteNews = (id) => {
        setNews((prev) => prev.filter((n) => n.id !== id))
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">News & Notifications</h1>

            {/* Breadcrumb */}
            <p className="flex items-center gap-2 text-sm mt-1">
                <Link to="/adminportal" className="text-blue-600">Home</Link>
                <ChevronRight size={16} />
                News & Notifications
            </p>

            {/* Search + Add Button */}
            <div className="bg-white p-4 mt-4 rounded-2xl shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <input
                        type="text"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        placeholder="Search by Title"
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
            <p className="mt-4 font-semibold">Total : {filteredNews.length}</p>

            {/* Table */}
            <div className="mt-3 bg-white rounded-2xl shadow-md overflow-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 text-sm">
                        <tr>
                            <th className="p-3 font-semibold">ID</th>
                            <th className="p-3 font-semibold">Title</th>
                            <th className="p-3 font-semibold">Description</th>
                            <th className="p-3 font-semibold">Date</th>
                            <th className="p-3 font-semibold">Time</th>
                            <th className="p-3 font-semibold text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredNews.map((item) => (
                            <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                                <td className="p-3">{item.id}</td>
                                <td className="p-3">{item.title}</td>
                                <td className="p-3">{item.description}</td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3">{item.time}</td>

                                <td className="p-3">
                                    <div className="flex justify-center gap-3">

                                        {/* Edit */}
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                                        >
                                            <Pencil size={16} />
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() =>
                                                toast.info(
                                                    <ConfirmDeleteNews
                                                        message="Are you sure you want to delete this event?"
                                                        onConfirm={() => handleDeleteNews(item.id)}
                                                    />,
                                                    { autoClose: false }
                                                )
                                            }
                                            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ADD MODAL */}
            <AddNewNewsModal
                isOpen={isAddOpenModal}
                onClose={() => setIsAddOpenModal(false)}
                onSave={handleSaveNews}
            />

            {/* EDIT MODAL */}
            <EditNewsModal
                isOpen={isEditOpenModal}
                onClose={() => setIsEditOpenModal(false)}
                news={selectedNews}
                onSave={handleUpdateNews}
            />
        </div>
    );
}
