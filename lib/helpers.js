"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doiRegex = /https?:\/\/dx\.doi\.org\/(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?![%"#? ])\S)+)/;
function extractDoi(url) {
    const match = url.match(doiRegex);
    return match != null ? match[1] : null;
}
exports.extractDoi = extractDoi;
function isDoiDoc(doc) {
    return doiRegex.test(doc['@id']);
}
exports.isDoiDoc = isDoiDoc;
function isOperableDoc(doc) {
    return isDoiDoc(doc);
}
exports.isOperableDoc = isOperableDoc;
