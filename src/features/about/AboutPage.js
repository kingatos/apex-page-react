import { StyledContainer } from "../../common/Container/styled";
import Header from "../../common/Header/index";
import Section from "../../common/Section/index";
import SectionGray from "../../common/SectionGray";
import { ImageWrapper, TextWrapper } from "../../common/Section/styled";
import PhotoBuild from "../.././images/wiertarka.jpg";
import PhotoWirr from "../.././images/gladz.jpg";
import Workaway from "../.././images/rusztowanie.jpg";

const AboutPage = () => (
  <StyledContainer>
    <Header title="O firmie" />
    <Section
      body={
        <>
          <ImageWrapper>
            <img
              src={PhotoBuild}
              alt="wiercenie ściany"
              width="500"
              height="500"
            />
          </ImageWrapper>
          <TextWrapper>
            <h2>Najważniejsza jest jakość..</h2>
            <p>
              APEX to zespół doświadczonych projektantów, architektów i
              inżynierów, którzy połączyli swoje umiejętności, aby dostarczać
              projekty o najwyższej jakości. Nasza firma cechuje się pasją do
              tworzenia innowacyjnych rozwiązań, przy jednoczesnym zachowaniu
              zrównoważonego podejścia do projektowania. Dowiedz się więcej o
              naszej historii, wartościach i naszym podejściu do projektowania.
            </p>
          </TextWrapper>
        </>
      }
    />
    <SectionGray
      body={
        <>
          <TextWrapper>
            <h2>Jesteśmy dla Ciebie</h2>
            <p>
              Poznaj naszą filozofię projektowania, która opiera się na
              połączeniu kreatywności, funkcjonalności i estetyki. Wierzymy, że
              doskonałe projekty powinny nie tylko wyglądać pięknie, ale także
              spełniać swoje funkcje w sposób efektywny i zrównoważony.
              <br /> Serdecznie zapraszamy!
            </p>
          </TextWrapper>
          <ImageWrapper>
            <img src={PhotoWirr} alt="rusztowanie" width="500" height="500" />
          </ImageWrapper>
        </>
      }
    />
    <Section
      body={
        <>
          <ImageWrapper>
            <img src={Workaway} alt="wiercenie ściany" />
          </ImageWrapper>
          <TextWrapper>
            <h2>Twoje marzenia, nasza pasja i misja</h2>
            <p>
              Odkryj, dlaczego warto wybrać APEX jako partnera w realizacji
              Twoich projektów. Dowie się więcej o naszych wartościach dodanych,
              podejściu do klienta i unikalnych cechach, które wyróżniają nas na
              rynku.
            </p>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default AboutPage;
