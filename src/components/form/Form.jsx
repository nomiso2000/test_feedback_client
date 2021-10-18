import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 50%;
  height: 80vh;
  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;
const StyledForm = styled.form`
  max-width: 576px;
  width: 100%;
  // min-width: 276px;
  height: 100%;
  margin: 100px 0px 100px 120px;
  @media ${(props) => props.theme.media.phone} {
    width: 80%;
    margin: 0 0 0 10%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 80%;
    margin: 0 0 0 12%;
  }
`;
const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-bottom: 30px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 92px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  padding: 30px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
  }
`;
const StyledArea = styled.textarea`
  width: 100%;
  height: 188px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  padding: 30px;
  resize: none;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
const StyledButton = styled.button`
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;

  @media ${(props) => props.theme.media.phone} {
    display: block;
    margin: 0 auto;
    width: 80%;
  }
  @media ${(props) => props.theme.media.tablet} {
    display: block;
    margin: 0 auto;
    width: 100%;
`;
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const feedback = {
      name,
      email,
      message,
    };
    console.log(feedback);
    try {
      const result = await axios.post(
        'https://nomiso432-test-api.herokuapp.com/feedback',
        feedback
      );
      alert(result.data.message);
      console.log(result);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle> Reach out to us!</StyledTitle>
        <StyledInput
          placeholder="Your name*"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          placeholder="Your e-mail*"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledArea
          placeholder="Your message*"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <StyledButton type="submit">Send message</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}

export default Form;
