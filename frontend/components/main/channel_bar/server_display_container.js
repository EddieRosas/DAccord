
import { connect } from 'react-redux';

import ServerDisplay from './server_display';

const mapStateToProps = (state, ownProps) => ({
    servers: state.entities.servers,
    currentUserId: state.session.currentUserId
})

export default connect(mapStateToProps, null)(ServerDisplay);