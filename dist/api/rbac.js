'use server';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { fetcher } from './index';
// Add an ecommerce site
export var addEcommerceSite = function (site) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/rbac/ecommerce_sites/create', {
                    method: 'POST',
                    body: JSON.stringify(site),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to add ecommerce site', error);
                    throw new Error(error.message);
                }
                // revalidatePath(paths.dashboard.root, 'layout')
                // revalidatePath(paths.dashboard.settings.rbac.sites)
                return [2 /*return*/, data];
        }
    });
}); };
// Get all ecommerce sites
export var getEcommerceSites = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/rbac/ecommerce_sites/list', {
                    method: 'POST',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to get ecommerce sites', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get an ecommerce site
export var getEcommerceSite = function (siteId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/ecommerce_sites/".concat(siteId))];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to get ecommerce site with id ".concat(siteId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update an ecommerce site
export var updateEcommerceSite = function (siteId, site) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/ecommerce_sites/".concat(siteId), {
                    method: 'PUT',
                    body: JSON.stringify(site),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to update ecommerce site with id ".concat(siteId), error);
                    throw new Error(error.message);
                }
                // revalidatePath(paths.dashboard.root, 'layout')
                // revalidatePath(paths.dashboard.settings.rbac.sites)
                return [2 /*return*/, data];
        }
    });
}); };
// Delete an ecommerce site
export var deleteEcommerceSite = function (siteId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/ecommerce_sites/".concat(siteId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to delete ecommerce site with id ".concat(siteId), error);
                    throw new Error(error.message);
                }
                // revalidatePath(paths.dashboard.root, 'layout')
                // revalidatePath(paths.dashboard.settings.rbac.sites)
                return [2 /*return*/, data];
        }
    });
}); };
// Create a permission
export var createPermission = function (permission) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/rbac/permissions/create', {
                    method: 'POST',
                    body: JSON.stringify(permission),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to create permission', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a permission
export var updatePermission = function (permissionId, permission) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/permissions/".concat(permissionId), {
                    method: 'PUT',
                    body: JSON.stringify(permission),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to update permission with id ".concat(permissionId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a permission
export var deletePermission = function (permissionId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/permissions/".concat(permissionId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to delete permission with id ".concat(permissionId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Create a role
export var createRole = function (role) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/rbac/roles/create', {
                    method: 'POST',
                    body: JSON.stringify(role),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to create role', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all roles
export var getRoles = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/rbac/roles/list')];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to get roles', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a role
export var updateRole = function (roleId, role) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/roles/".concat(roleId), {
                    method: 'PUT',
                    body: JSON.stringify(role),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to update role with id ".concat(roleId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a role
export var deleteRole = function (roleId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/roles/".concat(roleId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to delete role with id ".concat(roleId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a permission to a role
export var addPermissionToRole = function (roleId, permissionId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/roles/".concat(roleId, "/add_permission"), {
                    method: 'POST',
                    body: JSON.stringify({ permission_id: permissionId }),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to add permission ".concat(permissionId, " to role ").concat(roleId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Remove a permission from a role
export var removePermissionFromRole = function (roleId, permissionId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/roles/".concat(roleId, "/permissions/").concat(permissionId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to remove permission ".concat(permissionId, " from role ").concat(roleId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a role to a user
export var addRoleToUser = function (roleId, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/rbac/roles/".concat(roleId, "/add_user"), {
                    method: 'POST',
                    body: JSON.stringify({ user_id: userId }),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error("Failed to add role ".concat(roleId, " to user ").concat(userId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
