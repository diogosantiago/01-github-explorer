import { RespositoryItem } from "./RepositotyItem";

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "http://github.com/unform/unform"
}

export function RepositotyList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>
                <RespositoryItem
                    repository={repository}
                />
                <RespositoryItem />
                <RespositoryItem />
                <RespositoryItem />
            </ul>
        </section>
    )
}