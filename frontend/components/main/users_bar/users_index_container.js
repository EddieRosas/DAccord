
import { connect } from 'react-redux';

import { fetchServer } from '../../../actions/server_actions';
import { selectMembersByServer } from '../../../reducers/selectors';

import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => {
    
    
    return(
    {
    servers: state.entities.servers,
    // members: selectMembersByServer(state, ownProps.match.params.serverId) 
    }
    )
};

const mapDispatchToProps = dispatch => ({
    fetchServer: (serverId) => dispatch(fetchServer(serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);