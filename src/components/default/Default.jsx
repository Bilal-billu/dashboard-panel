
import Graph from "../graph/Graph";
import Socials from "../graph/Socials";
import Traffic from "../traffic/Traffic";
import Topbar from "./Topbar";
import ActivityCard from "../activity/ActivityCard";

var activity = [{
  name: "Views",
  numbers: "727K",
  percentage: 11.01
},
{
  name: "Visits",
  numbers: "727K",
  percentage: 11.01
},
{
  name: "New users",
  numbers: "727K",
  percentage: 11.01
},
{
  name: "Active users",
  numbers: "727K",
  percentage: -11.01
}]


export default function Default() {
  return (
    <div className="grid grid-cols-12 gap-8 border-x-2 border-gray-200 p-5">
      <div className="col-span-12 border-b-2 border-gray-200 p-5 hidden lg:block">
        <Topbar />
      </div>
      {
        activity.map(item => {
          return <ActivityCard item={item} key={item.name + item.percentage} />
        })
      }

      <Graph />


      <Socials />

      <div className="col-span-12 rounded-2xl">
        <Traffic />
      </div>
    </div>
  )
}
