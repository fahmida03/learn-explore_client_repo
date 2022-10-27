// import React, { createContext } from 'react';
// import context from 'react-bootstrap/esm/AccordionContext';
// import {getAuth, signInWithPopup} from 'firebase/auth'
// import App from '../../App';


// export const AuthContext = createContext();
// const auth = getAuth(App)
// const AuthProvider = ({children}) => {
//     const user = {}
//     const providerLogin = (provider) =>{
//         return signInWithPopup(auth, provider)
//     }
//     const authInfo = {user, providerLogin }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;