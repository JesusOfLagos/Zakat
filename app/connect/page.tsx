'use client'

import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import WalletConnection, { WalletConnectModal } from "./wallet";
import Image from "next/image";
import zakat from '@/public/zakat.svg'

export default function Connect() {
    return (
        <div className="bg-[#17163E]">
                {/* <section className='flex justify-center mb-8'> */}
                    <NavBar />
                {/* </section> */}
                <WalletConnectModal isOpen={true} onClose={function (): void {
                throw new Error("Function not implemented.");
            } } onConnect={function (walletId: string): Promise<void> {
                throw new Error("Function not implemented.");
            } } />
                <Footer />
        </div>
    );
}
