import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { openModal } from '../../../actions/modal_actions'

const mapStateToProps = state => ({
    servers: Object.values(state.entities.servers),
})

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal('add/join')),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerIndex);
