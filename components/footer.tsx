import Link from "next/link";
import { Separator } from "./ui/separator";
import { Github, Linkedin, X } from "lucide-react";

export default function Footer () {
    return (
        <div className="flex items-center justify-center py-10 px-3">
            <div className="w-full max-w-6xl">
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 items-center justify-between">
                    <p>Built with ❤️ By wisdom woke</p>

                    <div className="flex flex-row gap-4 items-center">
                        <Link href="https://github.com/WISDOM-WOKE22" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <Github aria-hidden="true"/>
                        </Link>
                        <Link target="_blank" href="https://linkedin.com/in/wisdom-woke-703488237/" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <Linkedin aria-hidden="true"/>
                        </Link>
                        <Link target="_blank" href="https://twitter.com/WISDOMWOKE1" rel="noopener noreferrer" aria-label="Twitter Profile">
                            <X aria-hidden="true"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}