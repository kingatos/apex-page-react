import { StyledContainer } from "../../common/Container/styled";
import {
  WrapperSectionGreyHomePage,
  SectionGreyBodyHomePage,
  TextWrapperHomePage,
  ImageWrapperHomePage,
  WrapperSectionHomePage,
  SectionBodyHomePage,
  SectionQuote,
  SectionQuoteHeader,
  SectionQuoteWrapper,
  SectionQuoteTestimonials,
  SectionQuoteArcicle,
  SectionQuoteAuthor,
  SectionQuoteContent,
} from "./styled";
import Button from "./Button";
import PhotoShadow from "../.././images/cienie.jpg";

const HomePage = () => (
  <StyledContainer>
    <SectionGreyBodyHomePage>
      <WrapperSectionGreyHomePage>
        <>
          <TextWrapperHomePage>
            <h2>Projektujemy dla Ciebie</h2>
            <p>
              Witaj w APEX - Twoim partnerze w realizacji projektów! Jesteśmy
              innowacyjnym biurem projektowym, które z pasją i zaangażowaniem
              tworzy rozwiązania na miarę Twoich potrzeb. Zapraszamy Cię do
              odkrycia naszej oferty i zapoznania się z naszymi dotychczasowymi
              osiągnięciami.
            </p>
          </TextWrapperHomePage>
        </>
      </WrapperSectionGreyHomePage>
    </SectionGreyBodyHomePage>

    <SectionQuote>
      <SectionQuoteHeader>Opinie</SectionQuoteHeader>

      <SectionQuoteWrapper>
        <SectionQuoteTestimonials>
          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Tatiana W.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Bardzo cenimy współpracę z firmą APEX Profesjonalizm, dbałość o
              detale projektu, indywidualne podejście do Klienta, najlepsze
              materiały i świetny kontakt. Zawsze sprawnie i terminowo. Polecamy
              !
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Paweł K.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Nie ma lepszego biura projektowego niż APEX! Polecam wszystkim.
              Firma godna zaufania, profesjonalizm, przystępne ceny zawsze na
              czas. Wysoki poziom wykonania
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Judtya W.</SectionQuoteAuthor>
            <SectionQuoteContent>Pełen profesjonalizm, Gorąco
              polecam. Warto skorzystac !!! Wspólpracujemy razem jako wykonawcy,
              czytelne projekty ktore ulatwiaja nam prace 👌 zadowoleni klienci
              to prorytet dzieki Apex</SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Weronika T.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Najlepsze biuro projektowe w Polsce. Jeśli ktoś ceni eleganckie i
              stylowe wnętrza to z pewnością się nie zawiedzie. Dobór kolorów i
              materiałów to wyższy wymiar. Pani Barbara ma do tego szósty zmysł
              😉 Z pewnością wrócimy przy kolejnym projekcie. Każda zmiana
              dokonana na własną rękę okazała się błędem. Polecam z całego
              serca!
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Wiktor S.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Zawsze z wielkim zaangażowaniem i starannością wykonują powierzone
              zadania, bardzo kreatywne pomysły.
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Kamil D.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Polecam w 100%! Wspaniałe wykonanie
            </SectionQuoteContent>
          </SectionQuoteArcicle>
        </SectionQuoteTestimonials>
      </SectionQuoteWrapper>
    </SectionQuote>

    <WrapperSectionHomePage>
      <SectionBodyHomePage>
        <ImageWrapperHomePage>
          <img src={PhotoShadow} alt="efekt" />
        </ImageWrapperHomePage>
        <TextWrapperHomePage>
          <h2>Nasza misja</h2>
          <p>
            Dowiedz się więcej o naszej misji i wartościach, które kierują naszą
            pracą każdego dnia. W APEX dążymy do dostarczania innowacyjnych i
            zrównoważonych rozwiązań projektowych, które spełniają oczekiwania
            naszych klientów.
          </p>
          <Button>Zobacz więcej</Button>
        </TextWrapperHomePage>
      </SectionBodyHomePage>
    </WrapperSectionHomePage>
  </StyledContainer>
);

export default HomePage;
