import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from './api';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function FeedbackForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={FeedbackSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await api.submitFeedback(values);
          resetForm();
          alert('Thank you for your feedback!');
        } catch (error) {
          alert('An error occurred, please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field component="textarea" name="message" placeholder="Message" />
            <ErrorMessage name="message" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
          Submit Feedback
          </button>
          </Form>
          )}
          </Formik>
        );
    }        
export default FeedbackForm;
