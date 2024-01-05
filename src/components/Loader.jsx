import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <div className="flex justify-center items-center">
                <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin relative">
                    <div className="absolute inset-0 flex items-center justify-center text-blue-500">
                        {Math.round(progress)}%
                    </div>
                </div>
            </div>
        </Html>
    );
};

export default Loader;
