import {Input, styled} from "@mui/material";
import {useState} from "react";

const ResearchContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ResearchBar = styled("div")(() => ({
  display: "flex",
  border: "2px solid #EF878F",
  borderRadius: 10,
  minWidth: 350,
  height: 45,
}));

const ResearchInout = styled("div")(() => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
}));

const ResearcButton = styled("div")(() => ({
  borderLeft: "2px solid #EF878F",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#43434320"
}));

function Research() {

  const [inputValue, setInputValue] = useState("");

  return (
    <ResearchContent>
      <ResearchBar>
        <ResearchInout>
          <Input title="Your research" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </ResearchInout>
        <ResearcButton>
          button
        </ResearcButton>
      </ResearchBar>
    </ResearchContent>
  )
}

export default Research;