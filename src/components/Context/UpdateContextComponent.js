import React, {useContext} from 'react';
import UserContext from './userContext';
import AddressContext from './addressContext';

export default function UpdateContextComponent() {
    const updateUserName = useContext(UserContext);
    const updateAddressName = useContext(AddressContext);

    return <button onClick={() => {updateUserName.onNameChange('User Updated in Context'); updateAddressName.onAddressChange('Address has been changed!'); }}>Change Multiple Contexts</button>;
}