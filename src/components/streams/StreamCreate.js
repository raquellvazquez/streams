import React from 'react';
import { Field, reduxForm} from 'redux-form';
class StreamCreate extends React.Component {

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta})  =>{
        const className= `field ${meta.error && meta.touched ? 'error'  : '' }`
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input }   />  
            {this.renderError(meta)}
        </div>
        )
    }

    onSubmit(formValues) {
        console.log('%cStreamCreate.js line:15 formValues', 'color: #007acc;', formValues);

    }

    render() { 
        return ( 
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
         );
    }
}

const validate = (formValues) => {
    const errors = { }
    if(!formValues.title) {
        errors.title = 'You musy enter a title';
    }
    if(!formValues.description) {
        errors.description = 'You musy enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);