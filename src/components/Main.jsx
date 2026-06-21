import React from 'react'

const Main = () => {
    return (
        <main>
            <div>
                <label htmlFor="topText">Top Text
                    <input type="text" placeholder='meme top text' name='topText' />
                </label>
                <label htmlFor="bottomText">Bottom Text
                    <input type="text" placeholder='meme bottom text' name='bottomText' />
                </label>
            </div>
        </main>
    )
}

export default Main
