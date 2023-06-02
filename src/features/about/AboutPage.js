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
            <h2>Solidność, doświadczenie, profesjonalizm</h2>
            <p>
              Zakład Remontowo-Budowlany EDBUD to firma z wieloletnim
              doświadczeniem na rynku budowlanym, kompleksowo realizująca
              projekty remontowe oraz modernizacyjne. Nasze usługi obejmują
              m.in. remonty mieszkań, domów jednorodzinnych oraz lokali
              użytkowych, a także modernizacje obiektów przemysłowych. Działamy
              szybko i sprawnie, zapewniając najwyższą jakość wykonywanych prac
              oraz konkurencyjne ceny. Zaufaj nam i przekonaj się, że remonty
              mogą być łatwe i przyjemne!
            </p>
          </TextWrapper>
        </>
      }
    />
    <SectionGray
      body={
        <>
          <TextWrapper>
            <h2>Budujemy dla Ciebie, z pasją i zaangażowaniem</h2>
            <p>
              Ponadto, w naszej ofercie znajduje się tynkowanie, zakładanie
              stolarki budowlanej, posadzkarstwo, malowanie i szklenie oraz
              wykonanie pozostałych robót budowlanych wykończeniowych. Jesteśmy
              również specjalistami w zakresie konstrukcji i pokryć dachowych, a
              także oferujemy usługi w zakresie inżynierii i doradztwa
              technicznego.
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
            <h2>Twoje marzenia, nasza pasja</h2>
            <p>
              Nasza firma kładzie nacisk na jakość i terminowość realizowanych
              prac. Zatrudniamy tylko doświadczonych fachowców, którzy potrafią
              sprostać nawet najbardziej wymagającym zadaniom. Dzięki temu nasi
              Klienci mogą być pewni, że ich inwestycje będą wykonane solidnie i
              zgodnie z najwyższymi standardami.
            </p>
          </TextWrapper>
        </>
      }
    />
  </StyledContainer>
);

export default AboutPage;
