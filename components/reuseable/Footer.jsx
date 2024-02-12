import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" bg-[#0a101e] my-[2rem]">
      <Container>
        <p className="text-greyTextColor text-center">&copy; 2024. Developed by Festus Osayi. All right reserved.</p>
      </Container>
    </footer>
  );
}
