"use client"

import Link from "next/link"
import React, { useState } from "react"

const page = () => {

    const apiUrl = "https://api.quotable.io/random"
    const [quote, setQuote] = useState({
        "content": "Nighttime is where the magic of coding truly happens; it's when the world quiets down that coders minds speak up",
        "author": "Ammar Khan"
    })

    const quoteGenerate = () => {
        fetch(apiUrl)
            .then(data => data.json())
            .then(item => setQuote(item))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="layout">
                <h1 className="main_heading">Random Quote Generator</h1>
                <Link target="blank" href={apiUrl} className="api_link">&#8594; &nbsp; API Link</Link>

                <div className="w-[65min] p-10 text-center rounded-md bg-[#85e4cd]">
                    <p className="my-6 text-gray-900">{`${quote.content}`}</p>
                    <p className="my-8 italic text-gray-700">By {quote.author}</p>
                    <button className="btn" onClick={quoteGenerate}>Generate Quote</button>
                </div>
            </div>
        </>
    )
}

export default page