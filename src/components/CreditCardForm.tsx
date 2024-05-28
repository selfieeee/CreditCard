import React, { useState } from 'react';
import styled from 'styled-components';
import cardImage from '../assets/card-image.webp';

interface CreditCardFormProps {}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: 0 auto;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input<{ hasValue: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 20px);
  box-sizing: border-box;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  ${(props) =>
    props.hasValue &&
    `background: rgba(255, 255, 255, 1);`
  }
`;

const CardNumberInput = styled(Input)`
  top: 120px;
  left: 20px;
  width: calc(100% - 40px);
`;

const ExpiryDateInput = styled(Input)`
  top: 153px;
  left: 170px;
  width: calc(30% - 30px);
`;

const CVVInput = styled(Input)`
  top: 138px;
  left: 260px;
  width: calc(25% - 20px);
`;

const CardHolderInput = styled(Input)`
  top: 123px;
  left: 20px;
  width: calc(40% - 5px);
`;

const Button = styled.button`
  margin-top: 250px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CreditCardForm: React.FC<CreditCardFormProps> = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Валидация формы
    if (validateForm()) {
      console.log('Form submitted:', { cardNumber, expiryDate, cvv, cardHolder });
      // Здесь можно отправить данные на сервер
    }
  };

  const validateForm = () => {
    // логика валидации здесь
    let isValid = true;
    if (!cardNumber.match(/^\d{16}$/)) {
      isValid = false;
      alert('Invalid card number');
    }
    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
      isValid = false;
      alert('Invalid expiry date');
    }
    if (!cvv.match(/^\d{3}$/)) {
      isValid = false;
      alert('Invalid CVV');
    }
    if (cardHolder.trim() === '') {
      isValid = false;
      alert('Invalid card holder name');
    }
    return isValid;
  };

  return (
    <FormContainer>
      <CardImage src={cardImage} alt="Credit Card" />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="cardNumber">Card Number</Label>
          <CardNumberInput
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
            required
            hasValue={cardNumber !== ''}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
          <ExpiryDateInput
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength={5}
            required
            hasValue={expiryDate !== ''}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cvv">CVV</Label>
          <CVVInput
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
            required
            hasValue={cvv !== ''}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cardHolder">Card Holder</Label>
          <CardHolderInput
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
            hasValue={cardHolder !== ''}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default CreditCardForm;
