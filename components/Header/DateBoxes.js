import React from 'react';
import DateBox from './DateBox';
import { CalendarDays, FolderIcon, PlusIcon, TrashIcon } from 'lucide-react';

function DateBoxes() {
    return (
        <div className='flex flex-col gap-6 w-[12%] mt-6'>
            <DateBox
                icon={<CalendarDays size={20} />}
                active />
            <DateBox icon={<PlusIcon size={20} />} />
            <DateBox icon={<FolderIcon size={20} />} />
            <DateBox icon={<TrashIcon size={20} />} />
        </div>
    );
}

export default DateBoxes;