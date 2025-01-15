import React from 'react';
import Image from 'next/image';


interface DocProps {
    image: string;
    title: string;
    description: string;
    }



export const Doc: React.FC<DocProps> = (doc) => {
    return (
        <div className="bg-white">
            <Image src={doc.image} alt="ZakatChain Logo" width={150} height={40} />
            <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
            <p className="text-gray-600">{doc.description}</p>
        </div>
    );
}