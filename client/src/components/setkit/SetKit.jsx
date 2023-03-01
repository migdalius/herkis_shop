import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: calc(100vh - 120px);
  width: auto;
`;

const SubContainer = styled.div`
  width: 1920px;
  height: auto;
  background-color: #f1f5f9;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  margin: 50px;
`;
const ContentContainer = styled.div`
  width: 50%;
  display: flex;

  ${(props) => {
    if (props.down) {
      return `
      flex-direction: column;
      justify-content: end;
        `;
    }
  }}
`;

const ProductWrapper = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  height: 450px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  background-color: #fff;
`;
const ImgText = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
const Img = styled.img`
  margin: 50px;
  width: 100%;
  height: auto;
`;
const TextContainer = styled.div`
  width: 380px;
  position: absolute;
  /* top: 130px;
  left: 340px; */
  ${(props) => {
    if (props.first) {
      return `
        top: 140px;
        left: 400px;
        `;
    } else if (props.second) {
      return `
        top: 130px;
        left: 400px;
        `;
    }
  }}
`;
const TitleProduct = styled.h3`
  font-size: 32px;
  padding-bottom: 20px;
`;
const DescProduct = styled.p`
  font-size: 18px;
  color: #4c4c4c;
`;
const TitleBox = styled.div`
  width: 100%;
  margin: 100px;
  display: flex;
  justify-content: center;
`;

const TitleSet = styled.h2`
  font-size: 40px;
`;
const SetKit = () => {
  return (
    <Container>
      <TitleBox>
        <TitleSet>Co zawiera każdy z naszych zestawów do uprawy</TitleSet>
      </TitleBox>
      <SubContainer>
        <Wrapper>
          <ContentContainer>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/doniczka.png" />
                <TextContainer first>
                  <TitleProduct>Doniczka 13cm</TitleProduct>
                  <DescProduct>
                    Doniczka o średnicy 13 cm, idealna na domowy parapet,
                    doniczkę można użyć wielokrotnie.
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
          <ContentContainer down>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/podloze.png" />
                <TextContainer second>
                  <TitleProduct>Podłoże Organiczne 1L</TitleProduct>
                  <DescProduct>
                    Profesjonalne podłoże z bio humusem i kompostem, ph podłoża
                    dopasowane do zestawu w danym tygodniu.
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
        </Wrapper>
        <Wrapper>
          <ContentContainer>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/keramzyt100.png" />
                <TextContainer first>
                  <TitleProduct>Keramzyt / Drenaż</TitleProduct>
                  <DescProduct>
                    Kruszywo wypalane z gliny ilastej, bardzo dobrze zatrzymuje
                    wilgoć.
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
          <ContentContainer down>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/nasiona.png" />
                <TextContainer second>
                  <TitleProduct>Nasiona (co tydzień nowe)</TitleProduct>
                  <DescProduct>
                    Wygląd nasiona lub wyrośniętej rośliny nie są ujawniane, co
                    tydzień otrzymujesz zestaw i instrukcje do uprawy, nasiona
                    nigdy się nie powtarzają i są testowane, zanim stworzymy
                    zestaw na ich podstawie.
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
        </Wrapper>
        <Wrapper>
          <ContentContainer>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/hydrozel.png" />
                <TextContainer first>
                  <TitleProduct>Hydrożel</TitleProduct>
                  <DescProduct>
                    Magazynuje wodę a następnie gdy roślina ją potrzebuje
                    oddaje, nie pachnie w żaden sposób należy go zmieszać
                    bezpośrednio z ziemią
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
          <ContentContainer down>
            <ProductWrapper>
              <ImageContainer>
                <Img src="../img/paleczki.png" />
                <TextContainer second>
                  <TitleProduct>Nawóz (Pałeczki nawozowe)</TitleProduct>
                  <DescProduct>
                    W zestawie znajdują się pałeczki nawozowe przeznaczone na
                    cały cykl wzrostu rośliny łącznie z kwitnieniem, dzięki
                    czemu nie ma potrzeby dokupywania dodatkowych nawozów w celu
                    dokończenia uprawy.
                  </DescProduct>
                </TextContainer>
              </ImageContainer>
            </ProductWrapper>
          </ContentContainer>
        </Wrapper>
      </SubContainer>
    </Container>
  );
};

export default SetKit;
