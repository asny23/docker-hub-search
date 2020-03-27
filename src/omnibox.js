// const BASE_URL = `https://registry.hub.docker.com/`;
export const SITE_URL = `https://hub.docker.com`;
const REGISTRY_URL = `https://registry.hub.docker.com`;
const MAX_RESULTS = 4;
export const SEARCH_API_URL = `${REGISTRY_URL}/v1/search?q=`;
export const SEARCH_DEFAULT_URL = `${SITE_URL}/search?type=image&q=`;

import highlight from './highlight';

export const defaultSuggestion = {
  description: `Search Docker Hub (e.g. "alpine" | "node")`,
};

export function handleInputChanged(text, addSuggestions) {
  const headers = new Headers({ Accept: 'application/json' });
  const init = { method: 'GET', headers };
  const q = encodeURIComponent(text);
  const url = `${SEARCH_API_URL}${q}`;
  const request = new Request(url, init);
  const response = handleResponse.bind(undefined, text);

  fetch(request).then(response).then(addSuggestions);
}

function handleResponse(text, response) {
  return new Promise((resolve) => {
    response.json().then((json) => {
      const objects = json.objects.slice(0, MAX_RESULTS);

      return resolve(
        objects.map((image) => {
          return {
            content: `${SITE_URL}/_/${image.name}`, //pkg.package.links.npm,
            description: highlight(image.name, text), //highlight(pkg.package.name, text)
          };
        })
      );
    });
  });
}

export function handleInputEntered(text, disposition) {
  const url = text.startsWith('https://')
    ? text
    : `${SEARCH_DEFAULT_URL}${text}`;

  switch (disposition) {
    case 'currentTab':
      return chrome.tabs.update({ url });
    case 'newForegroundTab':
      return chrome.tabs.create({ url });
    case 'newBackgroundTab':
      return chrome.tabs.create({ url, active: false });
  }
}
