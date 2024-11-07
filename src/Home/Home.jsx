import React, { useState } from 'react';
import Card from '../component/Card';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../axiosPublic/useAxiosPublic';


const Home = () => {

    const { data: allData = [], refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/clients')
            return res.data
        }
    })



    const incomplete = allData?.filter((data) => data?.status === "incomplete")
    const doing = allData?.filter((data) => data?.status === "Doing")
    const completed = allData?.filter((data) => data?.status === "Completed")
    const underReview = allData?.filter((data) => data?.status === "underReview")














    return (
        <div className='flex m-2 gap-5 overflow-x-auto overflow-hidden h-screen'>


            {/* each long card --- incomplete*/}
            <div className='bg-slate-100 py-4 px-3'>

                {/* heading */}
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-2 text-[18px] font-medium text-slate-600 mb-2'>
                        <div className='bg-red-500 w-5 h-5 rounded-l-full'></div>
                        <h1>Incomplete</h1>
                    </div>

                    <div className='text-[18px] bg-slate-300 px-3 rounded'>
                        {incomplete?.length}
                    </div>
                </div>

                {/* each cards*/}
                <div className='mt-5 overflow-y-auto  h-[calc(100%-50px)]'>
                    {
                        incomplete.map((data) => <Card key={data._id} item={data}></Card>)
                    }
                </div>
            </div>







            {/* each long card --- To DO*/}
            <div className='bg-slate-100 py-4 px-3'>

                {/* heading */}
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-2 text-[18px] font-medium text-slate-600 mb-2'>
                        <div className='bg-blue-500 w-5 h-5 rounded-l-full'></div>
                        <h1>To Do</h1>
                    </div>

                    <div className='text-[18px] bg-slate-300 px-3 rounded'>
                        {doing?.length}
                    </div>
                </div>

                {/* each cards*/}
                <div className='mt-5 overflow-y-auto  h-[calc(100%-50px)]'>
                    {
                        doing?.map((data) => <Card key={data._id} item={data}></Card>)
                    }
                </div>
            </div>



            {/* each long card --- Doing*/}
            <div className='bg-slate-100 py-4 px-3'>

                {/* heading */}
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-2 text-[18px] font-medium text-slate-600 mb-2'>
                        <div className='bg-green-500 w-5 h-5 rounded-l-full'></div>
                        <h1>Doing</h1>
                    </div>

                    <div className='text-[18px] bg-slate-300 px-3 rounded'>
                        {completed?.length}
                    </div>
                </div>

                {/* each cards*/}
                <div className='mt-5 overflow-y-auto  h-[calc(100%-50px)]'>
                    {
                        completed?.map((data) => <Card key={data._id} item={data}></Card>)
                    }
                </div>
            </div>




            {/* each long card --- Under Review*/}
            <div className='bg-slate-100 py-4 px-3'>

                {/* heading */}
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-2 text-[18px] font-medium text-slate-600 mb-2'>
                        <div className='bg-yellow-400 w-5 h-5 rounded-l-full'></div>
                        <h1>Under Review</h1>
                    </div>

                    <div className='text-[18px] bg-slate-300 px-3 rounded'>
                        {underReview?.length}
                    </div>
                </div>

                {/* each cards*/}
                <div className='mt-5 overflow-y-auto  h-[calc(100%-50px)]'>
                    {
                        underReview?.map((data) => <Card key={data._id} item={data}></Card>)
                    }
                </div>
            </div>



            {/* each long card --- Completed*/}
            <div className='bg-slate-100 py-4 px-3'>

                {/* heading */}
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center gap-2 text-[18px] font-medium text-slate-600 mb-2'>
                        <div className='bg-purple-500 w-5 h-5 rounded-l-full'></div>
                        <h1>Completed</h1>
                    </div>

                    <div className='text-[18px] bg-slate-300 px-3 rounded'>
                        {completed?.length}
                    </div>
                </div>

                {/* each cards*/}
                <div className='mt-5 overflow-y-auto  h-[calc(100%-50px)]'>
                    {
                        incomplete?.map((data) => <Card key={data._id} item={data}></Card>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;