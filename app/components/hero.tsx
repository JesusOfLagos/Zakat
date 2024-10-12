import { MdArrowForward } from 'react-icons/md';
import Btn from './btn';


export const Hero = () => {
    return (
        <section className="hero bg-gradient-to-r from-blue-800 to-">
            <div className="text-section">
                <h1>
                    MONIT - The central place for your financial discoveries
                </h1>
                <p>
                    Share your financial journey with the world. Learn from others and help others learn from you.
                    start your financial journey today.
                </p>

                <Btn styles={{ }} className="font-bold rounded-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4">
                    Join The Train
                    <MdArrowForward size={20} />
                </Btn>
            </div>
        </section>
    )
}