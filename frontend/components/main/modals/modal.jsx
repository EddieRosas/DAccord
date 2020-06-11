import React from 'react';
import { Route } from 'react-router-dom';

import AddOrJoinServerContainer from './add_or_join_server_container';
import CreateServerContainer from './create_server_container';
import JoinServerContainer from './join_server_container';
import DeleteServerContainer from './delete_server_container';
import LeaveServerContainer from './leave_server_container';
import CreateChannelContainer from './create_channel_container';
import EditUserContainer from './edit_user_container';
import DeleteChannelContainer from './delete_channel_container';


const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'add/join':
            component = (
                <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
                    <AddOrJoinServerContainer />
                </div>
            )
            break;
        case 'create':
            component = (
                <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
                    <CreateServerContainer />;
                </div>
            )
            break;
        case 'join':
            component = (
                <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
                    <JoinServerContainer />;
                </div>
            )
            break;
        case 'editServer':
            component = (
                <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
                    <Route path="/channels/:serverId" component={EditServerContainer} />;
                </div>
            )
            break;
        case 'deleteServer':
            component = (
                <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}>
                    <Route path="/channels/:serverId/" component={DeleteServerContainer} />
                </div>
            )
            break;
        case 'leaveServer':
            component = (
                <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}>
                    <Route path="/channels/:serverId/" component={LeaveServerContainer} />
                </div>
            )
            break;
        case 'createChannel':
            component = (
                <div className="modal-child-channel-small" onMouseDown={e => e.stopPropagation()}>
                    <Route path="/channels/:serverId/" component={CreateChannelContainer} />
                </div>
            )
            break;
        case 'editUser':
            component = (
                <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}>
                    <EditUserContainer />
                </div>
            )
            break;
        case 'deleteChannel':
            component = (
                <div className="modal-child-channel-small-delete" onMouseDown={e => e.stopPropagation()}>
                    <Route path="/channels/:serverId/:channelId" component={DeleteChannelContainer} />
                </div>
            )
            break;
        default:
            return null;}
    return (
        <div className="modal-background" onMouseDown={closeModal}>
            {component}
        </div>
    );
}

export default Modal;
