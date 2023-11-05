import React from 'react'

const Highlights = ({pic,text}) => {
  return (
    <>
    <div className="flex flex-col items-center">
    <div className="rounded-full border border-gray-200 p-1">
        <div className="block bg-white rounded-full">
            <img src={pic} alt="highlights" 
            className="w-24 h-24 aspect-square rounded-full object-cover border border-gra-200"
            />
        </div>
    </div>
            <h1 className="text-xs py-2 font-semibold text-gray-600">{text}</h1>
            </div>
    </>
  )
}

export default Highlights
