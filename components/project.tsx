import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"

interface Props{
    title: string;
    link: string;
    description: string;
    image: string;
    reverse?: boolean;
    projectPage?: boolean;
}

export default function Project ({ title, link, description, image, reverse, projectPage }: Props) {
    const isExternal = link.startsWith("http");
    
    return (
        <article>
            <div className={`flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${reverse ? 'flex-col' : 'flex-col'} gap-10`}>
                <Image 
                    src={image} 
                    alt={`${title} - ${description}`} 
                    className="w-full max-w-xl border-gray-400" 
                    width={500} 
                    height={400}
                    loading="lazy"
                />

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <p className="text-base text-[#686868] mt-2">{description}</p>
                    </div>

                    <Link 
                        href={link} 
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex flex-col gap-1 cursor-pointer w-fit mt-5 md:mt-0"
                        aria-label={`${projectPage ? 'View' : 'Visit'} ${title} project`}
                    >
                        <div className="flex flex-row gap-3 items-center">
                            <h3 className="text-xl">{projectPage ? "View Case Study" : "Visit Project"}</h3>
                            <MoveUpRight className="w-5 h-5" aria-hidden="true"/>
                        </div>
                        <Separator className="w-0 group-hover:w-[170px] duration-700 h-1"/>
                    </Link>
                </div>
            </div>
        </article>
    )
}