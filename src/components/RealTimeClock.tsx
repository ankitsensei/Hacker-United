import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import Btn2 from "./Btn2"

const formatDate = (date: Date): string => {
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
        <div className="mt-14">
            <div className="relative flex justify-center items-center gap-2">
                
                <h1 className="text-sm font-semibold border-2 border-purple-700 bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 text-white w-32 h-12 flex justify-center items-center rounded-lg shadow-md">
                    New York
                </h1>

                <div className="relative">
                    <p className="text-sm font-semibold border-2 border-purple-700 bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 text-white w-32 h-12 flex justify-center items-center rounded-lg shadow-md">
                        {date}
                    </p>

                    <p className="absolute -top-4 -right-4 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg flex items-center gap-1">
                        Online <FontAwesomeIcon icon={faCircleDot} className="text-green-400" />
                    </p>
                </div>
            </div>
            <div className='flex justify-between gap-2 items-center w-full'>
                <Btn2 name="Discord" link="https://discord.gg/PszEUgsk" onClick={() => {}}/>
                <Btn2 name="Devpost" link="https://unitedhacks23.devpost.com/" onClick={() => {}}/>
                <Btn2 name="Donate" link="https://hcb.hackclub.com/donations/start/hackunited" onClick={() => {}}/>
            </div>
            
        </div>
    );
};

export default RealTimeDate;
