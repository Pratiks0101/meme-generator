import React from 'react'
import { toPng } from 'html-to-image'
import { memes } from '../../memes'

const Main = () => {

    const memeRef = React.useRef(null)

    const [meme, setMeme] = React.useState({
        topText: "top text goes here",
        bottomText: "bottom text goes here",
        imageUrl: "https://images.wondershare.com/filmora/article-images/best-meme-templates-07.jpg"
    })

    const [allMemes, setAllMemes] = React.useState(memes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }


    function downloadMeme() {
        if(memeRef.current === null) return

        toPng(memeRef.current, { cacheBust: true, skipFonts: true })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-meme.png'
                link.href = dataUrl
                link.click()
            })
    }

    function handleText(event) {
        const{value, name}= event.currentTarget
        setMeme(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <main className='mx-auto p-9 max-w-150 '>
            <div className='grid grid-cols-2 grid-rows-[auto_auto] gap-4.25 mb-4.25'>
                <label htmlFor="topText">Top Text
                    <input className="w-full mt-1 rounded-md border border-gray-300 indent-1 p-1" 
                        type="text" 
                        id='topText'
                        placeholder='meme top text' 
                        name='topText' 
                        onChange={handleText} 
                        value={meme.topText} />
                </label>
                <label htmlFor="bottomText">Bottom Text
                    <input className="w-full mt-1 rounded-md border border-gray-300 indent-1 p-1" 
                        type="text" 
                        id='bottomText'
                        placeholder='meme bottom text' 
                        name='bottomText'
                        onChange={handleText}
                        value={meme.bottomText} />
                </label>
                <button 
                    className="col-span-full bg-[linear-gradient(90deg,#672280_1.18%,#A626D3_100%)] rounded-md text-white border cursor-pointer p-2"
                    onClick={getMemeImage}>
                        Get a new meme Image🖼️
                </button>
            </div>
            <div ref={memeRef} className="flex relative flex-col items-center justify-center">
                <img 
                    className="max-w-full rounded-md h-auto" 
                    src={meme.imageUrl} 
                    alt="meme image container"
                    crossOrigin='anonymous' />
                <span 
                    className="absolute top-0 text-center my-4 ps-* pe-* text-4xl text-white font-[impact] uppercase tracking-wide text-shadow-lg text-shadow-black ">
                        {meme.topText}
                </span>
                <span 
                    className="absolute bottom-0 text-center my-4 ps-* pe-* text-4xl text-white font-[impact] uppercase tracking-wide text-shadow-lg text-shadow-black ">
                        {meme.bottomText}
                </span>
            </div>
            <div>
                <button 
                    className="w-full mt-4 font-bold bg-[linear-gradient(90deg,#672280_1.18%,#A626D3_100%)] rounded-md text-white border cursor-pointer p-2"
                    onClick={downloadMeme}>
                        Download Meme
                </button>
            </div>
        </main>
    )
}

export default Main
