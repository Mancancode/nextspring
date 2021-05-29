import React from 'react'


const ItemBlue = props => (
    <h1 className=" text-blue-600 font-bold pl-6"> {props.text} </h1>
    );

const NoMore = () => {
    return (
        <div>
            {/* <div>
                <ItemBlue text= "No More" />
                    <p>We do training and we don’t know what happens after</p>
                </div> */}
            
        </div>
    )
}

export default NoMore
