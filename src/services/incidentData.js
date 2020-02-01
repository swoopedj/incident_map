import { INCIDENT_DATA_URL } from '../constants'

export const getIncidentData = () =>
  fetch(INCIDENT_DATA_URL)
    .then(response => response.json())
    .then(data => data);