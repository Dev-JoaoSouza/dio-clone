import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Wrapper, Column, Title, TitleLogin, SubtitleLogin, CriarText } from './styles';
import { Input } from "../../components/Input";

const schema = yup.object({
    name: yup.string().min(4, 'No mínimo 4 caracteres').required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = () => {
        navigate('/login')
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" leftIcon={<MdLock />} type="password" />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <SubtitleLogin>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleLogin>
                        <SubtitleLogin>Já tenho conta. <CriarText href='/login'>Fazer login</CriarText></SubtitleLogin>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Register }