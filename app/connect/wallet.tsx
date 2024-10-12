'use client'


import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { X, ChevronRight } from 'lucide-react'

const WalletOption = ({ name, icon, recommended = false }: { name: string; icon: string; recommended?: boolean }) => (
  <button className="flex items-center justify-between w-full p-4 mb-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
    <div className="flex items-center">
      <Image src={icon} alt={name} width={24} height={24} className="mr-3" />
      <span>{name}</span>
    </div>
    {recommended && <span className="text-xs text-gray-400">Recommended</span>}
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </button>
)

export default function WalletConnection() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-indigo-900 text-white flex flex-col">
      <header className="p-6">
        <Image src="/zakatchain-logo.svg" alt="ZakatChain" width={150} height={40} />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="bg-indigo-800 rounded-2xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Connect Wallet</h2>
            <button className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-300 mb-6">Seamlessly connect your wallet to make your donations.</p>
          
          <WalletOption name="Metamask" icon="/metamask-icon.svg" recommended />
          <WalletOption name="Phantom Wallet" icon="/phantom-icon.svg" />
          <WalletOption name="Trust Wallet" icon="/trust-wallet-icon.svg" />
          <WalletOption name="Wallet Connect" icon="/wallet-connect-icon.svg" />
          
          <button className="flex items-center justify-between w-full p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div className="flex items-center">
              <span className="mr-3 text-2xl">⋯</span>
              <span>All Wallets</span>
            </div>
            <span className="text-xs text-gray-400">10</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
          <p className="text-gray-300 mb-4">
            Never miss a beat. Get a weekly dose of Zakat updates, sadaqah around the world, tips, trends, and Islamic reminder in your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </main>

      <footer className="p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/zakatchain-logo.svg" alt="ZakatChain" width={120} height={32} className="mr-4" />
          <div className="text-sm">
            <Link href="/privacy-policy" className="mr-4 hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Contact us: hello@zakatchain.com</span>
          <div className="flex space-x-2">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}