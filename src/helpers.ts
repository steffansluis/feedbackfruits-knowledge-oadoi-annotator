import fetch from 'node-fetch';
import { Doc, Helpers } from 'feedbackfruits-knowledge-engine';
import * as Context from 'feedbackfruits-knowledge-context';

const doiRegex = /https?:\/\/dx\.doi\.org\/(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?![%"#? ])\S)+)/
export type DOI = string;
export function extractDoi(url: string): DOI {
  const match = url.match(doiRegex);
  return match != null ? match[1] : null;
}

export function isDoiDoc(doc: Doc) {
  return doiRegex.test(doc['@id']);
}
export function isOperableDoc(doc: Doc): boolean {
  return isDoiDoc(doc);
}
