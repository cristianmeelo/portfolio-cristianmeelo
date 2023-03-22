import { useState } from "react"
import { Layout, Menu, theme, ConfigProvider } from "antd"
import "./styles/App.styles.css"
import { SiderBom } from "./components/Sider/Index"
const { Header, Content, Footer, Sider } = Layout;

export const App = () => {
  const [render, updateRender] = useState();


  const {
    token: { colorBgContainer },
  } = theme.useToken()



  const handleMenuClick = (menu: any) => {
    updateRender(menu.key);
  };

  const components = {
    1: <div>Option 1</div>,
    2: <div>Option 2</div>,
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}>

      <Layout style={{ minHeight: "100vh" }}>
        {/* <Sider /> */}
        <SiderBom />
        <Layout>
          <Content>{components[1]}</Content>
        </Layout>
      </Layout>

      {/* <Layout className="layout ">



				<Layout className="site-layout">
					<Header style={{ padding: 0, background: colorBgContainer }} /> */}


      {/* <Content style={{ margin: "0 16px" }}>
						<div style={{ padding: 24, background: "fff000" }}>Bill is a dog.</div>
						<div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>Bill is a cat.</div>
					</Content> */}




      <Footer style={{ textAlign: "center" }}>cristianmelo frontdev ©2023</Footer>
      {/* </Layout> */}

      {/* </Layout> */}
    </ConfigProvider>
  )
}
