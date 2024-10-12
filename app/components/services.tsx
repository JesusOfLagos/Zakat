import Image from 'next/image';
import image from '@/public/servicesremove.png';
import { MdArrowForward } from 'react-icons/md';


export const OurServices = () => {
    return (
        <div  className="flex bg-white m-12 mt-36">
            <div className="w-2/5">
                <h1 className="font-bold text-5xl">Our  <br /> Services</h1>
                <div>
                    <Image className="" src={image} alt={""} />
                </div>
            </div>
            <div className="mt-10 w-3/5">
                {/* <h1 className="font-bold text-3xl mb-2">MSSN Tutorial</h1> */}
                <p className="py-2 text-gray-600">In the realm of finance, every individual plays a crucial role. Your needs are our utmost priority because there is no us without you.</p>

                <p className="py-2 text-gray-600">We have assembled a wealth of resources to support your financial endeavors. Explore the comprehensive guides and tools through the link below.</p>

                <p className="py-2 text-gray-600">Our team is a diverse group of financial experts, entrepreneurs, analysts, and strategists united by a single mission: to build a future where financial success is accessible and achievable for everyone. We are committed to empowering you with the knowledge and resources needed to navigate the complex world of finance confidently.</p>

                <p className="py-2 text-gray-600">Explore the curated resources that will assist you in making informed financial decisions. Together, we are shaping a future of financial literacy and independence for all.</p>
                <button
                    className="font-bold rounded-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4"
                    style={{
                        margin: "1rem -2rem",
                        color: ""
                    }}>
                    Explore Our Services
                    <MdArrowForward size={20} />
                </button>
            </div>
        </div>
    )
}