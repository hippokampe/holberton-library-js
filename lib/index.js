'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fetch = require('node-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

var HippokampeError = /** @class */ (function (_super) {
    __extends(HippokampeError, _super);
    function HippokampeError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Hippokampe Error';
        return _this;
    }
    return HippokampeError;
}(Error));
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Api Error';
        return _this;
    }
    return ApiError;
}(HippokampeError));
var UserError = /** @class */ (function (_super) {
    __extends(UserError, _super);
    function UserError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'User Error';
        return _this;
    }
    return UserError;
}(HippokampeError));

var loginCall = function (url, credentials) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var response, data, _a, user_name, first_name, last_name, id, email, profile_url, city, user, message, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch__default['default'](url, {
                                    method: 'post',
                                    body: JSON.stringify(credentials),
                                    headers: { 'Content-Type': 'application/json' }
                                })];
                        case 1:
                            response = _c.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _c.sent();
                            if (response.ok) {
                                _a = data.user, user_name = _a.user_name, first_name = _a.first_name, last_name = _a.last_name, id = _a.id, email = _a.email, profile_url = _a.profile_url, city = _a.city;
                                user = {
                                    username: user_name,
                                    first_name: first_name,
                                    last_name: last_name,
                                    id: id,
                                    email: email,
                                    profile_url: profile_url,
                                    city: city,
                                };
                                resolve(user);
                            }
                            else {
                                message = data.message;
                                reject(new UserError(message));
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            _b = _c.sent();
                            reject(new ApiError("the url of the server it's not valid"));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };

var Holberton = /** @class */ (function () {
    function Holberton(url) {
        this.url = (url !== '' && url !== undefined)
            ? url
            : 'https://api.hippokampe.wtf';
        console.log(this.url);
    }
    /**
     * authenticate
     */
    Holberton.prototype.authenticate = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointURL;
            var _this = this;
            return __generator(this, function (_a) {
                endpointURL = this.url + "/auth/login";
                return [2 /*return*/, loginCall(endpointURL, credentials)
                        .then(function (user) {
                        _this.user = user;
                        return user;
                    })
                        .catch(function (err) { return err; })];
            });
        });
    };
    /**
     * getUser
     */
    Holberton.prototype.getUser = function () {
        return this.user;
    };
    return Holberton;
}());

exports.ApiError = ApiError;
exports.HippokampeError = HippokampeError;
exports.Holberton = Holberton;
exports.UserError = UserError;
