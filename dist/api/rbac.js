"use server";
import { fetcher } from "./index";
// Add an ecommerce site
export const addEcommerceSite = async (site) => {
    const { data, error } = await fetcher("/rbac/ecommerce_sites/create", {
        method: "POST",
        body: JSON.stringify(site),
    });
    if (error) {
        console.error("Failed to add ecommerce site", error);
        throw new Error(error.message);
    }
    // revalidatePath(paths.dashboard.root, 'layout')
    // revalidatePath(paths.dashboard.settings.rbac.sites)
    return data;
};
// Get all ecommerce sites
export const getEcommerceSites = async () => {
    const { data, error } = await fetcher("/rbac/ecommerce_sites/list", {
        method: "POST",
    });
    if (error) {
        console.error("Failed to get ecommerce sites", error);
        throw new Error(error.message);
    }
    return data;
};
// Get an ecommerce site
export const getEcommerceSite = async (siteId) => {
    const { data, error } = await fetcher(`/rbac/ecommerce_sites/${siteId}`);
    if (error) {
        console.error(`Failed to get ecommerce site with id ${siteId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Update an ecommerce site
export const updateEcommerceSite = async (siteId, site) => {
    const { data, error } = await fetcher(`/rbac/ecommerce_sites/${siteId}`, {
        method: "PUT",
        body: JSON.stringify(site),
    });
    if (error) {
        console.error(`Failed to update ecommerce site with id ${siteId}`, error);
        throw new Error(error.message);
    }
    // revalidatePath(paths.dashboard.root, 'layout')
    // revalidatePath(paths.dashboard.settings.rbac.sites)
    return data;
};
// Delete an ecommerce site
export const deleteEcommerceSite = async (siteId) => {
    const { data, error } = await fetcher(`/rbac/ecommerce_sites/${siteId}`, {
        method: "DELETE",
    });
    if (error) {
        console.error(`Failed to delete ecommerce site with id ${siteId}`, error);
        throw new Error(error.message);
    }
    // revalidatePath(paths.dashboard.root, 'layout')
    // revalidatePath(paths.dashboard.settings.rbac.sites)
    return data;
};
// Create a permission
export const createPermission = async (permission) => {
    const { data, error } = await fetcher("/rbac/permissions/create", {
        method: "POST",
        body: JSON.stringify(permission),
    });
    if (error) {
        console.error("Failed to create permission", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a permission
export const updatePermission = async (permissionId, permission) => {
    const { data, error } = await fetcher(`/rbac/permissions/${permissionId}`, {
        method: "PUT",
        body: JSON.stringify(permission),
    });
    if (error) {
        console.error(`Failed to update permission with id ${permissionId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a permission
export const deletePermission = async (permissionId) => {
    const { data, error } = await fetcher(`/rbac/permissions/${permissionId}`, {
        method: "DELETE",
    });
    if (error) {
        console.error(`Failed to delete permission with id ${permissionId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Create a role
export const createRole = async (role) => {
    const { data, error } = await fetcher("/rbac/roles/create", {
        method: "POST",
        body: JSON.stringify(role),
    });
    if (error) {
        console.error("Failed to create role", error);
        throw new Error(error.message);
    }
    return data;
};
// Get all roles
export const getRoles = async () => {
    const { data, error } = await fetcher("/rbac/roles/list");
    if (error) {
        console.error("Failed to get roles", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a role
export const updateRole = async (roleId, role) => {
    const { data, error } = await fetcher(`/rbac/roles/${roleId}`, {
        method: "PUT",
        body: JSON.stringify(role),
    });
    if (error) {
        console.error(`Failed to update role with id ${roleId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a role
export const deleteRole = async (roleId) => {
    const { data, error } = await fetcher(`/rbac/roles/${roleId}`, {
        method: "DELETE",
    });
    if (error) {
        console.error(`Failed to delete role with id ${roleId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Add a permission to a role
export const addPermissionToRole = async (roleId, permissionId) => {
    const { data, error } = await fetcher(`/rbac/roles/${roleId}/add_permission`, {
        method: "POST",
        body: JSON.stringify({ permission_id: permissionId }),
    });
    if (error) {
        console.error(`Failed to add permission ${permissionId} to role ${roleId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Remove a permission from a role
export const removePermissionFromRole = async (roleId, permissionId) => {
    const { data, error } = await fetcher(`/rbac/roles/${roleId}/permissions/${permissionId}`, {
        method: "DELETE",
    });
    if (error) {
        console.error(`Failed to remove permission ${permissionId} from role ${roleId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Add a role to a user
export const addRoleToUser = async (roleId, userId) => {
    const { data, error } = await fetcher(`/rbac/roles/${roleId}/add_user`, {
        method: "POST",
        body: JSON.stringify({ user_id: userId }),
    });
    if (error) {
        console.error(`Failed to add role ${roleId} to user ${userId}`, error);
        throw new Error(error.message);
    }
    return data;
};
