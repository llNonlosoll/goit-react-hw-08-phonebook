// Selector function for retrieving the login status from the auth state
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Selector function for retrieving the user object from the auth state
export const selectUser = state => state.auth.user;

// Selector function for retrieving the refreshing status from the auth state
export const selectIsRefreshing = state => state.auth.isRefreshing;
