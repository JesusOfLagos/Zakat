import React from "react";

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

import jrd from "@/public/jrd.svg";
import osinowo from "@/public/osinowo.svg";
import leye from "@/public/leye.svg";

const teamMembers: TeamMember[] = [
    {
        name: "Jalaaludeen JRD!",
        role: "Co Founder",
        image: jrd.src,
    },
    {
        name: "Abdur-Rahman Olaleye",
        role: "Co Founder & Product Lead",
        image: leye.src,
    },
    {
        name: "Mahmud Olaleye",
        role: "Communication & Operations",
        image: osinowo.src,
    },
    {
        name: "Muhammad Abdus-salam",
        role: "Lead Designer",
        image: osinowo.src,
    },
    {
        name: "Muhammad Osinowo",
        role: "Sheriah Compliance Advisor",
        image: jrd.src,
    },
    {
        name: "Teslim Ilias",
        role: "Marketing Lead",
        image: leye.src,
    },

    {
        name: "Talha Abdussalam",
        role: "Visual Designer",
        image: osinowo.src,
    },
    {
        name: "Muminat-Darla",
        role: "COntent Manager",
        image: jrd.src,
    }
];

export const TeamCards: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 -mt-20">
            <div className="flex gap-24 py-4 px-2 animate-scroll">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-64 h-96 bg-white rounded-lg shadow-lg border-2 border-[#FF9606] hover:scale-105 transition-transform duration-300"
                    >
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-3/4 object-cover rounded-t-lg"
                            />
                        ) : (
                            <div className="w-full h-3/4 bg-indigo-900 rounded-t-lg flex items-center justify-center">
                                <span className="text-white text-xl font-bold">No Image</span>
                            </div>
                        )}
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-800 to-transparent text-white p-6 rounded-b-lg">
                            <div className="bg-white rounded-md p-1 text-center">
                                <h3 className="font-bold text-base text-[#17163E]">{member.name}</h3>
                                <p className="text-sm text-[#17163E]">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

