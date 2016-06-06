# bellies-server
Bellies Bangles Server Application

Followed a tutorial "Getting Started with MongoDB on Node.js on OpenShift" at this url: 
https://blog.openshift.com/getting-started-with-mongodb-on-nodejs-on-openshift/

Background:
The bellies-server project has existed for some time before adding it to OpenShift.  
The project is already in a GitHub repository, so the strategy in moving to OpenShift is to:
1) Create a new project on OpenShift
2) This will put my new project into a GitHub repository
3) Clone the project into a temporary folder
4) Merge the cloned project into this existing project
5) Add the existing bellies-server project to this new remote one (git remote add... -- see below)
6) Merge with the remote project (git merge... -- see below)
7) git push openshift HEAD

Getting started:

Creation steps on OpenShift:
1) Created a new NodeJS application
2) Called it belliesserver, as it doesn't allow for dashes in the name


Steps after creation as per the ensuing webpage:
1) Created a folder in ~/projects/javascript/openshift
2) git clone ssh://5754b16c7628e1cf5b00018d@belliesserver-jscottellis64.rhcloud.com/~/git/belliesserver.git/
3) cd belliesserver
4) Clicked link to go to application main page
5) Clicked on link directly on the application main page to add MongoDB 2.4
6) On the next page, clicked on "Add Cartridge"

After a short wait, Mongo has been added and the output looks like this:

MongoDB 2.4 database added.  Please make note of these credentials:

   Root User:     admin
   Root Password: yu5y11J7dhnS
   Database Name: belliesserver

Connection URL: mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/

Environment settings:

To set environment variables, do so like the following:
rhc env-set OPENSHIFT_VAR=some_value

Taking Mongo for a test ride:
1) From the command line, type "rhc ssh belliesserver" 
    1a) there is a way to make belliesserver the default so that I can type "rhc ssh" without specifying belliesserver, but I haven't done that, nor do I know yet how.
2) mongo
3) use belliesserver

Now tables can be added--do any mongo tutorial for example syntax.  For example:
db.books.insert({ title:'MongoDB in the Wild', description: "Tales of NoSQL Adventures"})

Committing changes in the OpenShift project directly (not in the main project that will be merged with it):
    git add .
    git commit -m 'My changes'
    git push






