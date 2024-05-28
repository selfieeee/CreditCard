import React from 'react';
import CreditCardForm from './components/CreditCardForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <CreditCardForm />
    </AppContainer>
  );
};

export default App;