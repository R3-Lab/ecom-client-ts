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
import { fetcher, getSession } from './index';
export var getProducts = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var site_id, urlParams, _i, category_ids_1, category_id, _c, size_ids_1, size_id, _d, color_ids_1, color_id, _e, material_ids_1, material_id, _f, product_type_ids_1, product_type_id, _g, data, error;
    var category_ids = _b.category_ids, size_ids = _b.size_ids, color_ids = _b.color_ids, material_ids = _b.material_ids, product_type_ids = _b.product_type_ids;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_h.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                if (category_ids) {
                    for (_i = 0, category_ids_1 = category_ids; _i < category_ids_1.length; _i++) {
                        category_id = category_ids_1[_i];
                        urlParams.append('category_ids', category_id);
                    }
                }
                if (size_ids) {
                    for (_c = 0, size_ids_1 = size_ids; _c < size_ids_1.length; _c++) {
                        size_id = size_ids_1[_c];
                        urlParams.append('size_ids', size_id);
                    }
                }
                if (color_ids) {
                    for (_d = 0, color_ids_1 = color_ids; _d < color_ids_1.length; _d++) {
                        color_id = color_ids_1[_d];
                        urlParams.append('color_ids', color_id);
                    }
                }
                if (material_ids) {
                    for (_e = 0, material_ids_1 = material_ids; _e < material_ids_1.length; _e++) {
                        material_id = material_ids_1[_e];
                        urlParams.append('material_ids', material_id);
                    }
                }
                if (product_type_ids) {
                    for (_f = 0, product_type_ids_1 = product_type_ids; _f < product_type_ids_1.length; _f++) {
                        product_type_id = product_type_ids_1[_f];
                        urlParams.append('product_type_ids', product_type_id);
                    }
                }
                return [4 /*yield*/, fetcher("/products?".concat(urlParams.toString()))];
            case 2:
                _g = _h.sent(), data = _g.data, error = _g.error;
                if (error && !data) {
                    console.error('Failed to get products', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var getProduct = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/".concat(productId))];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to get product with id ".concat(productId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var addProduct = function (product) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products', {
                    method: 'PUT',
                    body: JSON.stringify(product),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product
export var updateProduct = function (productId, product) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/".concat(productId), {
                    method: 'PUT',
                    body: JSON.stringify(product),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product with id ".concat(productId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product
export var deleteProduct = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/".concat(productId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product with id ".concat(productId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all product categories
export var getProductCategories = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var site_id, urlParams, _c, data, error;
    var limit = _b.limit, offset = _b.offset;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_d.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                if (limit) {
                    urlParams.append('limit', limit.toString());
                }
                if (offset) {
                    urlParams.append('offset', offset.toString());
                }
                return [4 /*yield*/, fetcher("/products/categories?".concat(urlParams.toString()))];
            case 2:
                _c = _d.sent(), data = _c.data, error = _c.error;
                if (error && !data) {
                    console.error('Failed to get product categories', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
export var getProductCategory = function (categoryId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/categories/".concat(categoryId))];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to get product category with id ".concat(categoryId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a product category
export var addProductCategory = function (category) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products/categories', {
                    method: 'POST',
                    body: JSON.stringify(category),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product category', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product category
export var updateProductCategory = function (categoryId, category) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/categories/".concat(categoryId), {
                    method: 'PUT',
                    body: JSON.stringify(category),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product category with id ".concat(categoryId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product category
export var deleteProductCategory = function (categoryId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/categories/".concat(categoryId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product category with id ".concat(categoryId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all product colors
export var getColors = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/products/colors?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to get product colors', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a product color
export var addColor = function (color) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products/colors', {
                    method: 'POST',
                    body: JSON.stringify(color),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product color', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product color
export var updateColor = function (colorId, color) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/colors/".concat(colorId), {
                    method: 'PUT',
                    body: JSON.stringify(color),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product color with id ".concat(colorId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product color
export var deleteColor = function (colorId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/colors/".concat(colorId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product color with id ".concat(colorId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all product materials
export var getMaterials = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/products/materials?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to get product materials', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a product material
export var addMaterial = function (material) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products/materials', {
                    method: 'POST',
                    body: JSON.stringify(material),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product material', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product material
export var updateMaterial = function (materialId, material) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/materials/".concat(materialId), {
                    method: 'PUT',
                    body: JSON.stringify(material),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product material with id ".concat(materialId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product material
export var deleteMaterial = function (materialId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/materials/".concat(materialId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product material with id ".concat(materialId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all product sizes
export var getSizes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/products/sizes?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to get product sizes', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a product size
export var addSize = function (size) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products/sizes', {
                    method: 'POST',
                    body: JSON.stringify(size),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product size', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product size
export var updateSize = function (sizeId, size) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/sizes/".concat(sizeId), {
                    method: 'PUT',
                    body: JSON.stringify(size),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product size with id ".concat(sizeId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product size
export var deleteSize = function (sizeId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/sizes/".concat(sizeId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product size with id ".concat(sizeId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Get all product types
export var getProductTypes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site_id, urlParams, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getSession()];
            case 1:
                site_id = (_b.sent()).site_id;
                urlParams = new URLSearchParams();
                if (site_id) {
                    urlParams.append('ecommerce_site_id', site_id);
                }
                return [4 /*yield*/, fetcher("/products/types?".concat(urlParams.toString()))];
            case 2:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to get product types', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Add a product type
export var addProductType = function (type) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher('/products/types', {
                    method: 'POST',
                    body: JSON.stringify(type),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error('Failed to add product type', error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Update a product type
export var updateProductType = function (typeId, type) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/types/".concat(typeId), {
                    method: 'PUT',
                    body: JSON.stringify(type),
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to update product type with id ".concat(typeId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
// Delete a product type
export var deleteProductType = function (typeId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetcher("/products/types/".concat(typeId), {
                    method: 'DELETE',
                })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error && !data) {
                    console.error("Failed to delete product type with id ".concat(typeId), error);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
