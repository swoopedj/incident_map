Installation:

clone the repo from https://github.com/swoopedj/incident_map.git

run npm install from project directory

Testing alternate incident data:
Add .json file to /public/json_data and rename as 'incident_data.json'


Given more time I would make the following improvements:

- (project) move API keys to secure location

- (style) adjust styling to more elegantly display incident details, and more of them, below map component

- (style) fix flexbox issues in IncidentDetails component

- (feature) handle click event on map component to close open info windows.  Also listen for hover events so info windows open and close on mouse over

- (code) properly handle cases where data presence must be verified in render methods ( if(data){...}).

- (feature) dynamic zoom for automatically adjusting zoom to appropriate level for showing all map markers (calculating bounds, then using Google Maps API fitBounds() method)

- (project) ditch the google-map-react library infavor of a better one (potentially https://github.com/tomchentw/react-google-maps)

- (feature) display a list of incidents that can be selected, displaying data on the map and in the details section for the selected incident




Time spent on project:
10hrs
