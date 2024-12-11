import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 576px) {
        &{
            margin-top: 10px;
            flex-direction: column;
            max-width: 90%;
        }
    }
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 24px;
    align-self: flex-start;

    @media screen and (max-width: 576px) {
        &{
            padding-right: 0;
        }
    }
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`
