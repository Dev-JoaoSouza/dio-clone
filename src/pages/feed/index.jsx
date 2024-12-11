import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Title, TitleHighLight, Column } from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card 
                        image={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        autor={"Pablo Henrique"}
                        avatar={"https://avatars.githubusercontent.com/u/45184516?v=4"}
                        titulo={"Projeto para curso de HTML e CSS"}
                        descricao={"Projeto feito para o curso de html e css no bootcamp dio Global avanade..."}
                        tags={"#HTML #CSS #JAVASCRIPT"}
                    />
                    <Card
                        image={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        autor={"José Augusto"}
                        avatar={"https://avatars.githubusercontent.com/u/143208624?s=400&u=ee91e3841a2b2b21ffa784e163b0b9ee412e32f4&v=4"}
                        titulo={"Conceitos de cibersegurança com analogias"}
                        descricao={"Sempre encontrei nas analogias uma forma eficaz de estudar e tornar o conteúdo mais fácil de entender. Pensando nisso, decidi escrever sobre..."}
                        tags={"#Python"}
                    />
                    <Card
                        image={"https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        autor={"Felipe"}
                        avatar={"https://avatars.githubusercontent.com/u/37452836?v=4"}
                        titulo={"8 Dicas e Ideias de Melhorias de Código para Front-End (HTML, CSS e JavaScript)"}
                        descricao={"O desenvolvimento front-end é uma das áreas mais dinâmicas da programação, onde a inovação e a experiência do usuário andam de mãos dadas. A......"}
                        tags={"#HTML #CSS #JAVASCRIPT"}
                    />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    <UserInfo percentual={40} nome="José Augusto" image="https://avatars.githubusercontent.com/u/143208624?s=400&u=ee91e3841a2b2b21ffa784e163b0b9ee412e32f4&v=4" />
                    <UserInfo percentual={50} nome="Felipe" image="https://avatars.githubusercontent.com/u/37452836?v=4" />
                </Column>
            </Container>
        </>
    )
}

export { Feed }