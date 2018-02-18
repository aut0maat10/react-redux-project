import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewItemForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Item</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="New Item"
          />
        </div>
      </div>
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
