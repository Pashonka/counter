import './App.css'
import {Button, Layout, Typography} from "antd";
const {Header, Content, Footer} = Layout;
const {Title} = Typography;


function App() {

  return (
    <Layout className={'layout_style'}>
     <Header style={{padding: '0 22px'}}>
         <Title level={3} style={{color:'white'}}>App</Title>
     </Header>
        <Content className={'content'}>
            <Title>Текущий счет</Title>
            <div>
                <Button className={'primaryBtn'} type={'primary'}>ПРИБАВЬ</Button>
                <Button>УБАВЬ</Button>
            </div>
        </Content>
        <Footer className={'footer'}>
            СВОих не бросаем
        </Footer>
    </Layout>
  )
}

export default App
