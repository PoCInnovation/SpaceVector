import {styled} from "@mui/material";
import SmallBlur1 from "../assets/img/small_blur1.png";

const PageContent = styled("div")(() => ({
  marginTop: 150,
}));

const PageCard = styled("div")(() => ({
  backgroundColor: "white",
  borderRadius: 10,
  border: "2px solid #EF878F",
  width: 700,
}));

const Blur = styled("div")(() => ({
  zIndex: -1,
  position: "absolute",
  width: 720,
  height: 345,
  marginTop: -220,
  marginLeft: -20,
  backgroundImage: `url(${SmallBlur1})`,
}));

const GlobalDescription = styled("div")(() => ({
  padding: 10,
}));

const Description = styled("div")(() => ({
  padding: 10,
  fontSize: 17,
  fontFamily: "Poppins",
  background: "-webkit-linear-gradient(-45deg, #F2A282 7%, #F56565 50%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

function Information() {

  return (
    <PageContent>
      <PageCard>
        <GlobalDescription>
          <Description>
            SpaceVector is a platform for semantic search on satellite images using state of the art AI. It aims to
            support the use of satellite images.
          </Description>
          <Description>
            SpaceVector is a PoC Innovation project mentored by Maxime Labonne.
          </Description>
          <Description>
            You can find the source code of the project on <a href="https://github.com/PoCInnovation/SpaceVector">Github</a>.
          </Description>
        </GlobalDescription>
      </PageCard>
      <Blur/>
    </PageContent>
  )
}

export default Information;
