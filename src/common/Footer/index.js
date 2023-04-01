import { useState } from "react";
import {
  StyledFooter,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledPlace,
  StyledButtonPhone,
} from "./styled";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const mailtoLink = `mailto:edbud_rzeszow@poczta.onet.pl?subject=Wiadomość z formularza kontaktowego&body=Email: ${email}%0D%0A`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <StyledFooter>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel> Skontaktuj się z Nami </StyledLabel>
        <StyledInput
          required
          type="text"
          placeholder="Twój adres e-mail"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <StyledButton type="submit">
          Wyślij
        </StyledButton>
      </StyledForm>
      <StyledPlace>
        <StyledButtonPhone href="tel:+48601487829">
          📞+48601487829
        </StyledButtonPhone>
        <StyledButtonPhone href="tel:+48178500092">
          📞+48178500092
        </StyledButtonPhone>
      </StyledPlace>
    </StyledFooter>
  );
};

export default Footer;
