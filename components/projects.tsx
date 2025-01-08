import Project from "./project";
import { Separator } from "./ui/separator";

export default function Projects () {
    return (
        <div className="flex items-center justify-center py-10 px-3" id="projects">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">My Projects</h2>
                </div>
                <div className="my-10">
                    <Separator/>
                </div>
                <Project
                    image="/amidarh.png" 
                    title="Amidarh" 
                    description="Amidarh is an edtech/productivity platform that offers various products to keep it's users always ahead" 
                    link="https://amidarh.com"
                />
            </div>
        </div>
    )
}