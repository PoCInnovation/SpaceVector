import {styled, Typography} from "@mui/material";
import Picks from "../assets/img/picks.png";
import Blur1 from "../assets/img/blur1.png";
import Blur2 from "../assets/img/blur2.png";
import Blur3 from "../assets/img/blur3.png";

const PageGlobal = styled("div")(() => ({
  backgroundImage: `url(${Picks})`,
  minHeight: "140vh",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

const PageContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
}));

const BlurContent = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  flexGrow: 1,
  display: "grid",
  gridTemplate: ` "a   z   z" 33%
                  "z   z   b" 33%
                  "c   z   z" 33%
               / 33% 33% 33%`,
}));

const FirstBlur = styled("div")(() => ({
  position: "absolute",
  top: -420,
  left: -500,
  gridColumn: "a",
  height: 1181,
  width: 1248,
  backgroundImage: `url(${Blur1})`,
}));

const SecondBlur = styled("div")(() => ({
  position: "absolute",
  top: 100,
  left: "calc(100vw - 700px)",
  gridColumn: "b",
  height: 1181,
  width: 1248,
  backgroundImage: `url(${Blur2})`,
}));

const ThirdBlur = styled("div")(() => ({
  position: "absolute",
  top: "calc(140vh - 600px)",
  left: -450,
  gridColumn: "c",
  height: 600,
  width: 1248,
  backgroundImage: `url(${Blur3})`,
}));

const Header = styled("div")(() => ({
  marginTop: 120,
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
}));

const Title = styled(Typography)(() => ({
  fontSize: 72,
  fontFamily: "MADE Sunflower",
  background: "-webkit-linear-gradient(-45deg, #ED64A6 7%, #F56565 50%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: 5,
}));

const Subtitle = styled(Typography)(() => ({
  marginLeft: 80,
  marginTop: -40,
  fontSize: 32,
  background: "-webkit-linear-gradient(-45deg, #F2A282 7%, #F56565 50%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const Footer = styled("div")(() => ({
  zIndex: 1,
  width: "100vw",
  height: 60,
  backgroundColor: "#FFFFFFCC",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  webkitBoxShadow: "0px -3px 2px rgba(245, 101, 101, 0.15)",
  mozBoxShadow: "0px -3px 2px rgba(245, 101, 101, 0.15)",
  boxShadow: "0px -3px 2px rgba(245, 101, 101, 0.15)",
}));

const FooterText = styled(Typography)(() => ({
  fontSize: 18,
  color: "#F56565",
  fontFamily: "MADE Sunflower",
}));

const Cr = styled(Typography)(() => ({
  marginLeft: 5,
  fontSize: 18,
  color: "#F56565",
  fontFamily: "arial",
}));

function Home() {
  return (
    <PageGlobal>
      <BlurContent>
        <FirstBlur/>
        <SecondBlur/>
        <ThirdBlur/>
      </BlurContent>

      <PageContent>
        <Header>
          <Title>SpaceVector</Title>
          <Subtitle>Satellite image semantic search engine</Subtitle>
        </Header>
      </PageContent>

      <Footer>
        <FooterText>SpaceVector</FooterText><Cr>©</Cr>
      </Footer>
    </PageGlobal>
  );
}

export default Home;