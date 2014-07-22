var pusher = new Pusher('df17815d522fa3b2366d');

function getResponse(el, endPoint, lastRunContainer) {
	var pushChannel = pusher.subscribe(endPoint)
	pushChannel.bind('status', function (data) {
		if (data.status == "down") {
			el.attr('class', 'large-4 columns text-center bad');
			el.find('[data-role=status]').html('Oh dear');
		}
		else if (data.status == "up") {
			el.attr('class','large-4 columns text-center good');
			el.find('[data-role=status]').html('All good');
		}
		else if (data.status == "running") {
			el.attr('class','large-4 columns text-center running');
			el.find('[data-role=status]').html('...');
		}
		el.find('[data-role=last-run]').html('Last run ' + data.lastRun);
	});
};

$(document).ready(function(){
	$('[data-role=stat-container]').each(function() {
		var endPoint = $(this).attr('data-id');
		var lastRunContainer = $(this).find('[data-role=last-run]').attr('id');
		var el = $(this);
		getResponse(el, endPoint, lastRunContainer);
	});
});