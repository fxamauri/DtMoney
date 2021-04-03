import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styled'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}

