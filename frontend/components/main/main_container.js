import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Main from './main';


export default withRouter(connect(
    null,
    null
)(Main))