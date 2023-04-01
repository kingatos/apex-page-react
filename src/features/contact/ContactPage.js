import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledContainer } from "../../common/Container/styled";
import { TextWrapper } from "../../common/Section/styled";


const ContactPage = () => (
  <StyledContainer>
    <Header title="Kontakt" />
    <Section
      body={
        <>
        <TextWrapper>
          <p>
            Obsługujemy Klientów na terenie Rzeszów oraz bliskie okolice wokół
            miasta. Zachęcamy do skorzystania z naszej oferty.
          </p>
          <p>
            Kontakt +48601487829 +48178500092 edbud_rzeszow@poczta.onet.pl Info
            ZRB EDBUD w Rzeszowie ul. Wrześniowa 2 35-303 Rzeszów NIP:
            8130134393
          </p>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default ContactPage;
