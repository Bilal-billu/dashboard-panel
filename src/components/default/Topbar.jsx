import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import PropTypes from 'prop-types';
import React from "react";

var iconsCol_2 = [{
    src: "heroicons:sun",
    func: () => { }
},
{
    src: "icomoon-free:history",
    func: () => { }
},
{
    src: "solar:bell-linear",
    func: () => { }
},
{
    src: "ph:sidebar",
    func: () => { }
}
]

var iconsCol_1 = [{
    src: "ph:sidebar",
    func: () => { }
},
{
    src: "iconoir:star",
    func: () => { }
}]

var path = [{
    name: "Dashboard",
    func: () => { }
},
{
    name: "Default",
    func: () => { }
}]

function Icons({ item }) {
    return (
        <div onClick={item.func} className="m-3 first:ms-5 last:me-5  hover:cursor-pointer">
            <Icon icon={item.src}
                className=""
            />
        </div>
    )
}

export default function Topbar() {

    return (
        <div className="grid grid-cols-2 place-content-center">
            <div className="flex justify-start align-middle">
                <div className="flex justify-start items-center align-middle">
                    {
                        iconsCol_1.map(item => {
                            return <Icons item={item} key={item.src} />
                        })
                    }
                </div>
                <ul className="flex justify-center align-middle items-center">
                    {
                        path.map((item, index)=>{

                            return(
                                <React.Fragment key={item.name}>
                                <li onClick={item.path}
                                className="mx-2 text-slate-200 last:text-black hover:cursor-pointer"
                                >{item.name}</li>
                                {
                                    (index!==path.length-1)&&
                                    <li className="text-slate-200">/</li>
                                }
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="flex justify-end align-middle">
                <div className="rounded-2xl bg-slate-200 text-gray-300 text-lg flex justify-center items-center focus-within:border-2 focus-within:border-gray-300">
                    <Icon icon="mdi:magnify" className="mx-2" />
                    <input type="text" className="border-0 focus:outline-none focus:text-black bg-transparent" placeholder="Search" />
                    <Icon icon="ph:command-light" className="ms-2" />
                    <span className="me-2">/</span>
                </div>
                <div className="flex justify-end align-middle text-end">
                    {
                        iconsCol_2.map(item => {
                            return <Icons item={item} key={item.src} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

Icons.propTypes = {
    item: PropTypes.object.isRequired
}