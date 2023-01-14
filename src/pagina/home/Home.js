import React, { useState } from 'react'
import './main.css'
import axios from 'axios'



const Home = () => {
    const [url, setUrl] = useState("")
    const [Eurl, setEurl] = useState("")

    const [error] = useState('Nao foi possivel!')

    const fetchData = async () => {
        try {
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`)
            setEurl(res.data.result.full_short_link);
        } catch (e) {
            error(e)
        }

    }
    return (
        <div>
            <div className='titulos'>

                <h1>Sua melhor escolha para <br></br><span>Encurtar URLs.</span></h1>
                <p>Todos os produtos de que você precisa para criar conexões de marca,<br></br> gerenciar links conectar-se com o público em qualquer lugar</p>


            </div>

            <div className='link'>
                <input type={"text"} value={url} onChange={(e) => { setUrl(e.target.value) }} placeholder="Sua url aqui..."></input>
                <button onClick={fetchData} >Encurtar</button>
            </div>

            <div className='Encurtar'>
                <p>{Eurl}</p>
            </div>



        </div>
    )
}

export default Home