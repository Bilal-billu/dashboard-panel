import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import PropTypes from 'prop-types';
import Sublist from './Sublist';
import { useState } from 'react';

var subList = [{
    name: "Overview",
    func: () => { }
},
{
    name: "Projects",
    func: () => { }
},
{
    name: "Campaigns",
    func: () => { }
},
{
    name: "Documents",
    func: () => { }
},
{
    name: "Followers",
    func: () => { }
}
]

export default function NavCard({ item, choice }) {


    var [showList, setShowList] = useState(false)
    var icon = showList ? "iconamoon:arrow-down-2-bold" : "ep:arrow-right";
    function displaySublist() {
        item.func(item.name)
        setShowList(!showList) //this is to be bubbled down for nested lists
    }
    return (
        <li className={`list list-disc p-1 w-full flex flex-col justify-center`} onClick={displaySublist}>
            <div className={`flex items-center hover:cursor-pointer border-l-4 transition ease-in-out duration-400 ${choice!==item.name?'border-transparent':'border-black'}`}>
                <div className=' w-5'><Icon icon={icon} className={`${item.subList?'inline':'hidden'}`}/></div>
                <Icon icon={item.icon} />
                <h1 onClick={item.func}>{item.name}</h1>
            </div>
            {item.subList && choice===item.name &&
                <ul className={` ${!showList?'hidden':'inline'} transition ease-in-out duration-400`}>
                    {
                        subList.map(sub => {
                            return <Sublist item={sub} key={sub.name} />
                        })
                    }
                </ul>
            }
        </li>
    )
}


NavCard.propTypes = {
    item: PropTypes.object.isRequired,
    choice: PropTypes.string.isRequired
}