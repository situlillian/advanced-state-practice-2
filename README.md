
### In CarListing component
* Add a prop type for a prop called “car” which should be an object and required (/)
* replace the hard coded information with the data from the car object in props (/)
* year, make, model, price miles…. etc (/)

### In App.js find `<div className="form-group select">` that has the “Select Year” drop down
* Change the hard coded years to use the data from the allYears array (/)
* map the array to create an array of `<option value=“2001”>2001</option>` (/)
* register onChange for the select element. Make sure to use arrow function with e argument (/)
* on change setState currentYear to the value from the e.target (/)


### In App.js find `<div className="form-group select">` that has the “Select Brand” drop down
* Change the hard coded makes to use the data from the vehicleData array (/)
* map the array to create an array of `<option value=“ACURA”>Acura</option>` (/)
* the text should be the title, the value of the option should be the value property (/)
* register onChange for the select. Make sure to use arrow function with e argument (/)
* on change setState currentMake to e.target.value (/)

### In App component
* In the render method, filter the carsForSale array on the currentYear and currentMake state properties (/)
* If currentYear and currentMake are null or blank then don't filter (/)
* Instead of one hard coded CarListing component, map the the filtered array into a CarListing array (/)
* Provide the CarListing component with a prop called “car” which should be the object from each map loop (/)
* Place the CarListing array where it should go in the html (/)
