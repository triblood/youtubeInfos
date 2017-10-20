var idCanal = 'id_do_canal';
var chaveVideo = 'chave';
var lastVideo;
var visualiza;
var nomeVideo;


$.get('https://www.googleapis.com/youtube/v3/search?key='+chaveVideo+'&channelId='+idCanal+'&part=snippet,id&order=date&maxResults=5', function(data) {
	/*optional stuff to do after success */
	// console.log(data);
	lastVideo = data.items[0].id.videoId;

	$.get('https://www.googleapis.com/youtube/v3/videos?id='+lastVideo+'&key='+chaveVideo+'&part=snippet,contentDetails,statistics,status', function(dataVideo) {
		visualiza = dataVideo.items[0].statistics.viewCount;
		nomeVideo = dataVideo.items[0].snippet.localized.title;


		// trocar o body pelo local aonde vai renderizar o script

		if($('.infosVideo').length == 0){
			$('body').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+lastVideo+'" frameborder="0" allowfullscreen></iframe><div class="infosVideo"><span class="hashtag">#videonovo</span><h3 class="titulovideo">'+nomeVideo+'</h3><span class="visualiza">'+visualiza+'</span><a href="https://www.youtube.com/channel/'+idCanal+'">acesse o canal</a></div>');
		}
	});
});

