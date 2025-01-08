import { MoveUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"

export default function Hero () {
    return (
        <div className="flex items-center justify-center py-20 md:py-40 sm:py-32 px-3">
            <div className="w-full max-w-6xl">
                <div className="w-full max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl">I&apos;m Wisdom Woke, and I&apos;m a Software Engineer</h1>
                    <p className="mt-6 text-[18px] text-[#686868]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, odit dolores temporibus facilis consectetur blanditiis sed ratione, itaque labore quisquam modi aspernatur autem neque iste provident adipisci! Amet, itaque deleniti!</p>

                    <Link href="https://docs.google.com/document/d/1gl02NjzR1kxvUgrihxTkCVFzWi121_XBVyQFiaInxeM/edit?tab=t.0" target="_blank" className="group flex flex-col gap-1 cursor-pointer mt-10 w-fit">
                        <div className="flex flex-row gap-3 items-center">
                            <h2 className="text-2xl">My Resume</h2>
                            <MoveUpRight/>
                        </div>
                        <Separator className="w-0 group-hover:w-[170px] duration-700 h-1"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}