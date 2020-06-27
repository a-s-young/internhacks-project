const axios = require("axios");
const cheerio = require("cheerio");

async function getDailyFact(){
    const base = "http://blackhistorydaily.com/on_this_day/June_28/";
    const infoBase = "http://blackhistorydaily.com/";

    const factInfo = { title: "", info: "" };

    function getLinkAndTitle(){
      const $ = cheerio.load(request.data);
      const title = $("h3").first().text();
      const link = $("h3").first().next().attr()["href"];
      return {link, title};
    }

    function getFactInfo() {
        const $ = cheerio.load(secondRequest.data);
        const fact = $("p").first().text();
        factInfo.info = fact;
        return fact;
    }

    let request = await axios.get('https://cors-anywhere.herokuapp.com/'+base, {headers: {'Access-Control-Allow-Origin': '*'}});

    let secondRequest = await axios.get('https://cors-anywhere.herokuapp.com/'+infoBase+getLinkAndTitle().link, {headers: {'Access-Control-Allow-Origin': '*'}});
    

    factInfo.title = getLinkAndTitle().title;
    factInfo.info = getFactInfo();

    return factInfo; 
}
getDailyFact().then(fact => console.log(fact))

export default getDailyFact;