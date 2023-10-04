import React from 'react';

function DateBox({ active, icon }) {
    const activeStyle = active ? 'bg-black text-primary-pink' : 'bg-transparent text-black';

    return (
        <div className={`${activeStyle} flex items-center flex-col gap-4 px-6 py-10 max-h-[110px] max-w-[150px] justify-center border border-black rounded-lg cursor-pointer`}>
            <h2 className='text-base font-light '>{icon}</h2>

            {active ?
                <span className='  bg-primary-pink rounded-full p-1'></span>
                : null}
        </div>
    );
}

export default DateBox;