
import { connect } from 'react-redux';

import UsersIndexListItem from './users_index_list_item';

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.member
});

export default connect(mapStateToProps, null)(UsersIndexListItem);