import { Separator } from "./ui/separator";
import Work from "./work";

export default function WorkLife () {
    return (
        <div className="flex items-center justify-center py-10 px-3">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">My Work Life</h2>
                </div>
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="mt-10 space-y-5">
                    <Work
                        company="EGlobalSphere"
                        date="Jan 2025 - Present"
                        description="Working as a Frontend developer for both web and mobile applications. Developing reusable React components and integrating them with APIs for Clients around the world"
                    />
                    <Work
                        company="Fowgate LLC"
                        description="Worked as a FullStack Developer Developing reusable React components and integrating them with APIs for Enterprise Resource Planning (ERP) systems utilized by various companies."
                        date="Nov 2023 - Dec 2024"
                    />
                </div>
            </div>
        </div>
    )
}