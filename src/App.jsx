import { RepositotyList } from "./componentes/RepositoryList"
import { Counter } from "./componentes/Counter"
import "./styles/global.scss"

export function App(){
    // throw new Error("teste");
    return (
        <>
            <RepositotyList />
            <Counter />
        </>
    )
}