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
  ButtonMailto,
  MailtoInner,
  PhoneNumber,
} from "./styled";

const ContactPage = () => (
  <StyledContainer>
    <Header title="Kontakt" />
    <Section
      body={
        <>
          <TextWrapper>
            <ContactPharagraph>
              Obsługujemy Klientów na terenie podkarpacia.
              <br />
              Zachęcamy do skorzystania z naszej oferty.
            </ContactPharagraph>
            <TelephonePharagraph>
              <FavItem>Kontakt</FavItem>
              <br />
              <BoldText>
                <PhoneNumber href="tel:+48601758145">601758145 </PhoneNumber> <br />
                <PhoneNumber href="tel:+48178500092">178500092</PhoneNumber> <br />
                <ButtonMailto>
                  <MailtoInner href="mailto:toskinga01@gmail.com">
                    WYŚLIJ WIADOMOŚĆ!
                  </MailtoInner>
                </ButtonMailto>
              </BoldText>
              <InfoPharagraph>
                <FavItem>Info</FavItem>
                <br /> <strong>APEX</strong>
                <br /> ul. Akacjowa 3 <br />
                35-058 Rzeszów <br />
              </InfoPharagraph>
            </TelephonePharagraph>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default ContactPage;
