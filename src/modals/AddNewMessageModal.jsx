import React from 'react'

const AddNewMessageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50' >
                <div className='bg-white p-6 w-full max-w-md shadow-lg rounded-xl'>
                    <h2 className='font-bold text-xl mb-5'>Add New Message</h2>
                    <div className='grid gap-3'>
                        <input type="text" placeholder='Name' className='p-2 rounded-md focus:outline-none border' />
                        <input type="email" placeholder='Enter Email' className='p-2 rounded-md focus:outline-none border' />
                        <textarea
                            className="border rounded-md p-2  focus:outline-none"
                            rows="4"
                            placeholder="Enter description..."
                        ></textarea>
                        <input type="date" placeholder='Enter Date' className='border p-2 rounded-md focus:outline-none' />
                    </div>
                    <div className='flex justify-end items-center gap-2 mt-5 text-white '>
                        <button onClick={onClose} className='px-4 py-2 rounded-md bg-gray-400'>Cancel</button>
                        <button className='px-4 py-2 rounded-md bg-blue-600'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewMessageModal