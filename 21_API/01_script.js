// https://api.sampleapis.com/beers/ale
const requestURL = 'https://api.sampleapis.com/beers/ale'
const xhr = new XMLHttpRequest()
xhr.open('GET',requestURL);
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        // const data1 = this.responseText;
        // console.log(data1); // string 
        const data2 = JSON.parse(this.responseText);
        console.log(data2[0].name); // object
    }
};
xhr.send();

// XML 

/*
VALUE  STATE             DESCRIPTION
 0     UNSENT            Client has been created open() not called yet
 1     OPENED            open() has been called 
 2     HEADERS_RECEIVED  send() has been called and headers and status are avialable
 3     LOADING           Downloading responseText holds parital data 
 4     DONE              The operation is complete
*/

