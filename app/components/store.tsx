import React from 'react';
import Btn from './btn';
import googleImage from '@/public/applemac.svg'
import Image from 'next/image';


export interface StoreButtonProps {
  link: string;
  imgSrc: string;
  altText: string;
  text?: {
    line1?: string;
    line2?: string;
  };
}

const StoreButton = ({ link, imgSrc, altText, text }: StoreButtonProps) => {
  return (
    <Btn styles={{ }} className="font-bold rounded-full px-6 py-9 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4">
    <a href={link} className="inline-block">
      <div className="flex items-center text-white py-2 px-4 rounded-lg transition-colors">
        <Image src={imgSrc} alt={altText} className="h-6 mr-3" />
        <p className='px-3'>{altText}</p>
        <div className="text-left">
          <p className="text-xs">{text?.line1}</p>
          <p className="text-sm font-semibold">{text?.line2}</p>
        </div>
      </div>
    </a>
    </Btn>
  );
};

export const AppDownloadButton = () => {
  return (
    <div className="flex gap-4">
      <StoreButton
        link="https://www.apple.com/app-store/"
        imgSrc={googleImage} 
        altText="Apple App Store"
        text={{ line1: 'Get it on', line2: 'App Store' }}
      />
      <StoreButton
        link="https://play.google.com/store"
        imgSrc={googleImage} 
        altText="Google Play Store"
        text={{ line1: 'Get it on', line2: 'Google Play' }}
      />
    </div>
  );
};

export const AppDownloadButtons = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto py-8">
        <AppDownloadButton />
      </div>
    </div>
  )
}


