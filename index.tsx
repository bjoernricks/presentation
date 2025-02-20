import { createRoot } from "react-dom/client";
import { Deck, DefaultTemplate, Markdown } from "spectacle";

import Slide from "./greenbone/Slide";
import theme from "./greenbone/Theme";
import TitleSlide from "./greenbone/TitleSlide";

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate />}>
    <TitleSlide title="Some Title" />
    <Slide>Some Text</Slide>
    <Slide>
      <Markdown animateListItems={true}>
        {`
        # Heading 1

        a list
        - item 1
        - item 2
      `}
      </Markdown>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
