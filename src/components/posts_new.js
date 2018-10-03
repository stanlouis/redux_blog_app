import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className={className} type="text" {...field.input} />
        <div className="text-danger">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    
    this.props.createPost(values, () => this.props.history.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-danger mx-1" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  //validate the inputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }
  // if errors is empty the form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
