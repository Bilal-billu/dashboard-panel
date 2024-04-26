import { useState } from "react"
import SocialsCard from "./SocialsCard"

export default function Socials() {
    var [socialSelected, setSocialSelected] = useState("Facebook");

    var socials = [{
        name: "Facebook",
        bar: 1,
        state: socialSelected === "Facebook"
    },
    {
        name: "Instagram",
        bar: 3,
        state: socialSelected === "Instagram"
    },
    {
        name: "Twitter",
        bar: 5,
        state: socialSelected === "Twitter"
    },
    {
        name: "LinkedIn",
        bar: 7,
        state: socialSelected === "LinkedIn"
    },
    {
        name: "Telegram",
        bar: 8,
        state: socialSelected === "Telegram"
    }

    ]
    const changeOption = (name) => {
        setSocialSelected(name)
    }
    return (
        <div className="p-5 text-black col-span-12 md:col-span-3 bg-gray-200 rounded-2xl ">
            <h1 className="font-bold">Traffic by website</h1>
            <div className="px-2">
                {socials.map(item => {
                    return (
                        <SocialsCard item={item} key={item.name} change={changeOption} />
                    )
                })}
            </div>
        </div>
    )
}
