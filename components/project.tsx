import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"

interface Props{
    title: string;
    link: string;
    description: string;
    image: string;
}

export default function Project ({ title, link, description, image }: Props) {
    return (
        <div>
            <div className="flex md:flex-row flex-col gap-10">
                <Image src={image} alt="amidarh image" className="w-full max-w-xl border-gray-400" width={500} height={400}/>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl">{title}</h2>
                        <p className="text-base text-[#686868]">{description}.</p>
                    </div>

                    <Link href={link} target="_blank" className="group flex flex-col gap-1 cursor-pointer w-fit mt-5 md:mt-0">
                        <div className="flex flex-row gap-3 items-center">
                            <h2 className="text-xl">Visit Project</h2>
                            <MoveUpRight/>
                        </div>
                        <Separator className="w-0 group-hover:w-[170px] duration-700 h-1"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}