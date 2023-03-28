import { Wrapper, SectionBody } from "./styled";

const Section = ({ body, img }) => (
    <Wrapper>
        <SectionBody>
            {img}
            {body}
        </SectionBody>
    </Wrapper>
);

export default Section;