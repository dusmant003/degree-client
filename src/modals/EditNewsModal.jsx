import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EditNewsModal = ({ isOpen, onClose, news, onSave }) => {
    if (!isOpen) return null;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (news) {
            setTitle(news.title);
            setDescription(news.description);
            setDate(news.date);
            setTime(news.time);
        }
    }, [news]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !date || !time) {
            toast.error("All fields are required");
            return;
        }
        const updatedNews = {
            id: news.id,
            title,
            description,
            date,
            time,
        }
        onSave(updatedNews);
        toast.success("News updated successfully!");
        onClose();

    }

    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 w-full max-w-md shadow-lg rounded-xl'>
                    <h2 className='mb-5 text-xl font-bold'>Add New News</h2>
                    <div className='grid gap-3'>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className='p-2 rounded-md focus:outline-none border' />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded-md p-2  focus:outline-none"
                            rows="4"
                            placeholder="Enter description..."
                        ></textarea>
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder='(e.g. 10:30 AM)' className='border p-2 rounded-md focus:outline-none' />
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder='Enter Date' className='border p-2 rounded-md focus:outline-none' />
                    </div>
                    <div className='flex justify-end items-center gap-2 mt-5 text-white '>
                        <button onClick={onClose} className='px-4 py-2 rounded-md bg-gray-400'>Cancel</button>
                        <button onClick={handleSubmit} className='px-4 py-2 rounded-md bg-blue-600'>Add</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EditNewsModal