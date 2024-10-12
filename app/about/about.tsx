import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const NavItem = ({ href, children, hasDropdown = false }: { href: string; children: React.ReactNode; hasDropdown?: boolean }) => (
  <li className="relative group">
    <Link href={href} className="text-white hover:text-orange-400 transition-colors flex items-center">
      {children}
      {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
    </Link>
  </li>
)

const InfoSection = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-indigo-800 rounded-lg p-6 mb-8 relative overflow-hidden">
    <div className="absolute -left-24 -top-24 w-64 h-64 bg-orange-500 rounded-full opacity-50 transform -rotate-45"></div>
    <h2 className="text-3xl font-bold mb-4 relative z-10">{title}</h2>
    <p className="text-gray-300 relative z-10">{content}</p>
  </div>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-indigo-900 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Image src="/zakatchain-logo.svg" alt="ZakatChain" width={150} height={40} />
        <nav>
          <ul className="flex space-x-6">
            <NavItem href="/wallet">Wallet</NavItem>
            <NavItem href="/what-we-do" hasDropdown>What We Do</NavItem>
            <NavItem href="/outreach">Outreach</NavItem>
            <NavItem href="/community" hasDropdown>Community</NavItem>
          </ul>
        </nav>
      </header>

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

        <section className="bg-indigo-800 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Whom We Serve</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <span>Muslims in Crypto that want to pay Zakat</span>
              <span className="text-orange-400">⟶</span>
              <span>Muslims in Crypto that want to do Sodaqaat</span>
            </div>
            <div className="h-8 border-l-2 border-orange-400"></div>
            <div>
              Anybody that want to donate to any charity cause we have.
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ZakatChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}