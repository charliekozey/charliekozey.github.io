<!-- title: Recurse Center Week 5: Mon Jan 29 -->

listening to:

- Meshell Ndegeocello, *The Omnichord Real Book*

met with alex
  - very into unity
  - going to pair this week: will attempt to build server to control his physics clock remotely

fixed synthia deployment!!
  - vite allows you to configure separate env variables for different environments, which was helpful for debugging my CORS issue locally and for being able to specify a single origin in flask_cors ([vite docs](https://vitejs.dev/guide/env-and-mode#modes)) (the cause of the error—at least the most recent one—was including both a specific URL and a wildcard)
  - many thanks to ko for pairing with me last week and helping me figure it out
  - you can play around with it [here](https://synthia-client.onrender.com/) (beware: bugs abound)

leetcode
  - Palindrome Number (easy)
  - took about 5 mins in python. yay!
  - 63% / 65%
  - not going to bother trying to make it more efficient or to do it without converting to string; prioritizing synthia today
  
transit tech meetup
  - 3 random takeaways:
    - graphana, prometheus
    - null island
    - dynamic time warping to compare two time series
