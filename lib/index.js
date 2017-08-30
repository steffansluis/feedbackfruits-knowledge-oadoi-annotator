"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackfruits_knowledge_engine_1 = require("feedbackfruits-knowledge-engine");
const Config = require("./config");
const Context = require("feedbackfruits-knowledge-context");
const helpers_1 = require("./helpers");
const oadoi_1 = require("./oadoi");
function init({ name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const receive = (send) => (operation) => __awaiter(this, void 0, void 0, function* () {
            console.log('Received operation:', operation);
            const { action, data: doc } = operation;
            if (!(action === 'write') || !helpers_1.isOperableDoc(doc))
                return;
            const annotatedDoc = yield annotate(doc);
            if (doc === annotatedDoc)
                return;
            return send({ action: 'write', key: annotatedDoc['@id'], data: annotatedDoc });
        });
        return yield feedbackfruits_knowledge_engine_1.Annotator({
            name,
            receive,
            customConfig: Config
        });
    });
}
exports.default = init;
function annotate(doc) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Annotating doc:', doc);
        const doi = helpers_1.extractDoi(doc['@id']);
        const doiData = yield oadoi_1.getOADoiData(doi);
        if (!doiData.is_oa)
            return doc;
        const { oa_locations } = doiData;
        const locations = oa_locations.map(location => {
            return location.url;
        });
        return Object.assign({}, doc, { [feedbackfruits_knowledge_engine_1.Helpers.decodeIRI(Context.sameAs)]: locations });
    });
}
if (require.main === module) {
    console.log("Running as script.");
    init({
        name: Config.NAME,
    }).catch(console.error);
}
