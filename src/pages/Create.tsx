import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

function Create() {
    const navigate = useNavigate();
    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            {/* Lightpillar background moved to App.tsx */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-2 pb-8 px-8 md:px-16 lg:px-24">
                <Form />
                <button
                    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#B22222] to-[#7a0404] text-white flex items-center justify-center text-4xl shadow-2xl hover:scale-110 hover:from-[#7a0404] hover:to-[#B22222] transition-all duration-200 border-4 border-white/30 focus:outline-none focus:ring-4 focus:ring-[#7a0404]/40 animate-fade-in delay-300"
                    aria-label="Cancel"
                    onClick={() => navigate('/')}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" fill="none" />
                        <rect x="8" y="15" width="16" height="2.5" rx="1.25" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Create;
