const TOKEN_KEY = "infin_alpha_access_token";

const ADMIN_KEY = "infin_alpha_admin";

export const saveToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
    if (typeof window === "undefined") return null;

    return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const saveAdmin = (admin) => {
    localStorage.setItem(
        ADMIN_KEY,
        JSON.stringify(admin)
    );
};

export const getAdmin = () => {
    if (typeof window === "undefined") return null;

    const admin = localStorage.getItem(ADMIN_KEY);

    return admin ? JSON.parse(admin) : null;
};

export const removeAdmin = () => {
    localStorage.removeItem(ADMIN_KEY);
};

export const logout = () => {
    removeToken();
    removeAdmin();
};

export const isAuthenticated = () => {
    return !!getToken();
};