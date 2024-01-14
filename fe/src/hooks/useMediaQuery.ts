import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({
    minWidth: 481,
  });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({
    minWidth: 481,
  });
  return isMobile ? children : null;
};
