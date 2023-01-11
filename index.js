function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 200) {
    return 'This one is on me!';
  } else if (400 < feet && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (2000 < feet && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'; 
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const checkCity = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return checkCity 
}

function switchOnCharmFromTip(generousTip){
  // Write your code here!
  let response;
  switch (generousTip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}