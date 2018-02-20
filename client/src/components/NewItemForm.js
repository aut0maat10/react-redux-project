import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewItemForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Create New Item</h1><br /> 
        {/* <label>Item</label> */}
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
        {/* <label>Description</label> */}
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
