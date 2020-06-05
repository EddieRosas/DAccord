import { connect } from 'react-redux';

import TopBar from './top_bar';

const mapStateToProps = state => ({
    channels: state.entities.channels
});

export default connect(mapStateToProps, null)(TopBar);