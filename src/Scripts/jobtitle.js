// See https://github.com/peopledatalabs/peopledatalabs-js
import PDLJS from 'peopledatalabs';

// Create a client, specifying your API key
const PDLJSClient = new PDLJS({ apiKey: "5275a9f0a2c240c35db272f918127f2a517162c62268f952ee3b4a0e0155c77c" });

// Create a parameters JSON object
const params = {
    "field": "title",
    "text": "soft",
    "size": 5,
    "pretty": true
}

// Pass the parameters object to the Autocomplete API
PDLJSClient.autocomplete(params).then((data) => {
    // Print the API response in JSON format
    console.log(data.data);
}).catch((error) => {
    console.log(error);
});

/*function debounce(func, delay) {
    let timer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    }
  }

  const debouncedFunction = debounce(, 1000);

  debouncedFunction();
  */