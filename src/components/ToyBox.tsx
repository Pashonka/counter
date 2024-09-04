import {Button, Layout, notification, Typography} from "antd";
import {useState} from "react";
const {Header, Content, Footer} = Layout;
const {Title} = Typography;

export const ToyBox = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        if (count === 10) {
            notification.warning({
                message: 'Тебе куда столько игрушек',
                description: 'ты серьезно оставь бродягам',
                placement: 'top'
            })}
         else {
            setCount(count + 1)
        }
    }

    const minus = () => {
        if (count === 0) {
            notification.warning({
                message: 'Возьми хоть одну- бога ради',
                description: 'Это серьезно, да серьезно',
                placement: 'top'
            })}
        else {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <Layout className={'layout_style'}>
            <Header style={{padding: '0 22px'}}>
                <Title level={3} style={{color:'white'}}>App</Title>
            </Header>
            <Content className={'content'}>
                <Title>Игрушки:  {count}</Title>
                <div>
                    <Button className={'primaryBtn'} type={'primary'} onClick={plus}>ПРИБАВЬ</Button>
                    <Button onClick={minus}>УБАВЬ</Button>
                    <Button onClick={reset}>Разве можно обнулить? </Button>
                </div>
            </Content>
            <Footer className={'footer'}>
                СВОих не бросаем
            </Footer>
        </Layout>
    )
}