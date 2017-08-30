import { DOI } from './helpers';

export type OALocation = {
  evidence: string,
  host_type: "publisher" | "repository",
  is_best: boolean,
  license: string,
  updated: string,
  url: string,
  version: "submittedVersion" | "acceptedVersion" | "publishedVersion"
};

export type OADOIData = {
  best_oa_location: OALocation,
  data_standard: 1 | 2,
  doi: string,
  is_oa: boolean,
  journal_is_oa: boolean,
  journal_issns: string,
  journal_name: string,
  oa_locations: Array<OALocation>,
  publisher: string,
  title: string,
  updated: string,
  x_reported_noncompliant_copies: Array<any>,
  year: number
};

export async function getOADoiData(doi: DOI): Promise<OADOIData> {
  const url = `https://api.oadoi.org/v2/${doi}`;
  const response = await fetch(url);
  return response.json()
}
