import { ComponentProps, ComponentType, memo } from "react";

export const safer = <T extends ComponentType<any>>(Component: T) => {
  const SaferContainer = (props: ComponentProps<T>) => {
    return (
        <Component {...props} />
    );
  };

  return memo(SaferContainer);
};
