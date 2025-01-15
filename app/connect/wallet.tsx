'use client'


import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { X, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import meta from '@/public/meta.svg'
import phantom from '@/public/phantom.svg'
import trust from '@/public/trust.svg'
import walletConnect from '@/public/con.svg'

const WalletOption = ({ name, icon, recommended = false }: { name: string; icon: string; recommended?: boolean }) => (
  <button className="flex items-center justify-between w-full p-4 mb-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
    <div className="flex items-center">
      {/* <Image src={icon} alt={name} width={24} height={24} className="mr-3" /> */}
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
          
          <WalletOption name="Metamask" icon={meta.src} recommended />
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



interface WalletOption {
  id: string
  name: string
  icon: string
  isRecommended?: boolean
}

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
  onConnect: (walletId: string) => Promise<void>
}

export function WalletConnectModal({ 
  isOpen, 
  onClose,
  onConnect 
}: WalletConnectModalProps) {
  const [connecting, setConnecting] = useState<string | null>(null)

  const wallets: WalletOption[] = [
    {
      id: 'metamask',
      name: 'Metamask',
      icon: meta,
      isRecommended: true
    },
    {
      id: 'phantom',
      name: 'Phantom Wallet',
      icon: phantom
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      icon: trust
    },
    {
      id: 'walletconnect',
      name: 'Wallet Connect',
      icon: walletConnect
    }
  ]

  const handleConnect = async (walletId: string) => {
    try {
      setConnecting(walletId)
      await onConnect(walletId)
    } catch (error) {
      console.error('Failed to connect:', error)
    } finally {
      setConnecting(null)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center p-4 bg-black/50"
          style={{ background: 'linear-gradient(to bottom, #17163E 0%, #17163E40 25%, #17163E 100%)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            style={{ background: 'linear-gradient(to bottom, #17163E 0%, #17163E40 25%, #17163E 100%)' }}

            className="relative w-full max-w-lg bg-[#14143f] rounded-3xl shadow-xl overflow-hidden  border-2 border-white"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            {/* <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button> */}

            {/* Header */}
            <div className="p-6 pb-0 text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Connect Wallet
              </h2>
              <p className="text-white/70 mb-6">
                Seamlessly connect your wallet to make your donations.
              </p>
              <hr />
            </div>

            <div className="p-6 space-y-3">
              {wallets.map((wallet) => (
                <motion.button
                  key={wallet.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 bg-[#1f1f4b] rounded-xl flex items-center justify-between text-white hover:bg-[#2a2a5a] transition-colors"
                  onClick={() => handleConnect(wallet.id)}
                  disabled={!!connecting}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={wallet.icon}
                        alt={wallet.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-lg font-medium">{wallet.name}</span>
                  </div>
                  {wallet.isRecommended && (
                    <span className="text-sm text-white/50">Recommended</span>
                  )}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-[#1f1f4b] rounded-xl flex items-center justify-between text-white hover:bg-[#2a2a5a] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white/70 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  <span className="text-lg font-medium">All Wallets</span>
                </div>
                <span className="text-sm text-white/50">10</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}