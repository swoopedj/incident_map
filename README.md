**Installation:**
- clone the repo from https://github.com/swoopedj/incident_map.git

- cd into project directory

- run `npm install`

- run `npm start`


**Testing alternate incident data:**
Add alternate .json file to /public/json_data and rename it as 'incident_data.json'


**Time spent on project:**
10hrs


**Given more time I would make the following improvements:**
- (project) Move API keys to secure location

- (style) Adjust styling to more elegantly display incident details, and more of them, below map component.

- (style) Fix flexbox issues in IncidentDetails component.

- (feature) Handle click event on map component to close open info windows.  Also listen for hover events so info windows open and close on mouse over.

- (code) Properly handle cases where data presence must be verified in render methods ( if(data){...}).

- (feature) Dynamic zoom for automatically adjusting zoom to appropriate level for showing all map markers (calculating bounds of map markers, then using Google Maps API fitBounds() method)

- (project) Replace the google-map-react library in favor of (potentially) https://github.com/tomchentw/react-google-maps

- (feature) Display a list of incidents that can be selected, displaying data on the map and in the details section for the selected incident
