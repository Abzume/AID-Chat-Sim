
const modifier = (text) => {
  
  let modifiedText = text
  let rawText = text.split('\n').splice(1,1).join('') //remove the newline from the input
  regex = /^\\/
  if (!state.firstTurn) { //on first turn, allow the prompt to be submitted unaltered
    state.firstTurn = true
  } else if (regex.test(rawText) == false) {  //check if input was escaped. if not, add "You:" to the beginning of the input
    modifiedText = '\nYou: ' + rawText + '\n'
  } else {  //else send the input as is
     modifiedText = '\n' + rawText.replace(regex,'')
  }
  
  // You must return an object with the text property defined. 
  return {text: modifiedText}
}

// Don't modify this part
modifier(text)
