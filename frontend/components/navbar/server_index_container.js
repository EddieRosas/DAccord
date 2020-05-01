import { connect } from 'react-redux';
import ServerIndex from './server_index';

import { fetchServers, createServer } from '../../actions/server_actions';

const mapStateToProps = state => {
    return(
        {
            servers: Object.values(state.entities.servers),
            string: "hi"
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchServers: () => dispatch(fetchServers()),
    createServers: server => dispatch(createServer(server))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndex);