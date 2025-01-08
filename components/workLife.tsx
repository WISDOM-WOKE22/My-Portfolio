import { Separator } from "./ui/separator";
import Work from "./work";

export default function WorkLife () {
    return (
        <div className="flex items-center justify-center py-10 px-3">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">My Work Life</h2>
                </div>
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="mt-10">
                    <Work/>
                </div>
            </div>
        </div>
    )
}