import { useState } from "react";
import { socialMedia } from "./socialMedia";
import {
  StyledFooter,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledPlace,
  StyledButtonPhone,
  WrapperIcon,
  Link,
} from "./styled";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const mailtoLink = `mailto:toskinga01@gmail.com?subject=Wiadomość z formularza kontaktowego&body=Email: ${email}%0D%0A`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <StyledFooter>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Skontaktuj się z Nami</StyledLabel>
        <StyledInput
          required
          type="text"
          placeholder="Wpisz adres e-mail"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <StyledButton type="submit">Wyślij</StyledButton>
      </StyledForm>
      <StyledPlace>
        <StyledButtonPhone href="tel:+48601758145">
          📞601758145
        </StyledButtonPhone>
        <StyledButtonPhone href="tel:+48178500092">
          📞184500092
        </StyledButtonPhone>
      </StyledPlace>

      <WrapperIcon>
        {socialMedia.map(({ name, link, Icon }) => (
          <Link
            key={name}
            href={link}
            title={name}
            rel="noreferrer"
            target="_blank"
          >
            <Icon />
          </Link>
        ))}
      </WrapperIcon>
    </StyledFooter>
  );
};

export default Footer;
