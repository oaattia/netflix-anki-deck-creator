// this used to fetch the subtitle from the page
let subtitle = {
    getSplitted: function(subtitleString) {
        return subtitleString.replace(/[^a-zA-Z ]/g, '').split(' ');
    },
};