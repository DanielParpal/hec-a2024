$('#generateur').on('click', function() {
	var elementHTML = '<div>';
	elementHTML = elementHTML + '<p>lorem</p>';
	elementHTML = elementHTML + '<p>lorem</p>';
	elementHTML = elementHTML + '</div>';

	var elementHTML2 = '<div>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '<p>lorem</p>' + '</div>';

	var elementHTML3 = '<div>' + '<p>lorem</p>'
						+ '<p>lorem</p>' + '<p>lorem</p>' 
						+ '</div>';
	$("#demo").append(elementHTML3);
});