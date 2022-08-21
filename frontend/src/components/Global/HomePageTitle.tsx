import Logo from "../../assets/img/logo.svg";
import {styled} from "@mui/material";

const StyledImage = styled("img")(() => ({
  height: 104,
  width: 649,
}))

interface EmptyProps {
  className?: string;
}

function HomePageTitle({ className }: EmptyProps) {

  return (
    <StyledImage src={Logo} className={className} alt="HomePageTitle" />
  );
}

export default HomePageTitle;
