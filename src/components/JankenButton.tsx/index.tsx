import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"button">;

export const JankenButton = ({ children, ...props }: Props): JSX.Element => {
  return <button {...props}>{children}</button>;
};
