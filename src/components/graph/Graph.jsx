const tempCaller = (name) => "This is the data for " + name
var options = [{
    name: "total users",
    callBack: () => {
        tempCaller(this.name)
    }
},
{
    name: "total projects",
    callBack: () => {
        tempCaller(this.name)
    }
},
{
    name: "operating status",
    callBack: () => {
        tempCaller(this.name)
    }
},
]

export default function Graph() {
    var content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum iusto doloribus id quam perspiciatis delectus quas pariatur provident fugit aliquam itaque officiis quidem esse, ullam perferendis aliquid laborum rerum?"
    return (
        <div className=" text-black md:p-2 col-span-12 md:col-span-9 bg-gray-200 rounded-2xl">
            <div className="grid grid-cols-8">
                <div className="col-span-8 md:col-span-4 flex">
                    <div className="capitalize flex justify-stretch align-middle w-full">

                        {
                            options.map(item => {
                                return (
                                    <div key={item.name} className="mx-5 text-center hover:cursor-pointer">
                                        <span className="">{item.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-8 md:col-span-4 flex justify-start md:border-l md:border-black rounded-sm">
                    <ul className="flex justify-start list-disc">
                        <li className="mx-12">This year</li>
                        <li className="text-slate-400"><span className="text-black">Last year</span></li>
                    </ul>
                </div>
                <div className='col-span-8 flex '>
                    {content}
                </div>
            </div>
        </div>
    )
}
