import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledContainer } from "../../common/Container/styled";
import { TextWrapper } from "../../common/Section/styled";
import {
  ContactPharagraph,
  TelephonePharagraph,
  BoldText,
  InfoPharagraph,
  FavItem,
} from "./styled";

const ContactPage = () => (
  <StyledContainer>
    <Header title="Kontakt" />
    <Section
      body={
        <>
          <TextWrapper>
            <ContactPharagraph>
              Obsługujemy Klientów na terenie Rzeszowa oraz bliskich okolic
              wokół miasta.
              <br />
              Zachęcamy do skorzystania z naszej oferty.
            </ContactPharagraph>
            <TelephonePharagraph>
              <FavItem>Kontakt</FavItem>
              <br />
              <BoldText>
                +48601487829 <br /> +48178500092 <br />
                edbud_rzeszow@poczta.onet.pl
              </BoldText>
              <InfoPharagraph>
                <FavItem>Info</FavItem>
                <br /> <strong>ZRB EDBUD w Rzeszowie</strong>
                <br /> ul. Wrześniowa 2 <br />
                35-303 Rzeszów <br />
                NIP: 8130134393
              </InfoPharagraph>
            </TelephonePharagraph>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default ContactPage;
