var loadingIcon = document.querySelector("#loading_icon");
var channelTitle = document.querySelector("#channel_title");

async function getArenaChannelAwait(){
  
  channelTitle.innerHTML = 'loading...'
  loadingIcon.classList.remove("hidden")
  
  var results = await fetch("https://api.are.na/v2/channels/nostalgiaos")
  var res = await results.json()
  
  channelTitle.innerHTML = res.title;
  console.log(res.contents);}

getArenaChannelAwait()