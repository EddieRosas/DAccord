import { connect } from 'react-redux';

import ChannelsIndex from './channels_index';

const mapStateToProps = state => ({
    servers: Object.values(state.entities.servers)
});

export default connect(mapStateToProps, null)(ChannelsIndex);