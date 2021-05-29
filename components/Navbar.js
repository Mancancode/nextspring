import React from "react"

const NavItem = props => (
    <li className="  text-bg font-bold text-gray-700  cursor-pointer px-2 py-3 hover:text-blue-700 "> {props.text} </li>
    );

const Navbar = () => {
    return (
        <div className="container mx-auto max-w-6xl">
            <nav className="flex justify-between  mt-16">
                <div className="flex">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
            <span className="text-4xl font-bold mr-16">Nextspring</span>
            


                </div>
           

            <div>
            <ul className="flex space-x-2  flex justify-around">
              <NavItem  href="/products"  text="Products" />
              <NavItem href="/Download" text ="Download" />
              <NavItem href="/Remote work" text ="Remote Work" />
              <NavItem href="/customers" text ="Customers" />
              <NavItem href="/pricing" text ="Pricing" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 p-2 rounded-full">
              Sign In
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 p-2 rounded-full">
              Sign Out
              </button>
              
            </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar

