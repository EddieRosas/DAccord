import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchUsers } from "../../../actions/user_actions";
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
    openModal: () => dispatch(openModal('add/join')),
    fetchUsers: serverId => dispatch(fetchUsers(serverId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndex);