


import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const onFormPage = location.pathname === '/form';
    const handleNewGroup = () => {
        navigate('/form');
    };
    const handleCancel = () => {
        navigate('/');
    };
    return (
        <nav
            className="w-full flex items-center justify-between px-8 py-4 bg-transparent border-b border-white/20 backdrop-blur-md fixed top-0 left-0 z-50"
        >
            <div className="text-xl font-bold tracking-widest text-white">ARISE</div>
            {onFormPage ? (
                <Button
                    className="px-2 py-1 text-sm bg-[#7a0404] bg-opacity-50 text-white rounded-md font-semibold shadow hover:bg-[#7a0404] hover:bg-opacity-70 transition-colors duration-200 backdrop-blur-sm border border-white/40"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
            ) : (
                <Button
                    className="px-2 py-1 text-sm bg-[#7a0404] bg-opacity-50 text-white rounded-md font-semibold shadow hover:bg-[#7a0404] hover:bg-opacity-70 transition-colors duration-200 backdrop-blur-sm border border-white/40"
                    onClick={handleNewGroup}
                >
                    Create
                </Button>
            )}
        </nav>
    );
}

export default Navbar;