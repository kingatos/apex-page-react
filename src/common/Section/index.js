import { Wrapper, SectionBody } from "./styled";

const Section = ({ img, body }) => (
  <Wrapper>
    <SectionBody>
      {img}
      {body}
    </SectionBody>
  </Wrapper>
);

export default Section;
