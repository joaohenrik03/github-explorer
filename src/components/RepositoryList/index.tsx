import { RepositoryItem } from '../RepositoryItem';
import { FormEvent, useState } from 'react';
import axios from 'axios';

import { FaGithubSquare } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from './style';

type RepositoryType = {
    name: string;
    description: string;
    html_url: string;  
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<RepositoryType[]>([]);
    const [user, setUser] = useState('');

    function fetchUserRepositories(event: FormEvent) {
        event.preventDefault()

        axios.get(`https://api.github.com/users/${user}/repos`)      
        .then(response => setRepositories(response.data))
        .catch(error => alert(error))
    }

    return (
        <Container>
            <header>
                <h1>
                    <FaGithubSquare />
                    GitHub Explorer   
                </h1>    

                <form onSubmit={fetchUserRepositories}>
                    <label htmlFor="userGitHub">Usuário(a):</label>  
                    <input 
                        type="text" 
                        id="userGitHub" 
                        onChange={event => setUser(event.target.value)}
                        required
                    />      

                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </header>

            <ul>
                {
                    repositories.map(repository => {
                        return (
                            <RepositoryItem key={repository.name} repository={repository} />
                        )
                    })
                }
            </ul>
        </Container>        
    )
}