import { FAQS } from "./components/faq";
import { Footer } from "./components/footer";
import LandingPage from "./home/basic";



export default function Home() {
  return (
    <div className="bg-[#17163E]">
      <LandingPage />
        <FAQS />
      <Footer />
    </div>
  );
}
