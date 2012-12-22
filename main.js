$(document).ready(function() { 
	$('#menu ul li ul .o-nas').css('width', $('#o-nas').width());
	$('#menu ul li ul .dla-rodzicow').css('width', $('#dla-rodzicow').width());
	$('#menu ul li ul .dla-dzieci').css('width', $('#dla-dzieci').width());
	$('#o-nas-sub').css('width', $('#o-nas').width());
	$('#dla-dzieci-sub').css('width', $('#dla-dzieci').width());
	$('#dla-rodzicow-sub').css('width', $('#dla-rodzicow').width());
	
	$('#list-o-nas').mouseover(function() {
		$('#link-o-nas').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-o-nas').css('background-position', '0 0');
	});
	
	$('#link-o-nas').mouseover(function() {
		$('#link-o-nas').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-o-nas').css('background-position', '0 0');
	});
	
	
	$('#list-dla-rodzicow').mouseover(function() {
		$('#link-dla-rodzicow').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-dla-rodzicow').css('background-position', '0 0');
	});
	
	$('#link-dla-rodzicow').mouseover(function() {
		$('#link-dla-rodzicow').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-dla-rodzicow').css('background-position', '0 0');
	});
	
	$('#list-dla-dzieci').mouseover(function() {
		$('#link-dla-dzieci').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-dla-dzieci').css('background-position', '0 0');
	});
	
	$('#link-dla-dzieci').mouseover(function() {
		$('#link-dla-dzieci').css('background-position', '0 -52px');
	}).mouseout(function() {
		$('#link-dla-dzieci').css('background-position', '0 0');
	});

});