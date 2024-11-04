import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header'


import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={35} nome="Paulo Henrique" image="https://github.com/pblcnr.png" />
            </Column>
        </Container>
    </>)
}

export { Feed }