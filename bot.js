var Discord = require("discord.js"),
    config = require('./config.json'),
    request = require("request"),
    cheerio = require("cheerio");

var bot = new Discord.Client({autoReconnect: true});
var recipeURL = 'http://www.random-recipes.com/index.php?page=index&filter=true';

function getWebContent(url, callback) {
    request({
        uri: url,
    }, function(error, response, body) {
        callback(body);
    });
}

bot.on("message", function(message) {
    if (message.content === config.command) {
        getWebContent(recipeURL, function(data) {
            var $ = cheerio.load(data),
                name = $(".recipe-name-title").text(),
                starsFilled = $('.stars').children('.star-image-pos').length,
                starsEmpty = $('.stars').children('.star-image').length,
                ratings = $('.rating-text').text().replace(' Ratings', ''),
                prepTime = $('.stats-td-right').eq(0).text().trim(),
                cookTime = $('.stats-td-right').eq(1).text().trim(),
                servings = $('.stats-td-right').eq(2).text().trim(),
                linkURL = 'http://www.random-recipes.com/' + $(".recipe-name").attr('href');

            message.channel.sendMessage('What about "' + name + '"? \n' + linkURL + '\n' +
                '⚒ ' + prepTime + ' prep time' + '\n' +
                '  ' + cookTime + ' cook time' + '\n' +
                '  ' + servings + ' servings' + '\n' +
                '★'.repeat(starsFilled) + '☆'.repeat(starsEmpty) + '(' + ratings + ' ratings total)' + '\n');
        });
    }
});

bot.login(config.token);

