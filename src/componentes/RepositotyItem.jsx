export function RespositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "forms in repository js"}</p>
            <a href={props.repository?.link ?? ""}>acessar repositorio</a>
        </li>
    )
}