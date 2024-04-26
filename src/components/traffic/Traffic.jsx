import TrafficCard from "./TrafficCard"

const lorem="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta atque et quibusdam adipisci magni, maxime tempora nesciunt, sunt saepe quam aut eveniet ipsa a autem soluta commodi? Laborum, officia quae?"

var options=[{
    name: 'Device',
    data: lorem
},
{
    name: 'Location',
    data: lorem
}]
export default function Traffic() {
    
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {options.map(item=>{
                return <TrafficCard item={item} key={item.name} />
            })}
        </div>
    )
}
