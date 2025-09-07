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
                        image="/trupper.png" 
                        title="Trupper by Amidarh" 
                        description="Trupper is a comprehensive exam management system designed to streamline the entire exam process for institutions." 
                        link="https://site.amidarh.com/trupper"
                    />
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
                      <Project
                        image="/testpro.png" 
                        title="Testpro" 
                        description="Testpro is a cbt testing application that allows users to take test online and get prepared for post UTME" 
                        link="https://test-pro-client.vercel.app"
                        reverse={true}
                    />
                      {/* <Project
                        image="/straqa.png" 
                        title="Straqa" 
                        description="Data management and Payment Processing into one Platform All Powered by AI." 
                        link="https://straqa.com"
                    />
                      <Project
                        image="/gr.png" 
                        title="GR25" 
                        description="this platform that takes data about attendees, ministers, and testimonies during the Glory reign 2025 (gr25) event" 
                        link="https://gr25.org/"
                        reverse={true}
                    /> */}
                </div>
            </div>
        </div>
    )
}