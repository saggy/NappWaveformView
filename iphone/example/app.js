
// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var NappWaveform = require('dk.napp.waveformview');

// demo file
var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "applause.mp3");

var view = NappWaveform.createView({
	url: file.nativePath, // path to local file
	doesAllowScrubbing: true, // tap to move the progress
	doesAllowStretchAndScroll: true, // enables zoom
	progressColor: "red",
	wavesColor: "yellow",
	width:"300dp",
	height: "150dp"
});


var totalSamples;

view.addEventListener("willLoad", function(e){
	Ti.API.info(e);
});
view.addEventListener("didLoad", function(e){
	Ti.API.info(e);
});
view.addEventListener("willRender", function(e){
	Ti.API.info(e);
});

// didRender - is when the module is done loading and rendering the wave graph 
view.addEventListener("didRender", function(e){
	Ti.API.info(e);
	
	
	// API test - Animate the progress
	setTimeout(function(){
		view.setProgressSamples({
			duration:0.5,
			value:e.totalSamples / 3 //33%
		});
	}, 2500);
	
	
	// store the total samples - once the audio file has been loaded
	totalSamples = view.totalSamples();
});

win.add(view);

// open the app
win.open();