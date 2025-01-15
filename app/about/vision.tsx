import Image from 'next/image';
import vision from '@/public/vision.svg';
import mission from '@/public/mission.svg';


export const Vision = () => {
    return (
        <div className="border-[#4B4B4B] border-2 rounded-2xl">
            <div className='flex'>
                <div className='w-1/2'>
                    <Image src={vision.src} alt="ZakatChain Vision" width={350} height={140} />
                </div>
                <div className='w-1/2 mt-20 flex flex-col gap-8'>
                    <h1 className='text-wrap font-bold text-4xl'>Our <br /> <span className='text-[#384b6b] underline'> Vision</span></h1>
                    <p>We leverages blockchain technology to provide a transparent, efficient, and secure platform for Zakat contributions. We ensure a seamless operational process to guarantee that funds reach those in need through partnered foundations, orphanages, and Muslim Charity Organizations.</p>
                </div>
            </div>
        </div>
    );
} 


export const Mission = () => {
    return (
        <div className="border-[#4B4B4B] border-2 rounded-2xl">
            <div className='flex mx-8'>
                <div className='w-1/2'>
                    <Image src={mission.src} alt="ZakatChain Vision" width={350} height={140} />
                </div>
                <div className='w-1/2 mt-20 flex flex-col gap-8'>
                    <h1 className='text-wrap font-bold text-4xl'>Our <br /> <span className='text-[#384b6b] underline'> Vision</span></h1>
                    <p>We leverages blockchain technology to provide a transparent, efficient, and secure platform for Zakat contributions. We ensure a seamless operational process to guarantee that funds reach those in need through partnered foundations, orphanages, and Muslim Charity Organizations.</p>
                </div>
            </div>
        </div>
    );
} 



export const MissionAndVision = () => {
    return (
        <div className="rounded-2xl space-y-12">
            <Vision />
            <Mission />
        </div>
    );
}