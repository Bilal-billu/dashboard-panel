import { useState } from "react"
import NavCard from "./NavCard"
export default function Nav() {

    var tabsItems=[{
        name: "Overview",
        func:()=>{}
    },
    {
        name: "Projects",
        func:()=>{}
    }
]

    var dashboardItems = [{
        name: "Default",
        icon: "oi:pie-chart",
        func: changeChoice

    },
    {
        name: "eCommerce",
        icon: "ph:shopping-bag-open-thin",
        func: changeChoice,
        subList: true
    },
    {
        name: "Projects",
        icon: "fluent:folder-16-regular",
        func: changeChoice,
        subList: true
    },
    {
        name: "Online Courses",
        icon: "bi:book",
        func: changeChoice,
        subList: true
    }
    ]
    var [tabs, setTabs] = useState('Favorites')
    var [choice, setChoice] = useState('Default');
    function changeChoice(name) {
        setChoice(name)
    }
    var user = {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4utotPej2zeqjVyqsjurF4HDLMfTJFMsMNuSpEhDO9w&s",
        name: "Name"
    }

    return (
        <div>
            <div className='grid grid-cols-4 grid-rows-1 gap-0 place-content-center m-5 hover:cursor-pointer'>
        <div className='text-xl rounded-full border-2 border-black w-8 h-8 row-span-1 flex justify-center items-center'>
        <img src={user.src} alt="image of a user" className='w-full rounded-full object-contain'/>
        </div>
        <div className='flex flex-col justify-center items-start w-full truncate col-span-3 row-span-1 text-center'>
          <h1 className='font-semibold'>{user.name}</h1>
        </div>
      </div>
            <div className="flex justify-evenly">
                <div className={`hover:cursor-pointer ${tabs==='Favorites'? 'text-slate-400':'text-slate-200'}`} onClick={()=>{setTabs("Favorites")}}>
                    <h1>Favorites</h1>
                    </div>
                <div className={`hover:cursor-pointer ${tabs==='Recently'? 'text-slate-400':'text-slate-200'}`} onClick={()=>{setTabs("Recently")}}>Recently</div>
            </div>
            <div className="p-5 mx-14">
                    <ul>
                        {tabsItems.map(item=>{ //dynamically change items based on click ^ state is cerated as tabs
                            return <li className="list list-disc" key={item.name}>{item.name}</li>
                        })}
                    </ul>
                </div>
            <div className="ps-7 pt-7">
                <h1>Dashboard</h1>
                <ul className="grid grid-cols-1 grid-row-10 p-2">
                    {
                        dashboardItems.map(item => {
                            return (<NavCard item={item} key={item.name + item.icon} choice={choice} />)
                        })
                    }
                </ul>
            </div>
            <div className="ps-7 pt-7">
                <h1>Pages</h1>
                <ul className="grid grid-cols-1 grid-row-10 p-2">
                    {
                        dashboardItems.map(item => {
                            return (<NavCard item={item} key={item.name + item.icon} choice={choice} />)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
