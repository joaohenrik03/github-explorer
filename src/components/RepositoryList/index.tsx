import { FaGithubSquare } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from './style';
import { RepositoryItem } from '../RepositoryItem';

export function RepositoryList() {
    return (
        <Container>
            <header>
                <h1>
                    <FaGithubSquare />
                    GitHub Explorer    
                </h1>    

                <form>
                    <label htmlFor="userGitHub">Usuário(a):</label>  
                    <input type="text" id="userGitHub" />      

                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </header>

            <ul>
                <RepositoryItem name="teste" description="desc test" html_url="linkteste" />
            </ul>
        </Container>        
    )
}