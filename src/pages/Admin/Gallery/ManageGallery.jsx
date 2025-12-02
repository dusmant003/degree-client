import React, { useState } from "react";
import { ChevronRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import ConfirmDeleteImage from "../../../modals/ConfirmDeleteImageModal";
import { toast } from "react-toastify";
import AddNewImageModal from "../../../modals/AddNewImageModal";

const gallery = [
  { id: 1, img: "https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg" },
  { id: 2, img: "https://cdn.pixabay.com/photo/2017/11/13/16/39/ginkgo-2946131_1280.jpg" }
];
export default function ManageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(gallery);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddImage = (file) => {

    const newImage = {
      id: Date.now(),
      img: URL.createObjectURL(file), // temporary preview
    };

    setImage((prev) => [...prev, newImage]);
    toast.success("Image added successfully!");

  }

  const handleDeleteImage = (id) => {
    setImage((prev) => prev.filter((s) => s.id !== id));
    toast.success("Event deleted successfully!");
  };


  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold">Manage Gallery</h1>

          <p className="flex items-center gap-2 cursor-pointer text-gray-600">
            <Link to="/adminportal" className="hover:underline">Home</Link>
            <ChevronRight size={18} />
            Manage Gallery
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
          Add Image
        </button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {image.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-2 rounded-xl shadow-sm border cursor-pointer"
            onClick={() => setSelectedImage(item.img)}
          >
            {/* Delete Icon */}
            <button
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 transition"
              onClick={(e) => {
                e.stopPropagation();
                toast.info(
                  <ConfirmDeleteImage
                    message="Are you sure you want to delete this image?"
                    onConfirm={() => handleDeleteImage(item.id)}
                  />,
                  { autoClose: false }
                );
              }}
            >
              <Trash2 size={16} />
            </button>


            {/* Image */}
            <img
              src={item.img}
              alt="Gallery"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
      {/* addnewimage modal */}
      <AddNewImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleAddImage} />
    </div>
  );
}
