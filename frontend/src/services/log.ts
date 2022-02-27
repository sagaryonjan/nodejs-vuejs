const API_URL = 'http://localhost:8081';

export const createLog = () => {
  return fetch(`${API_URL}/api/logs/store`, {
    method: 'POST',
  }).then(response => response.json());
};

export const fetchLogs = (page: number) => {
  return fetch(`${API_URL}/api/logs?page=${page}`, {
    method: 'GET',
  }).then(response => response.json());
};
