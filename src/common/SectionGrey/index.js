import { WrapperSectionGrey, SectionGreyBody } from "./styled";

const SectionGrey = ({ body, img }) => (
    <WrapperSectionGrey>
        <SectionGreyBody>
            {img}
            {body}
        </SectionGreyBody>
    </WrapperSectionGrey>
);

export default SectionGrey;