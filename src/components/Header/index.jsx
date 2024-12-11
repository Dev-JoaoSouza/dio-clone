import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleClickLogin = () => navigate('/login')
    const handleClickRegister = () => navigate('/register')

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt='logo da dio' />
                    </Link>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/143208624?s=400&u=ee91e3841a2b2b21ffa784e163b0b9ee412e32f4&v=4" />
                        ) : (
                        <>
                            <MenuRight href='/'>Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickLogin} />
                            <Button title="Cadastrar" onClick={handleClickRegister}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
  }
  
  export { Header }