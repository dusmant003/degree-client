import React, { useState } from "react";

const AddNewImageModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    const [imageFile, setImageFile] = useState(null);

    const handleSave = () => {
        if (!imageFile) {
            alert("Please choose an image");
            return;
        }

        onSave(imageFile);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">

                <h2 className="text-xl font-bold mb-4">Add New Image</h2>

                <div className="grid gap-3">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="border p-2 rounded-md"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-5">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewImageModal;
