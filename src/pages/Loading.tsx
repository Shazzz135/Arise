
import Lightning from '../utils/backgrounds/Lightning';
import FadeInText from '../utils/FadeInText';

function Loading() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Lightning hue={0} speed={0.7} intensity={1.1} size={1.1} />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
                <FadeInText
                    className="text-7xl md:text-8xl font-extrabold tracking-widest text-white font-[Orbitron,Audiowide,Montserrat,Segoe_UI,Arial,sans-serif] drop-shadow-[0_0_32px_#00eaff] drop-shadow-[0_0_64px_#00eaff]"
                    duration={1800}
                >
                    <span className="text-white">ARISE</span>
                </FadeInText>
            </div>
        </div>
    );
}

export default Loading;