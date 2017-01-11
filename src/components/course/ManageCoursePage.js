import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
    	super(props, context);
    }

    render() {
        return (
        	<h1>Manage Course</h1>
        );
    }
}

ManageCoursePage.PropTypes = {

};

const mapDispatchToProps = (dispatch) => {
    return {
    	actions: bindActionCreators(courseActions, dispatch)
    };
};

const mapStateToProps = (state, ownProps) => ({
    state: state
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursePage);
