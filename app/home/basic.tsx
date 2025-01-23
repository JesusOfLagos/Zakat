'use client'


import Image from 'next/image'
import Link from 'next/link'
import { NavBar } from '../components/navbar'
import zakat from '@/public/zakat.svg'
import { Hero } from '../components/hero'
import calc from '@/public/calc.svg'
import conne from '@/public/conne.svg'
import zpay from '@/public/zpay.svg'
import lock from '@/public/intlock.svg'
import checkcircle from '@/public/check-circle.svg'
import profilePic from '@/public/profile.svg'


import bitcoin from '@/public/bitcoin.svg'
import etherium from '@/public/eth.svg'
import solana from '@/public/sol.svg'
import usdt from '@/public/usdt.svg'
import usdc from '@/public/usdc.svg'
import shib from '@/public/shib.svg'
import { Stats } from '../components/stats'

const testimonials = [
  {
    quote: "I had an awesome experience while using ZakatChain to make my donations. First of its kind in the world, it offers an amazing solution for everyone in the Web3 space.",
    name: "Jalaal Rolling Dollars",
    title: "Web 3 Influencer",
    image: profilePic,
  },
  {
    quote: "I had an awesome experience while using ZakatChain to make my donations. First of its kind in the world, it offers an amazing solution for everyone in the Web3 space.",
    name: "Jalaal Rolling Dollars",
    title: "Web 3 Influencer",
    image: profilePic,
  },
  {
    quote: "I had an awesome experience while using ZakatChain to make my donations. First of its kind in the world, it offers an amazing solution for everyone in the Web3 space.",
    name: "Jalaal Rolling Dollars",
    title: "Web 3 Influencer",
    image: profilePic,
  },
];


const Analytics = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Analytics Text */}
        <h2 className="text-4xl font-bold mb-8 md:mb-0 md:mr-10">
          Analytics
        </h2>

        {/* Vertical Line */}
        <div className="hidden md:block h-[550px] w-[2px] bg-white"></div>

        {/* Stats */}
        <div className="mt-8 md:mt-0 md:ml-10 text-center md:text-left">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg uppercase">Donors</h3>
              <p className="text-4xl font-bold">100+</p>
            </div>
            <div>
              <h3 className="text-lg uppercase">Amount Raised</h3>
              <p className="text-4xl font-bold">$400+</p>
            </div>
            <div>
              <h3 className="text-lg uppercase">Beneficiaries</h3>
              <p className="text-4xl font-bold">500</p>
            </div>
            <div>
              <h3 className="text-lg uppercase">Volunteers</h3>
              <p className="text-4xl font-bold">15+</p>
            </div>
            <div>
              <h3 className="text-lg uppercase">Community Members</h3>
              <p className="text-4xl font-bold">200+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className='flex justify-center'>
      <Image src={icon} alt={title} width={80} height={80} className="mb-4" />
    </div>
    <div className='flex flex-col justify-center'>
      <h3 className="text-3xl text-center text-black font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  </div>
)

export default function LandingPage() {
  return (
    <div className="bg-[#17163E] text-white min-h-screen">
      <main>
        <section className='flex justify-center'>
          <NavBar />
        </section>
        <Hero />
        {/* <DocsList /> */}

        {/* <section className="container mx-auto py-20">
          <Image src="/blockchain-illustration.svg" alt="Blockchain Illustration" width={600} height={400} className="mx-auto" />
        </section> */}

        <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={calc.src}
            title="Zakat Calculator"
            description="Our in-app calculator helps you easily determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon={conne.src}
            title="Connect Wallet"
            description="Seamlessly connect your cryptocurrency wallet to determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon={zpay.src}
            title="Zakat Payments"
            description="Our in-app calculator helps you accurately determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon={calc.src}
            title="Sadaqah Donations"
            description="Our in-app calculator helps you easily determine your Sadaqah amount and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon={conne.src}
            title="Wallet Compatible"
            description="Seamlessly connect your cryptocurrency wallet to determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon={zpay.src}
            title="Zakat Payments"
            description="Our in-app calculator helps you accurately determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
        </section>

        <section className="container py-20 px-24">
          <h2 className="text-3xl font-bold text-center mb-3">Experience Seamless Wallet Integration</h2>
          <div className="flex justify-around items-center gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-wrap">Transaction Management</h3>
              <ul className="text-left">
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> Transaction history and making zakat contributions can be streamlined</li>
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> Multiple wallets and select default wallet for specific donations</li>
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> Offer reminders or alerts for important zakat dates (e.g., regularly updating wallet data)</li>
              </ul>
            </div>
            <div>
              <Image src={lock.src} alt="Transaction Management" width={400} height={400} className="mx-auto mb-4" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-wrap">Security & Authentication</h3>
              <ul className="text-left">
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> This includes two-factor authentication, biometric verification, or password prompts</li>
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> Provide clear messaging about security best practices and techniques.</li>
                <li className='flex gap-2'> <img className='-mt-6' src={checkcircle.src} alt="" /> Offer reminders or alerts for important security updates (e.g., regularly updating wallet data)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container -mt-20 mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-8">We Accept all Coins</h2>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-scroll space-x-8 lg:space-x-24">
              {/* Original Icons */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
              {/* Duplicate Icons for Seamless Loop */}
              <Image src={bitcoin.src} alt="Bitcoin" width={50} height={50} />
              <Image src={etherium.src} alt="Ethereum" width={50} height={50} />
              <Image src={solana.src} alt="Solana" width={50} height={50} />
              <Image src={usdt.src} alt="Tether" width={50} height={50} />
              <Image src={usdc.src} alt="USD Coin" width={50} height={50} />
              <Image src={shib.src} alt="Dogecoin" width={50} height={50} />
            </div>
          </div>
        </section>



        <section className="container -mt-20 mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-2">Our Platform is Trusted by our Users</h2>
          <h4 className='font-extralight text-sm mb-5'>Trusted for fast and seamless transactions, here is what our users have to say.</h4>
          <div className="relative overflow-hidden w-full">
            <div className="flex justify-center animate-scroll">
              {/* Original Icons */}
              <div className="flex justify-center space-x-12 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-6 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-6 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate Icons for Seamless Loop */}
              <div className="flex justify-center space-x-6 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate Icons for Seamless Loop */}
              <div className="flex justify-center space-x-6 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate Icons for Seamless Loop */}
              <div className="flex justify-center space-x-6 p-6 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#4E4D66] text-white rounded-2xl shadow-md p-6 w-80 flex flex-col space-y-4"
                  >
                    <p className="italic text-sm">{`“${testimonial.quote}”`}</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section>
          <Analytics />
        </section>
      </main>
    </div>
  )
}