'use client'


import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import quest from '@/public/quest.svg'
import { MissionAndVision, Vision } from './vision'
import { TeamCards } from './team'
import { FAQS } from '../components/faq'
import { NavBar } from '../components/navbar'
import { CoreValues } from './values'
import { Footer } from '../components/footer'

const InfoSection = ({ title, content }: { title: string; content: string }) => (
  <div className="relative bg-transparent rounded-lg p-6 mb-8 overflow-hidden border-[#4B4B4B] border-2">
    <Image
      src={quest.src}
      className="object-cover absolute top-0 left-0 z-0 ml-10"
      alt="ZakatChain"
      // layout="fill"
      height={240}
      width={240}
    />
    <div className="relative z-10 bg-gradient-to-b from-black/50 to-transparent p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#17163E] text-white">
      <section className='flex justify-center'>
        <NavBar />
      </section>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            On a Mission to build Africa&apos;s largest
            <br />
            <span className="text-orange-400">Charity-Blockchain Platform</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300">
            We are on a mission to provide Africa with the best solution to abject poverty by empowering
            the needy and providing long term humanitarian services to communities.
          </p>
        </section>

        <InfoSection
          title="Who Are We?"
          content="ZakatChain is a platform that leverages the power of block-chain technology to facilitate safe,
          efficient and transparent Zakat & Sadaqah payments and disbursements. We strive to reach out
          to every possible persons in need (the poor, the displaced, the challenged, e.t.c), most especially
          Muslims all around the world through donations from crypto users."
        />

        <InfoSection
          title="What We Do"
          content="We leverages blockchain technology to provide a transparent, efficient, and secure platform for
          Zakat contributions. We ensure a seamless operational process to guarantee that funds reach
          those in need through partnered foundations, orphanages, and Muslim Charity Organizations."
        />

        <InfoSection
          title="What We Do"
          content="We leverages blockchain technology to provide a transparent, efficient, and secure platform for
          Zakat contributions. We ensure a seamless operational process to guarantee that funds reach
          those in need through partnered foundations, orphanages, and Muslim Charity Organizations."
        />

<section className="bg-transparent rounded-lg p-6 border-[#4B4B4B] border-2 my-28">
  <div className="rounded-3xl">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-white text-center mb-16">
        Whom We Serve
      </h2>

      <div className="relative">
        <div className="flex justify-between gap-20 mb-20">
          <div className="text-white text-2xl font-medium text-wrap">
            Muslims in Crypto that want to pay Zakat
          </div>
          <div className="text-white text-2xl font-medium lg:ml-48">
            Muslims in Crypto that want to do Sodaqaat
          </div>
        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-36 h-full">
          <div className="absolute top-[1.125rem] w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent 50%, #FB923C 50%)',
              backgroundSize: '8px 1px',
            }}
          />
          {/* Vertical line */}
          <div className="absolute left-1/2 top-[1.125rem] w-0.5 h-24 bg-gradient-to-b from-orange-400 to-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #FB923C 50%, transparent 50%)',
              backgroundSize: '1px 8px',
            }}
          />
          
        </div>

        <div className="text-white text-2xl font-medium text-center max-w-2xl mx-auto mt-24">
          Anybody that wants to donate to any charity cause we have.
        </div>
      </div>
    </div>
  </div>
</section>

        <section>
          <div className='px-60'>
            <MissionAndVision />
          </div>
        </section>
        <section>
          <CoreValues />
        </section>
        <section className='-mb-24'>
          <h1 className="text-4xl text-center md:text-5xl font-bold">
            Meet our
            <span className="text-orange-400"> Team</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-center mt-3 font-extralight">
          Meet the incredible team behind our innovative solution, leveraging the power of Web3
to give Charity.
          </p>
          <TeamCards />
        </section>
        <section>
          <FAQS />
        </section>
        <Footer />
      </main>
    </div>
  )
}