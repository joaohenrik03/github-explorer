import { Container } from "./style";

type RepositoryItemsProps = {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemsProps) {
    return (
        <Container>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </Container>
    )
}