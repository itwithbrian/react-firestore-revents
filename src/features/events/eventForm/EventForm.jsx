import cuid from 'cuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Header, Segment, FormField, Label } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

function EventForm() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((evt) => evt.id === params.id)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title. '),
    category: Yup.string().required('You must provide a category. '),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  const [values, setValues] = useState(initialValues);

  // function handleInputChange(e) {
  //   // destructuring
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }

  // function handleFormSubmit() {
  //   selectedEvent
  //     ? dispatch(updateEvent({ ...selectedEvent, ...values }))
  //     : dispatch(
  //         createEvent({
  //           ...values,
  //           id: cuid(),
  //           hostedBy: 'Bob',
  //           attendees: [],
  //           hostPhotoURL: '/assets/user.png',
  //         })
  //       );
  //   navigate('/events');
  // }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />

          <MyTextInput name='title' placeholder='Event Title' />
          <MyTextInput name='category' placeholder='Event category' />
          <MyTextInput name='description' placeholder='Description' />

          <Header sub color='teal' content='Event Location Details' />
          <MyTextInput name='city' placeholder='City' />
          <MyTextInput name='venue' placeholder='Venue' />
          <MyTextInput name='date' placeholder='Event date' type='date' />
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link}
            to={'/events'}
            type='submit'
            floated='right'
            content='Cancel'
          />
        </Form>
      </Formik>
    </Segment>
  );
}

export default EventForm;
