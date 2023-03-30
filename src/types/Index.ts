import { MenuClickEventHandler } from 'rc-menu/lib/interface'

export interface componentsType {
    [key: string]: JSX.Element;
}
export interface menuProps {
    key: string;
}

export interface SiderProps {
    handleMenuClick: MenuClickEventHandler;
}