import React from 'react'


const ItemBlue = props => (
    <h1 className=" text-blue-600 font-bold pl-6"> {props.text} </h1>
    );

    const MatItem = props => (
        <li className=" text-2xl text-bg font-bold text-gray-700  cursor-pointer px-3 py-6 hover:text-blue-700 "> {props.text} </li>
        );


export const Metrics = () => {
    return (
        <div className="container mx-auto max-w-6xl mt-16 flex justify-around  md:items-center lg:items-start md:flex-row md:flex-nowrap ">
            <div className=" pr-16">
            <ItemBlue text= "Metrics that Matter" />
            <p className="pl-2 text-3xl font-black mt-6  max-w-xs">
            Track progress very minute of every day
            </p>
            </div>

            <div>
            <img className="object-contain h-90 w-60 shadow-2xl" src="/images/phone.png" alt="phone1"/>
            </div>

            <div className="pl-16" >
                <ul>
                <MatItem  href="/products"  text="Cloud-based Skills Portfolio" />
              <MatItem href="/Download" text ="Predictive “job ready” analytics" />
              <MatItem href="/Remote work" text ="Skills indexing" />
              <MatItem href="/customers" text ="Real-world demonstration Real-time feedstomers" />
              <MatItem href="/pricing" text ="PricinDemocratized for all-collar jobs" />

              


                   
                </ul>
            </div> 

            </div>
       
    )
}

export default Metrics
