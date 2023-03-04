import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";

const MainContainer = styled.div`
  height: auto;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  background-color: #fff;
`;

const Wrap = styled.div`
  margin: 50px;
  width: 100%;
`;

const TextContainer = styled.div`
  height: auto;
`;
const TitleSection = styled.h2`
  font-size: 32px;
  margin-top: 40px;
`;
const TextWrap = styled.div`
  display: flex;
`;
const ImgWrap = styled.img`
  width: 50%;
`;
const DescWrap = styled.div`
  margin: 10px;
  width: 50%;
`;
const Desc = styled.p`
  padding-top: 10px;
`;

const List = styled.ul`
  margin: 20px;
`;
const ListItem = styled.li`
  padding-top: 10px;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
`;
const Work = () => {
  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <TextContainer>
              <TitleSection>Czym jest zestaw do uprawy?</TitleSection>
              <TextWrap>
                <DescWrap>
                  <Desc>
                    Zestawy do uprawy zostały stworzone, aby rozwiązać dwa
                    kluczowe problemy: zapewnić wszystkie potrzebne elementy do
                    uprawy i dostarczyć instrukcje krok po kroku jak powinno się
                    uprawiać taką roślinę.
                  </Desc>
                  <SubTitle>Skład zestawu do uprawy:</SubTitle>
                  <List>
                    <ListItem>1x Doniczka do uprawy 13 cm</ListItem>
                    <ListItem>
                      1L Podłoże organiczne z nawozem i perlitem
                    </ListItem>
                    <ListItem>
                      1op. Nasion z obecnego tygodnia (na dwa wysiania)
                    </ListItem>
                    <ListItem>
                      1op. Pałeczki nawozowe na cały cykl rozwoju
                    </ListItem>
                    <ListItem>1op. Keramzyt - drenaż na spód doniczki</ListItem>
                    <ListItem>
                      1op. Hydrożel - przechowuje nadmiar wody w doniczce
                    </ListItem>
                  </List>
                  <SubTitle>Instrukcja uprawy</SubTitle>
                  <Desc>
                    W każdym zestawie znajduje się papierowa instrukcja uprawy,
                    opisująca dokładnie proces sadzenia i pielęgnacji rośliny. W
                    instrukcji, jak i na pudełku zestawu do uprawy nie znajdują
                    się żadne informacje, jaka roślina znajduje się w zestawie.
                  </Desc>
                </DescWrap>
                <ImgWrap src="../img/zestaw-do-uprawy-1.png" />
              </TextWrap>
            </TextContainer>
            <TextContainer>
              <TextWrap>
                <ImgWrap src="../img/zestaw-do-uprawy-2.png" />
                <DescWrap>
                  <SubTitle>Zestaw do uprawy dla dziecka</SubTitle>
                  <Desc>
                    Wszystkie zestawy do uprawy zawierają instrukcje zrozumiałe
                    dla dziecka, natomiast proponujemy, żeby uprawą zajmowały
                    się dzieci nie mniejsze niż 7 lat. Zestawy mają różny poziom
                    trudności, natomiast trzymając się instrukcji zawsze możemy
                    liczyć na uprawę w własnym pokoju.
                  </Desc>
                  <SubTitle>Domowa uprawa</SubTitle>
                  <Desc>
                    Każdy z zestawów do uprawy nadaje się do uprawy domowej np:
                    na parapecie w pokoju lub kuchni, niektóre z roślin można
                    przesadzać do ogrodu, natomiast musi to być wyraźnie
                    napisane w instrukcji, w innym przypadku należy roślinę
                    uprawiać tylko w warunkach domowych.
                  </Desc>
                  <SubTitle>Czas kiełkowania</SubTitle>
                  <Desc>
                    Czas kiełkowania bardzo zależy od rodzaju zestawu, który
                    występuje w danym tygodniu, natomiast jest to przedział od 5
                    do 70 dni, długi czas kiełkowania zazwyczaj występuje tylko
                    w przypadku drzewek bonsai, a zioła mają najkrótszy.
                  </Desc>
                </DescWrap>
              </TextWrap>
            </TextContainer>
            <TextContainer>
              <TitleSection>Czy uprawa jest prosta?</TitleSection>
              <TextWrap>
                <DescWrap>
                  <Desc>
                    Tak, jeżeli przestrzegamy instrukcji znajdującej się w
                    zestawie, natomiast bierzemy pod uwagę również, że coś może
                    pójść nie tak w trakcie uprawy. Dlatego w zestawie do uprawy
                    zawsze znajdują się nasiona na dwa wysiewy, więc zawsze
                    możemy powtórzyć próbę.
                  </Desc>
                  <SubTitle>Przesadzanie roślin</SubTitle>
                  <Desc>
                    W żadnym z zestawów nie trzeba przesadzać roślin, natomiast
                    w przypadku niektórych jak papryki chili lub niektóre
                    rodzaje kwiatów przesadzenie powoduje zwiększenie plonów,
                    lub większy i bardziej okazałe kwiaty. W instrukcji jest
                    informacja czy można przesadzić roślinę.
                  </Desc>
                  <SubTitle>Problemy w uprawie</SubTitle>
                  <Desc>
                    Jeżeli masz problem z uprawą, bo widzisz np: odbarwienia na
                    liściach, naloty na roślinach. Daj na znać, chętnie ci
                    pomożemy w ratowaniu sadzonki.
                  </Desc>
                </DescWrap>
                <ImgWrap src="../img/zestaw-do-uprawy-3.png" />
              </TextWrap>
            </TextContainer>
            <TextContainer>
              <TextWrap>
                <ImgWrap src="../img/zestawy-do-uprawy-4.png" />
                <DescWrap>
                  <TitleSection>Testowanie zestawów do uprawy</TitleSection>
                  <Desc>
                    Każdy zestaw do uprawy, zanim trafi do zestawu jest przez
                    nas testowany od kiełkowania, po kwitnięcie lub owocowanie.
                  </Desc>
                </DescWrap>
              </TextWrap>
            </TextContainer>
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Work;
