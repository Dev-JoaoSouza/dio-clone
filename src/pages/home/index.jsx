import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight, ImgHome, Wrapper } from "./styles";
import bannerImage from '../../assets/banner.png';

const Home = () => {
    const navigate = useNavigate();

    const handleClickLogin = () => navigate('/login');

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Wrapper>
                        <Title>
                            <TitleHighLight>Implemente <br /></TitleHighLight>
                            o seu futuro global agora!
                        </Title>
                        <TextContent>
                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                        </TextContent>
                        <Button title="começar agora" variant="secondary" onClick={handleClickLogin} />
                    </Wrapper>
                </div>
                <div>
                    <ImgHome src={bannerImage} alt="imagem principal" />
                </div>
            </Container>
        </>
    )
}

export { Home }