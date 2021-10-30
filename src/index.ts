export function numberToText(number: number, level = 0): string {
  const ones = ['یەک', 'دوو', 'سێ', 'چوار', 'پێنج', 'شەش', 'حەوت', 'هەشت', 'نۆ']
  const ten = ['دە', 'یازدە', 'دوازدە', 'سیازدە', 'چواردە', 'پازدە', 'شازدە', 'حەڤدە', 'هەژدە', 'نۆزدە']
  const tens = ['بیست', 'سی', 'چل', 'پەنجا', 'شەست', 'حەفتا', 'هەشتا', 'نەوەد']
  const hundreds = ['سەد', 'دوو سەد', 'سێ سەد', 'چوار سەد', 'پێنج سەد', 'شەش سەد', 'حەوت سەد', 'هەشت سەد', 'نۆ سەد']

  let result = ''

  if (number < 0) {
    number = number * -1
    return 'سالب ' + numberToText(number, level)
  }

  if (number == 0) {
    if (level === 0) {
      return 'سفر'
    } else {
      return ''
    }
  }

  if (level > 0) {
    result += ' و '
    level -= 1
  }

  if (number < 10) {
    result += ones[number - 1]
  } else if (number < 20) {
    result += ten[number - 10]
  } else if (number < 100) {
    result += tens[Math.floor(number / 10) - 2] + numberToText(number % 10, level + 1)
  } else if (number < 1000) {
    result += hundreds[Math.floor(number / 100) - 1] + numberToText(number % 100, level + 1)
  } else if (number < 1000000) {
    result +=
      (number / 1000 < 2 ? '' : numberToText(Math.floor(number / 1000), level)) +
      ' هەزار' +
      numberToText(number % 1000, level + 1)
  } else if (number < 1000000000) {
    result += numberToText(Math.floor(number / 1000000), level) + ' ملیۆن' + numberToText(number % 1000000, level + 1)
  } else if (number < 1000000000000) {
    result +=
      numberToText(Math.floor(number / 1000000000), level) + ' میلیارد' + numberToText(number % 1000000000, level + 1)
  } else if (number < 1000000000000000) {
    result +=
      numberToText(Math.floor(number / 1000000000000), level) +
      ' تریلیۆن' +
      numberToText(number % 1000000000000, level + 1)
  }
  return result
}
