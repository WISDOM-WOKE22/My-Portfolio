import { Separator } from "./ui/separator";
import Work from "./work";

export default function WorkLife () {
    return (
        <section className="flex items-center justify-center py-10 px-3" id="experience">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">Professional Experience</h2>
                    <p className="mt-4 text-[18px] text-[#686868]">
                        Production experience building scalable applications for global clients, enterprise systems, 
                        and quality engineering across frontend, backend, and mobile platforms.
                    </p>
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
                        company="Rivva"
                        description="worked as a QA tester using tools like Convex-test, vitest, Bruno, Fast-check, and more"
                        date="Junly 2025 - Present"
                    />
                    <Work
                        company="Fowgate LLC"
                        description="Worked as a FullStack Developer Developing reusable React components and integrating them with APIs for Enterprise Resource Planning (ERP) systems utilized by various companies."
                        date="Nov 2023 - Dec 2024"
                    />
                </div>
            </div>
        </section>
    )
}