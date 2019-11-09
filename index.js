function scuberGreetingForFeet(distance){
  if (distance > 2500) {
    return 'No can do.';
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(city){
  const response = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default: 
      return 'Bye.';
      break;
  }
}