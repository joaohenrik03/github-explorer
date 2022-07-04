import { FaGithubSquare } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai';

export function RepositoryList() {
    return (
        <div>
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
                <li>
                    Repo
                </li> 
            </ul>
        </div>        
    )
}