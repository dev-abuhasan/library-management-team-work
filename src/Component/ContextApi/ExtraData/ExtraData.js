import React, { createContext, useState } from 'react';
import { } from 'react-router-dom';

let Context = null;
const { Provider, Consumer } = Context = createContext();

const ExtraDataProvider = (props) => {

    //check user
    const [oldUser, setOldUser] = useState(true);

    return (
        <Provider value={
            {
                setOldUser,
                oldUser
            }
        }>
            {props.children}
        </Provider>
    )

}


export { ExtraDataProvider, Consumer as UserConsumer, Context as ExtraDataContext };