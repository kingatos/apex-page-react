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
            <h2>Budujemy dla Ciebie, z pasją i zaangażowaniem</h2>
            <p>
              Zakład Remontowo-Budowlany EDBUD to firma z ponad
              30-letnim doświadczeniem na rynku budowlanym. <br/>Zajmujemy się
              kompleksowymi usługami remontowo-budowlanymi, w tym robotami
              związanymi z wykończeniem budynków mieszkalnych i niemieszkalnych,
              rozbiórką i burzeniem obiektów budowlanych, instalacjami
              elektrycznymi i wodno-kanalizacyjnymi, tynkowaniem, stolarką
              budowlaną, malowaniem oraz wykonaniem pozostałych robót
              budowlanych wykończeniowych.
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
            <SectionQuoteAuthor>Przemysław W.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Świetna firma. Od lat korzystam z usług i nigdy mnie nie zawiedli,
              zawsze solidnie i uczciwie. Jeśli chcesz mieć wykonaną fachową
              robotę to gorąco ich polecam.
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Piotr S.</SectionQuoteAuthor>
            <SectionQuoteContent>
              "Elegancja-francja", fachowa robota bardzo dokładna. Jestem
              zadowolony.
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Dariusz G.</SectionQuoteAuthor>
            <SectionQuoteContent>
              W 100% polecam. Firma godna zaufania, remont mieszkania wykonany
              bardzo precyzyjnie, szybko, wedle moich upodobań, wzbogacony o
              innowacyjne pomysły właściciela. Wykonanie po przystępnej cenie.
              Brak jakichkolwiek zarzutów.
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Katarzyna T.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Super firma polecam z całego serca, praca super wykonana i szybko.
              Znają się na robocie.
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Mateusz S.</SectionQuoteAuthor>
            <SectionQuoteContent>
              Nienawodni od lat! W razie remontu zawszę mogę na nich liczyć!
            </SectionQuoteContent>
          </SectionQuoteArcicle>

          <SectionQuoteArcicle>
            <SectionQuoteAuthor>Tomasz G.</SectionQuoteAuthor>
            <SectionQuoteContent>
             Polecam EKIPĘ ED BUD! Zawsze z wielkim zaangażowaniem i starannością wykonują powierzone zadania
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
          <h2>Solidność, doświadczenie, profesjonalizm</h2>
          <p>
            Jesteśmy firmą, która stawia na solidność, jakość i profesjonalizm,
            a nasza praca jest zawsze zgodna z najwyższymi standardami.
          </p>
          <Button>Zobacz więcej</Button>
        </TextWrapperHomePage>
      </SectionBodyHomePage>
    </WrapperSectionHomePage>
  </StyledContainer>
);

export default HomePage;
