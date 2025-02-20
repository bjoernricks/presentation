import { Slide as SpectacleSlide } from "spectacle";

import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  [key: string]: any;
}

const Slide = ({ children, ...props }: SlideProps) => {
  return (
    <SpectacleSlide
      backgroundImage="linear-gradient(180deg, rgba(8,93,44,1) 0%, rgba(10,28,16,1) 100%)"
      {...props}
    >
      {children}
    </SpectacleSlide>
  );
};

export default Slide;
