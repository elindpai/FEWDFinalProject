var zip = ['60657', '60601', '60046', '60643', '60010']
var schedule = ['#Chicago', '#Chicago-City', '#Suburb', '#Chicago-South', '#CookCounty']
var slot = [' 4PM-6PM', ' 4PM-6PM', ' 11AM-2PM', ' 3PM-6PM', ' 6PM-9PM']
var district
var date
var day
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday', 'Sunday']
// ['60657'=Chicago, '60601'=Chicago-City, '60046'=Suburb, '60643'=Chciago-South, '60010'=Cook County]

function hide(){
	$('section.OnSubmit').css('display', 'none');
	$('h3.Schedule').find(input).remove(input);
};

//need to figure out how to remove the zip code from the title

function display(){
	if (district == -1){
		alert("Unfortunately, we don't deliver to your area right now. Check out our pick-up locations instead!")
	} else {
		$(schedule[district]).css('display', 'inherit');
		$('h3.Schedule').html('Delivery Schedule for '+input);
	}
};

function nextDelivery(){
	if (district <= 1 || district == 4 || district == 3 && day == 0 || district == 3 && day == 1){
		$('#NextDelivery > li').html(weekday[day+1] +slot[district]);
	} else if (district == 3 && day >= 2){
		$('#NextDelivery >li').html(weekday[0] +slot[district]);
	} else if (district == 2 && day ==0){
		$('#NextDelivery >li').html(weekday[2]);
	} else if (district == 2 &&  1 <= day >= 3){
		$('#NextDelivery >li').html(weekday[4]);
	}else if (district == 2 && day >=3){
		$('#NextDelivery >li').html(weekday[1]);
	}
};


$('.InputField').submit(function (){
	event.preventDefault();
	
	input = $('#newEntry').val();
	hide();
	district = zip.indexOf(input);
	display();
});

$('.InputField').submit(function (){
	date = new Date();
	day = date.getDay();
	nextDelivery();
});
