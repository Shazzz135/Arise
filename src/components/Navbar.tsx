// import Button from './Button';
// import { useNavigate, useLocation } from 'react-router-dom';
import ProgressBar from "./navbar/ProgressBar";

function Navbar() {
    // Removed unused navigate and location
    // Removed unused onFormPage, handleNewGroup, handleCancel
    return (
        <nav
            className="w-full flex items-center justify-between px-8 py-4 bg-transparent border-b border-white/20 backdrop-blur-md fixed top-0 left-0 z-50"
        >
            <div className="text-xl font-bold tracking-widest text-white">ARISE</div>
            <div className="flex-1 mr-2 ml-8">
                <ProgressBar />
            </div>
            {/* Cancel button moved to floating button in Create.tsx */}
        </nav>
    );
}

export default Navbar;