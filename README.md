# my-leaflet-ionic-map
A clone of calendee (https://github.com/calendee/ionic-leafletjs-map-demo) work with some additional MEAN stack integration.

# Plans
This basic example utilizes a local object created within the app as the list of items. We're going to change this by adding a REST API backend. 
We've loaded 580 locations documents into a MongoDB colleciton. We'll integrate ExpressJS and middleware that will run on port 8200. 

Then we'll modify the angular factory service to iterate over the promise and response data coming from the query of the MongoDB collection.
This will create a very long drop down, so we may make some additonal queries to reduce the size of the dropdown or we'll do an infinte scroll where we pull results into the list 25-50 at a time.

We'll also need to review the angular controllers and locgically split them out into their own files.

Finally, we'll compile the code under the Ionic framework and see if we can make this work as both a mobile app and a desktop site. 

<img src="Screen Shot 2016-03-16 at 10.05.06 AM">
