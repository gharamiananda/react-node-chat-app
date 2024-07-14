export const HOST= import.meta.env.VITE_SERVER_URL;


export const AUTH_ROUTE='api/v1/auth'
export const CONTACT_ROUTE=`api/v1/contacts`;


export const SIGNUP_ROUTE=`${AUTH_ROUTE}/signup`;
export const LOGIN_ROUTE=`${AUTH_ROUTE}/login`;
export const GET_USERINFO_ROUTE=`${AUTH_ROUTE}/userInfo`;

export const UPDATE_USERINFO_ROUTE=`${AUTH_ROUTE}/updateUser`;
export const ADDUPDATE_USERIMG_ROUTE=`${AUTH_ROUTE}/add-profile-image`;
export const LOGOUT_ROUTE=`${AUTH_ROUTE}/logout`;

export const CONTACTLIST_ROUTE=`${CONTACT_ROUTE}/search-contact`;








