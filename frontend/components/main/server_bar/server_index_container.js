import { connect } from 'react-redux';
import ServerIndex from './server_index';

import { fetchServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/modal_actions'

const mapStateToProps = state => {
    return(
        {
            servers: Object.values(state.entities.servers),
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchServers: () => dispatch(fetchServers()),
    openModal: () => dispatch(openModal('add/join'))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndex);