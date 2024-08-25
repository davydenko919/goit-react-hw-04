import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { Field, Form, Formik } from "formik";

export default function SearchBar(onSearch) {
  return (
    <header>
      {/* <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form> */}

      <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
    </header>
  );
}
