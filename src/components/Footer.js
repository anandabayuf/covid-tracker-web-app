import { HeartFill } from "react-bootstrap-icons";
import { textPrimary, backgroundColor } from "../utils/Color-Pallete";
export default function Footer() {
  return (
    <footer>
      <div
        className="text-center p-3 shadow-lg"
        style={{backgroundColor: backgroundColor, color: textPrimary  }}
      >
        © 2022 Copyright: Made with <HeartFill color={textPrimary}/> by Team 2 - Juara Coding
      </div>
    </footer>
  );
}
