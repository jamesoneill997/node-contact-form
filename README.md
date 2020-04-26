# node-contact-form


Simple contact form written with Node.js, HTML and CSS.

To set this up for testing locally, please do the following:

1. Set up a sendgrid account
2. Create an API Key
3. Set the API key as the environment variable `SENDGRID_API_KEY`. This can be done by running `export SENDGRID_API_KEY=YOUR_API_KEY` in the terminal/command line.
4. On line 3 of public/utils/sendEmail.js, add in your email address.
5. Run src/index.js (it'll default to port 3000)
6. Open http://localhost:3000 in the browser and start testing!


I'm open to feature suggestions for this via pull request. I am planning to create a simple tutorial video on how to get this set up, should the demand be present.

