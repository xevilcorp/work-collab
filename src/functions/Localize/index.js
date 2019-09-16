let strings = {};

export function SetLang(lang) {
    try {
        strings = require(`./${lang}.json`);
    }
    catch (e) { console.error(e) }
}

export function L(keyText, cap = '') {
    return Localize(keyText, cap);
}

export function Localize(keyText, cap = '') {
    const result = strings[keyText] !== undefined ? strings[keyText] : keyText;
    switch (cap) {
        case 'lc': return result.toLowerCase();
        case 'uc': return result.toUpperCase();
        case 'tc': return toTitleCase(result);
        case 'fc': return capitalizeFirstLetter(result);
        default: return result;
    }
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


