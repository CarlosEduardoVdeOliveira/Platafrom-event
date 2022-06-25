import { gql, useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { Logo } from "../components/Logo"


const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscribe($name: String, $email: String) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`
const { } = useMutation


export function Subscribe() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleSubscribe(event: FormEvent) {
        event?.preventDefault();
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center">

            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma
                        <strong className="text-blue-500"> aplicação completa</strong>
                        , do zero, com 
                        <strong className="text-blue-500"> React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais
                        utilizadas e com alta demanda para acessar as melhores oportunidades 
                        do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="mb-6 text-2xl block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full ">
                        <input type="text" placeholder="Seu nome completo"
                            className="bg-gray-900 rounded px-5 h-14 "
                            onChange={event=> setName(event.target.value)}
                        />
                        <input type="text" placeholder="Digite seu email"
                            className="bg-gray-900 rounded px-5 h-14 "
                            onChange={event=> setEmail(event.target.value)}
                        />
                        <button type="submit" 
                            className="mt-4 bg-green-500 uppercase rounded py-4 font-bold text-sm 
                            hover:bg-green-700 transition-colors">
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code-block.png" alt="" />
        </div>
    )
}