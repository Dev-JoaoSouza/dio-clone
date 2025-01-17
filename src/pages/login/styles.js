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
    max-width: 520px;
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
    margin-bottom: 35px;
    line-height: 25px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    
    color: #E5E044;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    
    color: #E23DD7;
`