import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from './AddForm';

class AddFormContainer extends Component{

    values = {
        title: 'title',
        description: 'description',
        numberOfInjuries: 0,
        isResolved: 0,
    }

    render()
    {
        return(
            // TODO: handle dialog state
            this.props.addForm.isOpen ? <AddForm open={false} values={this.values} /> : null
        )
    }
}

const mapStateToProps = state => {
    return{
        addForm: state.addForm,
    }
}

export default connect(mapStateToProps)(AddFormContainer);
