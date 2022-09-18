import { HeartFill } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white">
          Made with <HeartFill /> by Team 2 - Juara Coding
        </a>
      </div>
    </footer>
  );
}
