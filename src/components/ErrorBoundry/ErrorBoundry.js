import React, { Component } from 'react';
import {connect} from 'react-redux';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import {setErrorBoundryState} from "../../redux/actions/Actions";

class ErrorBoundry extends Component {
    componentDidCatch() {
        this.props.setErrorBoundryState();
    }

    render() {
        if (this.props.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}

function mapStateToProps(state) {
    return {
        hasError: state.errorBoundry.hasError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setErrorBoundryState: () => dispatch(setErrorBoundryState())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);