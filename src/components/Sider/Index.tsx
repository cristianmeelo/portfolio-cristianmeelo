import MenuItem from "antd/lib/menu/MenuItem"
import { useState } from "react"
import { Menu, Layout } from "antd"
import {
    RocketOutlined, BehanceOutlined, LayoutOutlined, InstagramOutlined, SolutionOutlined, WhatsAppOutlined,
    SearchOutlined, LinkedinOutlined, GithubOutlined,
    MediumWorkmarkOutlined, ThunderboltOutlined,
    AppstoreOutlined, ExperimentOutlined, ReadOutlined, HeartOutlined
} from "@ant-design/icons"
import { SiderProps } from "../../types/Index";
const { Sider } = Layout;
const { SubMenu } = Menu;


export const SiderApp = ({ handleMenuClick }: SiderProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value: boolean | ((prevState: boolean) => boolean)) => setCollapsed(value)} style={{ minHeight: "100vh" }}>
            {/* <img className="logo" src={BlueLogo} alt="Logo" /> */}
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" onClick={handleMenuClick} icon={<SearchOutlined />}>
                    Sobre
                </Menu.Item>

                <SubMenu icon={<AppstoreOutlined />} title="Social">
                    <Menu.Item icon={<LinkedinOutlined />} >
                        <a href="https://www.linkedin.com/in/cristian-melo/" target="_blank">Linkedin</a>
                    </Menu.Item>
                    <Menu.Item icon={<GithubOutlined />} onClick={handleMenuClick}>
                        <a href="https://github.com/cristianmeelo" target="_blank">GitHub</a>
                    </Menu.Item>
                    <Menu.Item icon={<MediumWorkmarkOutlined />} onClick={handleMenuClick}>
                        <a href="https://medium.com/@cristianmeelo" target="_blank">Medium</a>
                    </Menu.Item>
                    <Menu.Item icon={<BehanceOutlined />} onClick={handleMenuClick}>
                        <a href="https://www.behance.net/cristianmeelo" target="_blank">Behance</a>
                    </Menu.Item>
                    <Menu.Item icon={<InstagramOutlined />} onClick={handleMenuClick}>
                        <a href="https://www.instagram.com/20ver_cris/" target="_blank">Instagram</a>
                    </Menu.Item>
                    <Menu.Item icon={<WhatsAppOutlined />} onClick={handleMenuClick}>
                        <a href="https://api.whatsapp.com/send?phone=5551986275006&text=" target="_blank">WhatsApp</a>
                    </Menu.Item>
                </SubMenu>

                <SubMenu icon={<ReadOutlined />} title="Perfil">
                    <Menu.Item key="2" icon={<RocketOutlined />} onClick={handleMenuClick}>
                        XP
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ExperimentOutlined />} onClick={handleMenuClick}>
                        Educação
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ThunderboltOutlined />} onClick={handleMenuClick}>
                        Habilidades
                    </Menu.Item>
                </SubMenu> *

                <SubMenu icon={<LayoutOutlined />} title="Portfólio">
                    <Menu.Item key="5" onClick={handleMenuClick}>
                        Landing Pages
                    </Menu.Item>
                    <Menu.Item key="6" onClick={handleMenuClick}>
                        React
                    </Menu.Item>
                    <Menu.Item key="7" onClick={handleMenuClick}>
                        Challenges
                    </Menu.Item>
                </SubMenu>

                <SubMenu icon={<HeartOutlined />} title="Misc">
                    <Menu.Item key="8" onClick={handleMenuClick}>
                        Canais do YT
                    </Menu.Item>
                    <Menu.Item key="9" onClick={handleMenuClick}>
                        Leituras
                    </Menu.Item>
                    <Menu.Item key="10" onClick={handleMenuClick}>
                        Songs
                    </Menu.Item>
                </SubMenu>


                <MenuItem icon={<SolutionOutlined />} title="Baixe meu CV">
                    <a href="https://drive.google.com/u/0/uc?id=1UaJXx1QcnUu6xt_ca50061kN64_jIPVi&export=download">Baixe meu CV</a>
                </MenuItem>

            </Menu>

            {/* <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
            </Layout> */}
        </Sider>
    )
}
