import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { OutreachGallery } from "./gallery";
import { OutreachHero } from "./hero";
import { Slider } from "./slider";

export default function Outreach() {
    return (
        <div className="bg-[#17163E]">
            <NavBar />
            <OutreachHero />
            <div className="px-36">
                <OutreachGallery />
                <Slider />
                <Slider />
            </div>
            <Footer />
        </div>
    )
}