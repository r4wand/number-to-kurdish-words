export function numberToText(num: number): string {
  const english = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const hundred = 'hundred'
  const thousand = 'thousand'
  const million = 'million'

  if (num < 20) {
    return english[num]
  }

  if (num < 100) {
    return tens[Math.floor(num / 10) - 2] + '-' + english[num % 10]
  }

  if (num < 1000) {
    return english[Math.floor(num / 100)] + ' ' + hundred + ' ' + numberToText(num % 100)
  }

  if (num < 1000000) {
    return numberToText(Math.floor(num / 1000)) + ' ' + thousand + ' ' + numberToText(num % 1000)
  }

  if (num < 1000000000) {
    return numberToText(Math.floor(num / 1000000)) + ' ' + million + ' ' + numberToText(num % 1000000)
  }

  return ''
}

// test cases
console.log(numberToText(0)) // zero
console.log(numberToText(1)) // one
console.log(numberToText(2)) // two
console.log(numberToText(3)) // three
console.log(numberToText(4)) // four
console.log(numberToText(5)) // five
console.log(numberToText(6)) // six
console.log(numberToText(7)) // seven
console.log(numberToText(8)) // eight
console.log(numberToText(9)) // nine
console.log(numberToText(10)) // ten
