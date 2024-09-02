import dynamic from "next/dynamic";
import { FC, HTMLProps, ComponentType } from "react";

export enum LAYOUT_TYPE {
  MAIN = "main",
}

const layouts: Record<LAYOUT_TYPE, ComponentType<any> | undefined> = {
  [LAYOUT_TYPE.MAIN]: dynamic(() => import("@/components/layouts/MainLayout")),
};

type LayoutType = {
  type: LAYOUT_TYPE;
} & Pick<HTMLProps<HTMLElement>, "children">;

const Layout: FC<LayoutType> = ({ children, type }) => {
  const Component = layouts[type];

  if (!Component) {
    console.error(`Layout type "${type}" not found.`);
    return null;
  }

  return <Component>{children}</Component>;
};

export default Layout;
