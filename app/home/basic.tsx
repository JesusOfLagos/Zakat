import Image from 'next/image'
import Link from 'next/link'

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function LandingPage() {
  return (
    <div className="bg-indigo-900 text-white min-h-screen">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Image src="/logo.svg" alt="ZakatChain Logo" width={150} height={40} />
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-orange-400">Wallet</Link></li>
            <li><Link href="#" className="hover:text-orange-400">What We Do</Link></li>
            <li><Link href="#" className="hover:text-orange-400">Outreach</Link></li>
            <li><Link href="#" className="hover:text-orange-400">Community</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Redefining the beauty of Charity,<br />
            powered by <span className="text-orange-400">Blockchain Technology</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto">
            Our platform allows you pay Zakat by calculating your assets using our in-app calculator,
            donate to the needy, and help build humanitarian projects across the globe.
          </p>
          <div className="space-x-4">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500">
              Donate now
            </button>
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-900">
              Learn more
            </button>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <Image src="/blockchain-illustration.svg" alt="Blockchain Illustration" width={600} height={400} className="mx-auto" />
        </section>

        <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="/calculator-icon.svg"
            title="Zakat Calculator"
            description="Our in-app calculator helps you easily determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon="/wallet-icon.svg"
            title="Connect Wallet"
            description="Seamlessly connect your cryptocurrency wallet to determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon="/payment-icon.svg"
            title="Zakat Payments"
            description="Our in-app calculator helps you accurately determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon="/donation-icon.svg"
            title="Sadaqah Donations"
            description="Our in-app calculator helps you easily determine your Sadaqah amount and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon="/wallet-compatible-icon.svg"
            title="Wallet Compatible"
            description="Seamlessly connect your cryptocurrency wallet to determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
          <FeatureCard
            icon="/payment-icon.svg"
            title="Zakat Payments"
            description="Our in-app calculator helps you accurately determine your Zakatable assets and provide detailed insights on the exact amount you need to pay for Zakat."
          />
        </section>

        <section className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Seamless Wallet Integration</h2>
          <div className="flex justify-around items-center">
            <div className="text-center">
              <Image src="/transaction-icon.svg" alt="Transaction Management" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transaction Management</h3>
              <ul className="text-left">
                <li>• Transaction history and making zakat contributions can be streamlined</li>
                <li>• Multiple wallets and select default wallet for specific donations</li>
                <li>• Offer reminders or alerts for important zakat dates (e.g., regularly updating wallet data)</li>
              </ul>
            </div>
            <div className="text-center">
              <Image src="/security-icon.svg" alt="Security & Authentication" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Authentication</h3>
              <ul className="text-left">
                <li>• This includes two-factor authentication, biometric verification, or password prompts</li>
                <li>• Provide clear messaging about security best practices</li>
                <li>• Offer reminders or alerts for important security updates (e.g., regularly updating wallet data)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-8">We Accept all Coins</h2>
          <div className="flex justify-center space-x-8">
            <Image src="/bitcoin-logo.svg" alt="Bitcoin" width={50} height={50} />
            <Image src="/ethereum-logo.svg" alt="Ethereum" width={50} height={50} />
            <Image src="/solana-logo.svg" alt="Solana" width={50} height={50} />
            <Image src="/tether-logo.svg" alt="Tether" width={50} height={50} />
            <Image src="/usd-coin-logo.svg" alt="USD Coin" width={50} height={50} />
            <Image src="/dogecoin-logo.svg" alt="Dogecoin" width={50} height={50} />
          </div>
        </section>
      </main>
    </div>
  )
}