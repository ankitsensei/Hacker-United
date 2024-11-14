import { useState } from 'react';
import RealTimeClock from "../components/RealTimeClock";
import Logo from "../assets/Logos/Hackunited3Extended.png";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // Function to validate email
    const validateEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle email input change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError("");  // Clear error when user types to avoid confusion
    };

    // Handle form submission
    const handleSubmit = () => {
        // Validate email only on submit
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            // Submit the form or proceed with the next step
            console.log("Email submitted:", email);
        }
    };

    return (
        <div className="px-2 flex flex-col justify-center items-center lg:flex-row lg:w-full lg:px-40">
            <div className="w-full flex flex-col items-center justify-around mt-20 lg:mt-0">
                <img src={Logo} alt="logo" className="w-[200px] lg:w-[300px]" />
                <h1 className="text-4xl font-bold font-glitchGoblin text-purple-500 lg:text-6xl text-center lg:absolute lg:bottom-48">HACK UNITED</h1>
            </div>
            <div className='flex flex-col w-full items-center'>
                <RealTimeClock />
                <div className='flex flex-col items-center border-2 border-[#a955f736] mt-5 w-[90%] p-5 rounded-md lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center  text-sm'>
                        <p>
                            Sign up for updates on Hack United.
                        </p>
                        <p>
                            No spam, we promise
                        </p>
                    </div>
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="your email here"
                        value={email}
                        onChange={handleEmailChange}
                        className={`text-sm bg-gradient-to-r from-zinc-900 to-purple-950 w-full h-10 mt-2 rounded-md border-2 ${error ? 'border-red-500' : 'border-purple-900'} outline-none px-2`}
                    />
                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                    <div>
                        {/* Button triggers validation on click */}
                        <button 
                            onClick={handleSubmit} 
                            className="bg-purple-700 text-white text-sm px-4 py-2 mt-5 rounded-md hover:bg-purple-600 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
        