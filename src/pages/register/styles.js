import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    height: 100%;
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
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 100%;
    max-width: 390px;
    margin: 0 auto 20px;
    line-height: 44px;

    color: #FFFFFF;

    @media screen and (max-width: 576px) {
        &{
            display: none;
        }
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
    margin: 0 auto;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 15px 0;
    line-height: 25px;
`

export const CriarText = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    
    color: #23DD7A;
`