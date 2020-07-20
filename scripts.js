const activitiesFetch = fetch ('activities.json').then (content => {
  return content.json ();
});

activitiesFetch.then (content => {
  let keyArray = Object.keys (content);
  let activity = keyArray[~~(Math.random () * keyArray.length)];
  let activityDiv = document.createElement ('div');
  activityDiv.id = 'activity';
  activityDiv.innerHTML = activity;
  document.querySelector ('body').appendChild (activityDiv);
});
