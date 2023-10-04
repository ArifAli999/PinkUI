import { CheckCheck, ClockIcon, NewspaperIcon, User2Icon, UserIcon } from 'lucide-react';
import React from 'react';

function Portal() {
    return (
        <div className='flex flex-1 flex-col w-full md:min-h-[700px] h-full border border-black rounded-lg'>

            <div className='flex p-6 w-full items-center justify-between'>
                <h2 className='font-serif text-black font-thin text-6xl'>2nd Ocotober..</h2>
                <User2Icon size={30} color='black' />
            </div>

            <div className='flex flex-1 mt-4 mb-4 p-10 w-full h-full gap-10' >
                <div className='flex  border bg-black border-black min-w-[100px] w-full p-6 rounded-md '>

                    <div className='flex  justify-between w-full'>
                        <h4 className='font-serif text-primary-pink font-thin text-2xl'>recent tasks</h4>
                        <NewspaperIcon size={22} className='text-primary-pink' />
                    </div>
                </div>

                <div className='flex  border border-black min-w-[100px] w-full p-6 rounded-md'>

                    <div className='flex  justify-between w-full'>
                        <h4 className='font-serif text-black font-thin text-2xl'>completed tasks</h4>
                        <CheckCheck size={22} className='text-black' color='black' />
                    </div>
                </div>

                <div className='flex  border bg-black border-black min-w-[100px] w-full p-6 rounded-md'>

                    <div className='flex justify-between w-full'>
                        <h4 className='font-serif text-primary-pink font-thin text-2xl'>due soon</h4>
                        <ClockIcon size={22} className='text-primary-pink' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portal;