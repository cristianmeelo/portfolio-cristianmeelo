import { useState } from "react"
import { Layout, theme, ConfigProvider } from "antd"
import { SiderApp } from "./components/Sider/Index";
const { Content, Footer } = Layout;
import "./styles/App.styles.css"

const components = {
  1: <>Sobre</>,
  2: <>XP</>,
  3: <>Educacao</>,
  4: <>Habilidades</>,
  5: <>LandinPage</>,
  6: <>React App</>,
  7: <> Challenges</>,
  8: <> YT</>,
  9: <> Letiruas</>,
  10: <> Songs</>,
};

export const App = () => {
  const [menuNumber, setMenuNumber] = useState<number>(1);


  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // const handleMenuClick = (menu: any) => updateRender(menu.key);
  const handleMenuClick = (menu: any) => setMenuNumber(menu.key);


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}>

      <Layout style={{ minHeight: "100vh" }}>
        <SiderApp handleMenuClick={handleMenuClick} />
        <Layout>
          <Content>{components[menuNumber]}</Content>
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
