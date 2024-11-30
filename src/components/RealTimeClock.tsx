import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Btn2 from './Btn2';

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
            const startDate = new Date('2025-01-17T00:00:00-05:00');
            const endDate = new Date('2025-01-19T23:59:59-05:00');
            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);
            setDate(`${formattedStartDate} - ${formattedEndDate} ‎ `);
        };

        updateDate(); // Initial call to set the date

        return () => {}; // No interval needed for fixed date range
    }, []);

    return (
        <div className="mt-20 p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                <a href="https://forms.gle/4A4dM2tujo8F7Ggm6" target="@blank"className="relative inline-flex items-center justify-center p-5 px-8 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-16 text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Register</span>
                    <span className="relative invisible">Register</span>
                </a>

                <div className="relative w-full md:w-auto">
                    <p className="text-lg font-bold border-2 border-purple-500 text-white w-full md:w-60 h-16 flex justify-center items-center rounded-lg shadow-md">
                        January 17-19, 2025
                    </p>

                    <p className="absolute -top-4 -right-4 px-3 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg flex items-center gap-2">
                        Online <FontAwesomeIcon icon={faCircleDot} className="text-green-400" />
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row font-bold justify-between gap-2 items-center w-full">
                <Btn2 name="Discord" link="https://discord.gg/hackunited" onClick={() => {}} className="w-full md:w-40" />
                <Btn2 name="Devpost" link="https://unitedhacksv4.devpost.com/" onClick={() => {}} className="w-full md:w-40" />
                <Btn2 name="Donate" link="https://hcb.hackclub.com/donations/start/hackunited" onClick={() => {}} className="w-full md:w-40" />
            </div>
        </div>
    );
};

export default RealTimeDate;
