var katzDeliLine = []

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }   else {
      return `Currently serving ${katzDeliLine.shift()}.`
      }


}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {

var currentIsh = []

    for (i = 0, l = KatzDeliLine.length; i < l; i++){
      return`The line is currently ${katzDeliLine}`

    }
    currentIsh.push(`${i + 1}. ${line[i]}`)
}

return `The line is currently: ${numbersAndNames.join(', ')}`

    }
}
