import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';

// Helper function to format the date
const formatDate = (date: Date): string => {
  // Formatting to New York time zone and required format
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        timeZone: 'America/New_York',
    }).format(date);
};

const RealTimeDate: React.FC = () => {
    const [date, setDate] = useState<string>('');   
    useEffect(() => {
        const updateDate = () => {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        setDate(formattedDate);
    };

    updateDate(); // Initial call to set the date

    const interval = setInterval(updateDate, 24 * 60 * 60 * 1000); // Update every day

    return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
    <div className='mt-10'>
        <p className='w-24 px-2 py-2 rounded-lg bg-[#681c8d]'>Online <FontAwesomeIcon icon={faCircleDot} className='text-green-600'/></p>
        <div className='flex justify-center items-center gap-2'>
            <h1 className='text-sm border-2 border-purple-900 bg-gradient-to-r from-zinc-900 to-purple-950 w-32 h-16 flex justify-center items-center rounded-lg'>New York</h1>
            <p className='text-sm border-2 border-purple-900 bg-gradient-to-r from-zinc-900 to-purple-950 w-32 h-16 flex justify-center items-center rounded-lg'>{date}</p>
        </div>

        </div>
    );
};

export default RealTimeDate;