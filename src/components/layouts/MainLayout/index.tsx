import { FC, HTMLProps, useMemo } from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

type DeviceType = "desktop";

type LayoutComponentType = ComponentType<any>;

const layoutComponents: Record<DeviceType, { Header: LayoutComponentType; Footer: LayoutComponentType }> = {
  desktop: {
    Header: dynamic(() => import("@/components/layouts/MainLayout/components/mainheader"), { ssr: false }),
    Footer: dynamic(() => import("@/components/layouts/MainLayout/components/mainfooter"), { ssr: false }),
  },
};

type MainLayoutProps = Pick<HTMLProps<HTMLElement>, "children">;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const device: DeviceType = "desktop";

  const { Header: HeaderComponent, Footer: FooterComponent } = useMemo(() => layoutComponents[device], [device]);

  return (
    <>
      <HeaderComponent />
      <div className="min-h-[50vh] z-1 relative">{children}</div>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
