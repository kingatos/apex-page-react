import { WrapperSectionGray, SectionGrayBody } from "./styled";

const SectionGray = ({ img, body }) => (
    <WrapperSectionGray>
        <SectionGrayBody>
            {img}
            {body}
        </SectionGrayBody>
    </WrapperSectionGray>
);

export default SectionGray;