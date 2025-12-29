import Project from "./project";
import { Separator } from "./ui/separator";

export default function Projects () {
    return (
        <section className="flex items-center justify-center py-10 px-3" id="projects">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">Production Projects & Case Studies</h2>
                    <p className="mt-4 text-[18px] text-[#686868]">
                        Real-world production systems built with modern full-stack technologies, AI integration, 
                        and scalable cloud architecture. Each project demonstrates expertise in building 
                        performant, scalable applications serving real users.
                    </p>
                </div>
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="flex flex-col gap-10">
                    <Project
                        image="/trupper.png" 
                        title="Trupper by Amidarh" 
                        description="Multitenant exam management system streamlining institutional exam processes. Built with Next.js, MERN stack, and real-time monitoring capabilities. Production system serving multiple institutions with complete data isolation." 
                        link="/projects/trupper-multitenant-exam-system"
                        projectPage={true}
                    />
                    <Project
                        image="/amidarh.png" 
                        title="Amidarh AI Learning Platform" 
                        description="AI-powered EdTech platform offering personalized learning experiences. Production system built with Next.js, MERN stack, and AWS cloud infrastructure. Serving thousands of users with AI-driven content recommendations and real-time features." 
                        link="/projects/amidarh-ai-learning-platform"
                        reverse={true}
                        projectPage={true}
                    />
                    <Project
                        image="/rekrd.png" 
                        title="REKRD" 
                        description="Rekrd Let it's users take control of their finance by tracking their revenue, manage their expenses, sales, clients, inventory, and more" 
                        link="#"
                        // reverse={true}
                    />
                    <Project
                        image="/bubble.png" 
                        title="Bubble" 
                        description="Bubble is a social media platform that allows users to share their thoughts, ideas, and connect with other users, and also it's market place allows users to buy and sell products" 
                        link="#"
                        reverse={true}
                    />
                    <Project
                        image="/je-express.png" 
                        title="JE-Express" 
                        description="Je-express is a booking platform that allows users to book for a ride, apartment, hotel, and more" 
                        link="#"
                        // reverse={true}
                    />
                    <Project
                        image="/lmt.png" 
                        title="LMT Trucking Logistics Platform" 
                        description="Car shipping and vehicle transportation platform built with Next.js. Production logistics system offering real-time tracking, booking management, and transparent pricing for vehicle shipping services." 
                        link="/projects/lmt-trucking-logistics-platform"
                        reverse={true}
                        projectPage={true}
                    />
                      <Project
                        image="/testpro.png" 
                        title="Testpro" 
                        description="Testpro is a cbt testing application that allows users to take test online and get prepared for post UTME" 
                        link="https://test-pro-client.vercel.app"
                        // reverse={true}
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
        </section>
    )
}