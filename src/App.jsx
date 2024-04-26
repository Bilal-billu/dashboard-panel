import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import Default from "./components/default/Default"
import Nav from "./components/nav/Nav"
import Side from "./components/side/Side"
import { useState } from "react"

function App() {
  var [burger, setBurger] = useState(false);
  return (
    <div className="w-full">
      <div className="max-w-full fixed lg:hidden text-4xl z-20 bg-stone-100 rounded-full p-5" onClick={()=>{setBurger(!burger)}}><Icon icon={`${burger ? "gravity-ui:xmark" : "iconamoon:menu-burger-horizontal-bold"}`} /></div>
      <div className="bg-stone-100 grid lg:grid-cols-12 gap-1">
        <nav className={`${burger?"fixed":"hidden"} lg:block  bg-stone-100 min-h-full w-full px-16 lg:px-0  lg:col-span-2`}>
          <Nav />
        </nav>
        <main className=" col-span-12 lg:col-span-8 mt-16 lg:mt-0">
          <Default />
        </main>
        <section className="col-span-12 lg:col-span-2 hidden lg:block">
          <Side />
        </section>
      </div>
    </div>
  )
}

export default App
