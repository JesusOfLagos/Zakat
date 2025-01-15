import Image from 'next/image';

import imageOne from '@/public/img1.svg';
import imageTwo from '@/public/img2.svg';
import imageThree from '@/public/img3.svg';

const images = [imageOne, imageTwo, imageThree];

export const OutreachGallery = () => {
    return (
        <section className="p-4">
            <div className="grid gap-8">
                {/* {images.map((image, index) => ( */}
                    <div 
                        // key={index} 
                        className={`grid grid-cols-2 gap-4 items-center`}
                    >
                        {/* Large image */}
                        <div className="col-span-1">
                            <Image 
                                src={images[0].src} 
                                alt={`Image`} 
                                width={600} 
                                height={400} 
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                        
                        {/* Two smaller images */}
                        <div className="col-span-1 grid grid-rows-2 gap-4">
                            <Image 
                                src={images[1].src} 
                                alt={`Image - Top`} 
                                width={300} 
                                height={200} 
                                className="w-full h-auto object-cover rounded-md"
                            />
                            <Image 
                                src={images[2].src} 
                                alt={`Image - Bottom`} 
                                width={300} 
                                height={200} 
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                    </div>
                {/* ))} */}
            </div>
        </section>
    );
};
