$(document).ready(function() {

    function getQuote() {
        var quotes=[{
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            name: "Nelson Mandela"
        }, {
            quote: "The way to get started is to quit talking and begin doing.",
            name: "Walt Disney"
        }, {
            quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma –               which is living with the results of other people's thinking.",
            name: "Steve Jobs"
        }, {
            quote: "If life were predictable it would cease to be life, and be without flavor.",
            name: "Eleanor Roosevelt"
        }, {
            quote: "If you look at what you have in life, you\'ll always have more. If you look at what you don't have            in life, you'll never have enough.",
            name: "Oprah Winfrey"
        }, ];

        var sourceLength = quotes.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);

        for (var i=0; i<=sourceLength; i++) {
            var newQuoteText = quotes[randomNumber].quote;
            var newQuoteName = quotes[randomNumber].name;
        }

        var timeAnimation = 500;
        var quoteContainer = $("#quoteContainer");
        quoteContainer.fadeOut(timeAnimation, function() {
            quoteContainer.html('');
            quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteName">' + '-	' + newQuoteName + '</p>');
            quoteContainer.fadeIn(timeAnimation);
        })
    }
    getQuote();

});

function newBG() {
    var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
    var image = images[Math.floor(Math.random() * images.length)];
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
}
window.onload = newBG;

