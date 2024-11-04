import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { Column, Container, CriarText, EsqueciText, SubtitleLogin, Title, TitleLogin, Wrapper, Row } from './styles';
import { MdEmail, MdLock} from 'react-icons/md';
import { api } from '../../services/api'

const schema = yup.object({
    email: yup.string().email().required('Campo obrigatório'),
    password: yup.string().min(5, 'No minimo 5 caracteres').password().required('Campo obrigatório')
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido');
            }
        } catch {
            alert('Houve um erro, tente novamente!');
        }
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='Email' leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />} />
                        <Button title='Entrar' variant='secondary' onClick={handleClickSignIn} type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }