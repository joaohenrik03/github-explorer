import { Container } from "./style";

type RepositoryItemsProps = {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryItem(props: RepositoryItemsProps) {
    return (
        <Container>
            <strong>{props.name}</strong>
            <p>{props.description}c</p>
            <a href={props.html_url}>Acessar repositório</a>
        </Container>
    )
}