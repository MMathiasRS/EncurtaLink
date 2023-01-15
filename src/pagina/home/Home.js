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
            const link =
                setEurl(res.data.result.share_link);


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
                <p>{`${Eurl}`}</p>


            </div>


            <div className='Beneficio'>
                <h2>O que é um encurtador de URL?</h2>
                <p>Um encurtador de URL, também conhecido como encurtador de link, parece uma ferramenta simples, mas é um serviço que pode ter um impacto dramático em seus esforços de marketing.</p>
                <p>Os encurtadores de link funcionam transformando qualquer URL longo em um link mais curto e legível. Quando um usuário clica na versão abreviada, ele é encaminhado automaticamente para o URL de destino.</p>

                <h2>Benefícios de um URL curto</h2>
                <p>Quantas pessoas conseguem se lembrar de um longo endereço da web, especialmente se ele tiver muitos caracteres e símbolos? Um URL curto pode tornar seu link mais memorável. Isso não apenas permite que as pessoas lembrem e compartilhem facilmente seu link com outras pessoas, mas também pode melhorar drasticamente o tráfego para seu conteúdo.</p>
                <p>Por um lado mais prático, um URL curto também é mais fácil de incorporar em seu material de apoio – quer você esteja procurando interagir com seus clientes offline ou online.</p>

                <h2>Encurtador de url para marketing</h2>
                <p>Ao usar um encurtador de link em suas campanhas de marketing, é possível medir o sucesso de suas ações, acompanhar o tráfego e adaptar sua estratégia para atingir melhores resultados.</p>



                <h3>Como usa Encurtar URLs</h3>
                <p>Digite sua url na caixa de pesquisa</p>
                <p>Vai esta gerador sua url na caixa</p>
                <p>Depois so copiar a url e usar.</p>

                <span>Este é um projeto feito pra te ajudar a resolver a maior parte de seus problemas com engajamento.</span>

          
            </div>



        </div>
    )
}

export default Home