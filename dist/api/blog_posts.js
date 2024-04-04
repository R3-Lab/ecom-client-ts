"use server";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { fetcher, getSession } from './index';
export var getBlogPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/blog_posts?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to fetch blog posts', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var createBlogPost = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, site_id, payload, user_id, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                _a = _b.sent(), site_id = _a.site_id, payload = _a.payload;
                if (!payload) {
                    throw new Error('Failed to get user payload');
                }
                if (!site_id) {
                    throw new Error('Failed to get site id');
                }
                user_id = payload.id;
                return [4 /*yield*/, fetcher('/blog_posts', {
                        method: 'POST',
                        body: JSON.stringify(__assign(__assign({}, args), { author_id: user_id, created_by_id: user_id, ecommerce_site_id: site_id })),
                    })];
            case 2:
                error = (_b.sent()).error;
                if (error) {
                    console.error('Failed to create blog post', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
export var getBlogCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/blog_posts/category/all?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to fetch blog categories', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var createBlogCategory = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_a.sent()).site_id;
                if (!site_id) {
                    throw new Error('Failed to get site id');
                }
                return [4 /*yield*/, fetcher('/blog_posts/category', {
                        method: 'POST',
                        body: JSON.stringify(__assign(__assign({}, args), { ecommerce_site_id: site_id })),
                    })];
            case 2:
                error = (_a.sent()).error;
                if (error) {
                    console.error('Failed to create blog category', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
export var getBlogCategory = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/blog_posts/category/".concat(id))];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to fetch blog category', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var updateBlogCategory = function (id, args) { return __awaiter(void 0, void 0, void 0, function () {
    var error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetcher("/blog_posts/category/".concat(id), {
                    method: 'PUT',
                    body: JSON.stringify(args),
                })];
            case 1:
                error = (_a.sent()).error;
                if (error) {
                    console.error('Failed to update blog category', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
export var getBlogPost = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/blog_posts/".concat(id))];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error) {
                    console.error('Failed to fetch blog post', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var updateBlogPost = function (id, args) { return __awaiter(void 0, void 0, void 0, function () {
    var error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetcher("/blog_posts/".concat(id), {
                    method: 'PUT',
                    body: JSON.stringify(args),
                })];
            case 1:
                error = (_a.sent()).error;
                if (error) {
                    console.error('Failed to update blog post', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
export var deleteBlogPost = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetcher("/blog_posts/".concat(id), {
                    method: 'DELETE',
                })];
            case 1:
                error = (_a.sent()).error;
                if (error) {
                    console.error('Failed to delete blog post', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
