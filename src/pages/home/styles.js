import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    max-width: 80%;
    margin: 120px auto 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 576px) {
        &{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            flex-direction: column;
            max-width: 90%;
        }
    }
`

export const Wrapper = styled.div`
    max-width: 370px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighLight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFFFFF;
`

export const ImgHome = styled.img`
    width: 100%;
`