

Prerequisites
Important: For the application to work, you must have a valid client ID placed in src/config/spotify.json:










{
  "clientId": "Place your client id here"
}
You must also make sure that http://localhost:3000 (or wherever you're running the app from) is placed in its redirect URIs.









Here's how to set it all up:

Make a Spotify account.
Go to the Spotify Developer Dashboard and click on Log In.
Once logged in, click on Create a client ID.
Name it whatever you want, describe it however you want.
Once created and on its page, click on the Edit Settings button.
In the Redirect URIs section, add http://localhost:3000 (or wherever you think is appropriate).
Copy the client ID in src/config/spotify.json.





