
import LightPillar from '../components/backgrounds/lightpillar';

function Home() {
    return (
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <LightPillar
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
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-white font-[Orbitron,Audiowide,Montserrat,Segoe_UI,Arial,sans-serif] glow-red animate-fade-in">
                    ARISE
                </h1>
            </div>
        </div>
    );
}

export default Home