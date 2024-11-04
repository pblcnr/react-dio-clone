import React from 'react'
import { Header } from '../../components/Header'
import { Column, Container, Title, TitleCadastro, FazerLoginText, Row, SubtitleCadastro, Wrapper, ContaText} from './styles'
import { Input } from '../../components/Input'
import { MdLock, MdEmail, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {


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
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form>
                        <Input name='nome' placeholder='Nome completo' leftIcon={<MdPerson />} />
                        <Input name='email' placeholder='E-mail' leftIcon={<MdEmail />} />
                        <Input name='senha' placeholder='Senha' leftIcon={<MdLock />} />
                        <Button title='Criar minha Conta' variant='secondary' type="submit" />
                    </form>
                    <SubtitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleCadastro>
                    <Row>
                        <ContaText>Já tenho conta.</ContaText>
                        <FazerLoginText>Fazer login</FazerLoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { Cadastro }