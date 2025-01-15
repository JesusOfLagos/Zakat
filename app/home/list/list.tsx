import { Doc } from "./component";


const list: any[] = [
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    },
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    },
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    },
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    },
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    },
    {
        image: "/zakatchain-logo.svg",
        title: "ZakatChain",
        description: "A blockchain-powered platform that allows you to pay Zakat, donate to the needy, and help build humanitarian projects across the globe."
    }
]

export const DocsList = () => {
    return (
        <section className="container mx-auto py-20">
            <h2 className="text-3xl font-bold mb-6">Documentation</h2>
            <div className="grid grid-cols-3 gap-6">
                {list.map((doc, index) => (
                    <Doc key={index} {...doc} />
                ))}
            </div>
        </section>
    );
}