import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 10px;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: clamp(24px, 5vw, 42px);
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: clamp(15px, 2.5vw, 18px);
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 10px auto;
  padding: 0 15px;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: clamp(300px, 90%, 600px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  padding: 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 16px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
  color: ${({ theme }) => theme.text_secondary}; /* Set text color to a lighter shade */
`;

const PopupButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
`;

const Popup = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <PopupContainer>
      <PopupContent>
        <div>{message}</div>
        <PopupButton onClick={onClose}>Close</PopupButton>
      </PopupContent>
    </PopupContainer>
  );
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm( "service_kw5ohmq", "template_ik5vclt", form.current, "rSZMGDr8ODlAM38v7")
      .then(
        (result) => {
          setSuccessMessage('Email sent successfully!');
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Popup isOpen={open} message={successMessage} onClose={closePopup} />
      </Wrapper>
    </Container>
  );
};

export default Contact;

