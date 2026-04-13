// 11. asynchronni js, api

const p = document.createElement('p');
const body = document.querySelector('body');

setTimeout(() => {
p.innerHTML = '<br><br> javascript';
p.style.color = 'blue';
body.append(p);
}, 3000);


console.log('TEST');

//api trenink
//countries['CR', 'DE', 'PL'];

countries = [
    ['CR', 'EU'],
    ['DE', 'EU'],
    ['PL', 'EU']
]

console.log(countries[0][0]);

countries_array = [
    {
        countryname: 'CR',
        continent: 'EU'
    },
    {
        countryname: 'DE',
        continent: 'EU'
    },  
    {
        countryname: 'PL',
        continent: 'EU'
    }
]

console.log(countries_array[1].countryname)


//API FINAL
fetch('https://api.kanye.rest/').then((response) => {
    return response.json()
})
.then((data) => {
    const p = document.createElement('p');
    const body = document.querySelector('body');

    p.textContent = data.quote
    p.style.color = 'blue'
    body.style.display = 'flex'
    p.style.justifyContent = 'center'
    body.append(p)
})


const fetchData = (url) => {
fetch(url).then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data[0].capital[0])
    console.log(data[0].population)
})
}

fetchData('https://restcountries.com/v3.1/name/czech')

// alt zápis

const fetchData2 = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data[0].capital[0])
    console.log(data[0].population)
    return data
}

fetchData2('https://restcountries.com/v3.1/name/czech')


const addtowebsite = (content) =>{
    const p = document.createElement('p');
    p.textContent = content;
    section.append(p);
}

const fetchQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.quote;
    addtowebsite(data.quote);
}

fetchQuote('https://api.kanye.rest/');



//fullfill
//pending
//rejected