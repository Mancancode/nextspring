import React from 'react'

const ItemBlue = props => (
    <h1 className=" text-blue-600 font-bold"> {props.text} </h1>
    );

export const Body = () => {
    return (
        <div className="container mx-auto  ">



            <div className=" text-start md:text-center md:flex max-w-2xl mx-auto gap-2 ">
                <div>
              
                    <div className="flex justify-center grid grid-cols-3 grid-cols-1 md:grid-cols-3  ">
                    <div className=" col-span-1">
                  
                {/* <div className="mt-32 ">
                  <ItemBlue text= "How it works" />
                  <div className="text-4xl font-bold flex-none"> 
                  <p>“Test-ready” <br/>to “Job-ready” </p> 
                  </div>
                </div> */}
            <img className="object-contain h-90 w-60 mt-20 shadow-2xl" src="/images/phone.png" alt="phone1"/>
            <div className="flex pl-16 mt-10 ">
            <ItemBlue text= "01" />
            <p className="pl-2 txt-3xl font-black">
                Watch content you’ll <br/> want to like and share
            </p>
            </div>
            
                    </div>

                    <div className="row-span-2 mt-64">
                <div className="">
            <img className="object-contain h-90 w-60 mt-20 shadow-2xl" src="/images/phone.png" alt="phone1"/>
            <div className="object-contain flex pl-16 mt-10 ">
            <ItemBlue text= "02" />
            <p className="pl-2 txt-3xl font-black">
                Watch content you’ll <br/> want to like and share
            </p>
            </div>
            
                </div>
                    </div>

                   
                <div className="col-span-2">
            <img className="object-contain h-90 w-60 mt-20 h-30 shadow-2xl" src="/images/phone.png" alt="phone1"/>
            <div className="object-contain flex pl-16 mt-10 ">
              <p className="pl-2 txt-3xl font-black">
                Watch content you’ll <br/> want to like and share
            </p>
            </div> 
            
                </div>
                 


                   
              
                   
                    </div>

                 


                </div>

            </div>

            
        </div>
    )
}
