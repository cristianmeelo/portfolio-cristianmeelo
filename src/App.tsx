import { useState } from "react"
import { Layout, theme, ConfigProvider } from "antd"
import { SiderApp } from "./components/Sider/Index";
const { Content, Footer } = Layout;
import { componentsType, menuProps } from "./types/Index";
import "./styles/App.styles.css"

const components: componentsType = {
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
  const [menuKey, setMenuKey] = useState<string>("1");


  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleMenuClick = (menu: menuProps) => setMenuKey(menu.key);

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
          <Content>{components[menuKey]}</Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>cristianmelo frontdev ©2023</Footer>
    </ConfigProvider>
  )
}
