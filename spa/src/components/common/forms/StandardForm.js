import React from 'react';

export default props => {
    const {
        onFormSubmit,
        valid,
        handleSubmit,
        pristine,
        reset,
        submitting,
        FormFields,
        ...rest
    } = props;
    return (<form onSubmit={handleSubmit(onFormSubmit)} className="form-group m-3 p-3">
        <FormFields {...rest}/>
        <button
            type="submit"
            className="btn btn-primary"
            disabled={!valid || pristine || submitting}
        >
            Submit
        </button>
    </form>);
}