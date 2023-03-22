import React from "react"
import {
    DesktopOutlined, RocketOutlined, FileOutlined, IdcardOutlined, BehanceOutlined, LayoutOutlined, PictureOutlined, InstagramOutlined,
    SolutionOutlined, WhatsAppOutlined, SearchOutlined, LinkedinOutlined, GithubOutlined, MediumWorkmarkOutlined, ThunderboltOutlined,
    AppstoreOutlined, ExperimentOutlined, ReadOutlined, HeartOutlined
} from "@ant-design/icons"
import { useState } from "react"
import { Menu, Layout } from "antd"
import type { MenuProps } from "antd"

import MenuItem from "antd/lib/menu/MenuItem"
const { Header, Content, Footer, Sider } = Layout

const { SubMenu } = Menu

type SiderProps = {
    renderKey: string
}

export const SiderApp = (props: any) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { handleClick } = props

    //     return (
    //         <Sider collapsible collapsed={collapsed} onCollapse={(value: boolean | ((prevState: boolean) => boolean)) => setCollapsed(value)}>
    //             <div style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
    //             <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
    //         </Sider>
    //     )
    // }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value: boolean | ((prevState: boolean) => boolean)) => setCollapsed(value)} style={{ minHeight: "100vh" }}>
            {/* <img className="logo" src={BlueLogo} alt="Logo" /> */}
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" onClick={handleClick} icon={<SearchOutlined />}>
                    Sobre
                </Menu.Item>

                <SubMenu key="2" icon={<AppstoreOutlined />} title="Social">
                    <Menu.Item key="3" icon={<LinkedinOutlined />} onClick={handleClick}>
                        Linkedin
                    </Menu.Item>
                    <Menu.Item key="4" icon={<GithubOutlined />} onClick={handleClick}>
                        GitHub
                    </Menu.Item>
                    <Menu.Item key="5" icon={<MediumWorkmarkOutlined />} onClick={handleClick}>
                        Medium
                    </Menu.Item>
                    <Menu.Item key="6" icon={<BehanceOutlined />} onClick={handleClick}>
                        Behance
                    </Menu.Item>
                    <Menu.Item key="7" icon={<InstagramOutlined />} onClick={handleClick}>
                        Instagram
                    </Menu.Item>
                    <Menu.Item key="8" icon={<WhatsAppOutlined />} onClick={handleClick}>
                        WhatsApp
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="9" icon={<ReadOutlined />} title="Perfil">
                    <Menu.Item key="10" icon={<RocketOutlined />} onClick={handleClick}>
                        XP
                    </Menu.Item>
                    <Menu.Item key="11" icon={<ExperimentOutlined />} onClick={handleClick}>
                        Educação
                    </Menu.Item>
                    <Menu.Item key="12" icon={<ThunderboltOutlined />} onClick={handleClick}>
                        Habilidades
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="13" icon={<LayoutOutlined />} title="Portfólio">
                    <Menu.Item key="14" onClick={handleClick}>
                        Landing Pages
                    </Menu.Item>
                    <Menu.Item key="15" onClick={handleClick}>
                        React
                    </Menu.Item>
                    <Menu.Item key="16" onClick={handleClick}>
                        Challenges
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="17" icon={<HeartOutlined />} title="Misc">
                    <Menu.Item key="18" onClick={handleClick}>
                        Canais do YT
                    </Menu.Item>
                    <Menu.Item key="19" onClick={handleClick}>
                        Leituras
                    </Menu.Item>
                    <Menu.Item key="20" onClick={handleClick}>
                        Songs
                    </Menu.Item>
                </SubMenu>


                <MenuItem key="21" onClick={handleClick} icon={<SolutionOutlined />} title="Baixe meu CV">
                    Baixe meu CV
                </MenuItem>

            </Menu>

            {/* <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
            </Layout> */}
        </Sider>
    )
}
