
interface StatConProps {
    title: string;
    value: string;
    color?: string;
}





const StatCon: React.FC<StatConProps> = ({ title, value }) => {
    return (
        <div className="bg-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{value}</p>
        </div>
    );
}


const stats: any[] = [
    {
        title: "Beneficiaries",
        value: "500",
    },
    {
        title: "Volunteers",
        value: "200",
    },
    {
        title: "Donations",
        value: "100",
    },
    {
        title: "Projects",
        value: "50",
    },
]



export const Stats: React.FC = () => {
    return (
        <div className="">
            <div>
                <h1></h1>
                <br />
                <div>
                    {stats.map((stat, index) => (
                        <StatCon key={index} title={stat.title} value={stat.value} />
                    ))}
                </div>
            </div>
        </div>
    );
}