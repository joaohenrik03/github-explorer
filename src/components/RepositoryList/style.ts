import styled from 'styled-components';

export const Container = styled.div`
     header  {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 4rem;
        padding: 4rem;

        h1 {
            font-size: 4rem;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            @media (max-width: 390px) {
                font-size: 3rem;
            }
        }

        form {
            display: flex;
            align-items: center;
            gap: .5rem;

            height: 3.2rem;

            label {
                font-size: 1.8rem;
                font-weight: 500;
            }

            input {
                padding: .8rem;

                background-color: rgb(33, 38, 45);
                border: 1px solid rgba(240, 246, 252, 0.1);
                border-radius: .25rem;

                color: white;
                font-size: 1.6rem;

                @media (max-width: 390px) {
                    width: 50%;
                }
            }

            button {
                background-color: transparent;
                border: 0;
                cursor: pointer;

                svg {
                    height: 3.2rem;
                    width: 3.2rem;

                    color: #d9e0e8;                
                }
            }  
        }

        @media (max-width: 1024px) {
            flex-direction: column;
            gap: 1.6rem;  

            padding: 2rem 2rem 0 2rem;
        }
    }

    ul {
        padding-bottom: 4rem;
    }    
`