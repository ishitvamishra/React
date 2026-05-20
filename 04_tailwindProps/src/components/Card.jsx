import React from 'react'

// function Card(props) {

function Card({name = "No name", image}) {
    // console.log("props", props);
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl max-w-xl mx-auto">
        <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src = {image} />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{name}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    )
}

export default Card
