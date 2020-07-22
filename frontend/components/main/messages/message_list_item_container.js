import React from "react";
import { connect } from "react-redux";

import MessageListItem from "./message_list_item";

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  message: ownProps.message,
});


export default connect(mapStateToProps, null)(MessageListItem);
