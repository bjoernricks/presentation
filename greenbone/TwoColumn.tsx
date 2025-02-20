import { Box, FlexBox } from "spectacle";
import Slide from "./Slide";
import { ReactNode } from "react";

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
  [key: string]: any;
}

const TwoColumn = ({ left, right, ...rest }: TwoColumnProps) => (
  <Slide {...rest}>
    <FlexBox flexDirection="row" alignItems="start" flex={1}>
      <Box width="100%">{left}</Box>
      <Box width="100%">{right}</Box>
    </FlexBox>
  </Slide>
);

export default TwoColumn;
