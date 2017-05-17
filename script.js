var euro = prompt('type amount euro','');
var dollar = prompt('type amount dollar','');
var grn_euro = 29.30;
var grn_dollar = 26.41;
var client_euro = euro * grn_euro;
var client_dollar = dollar * grn_dollar;
var ratio = grn_euro/grn_dollar;
alert(euro + ' ' + 'euros are equal' + ' ' + client_euro + ' ' + 'grns,' + ' ' + dollar + 'dollars are equal' + ' ' + client_dollar + ' ' + ', one euro is equal' + ' ' + ratio + 'dollars.');
