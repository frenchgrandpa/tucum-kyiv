import {createContext, FC, useState} from "react";


interface Props {

}


export const MobileMenuContext = createContext({
    show: false,
    toggleShow: () => {
    }
});

const MobileMenuContextProvider: FC<Props> = ({children}) => {
    const [show, setShow] = useState(false);
    return (
        <MobileMenuContext.Provider value={{
            show: show,
            toggleShow: () => setShow(s => !s)
        }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export default MobileMenuContextProvider;
