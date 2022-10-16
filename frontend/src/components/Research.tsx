import {Button, CircularProgress, IconButton, Input, styled, Typography} from "@mui/material";
import {useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';

const ResearchContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ResearchBar = styled("div")(() => ({
  marginTop: 100,
  marginBottom: 30,
  display: "flex",
  border: "2px solid #EF878F",
  borderRadius: 10,
  width: 700,
  height: 45,
}));

const ResearchInput = styled("div")(() => ({
  marginLeft: 10,
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.6)",
}));

const CustomInput = styled(Input)(() => ({
  color: "#f86875",
}));

const ResearchButton = styled(Button)(() => ({
  borderLeft: "2px solid #EF878F",
  display: "flex",
  alignItems: "center",
  width: 100,
  backgroundColor: "rgba(255,255,255,0.6)",
  cursor: "pointer",
  borderRadius: 0,
  borderStartEndRadius: 8,
  borderEndEndRadius: 8,
  "&:hover": {
    backgroundColor: "rgb(237,237,237)",
  },
}));

const Label = styled(Typography)(() => ({
  fontSize: 16,
  fontFamily: "MADE Sunflower",
  background: "-webkit-linear-gradient(-45deg, #ED64A6 7%, #F56565 50%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: 1,
}));

const ResultContent = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "center",
}));

const ResultImage = styled("img")(() => ({
  width: 200,
  height: 200,
  borderRadius: 10,
  border: "2px solid #EF878F",
}));

const ResultItem = styled("div")(() => ({
  padding: 15,
  "&:hover": {
    transform: "scale(1.03)",
    transition: "transform 0.2s",
  },
}));

const CustomIconButton = styled(IconButton)(() => ({
  color: "#F56565",
  marginTop: -50,
  marginLeft: -50,
}));

const CustomIconImage = styled(DownloadIcon)(() => ({
  width: 30,
  height: 30,
  color: "white",
}));

function Research() {

  const axios = require('axios');

  const [inputValue, setInputValue] = useState("Your research...");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ id: string, path: string, image: string }[]>([]);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`http://spacevector-server.laybraid.fr:8000/query/${inputValue}`)
      .then((response: any) => {
        console.log(response.data);
        setResults(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleDownload = (id: string) => {
    let byteCharacters = atob(results.find((result) => result.id === id)?.image || "");

    let byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    let blob = new Blob([byteArray], {"type": "image/jpeg"});

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.setAttribute('visibility', 'hidden');
    link.download = 'picture';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <ResearchContent>
      <ResearchBar>
        <ResearchInput>
          <CustomInput title="Your research..." defaultValue="Your research" value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)} disableUnderline/>
        </ResearchInput>
        <ResearchButton onClick={() => handleSearch()}>
          {loading ? (
            <CircularProgress size={20} color="secondary"/>
          ) : (
            <Label>
              Search
            </Label>
          )
          }
        </ResearchButton>
      </ResearchBar>

      <ResultContent>
        {results.map((result) => (
          <ResultItem key={result.id}>
            <ResultImage src={`data:image/jpeg;base64,${result.image}`} alt={result.path}/>
            <CustomIconButton onClick={() => handleDownload(result.id)}>
              <CustomIconImage />
            </CustomIconButton>
          </ResultItem>
        ))}
      </ResultContent>
    </ResearchContent>
  )
}

export default Research;