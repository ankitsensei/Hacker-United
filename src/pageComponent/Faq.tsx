import { useState, useRef } from "react";
import { gsap } from "gsap";

type FAQ = {
    question: string;
    answer: string;
};

const Faq: React.FC = () => {
    const faqs: FAQ[] = [
        { question: "What is a hackathon?", answer: "A hackathon is a collaborative event where many people come together to collaborate and compete using computer programming." },
        { question: "Can I join as a beginner?", answer: "Of course! We will provide more resources to help you build your project." },
        { question: "Where is the workshop schedule?", answer: "The workshop schedule is available in our Discord!" },
        { question: "Do I have to pay to enter?", answer: "Nope! Our hackathon is completely free to compete in." },
        { question: "How does finding a team work?", answer: "You can choose your own team members, or work solo. Maximum team size is 4. When submitting your project on Devpost, make sure to include all team members." },
        { question: "How do I register?", answer: "To register, start off by clicking 'Register' at the top of the website. After filling out that form, go to Devpost and sign up there! Also, don't forget to join our Discord." },
        { question: "What do I submit?", answer: "At the end of the hacking period, on Devpost submit a public GitHub repository, a video explaining and demonstrating your project, and a short explanation of your project." },
        { question: "What time zone is this based in?", answer: "We are based in EST, however you can compete in any time zone." },
        { question: "Do we have to submit a project to register?", answer: "Nope! Feel free to register just to browse our workshops and resources." },
        { question: "When is the registration deadline?", answer: "August 4th, 2023 at 4:30pm EST." },
        { question: "What if I'm not interested in coding?", answer: "This hackathon is a space to get interested. As long as you like to solve problems, you are more than welcome to attend our hackathon to learn and connect with an encouraging community." },
        { question: "Who is hosting this hackathon?", answer: "United Hacks is a hackathon hosted by Hack United, a non-profit organization founded by teens on a mission to provide a collaborative environment where innovators of all backgrounds can learn and grow together." },
        { question: "I have a different question.", answer: "Join our Discord and make a ticket! We will get back to you as soon as possible." },
    ];

    const [openSections, setOpenSections] = useState<number[]>([]);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFaq = (index: number) => {
        const ref = faqRefs.current[index];

        if (!ref) return;

        if (openSections.includes(index)) {
            // Animate closing
            gsap.to(ref, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    // Update state after closing animation
                    setOpenSections((prev) => prev.filter((i) => i !== index));
                },
            });
        } else {
            // Update state first to trigger render for opening
            setOpenSections((prev) => [...prev, index]);
            // Animate opening
            gsap.fromTo(
                ref,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    };

    return (
        <div className="flex flex-col items-center mx-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text underline underline-offset-4 lg:text-4xl mb-8">
                FAQs
            </h1>
            <div className="w-full lg:w-3/4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-zinc-500 py-4">
                        <button
                            className="flex justify-between items-center w-full text-left font-semibold text-sm text-purple-400 focus:outline-none lg:text-md"
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                            <span>{openSections.includes(index) ? "−" : "+"}</span>
                        </button>
                        <div
                            ref={(el) => (faqRefs.current[index] = el)}
                            className="overflow-hidden"
                        >
                            {openSections.includes(index) && (
                                <p className="mt-2 text-gray-300 bg-fuchsia-400 bg-opacity-20 text-sm rounded-md p-4">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
