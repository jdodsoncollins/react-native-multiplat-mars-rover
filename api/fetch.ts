import { Rovers } from '../providers/types';

const MANIFEST = process.env;
const API_KEY = MANIFEST.APP_MANIFEST?.extra?.apiKey;
const API_BASE = MANIFEST.APP_MANIFEST?.extra?.apiBaseUrl;

function url(path?: string, params?: URLSearchParams) {
  if (!path) return `${API_BASE}/?api_key=${API_KEY}`;
  if (!params) return `${API_BASE}/${path}?api_key=${API_KEY}`;
  return `${API_BASE}/${path}?api_key=${API_KEY}&${params}`;
}

export async function baseApiRequest() {
  return await processFetch();
}

export async function apiPhotosRequest(
  rover: Rovers,
  params?: URLSearchParams,
) {
  if (!params?.has('page')) params?.set('page', String(1));
  return await processFetch(`${rover}/photos`, params);
}

async function processFetch(
  path?: string,
  params?: URLSearchParams,
): Promise<any> {
  try {
    const response = await fetch(url(path, params), {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return {};
  } catch (err) {
    console.error('Fetch error', err); // todo: proper error handling
    return err;
  }
}
