

export const Routes = {
    SplashScreen: 'SplashScreen',
    LoginScreen:'LoginScreen',
    RegisterScreen:'RegisterScreen',
    DrawerNavigationRoutes: 'DrawerNavigationRoutes',
    Auth:'Auth',
    HomeScreen:'HomeScreen',
    SettingsScreen : 'SettingsScreen',
    

}

export const AuthDetails = {
    baseURL: "https://dummyapi.io/data/v1/",
    appID: "61c46490b73b1ae6c46e37ff",
    GET: 'get',
    POST: 'post'
}


export const PlaceHolderString = {
    FNAME: 'Enter First Name',
    LNAME: 'Enter Last Name',
    EMAIL_ADDRESS: 'Enter Email Address',
    PASSWORD: 'Enter Password',
    LOAD_MORE: 'Load more'
}
export const ValidationString = {
    email_empty: 'Please enter email address',
    fname_empty: 'Please enter first name',
    lname_empty: 'Please enter last name',
    email_valid: 'Please enter valid email address',
    email_not_record: 'User is not register',
    password_empty: 'Please enter password',
    password_valid: 'Please enter valid password',
    password_wrong: 'Email and password are not match'
}

export const checkEmailValid = (emailAddress) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailAddress) === false) {
        return false;
    } else {
        return true;
    }
}