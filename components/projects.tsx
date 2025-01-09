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
                <div className="flex flex-col gap-10">
                    <Project
                        image="/amidarh.png" 
                        title="Amidarh" 
                        description="Amidarh is an edtech/productivity platform that offers various products to keep it's users always ahead" 
                        link="https://amidarh.com"
                    />
                    <Project
                        image="/rekrd.png" 
                        title="REKRD" 
                        description="Rekrd Let it's users take control of their finance by tracking their revenue, manage their expenses, sales, clients, inventory, and more" 
                        link="#"
                        reverse={true}
                    />
                    <Project
                        image="/bubble.png" 
                        title="Bubble" 
                        description="Bubble is a social media platform that allows users to share their thoughts, ideas, and connect with other users, and also it's market place allows users to buy and sell products" 
                        link="#"
                    />
                    <Project
                        image="/je-express.png" 
                        title="JE-Express" 
                        description="Je-express is a booking platform that allows users to book for a ride, apartment, hotel, and more" 
                        link="#"
                        reverse={true}
                    />
                    <Project
                        image="/lmt.png" 
                        title="LMT-Trucking" 
                        description="LMT-Trucking is a Car Shipping and Vehicle Shipping Services Company that offers a wide range of services to meet the needs of our customers such as car shipping, vehicle shipping, and more" 
                        link="https://lmttrucking.vercel.app/"
                    />
                </div>
            </div>
        </div>
    )
}