import Image from 'next/image';
import heroim from '@/public/heroim.svg';



export const OutreachHero = () => {
    return (
        <section className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
          Help us keep making a difference to our <br />
            powered by <span className="text-orange-400">Community</span> and <span className="text-orange-400">Beyond.</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto">
          Since our launch, with the help of our donors, we&apos;ve proudly fed over 150 people in need. Join us as we continue our mission to provide nourishment, hope, and support to those who need it most.
          </p>
          <div className="space-x-4 flex justify-center">
            <button className="bg-orange-300 text-white px-6 py-2 rounded-xl hover:bg-orange-500">
              Donate now
            </button>
            <button className="border-4 border-white px-6 py-2 rounded-xl hover:bg-white hover:text-indigo-900">
              View More Photos
            </button>
          </div>
        </section>
    )
}