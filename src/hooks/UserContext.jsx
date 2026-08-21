import { createContext, useContext, useState, } from "react";

/*
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ id: 1, name: 'Diego'});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo)


        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };


    const logout = () => {

        setUserInfo({});
        localStorage.removeItem('devburger:userData');
    };

    useEffect(() => {
       const userInfoLocalStorage = localStorage.getItem('devburger:userData')

       if(userInfoLocalStorage){
            setUserInfo(JSON.parse(userInfoLocalStorage));
       }
    }, []);

    return(
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
};
*/


const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    // Inicialização preguiçosa (Lazy Initialization) resolve o aviso do useEffect
    const [userInfo, setUserInfo] = useState(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:userData');
        return userInfoLocalStorage ? JSON.parse(userInfoLocalStorage) : {};
    });

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userData');
    };

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};


