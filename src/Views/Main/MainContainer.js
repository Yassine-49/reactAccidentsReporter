import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from './../../redux/actions/User/actions';
import Main from './Main';

class MainContainer extends Component {

    render()
    {
        return(
            <Main />
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...userActions })(MainContainer);
