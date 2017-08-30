import { Doc } from 'feedbackfruits-knowledge-engine';
export declare type DOI = string;
export declare function extractDoi(url: string): DOI;
export declare function isDoiDoc(doc: Doc): boolean;
export declare function isOperableDoc(doc: Doc): boolean;
