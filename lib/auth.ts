export const ADMIN_STORAGE_KEY = "infin_alpha_admin";

export const saveAdmin = (data: any) => {
    localStorage.setItem(
        ADMIN_STORAGE_KEY,
        JSON.stringify(data)
    );
};

export const getAdmin = () => {
    if (typeof window === "undefined") return null;

    const admin = localStorage.getItem(ADMIN_STORAGE_KEY);

    return admin ? JSON.parse(admin) : null;
};

export const removeAdmin = () => {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
};

export const isAuthenticated = () => {
    return !!getAdmin();
};