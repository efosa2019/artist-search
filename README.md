

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




Here is how this App works!

1. A user must have a register Spotify account to access the application after successful authentication.

2. Go to the Login page and login with your account

3. Once login, search a name of any artist then click on the search icon to see search suggestions. Note search result limits can be set to 10 or 20 depending on your choice.

4. The return list of 10 or 20 artists should take you to the artist albums with album name, number of tracks, release date and a preview link to listen to a specific album from spotify. Note if an artist from the list does not have an album a message will pop up "This artist doesnt have any albums.

5. After preview and looking at the albums, you can then create a list of your 5 top artists by goin back to the search field  and enter their names on the search field and then click the select button.Note you can delete an artist if you want.

6. Finally, you can easily logout from the app by clicking the logout button on the top right of the app.
