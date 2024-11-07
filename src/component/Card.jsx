import React, { useEffect, useState } from 'react';
import { BsStack } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";
import { LuMessageCircle } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import axios from 'axios';
import useAxiosPublic from '../axiosPublic/useAxiosPublic';
import Swal from 'sweetalert2';

const Card = ({ item, refetch }) => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const axiosPublic = useAxiosPublic()

    const handleFileChange = (event,id) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };


    const handleUpload = async (e,id) => {
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('files', file)
            });

            formData.append('clientId', id)

            try {
                const response = await axiosPublic.post('/attachments', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log('Upload successful:', response.data)
                if (response.data.message === "Files uploaded successfully") {
                    Swal.fire({
                        title: "Upload Successful",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setSelectedFiles([])
                            window.location.reload();
                        }
                    });
                }
            } catch (error) {
                console.error('Error uploading files:', error);
                Swal.fire({
                    title: "Failed To Upload",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then((result) => {
                    if (result.isConfirmed) {
                        setSelectedFiles([])
                        window.location.reload();
                    }
                });
            }
        }
    }


    return (
        <div className='w-[520px] bg-white p-3 rounded-md mb-2'>

            {/* image section */}
            <div className='flex justify-between font-semibold text-[17px]'>
                <div className='flex items-center gap-2'>
                    <img src='../../public/images/lon-the-professional-wallpaper-preview.jpg' className='w-8 h-8 rounded-full' alt="img loading" />
                    <h1>{item?.client_name}</h1>
                </div>

                <div className='flex items-center gap-2'>
                    <img src='../../public/images/images.jpeg' className='w-8 h-8 rounded-full' alt="img loading" />
                    <h1>{item?.owner_name}</h1>
                </div>
            </div>

            {/* lorem section */}
            <div className='mt-3 flex justify-between text-slate-600'>
                <div className='flex items-center gap-3'>
                    <div><BsStack></BsStack></div>
                    <h1>This to to inform that I have been working...</h1>
                </div>

                <div className='flex gap-1 items-center bg-slate-100 p-1 rounded-md text-slate-600'>
                    <div><RiTodoFill className='text-[19px]'></RiTodoFill></div>
                    <h1>1/2</h1>
                </div>
            </div>



            {/* bottom section */}
            <div className='flex mt-3 text-slate-600 justify-between'>
                <div>
                    <img src='../../public/images/lon-the-professional-wallpaper-preview.jpg' className='w-8 h-8 rounded-full' alt="img loading" />
                </div>
                <div>
                    <img src='../../public/images/images.jpeg' className='w-8 h-8 rounded-full' alt="img loading" />
                </div>
                <div className='bg-slate-200 p-1 rounded-full font-semibold'>
                    <h1>12+</h1>
                </div>
                <div className='flex gap-1 items-center font-semibold'>
                    <div><LuMessageCircle className='text-[24px]'></LuMessageCircle></div>
                    <h1>15</h1>
                </div>




                {/* MAIN ATTACHMENT */}
                <div className='flex gap-1 items-center font-semibold'>
                    <Link className='flex items-center'><button onClick={() => document.getElementById(`my_modal_${item._id}`).showModal()}> <GrAttachment className='text-[24px]'></GrAttachment></button></Link>
                    <Link>{item.files.length}</Link>
                </div>





                <div className='flex gap-2 items-center font-semibold'>
                    <div><SlCalender className='text-[20px]'></SlCalender></div>
                    <Link>07-11-2024</Link>
                </div>
            </div>





            {/* modal  modal modal */}
            <dialog id={`my_modal_${item._id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Upload Attachments</h3>
                    <form method="dialog" className='flex flex-col'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <input
                            type="file"
                            multiple
                            onChange={(e)=>handleFileChange(e,item._id)}
                            className="mb-4"
                        />
                        <input className='border rounded-md bg-slate-200 font-semibold hover:bg-slate-400 py-1' onClick={(e)=>handleUpload(e,item._id)} type="submit" value="Upload" />
                    </form>


                </div>
            </dialog>

        </div>
    );
};

export default Card;