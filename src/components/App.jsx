import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { theme } from "./Layout";
import { Title } from "./ContactForm/ContactForm.styled";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter/>
        <ContactList/>
      </Layout>
    </ThemeProvider>
  );
};
