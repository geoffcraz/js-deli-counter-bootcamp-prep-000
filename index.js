var katzDeli = []

function takeANumber(katzDeli, name){
    var katzDeliLine = katzDeli.push(name)
    var lineLength = katzDeliLine.length
    return `Welcome, ${name} . You are number ${lineLength} in line.`

}
