import Notifications from "./Notifications"
import SideCard from "./SideCard"

var notifications = [{
  src: "solar:bug-bold",
  title: "You have a new bug that needs fixingYou have a new bug that needs fixingYou have a new bug that needs fixing",
  time: "Just now"
},
{
  src: "lets-icons:user-light",
  title: "New user registered",
  time: "29 minutes ago"
},

{
  src: "solar:bug-bold",
  title: "You have a new bug that needs fixing",
  time: "17 hours ago"
},
{
  src: "iconoir:antenna-signal",
  title: "Andi Lane subscribed to you",
  time: "Today, 00:01 AM"
}
]
var activities = [{
  src: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
  title: "You have a new bug that needs fixing",
  time: "Just now"
},
{
  src: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png",
  title: "New user registered",
  time: "29 minutes ago"
},

{
  src: "https://cdn4.vectorstock.com/i/1000x1000/23/33/girl-user-icon-flat-vector-19152333.jpg",
  title: "You have a new bug that needs fixing",
  time: "17 hours ago"
},
{
  src: "https://cdn-icons-png.freepik.com/512/4515/4515630.png",
  title: "Andi Lane subscribed to you",
  time: "Today, 00:01 AM"
}
]

var contacts = [{
  src: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
  title: "You have a new bug that needs fixings",
},
{
  src: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png",
  title: "New user registered"
},

{
  src: "https://cdn4.vectorstock.com/i/1000x1000/23/33/girl-user-icon-flat-vector-19152333.jpg",
  title: "You have a new bug that needs fixing"
},
{
  src: "https://cdn-icons-png.freepik.com/512/4515/4515630.png",
  title: "Andi Lane subscribed to you"
}
]



export default function Side() { 
  //3 rows in grid
  return (
    <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
      <div className="col-span-1 row-span-1 py-5 ps-5 pe-2 ">
        <h1 className="text-lg font-bold">Notifications</h1>
        {
          notifications.map(item=>{
            return <Notifications item={item} key={item.time+item.title} />
          })
        }
      </div>
      <div className="col-span-1 row-span-1 py-5 ps-5 pe-2 ">
        <h1 className="text-lg font-bold">Activities</h1>
        {
          activities.map(item=>{
            return <SideCard item={item} key={item.time+item.title} />
          })
        }
      </div>
      <div className="col-span-1 row-span-1 py-5 ps-5 pe-2 ">
        <h1 className="text-lg font-bold">Contacts</h1>
        {
          contacts.map(item=>{
            return <SideCard item={item} key={item.time+item.title} />
          })
        }
      </div>
      
    </div>
  )
}
