import { makeStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  // primaryDarkColor,
  // primaryLightColor,
  secondaryColor,
  // secondaryDarkColor,
  // secondaryLightColor,
} from "./theme";
const useStyles = makeStyles((theme) => ({
  leftHeader: {
    background: secondaryColor,
    padding: "20px !important",
  },
  rightHeader: {
    background: primaryColor,
    padding: "20px !important",
  },
}));

export default useStyles;
