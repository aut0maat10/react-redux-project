import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewItemForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Create New Item</h1><br /> 
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div><br />
      </div>
      <div>
        <div>
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="Price ($500)"
          />
        </div>
      </div><br />
      <div>
        <div>
          <Field
            name="description"
            component="textarea"
            type="text"
            placeholder="Description"
          />
        </div>
      </div><br />
      <div>
        <div>
          <Field
            name="seller_name"
            component="input"
            type="text"
            placeholder="Seller Name"
          />
        </div>
      </div><br />
      <div>
        <div>
          <Field
            name="seller_phone"
            component="input"
            type="text"
            placeholder="Phone (555-555-5555)"
          />
        </div>
      </div><br />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

NewItemForm = reduxForm({
  form: 'new-item' // a unique identifier for this form
})(NewItemForm)

export default NewItemForm;
