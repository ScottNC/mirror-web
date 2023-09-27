# Mirror Web Climate Action

Using the DevTools on `https://climateaction.unfccc.int/` I found a call to get a list of all 196 countries. I have saved the JSON response to that call in `countries.json`. 

By running the following we can generate a .txt file containing all the GET requests for all thr countries.

```
node countryAPI.js
```

This will create a file called countryCalls.txt which contains all the requests.
