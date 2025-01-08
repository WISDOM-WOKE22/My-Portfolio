import { Separator } from "./ui/separator";

interface skillProp {
    skill: string;
}

export default function Tools () {
    return (
        <div className="flex items-center justify-center py-10" id="tools">
            <div className="w-full max-w-6xl">
                <div>
                    <h1 className="text-4xl">My Tools</h1>
                </div>
                <div className="mt-10">
                    <Separator/>
                </div>

                <div className="mt-14 grid gap-10 grid-cols-3">
                    <Skill skill="POSTMAN"/>
                    <Skill skill="Vscode"/>
                    <Skill skill="MongoDB-Compass"/>
                    <Skill skill="AWS"/>
                    <Skill skill="Render"/>
                    <Skill skill="Vercel"/>
                </div>
            </div>
        </div>
    )
}

export function Skill ({ skill }: skillProp) {
    return (
        <div className="w-full max-w-[400px] text-center flex flex-col gap-6">
            <h2 className="text-4xl">{skill}</h2>
            <Separator/>
        </div>
    )
}