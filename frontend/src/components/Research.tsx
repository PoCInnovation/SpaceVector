import {Button, CircularProgress, Grid, IconButton, Input, styled, Typography} from "@mui/material";
import {useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';

const ResearchContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingLeft: 30,
  paddingRight: 30,
}));

const ResearchBar = styled("div")(() => ({
  marginTop: 100,
  marginBottom: 30,
  display: "flex",
  border: "2px solid #EF878F",
  borderRadius: 10,
  maxWidth: 700,
  width: "100%",
  minWidth: 300,
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
  width: "100%",
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

const ResultImage = styled("img")(() => ({
  width: 200,
  height: 200,
  borderRadius: 10,
  border: "2px solid #EF878F",
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

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ id: string, path: string, image: string }[]>([]);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`https://spacevector-server.laybraid.fr/query/${inputValue}`)
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
          <CustomInput title="Your research..." placeholder="Your research..." value={inputValue}
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

      <div style={{width: "100%", display: "flex", justifyContent: "center", marginLeft: 50}}>
        <Grid container columns={{xs: 2, sm: 3, md: 12}} style={{maxWidth: 750, alignItems: "center"}}>
          {results.map((result) => (
            <Grid xs={2} md={4} key={result.id} style={{paddingTop: 20}}>
              <ResultImage src={`data:image/jpeg;base64,${result.image}`} alt={result.path}/>
              <CustomIconButton onClick={() => handleDownload(result.id)}>
                <CustomIconImage/>
              </CustomIconButton>
            </Grid>
          ))}
        </Grid>
      </div>

    </ResearchContent>
  )
}

export default Research;