import Lightpillar from '../utils/backgrounds/Lightpillar';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

function Create() {
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 md:p-16 lg:p-24">
                <Form />
            </div>
        </div>
    );
}

export default Create;
