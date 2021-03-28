
const modifier = (text) => {
  
  let modifiedText = text
  if (modifiedText.length < 4) { //Sometimes the AI returns short bits of garbage, like orphaned punctuation marks. Ignore these outputs.
    modifiedText = null
  }
  else if (/\nYou:|^You:/.test(modifiedText)) { //Look for any occurence of 'You:' and remove from output.
    modifiedText = modifiedText.split('\n')
    modifiedText.forEach((line,index) => {
      if (line.startsWith('You:')) {
        modifiedText.splice(index)
    }
    })
    modifiedText = modifiedText.join()
  }
  
  // You must return an object with the text property defined. 
  return {text: modifiedText}
}

// Don't modify this part
modifier(text)
