import styled from "styled-components";

export const Container = styled.li`
    background-color: rgb(33, 38, 45);
    border: 1px solid rgba(240, 246, 252, 0.1);
    border-radius: .4rem;

    padding: 2rem;
    margin-inline: auto;
    margin-bottom: 2.4rem; 

    width: min(800px, 90%);

    strong {
        font-size: 1.8rem;
    }

    p {
        font-size: 14px;
        opacity: 0.8;
        margin-top: .8rem;
    }

    a {
        display: inline-block;

        margin-top: 1.6rem;

        text-decoration: none;
        color: #8257E6;      
    }     
`