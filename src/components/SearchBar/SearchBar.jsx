import css from "./SearchBar.module.css";
// import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";

export default function SearchBar({onSearch, query}) {

  // const notify = () => toast.error('Enter text for search!', {
  //   icon: '🥸',
  // });

  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
          // query === "" && notify();

        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder= {query}
            autoFocus
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {/* <Toaster /> */}
    </header>
  );
}
