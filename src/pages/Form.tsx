import Lightpillar from '../utils/backgrounds/Lightpillar';
import Navbar from '../components/Navbar';

function Form() {
    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            <div className="absolute inset-0 w-full h-full">
                <Lightpillar
                    topColor="#750101"
                    bottomColor="#B22222"
                    intensity={1.0}
                    rotationSpeed={0.5}
                    glowAmount={0.005}
                    pillarWidth={2.5}
                    pillarHeight={0.5}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="normal"
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Create New Group</h2>
                    <input className="p-2 rounded bg-white/20 text-white placeholder:text-white/60" placeholder="Group Name" />
                    <textarea className="p-2 rounded bg-white/20 text-white placeholder:text-white/60" placeholder="Description" />
                    <button type="submit" className="px-2 py-1 text-sm bg-[#7a0404] bg-opacity-50 text-white rounded-md font-semibold shadow hover:bg-[#7a0404] hover:bg-opacity-70 transition-colors duration-200 backdrop-blur-sm border border-white/40">Create</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
