import { MoveUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"

export default function Hero () {
    return (
        <section className="flex items-center justify-center py-20 md:py-40 sm:py-32 px-3" id="about">
            <div className="w-full max-w-6xl">
                <div className="w-full max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl">Wisdom Woke: Full-Stack Developer & AI Engineer</h1>
                    <p className="mt-6 text-[18px] text-[#686868]">
                        Full-Stack Developer & AI Engineer with production experience building AI-powered EdTech platforms, 
                        scalable MERN/Next.js systems, and cloud-deployed applications. Specialized in real-time applications, 
                        backend quality engineering, and enterprise-grade solutions. Currently building Amidarh, Trupper, 
                        and other production systems serving thousands of users.
                    </p>
                    <p className="mt-4 text-[18px] text-[#686868]">
                        Expertise spans JavaScript/TypeScript, React, Next.js, Node.js, Python, MongoDB, PostgreSQL, 
                        AWS/GCP cloud infrastructure, Docker, Redis, and AI integration. Proven track record delivering 
                        scalable, performant applications for EdTech, logistics, and enterprise clients.
                    </p>

                    <Link href="https://docs.google.com/document/d/1gl02NjzR1kxvUgrihxTkCVFzWi121_XBVyQFiaInxeM/edit?tab=t.0" target="_blank" className="group flex flex-col gap-1 cursor-pointer mt-10 w-fit" aria-label="View Wisdom Woke Resume">
                        <div className="flex flex-row gap-3 items-center">
                            <h2 className="text-2xl">My Resume</h2>
                            <MoveUpRight aria-hidden="true"/>
                        </div>
                        <Separator className="w-0 group-hover:w-[170px] duration-700 h-1"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}