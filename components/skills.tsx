import { Separator } from "./ui/separator";

interface skillProp {
    skill: string;
}

export default function Skills () {
    return (
        <div className="flex items-center justify-center py-10 px-3" id="skills">
            <div className="w-full max-w-6xl">
                <div>
                    <h1 className="text-4xl">My Work Skills</h1>
                </div>
                <div className="mt-10">
                    <Separator/>
                </div>

                <div className="mt-14 grid gap-10 grid-cols-2 md:grid-cols-3">
                    <Skill skill="Javascript"/>
                    <Skill skill="Typescript"/>
                    <Skill skill="React-JS"/>
                    <Skill skill="Vue-JS"/>
                    <Skill skill="Node-JS"/>
                    <Skill skill="Express-JS"/>
                    <Skill skill="Tailwind"/>
                    <Skill skill="CSS"/>
                    <Skill skill="HTML"/>
                    <Skill skill="MongoDB"/>
                    <Skill skill="React-Native"/>
                    <Skill skill="Python"/>
                    <Skill skill="Next-JS"/>
                    <Skill skill="Firebase"/>
                    <Skill skill="AWS"/>
                    <Skill skill="AWS (EC2)"/>
                    <Skill skill="SQL"/>
                    <Skill skill="MYSQL"/>
                    <Skill skill="FastAPI"/>
                    <Skill skill="Azure"/>
                    <Skill skill="Linux"/>
                    <Skill skill="Docker"/>
                    <Skill skill="Redis"/>
                    <Skill skill="POSTGRES"/>
                </div>
            </div>
        </div>
    )
}

export function Skill ({ skill }: skillProp) {
    return (
        <div className="w-full max-w-[400px] text-center flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl">{skill}</h2>
            <Separator/>
        </div>
    )
}