import React from 'react';
import { Route } from 'react-router-dom';

import AddOrJoinServerContainer from './add_or_join_server_container';
import CreateServerContainer from './create_server_container';
// import JoinServerContainer from './join_server_container';


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
        // case 'join':
        //     component = (
        //         <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
        //             <JoinServerContainer />;
        //         </div>
        //     )     
        default:
            return null;
    }
    return (
        <div className="modal-background" onMouseDown={closeModal}>
            {component}
        </div>
    );
}

export default Modal;
