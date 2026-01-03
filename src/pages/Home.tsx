

import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Habits from '../components/Habits';
import { useEffect, useState } from 'react';
import { getTokenData } from '../utils/jwt';

export default function Home() {
    const navigate = useNavigate();
    const [hasHabits, setHasHabits] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('arise_jwt');
        if (token) {
            const data = getTokenData(token);
            if (data && Array.isArray(data.habits) && data.habits.length > 0) {
                setHasHabits(true);
            } else {
                setHasHabits(false);
            }
        } else {
            setHasHabits(false);
        }
    }, []);
    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            {/* Lightpillar background moved to App.tsx */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <Habits />
                {!hasHabits && (
                    <p className="mt-8 text-lg md:text-2xl text-white text-center max-w-xl px-8 md:px-20 animate-fade-in delay-200 font-[Dosis,sans-serif] font-extrabold tracking-wide">
                        Create a habit to start leveling up, the more habits you complete the more levels you will gain!
                        <br />
                        <br />
                        Keep track of your progress on top, keep in mind if you break any habits, your levels might start to go down!
                    </p>
                )}
                <button
                    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#B22222] to-[#7a0404] text-white flex items-center justify-center text-4xl shadow-2xl hover:scale-110 hover:from-[#7a0404] hover:to-[#B22222] transition-all duration-200 border-4 border-white/10 focus:outline-none focus:ring-4 focus:ring-[#7a0404]/40 animate-fade-in delay-300"
                    aria-label="Create"
                    onClick={() => navigate('/form')}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" fill="none" />
                        <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}