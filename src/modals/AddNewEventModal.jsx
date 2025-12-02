import React from 'react'

const AddNewEventModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 w-full max-w-md shadow-lg rounded-xl'>
                    <h2 className='text-xl mb-4 font-bold'>Add New Events</h2>
                    <div className='grid gap-3'>
                        <input type="text" placeholder='Event Name' className='focus:outline-none border p-2 rounded-md' />

                        <textarea
                            className="border rounded-md p-2  focus:outline-none"
                            rows="4"
                            placeholder="Enter description..."
                        ></textarea>

                        <div className="w-full mb-3">
                            <label className="font-medium">Schedule At</label>
                            <input
                                type="text"
                                placeholder="e.g. 10:30 AM"
                                className="border rounded-lg px-3 py-2 w-full focus:outline-none mt-1"
                            />
                        </div>

                        <div className="w-full mb-3">
                            <label className="font-medium">Schedule On</label>
                            <input
                                type="date"
                                className="border rounded-lg px-3 py-2 w-full focus:outline-none mt-1"
                            />
                        </div>

                    </div>
                    <div className='flex items-center justify-end gap-2 mt-5'>
                        <button onClick={onClose} className='bg-gray-400 px-4 py-2 rounded-md text-white'>Cancel</button>
                        <button className='bg-blue-600 px-4 py-2 rounded-md text-white'> Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewEventModal