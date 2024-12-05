var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_intl_1 = require("react-intl");
function react18Intl(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    if (typeof children === 'function') {
        return (children(props));
    }
    else {
        return null;
    }
}
exports.default = react_intl_1.injectIntl(react18Intl);
