import React from "react";
import { toast } from "react-toastify";

const ConfirmDeleteEvent = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="p-2">
            <p>{message}</p>
            <div className="mt-2 flex gap-2 justify-end">
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => {
                        onConfirm();       // actual delete or action
                        toast.dismiss();   // close toast
                    }}
                >
                    Yes
                </button>
                <button
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    onClick={() => {
                        onCancel && onCancel(); // optional cancel
                        toast.dismiss();
                    }}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default ConfirmDeleteEvent;
