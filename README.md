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