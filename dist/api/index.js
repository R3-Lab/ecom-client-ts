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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { revalidatePath } from 'next/cache';
var isProd = process.env.NODE_ENV === 'production';
export var API_BASE = process.env.SERVER_URL || (isProd ? 'https://backend.bitnarts.com' : 'http://localhost:5800');
export var SITE_ID = process.env.SITE_ID || 'ebc1e210-d8d7-46be-ba98-349b59b4e3dd';
export var fetcher = function (path_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([path_1], args_1, true), void 0, function (path, options) {
        var _a, cookieToken, site_id, authorization, requestCookies, res, headers, body, data, error_1;
        if (options === void 0) { options = {}; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getSession()];
                case 1:
                    _a = _b.sent(), cookieToken = _a.token, site_id = _a.site_id;
                    authorization = cookieToken && {
                        Authorization: "Bearer ".concat(cookieToken),
                    };
                    requestCookies = site_id && "site_id=".concat(site_id);
                    return [4 /*yield*/, fetch(API_BASE + path, __assign({ headers: __assign(__assign(__assign({ 'Content-Type': 'application/json' }, (requestCookies && { Cookie: requestCookies })), authorization), options.headers) }, options))];
                case 2:
                    res = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    headers = res.headers;
                    return [4 /*yield*/, res.text()];
                case 4:
                    body = _b.sent();
                    data = body ? JSON.parse(body) : undefined;
                    if (!res.ok) {
                        return [2 /*return*/, {
                                error: data,
                                headers: headers,
                            }];
                    }
                    return [2 /*return*/, {
                            data: data,
                            headers: headers,
                        }];
                case 5:
                    error_1 = _b.sent();
                    console.error('Failed to fetch data from path:', path, error_1);
                    throw new Error('Failed to fetch data');
                case 6: return [2 /*return*/];
            }
        });
    });
};
export var getSession = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var getPayload, token_1, site_id_1, token, site_id;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        getPayload = function (token) {
            if (!token) {
                return undefined;
            }
            try {
                return jwtDecode(token);
            }
            catch (error) {
                return undefined;
            }
        };
        if (req) {
            token_1 = (_a = req.cookies.get('token')) === null || _a === void 0 ? void 0 : _a.value;
            site_id_1 = (_b = req.cookies.get('site_id')) === null || _b === void 0 ? void 0 : _b.value;
            return [2 /*return*/, { token: token_1, site_id: site_id_1, payload: getPayload(token_1) }];
        }
        token = (_c = cookies().get('token')) === null || _c === void 0 ? void 0 : _c.value;
        site_id = (_d = cookies().get('site_id')) === null || _d === void 0 ? void 0 : _d.value;
        return [2 /*return*/, { token: token, site_id: site_id, payload: getPayload(token) }];
    });
}); };
export var setSiteIdSession = function (site_id, current_path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!site_id) {
            cookies().delete('site_id');
        }
        else {
            cookies().set('site_id', site_id, {
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // One week
                path: '/',
            });
        }
        // revalidatePath(paths.dashboard.root, 'layout')
        if (current_path) {
            revalidatePath(current_path);
        }
        return [2 /*return*/];
    });
}); };
