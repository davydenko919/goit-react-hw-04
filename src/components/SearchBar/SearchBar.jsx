import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { Field, Form, Formik } from "formik";

export default function SearchBar(onSearch) {
  return (
    <header>

      <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field 
        className={css.input} 
        type="text" 
        name="query"
        placeholder="Search images and photos"
        autofocus
        autocomplete="off" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
    </header>
  );
}
