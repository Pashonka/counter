import {Button, Input, Layout, Modal, notification, Typography} from "antd";
import {useState} from "react";
const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

export const Counter = () => {
    const [count, setCount] = useState(0)
    const[maxValue, setMaxValue] = useState(10);
    const [minValue, setMinValue] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);




    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const increment = () => {
        if (count === maxValue) {
            notification.warning({message:'Предупреждение', description:'Счетчик больше 10', placement:'topRight'})
        }
        else {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count === minValue) {
            notification.warning({message:'Предупреждение', description:'Счетчик не должен быть меньше 0', placement:'topRight'})
        }
        else {
            setCount(count - 1)
        }
    }
    return (
        <Layout className={'layout_style'}>
            <Header style={{padding: '0 22px'}}>
                <Title level={3} style={{color:'white'}}>App</Title>
            </Header>
            <Content className={'content'}>
                <Title>Текущий счет: {count}</Title>
                <div>
                    <Button className={'primaryBtn'} type={'primary'} onClick={increment}>ПРИБАВЬ</Button>
                    <Button className={'primaryBtn'} onClick={decrement}>УБАВЬ</Button>
                    <Button type="primary" onClick={showModal}>
                        Задать значения
                    </Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className={'section_input'}>
                            <Text>Задайте минимальное число</Text>
                            <Input placeholder={'Минимальное число'} type={'number'}></Input>
                        </div>
                        <div className={'section_input'}>
                            <Text>Задайте максимальное число</Text>
                            <Input placeholder={'Максимальное число'} type={'number'}></Input>
                        </div>
                    </Modal>
                </div>
            </Content>
            <Footer className={'footer'}>
                СВОих не бросаем
            </Footer>
        </Layout>
    )
}
