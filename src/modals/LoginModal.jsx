import React, { useState } from "react";
import { toast } from "react-toastify";

export default function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter email and password", {
                position: "top-right",
                autoClose: 1000,
            });
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 1000,
                className: "mt-16",
            });
            setEmail("");
            setPassword("");

            onClose();
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl">
                <h2 className="text-xl font-semibold text-center">Login</h2>

                <div className="grid gap-4 mt-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3 rounded-xl w-full"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 rounded-xl w-full"
                    />
                </div>

                {/* 👉 onClick added here */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white mt-6 py-3 rounded-2xl text-base"
                >
                    {loading ? "Loading..." : "Login"}
                </button>

                <button
                    onClick={onClose}
                    className="w-full mt-3 py-2 text-sm text-gray-500"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
