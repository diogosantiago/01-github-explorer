import { RespositoryItem } from "./RepositotyItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;    
}

export function RepositotyList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(resposta => resposta.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">

            <h1>Lista de Repositorios</h1>
            <ul>
                {
                    repositories && repositories.map(repository => <RespositoryItem key={repository.id}
                        repository={repository}
                    />)
                }
            </ul>
        </section>
    )
}