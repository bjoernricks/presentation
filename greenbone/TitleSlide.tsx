import styled from "styled-components";
import { FlexBox, Heading } from "spectacle";
import Slide from "./Slide";

const FlexBoxWithImage = styled(FlexBox)`
  background-image: url(greenbone/assets/images/greenbone-title1.png);
  background-size: cover;
  background-position: center;
`;

interface TitleSlideProps {
  title?: string;
}

const TitleSlide = ({ title }: TitleSlideProps) => {
  document.title = title ? title : "Presentation";
  return (
    <Slide>
      <FlexBoxWithImage height="100%">
        {title && (
          <FlexBox height="100%">
            <Heading>{title}</Heading>
          </FlexBox>
        )}
      </FlexBoxWithImage>
    </Slide>
  );
};

export default TitleSlide;
