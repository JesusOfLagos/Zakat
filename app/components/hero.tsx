import Image from 'next/image';
import heroim from '@/public/heroim.svg';



export const Hero = () => {
    return (
        <section className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Redefining the beauty of Charity,<br />
            powered by <span className="text-orange-400">Blockchain Technology</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto">
            Our platform allows you pay Zakat by calculating your assets using our in-app calculator,
            donate to the needy, and help build humanitarian projects across the globe.
          </p>
          <div className="space-x-4 flex justify-center">
            <button className="bg-orange-300 text-white px-6 py-2 rounded-xl hover:bg-orange-500">
              Donate now
            </button>
            <button className="px-6 py-2 rounded-xl hover:text-indigo-900 border-2">
              Learn more
            </button>
          </div>
          <div>
            <Image src={heroim} alt="Hero Illustration" width={600} height={400} className="mx-auto" />
          </div>
        </section>
    )
}