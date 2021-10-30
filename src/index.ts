export function numberToText(num: number, level = 0): string {
  const ones = ['یەک', 'دوو', 'سێ', 'چوار', 'پێنج', 'شەش', 'حەوت', 'هەشت', 'نۆ']
  const ten = ['دە', 'یازدە', 'دوازدە', 'سیازدە', 'چواردە', 'پازدە', 'شازدە', 'حەڤدە', 'هەژدە', 'نۆزدە']
  const tens = ['بیست', 'سی', 'چل', 'پەنجا', 'شەست', 'حەفتا', 'هەشتا', 'نەوەد']
  const hundreds = ['سەد', 'دوو سەد', 'سێ سەد', 'چوار سەد', 'پێنج سەد', 'شەش سەد', 'حەوت سەد', 'هەشت سەد', 'نۆ سەد']

  let result = ''

  if (num < 0) {
    num = num * -1
    return 'سالب ' + numberToText(num, level)
  }

  if (num === 0) {
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

  if (num < 10) {
    result += ones[num - 1]
  } else if (num < 20) {
    result += ten[num - 10]
  } else if (num < 100) {
    result += tens[Math.floor(num / 10) - 2] + numberToText(num % 10, level + 1)
  } else if (num < 1000) {
    result += hundreds[Math.floor(num / 100) - 1] + numberToText(num % 100, level + 1)
  } else if (num < 1000000) {
    result +=
      (num / 1000 < 2 ? '' : numberToText(Math.floor(num / 1000), level)) +
      ' هەزار' +
      numberToText(num % 1000, level + 1)
  } else if (num < 1000000000) {
    result += numberToText(Math.floor(num / 1000000), level) + ' ملیۆن' + numberToText(num % 1000000, level + 1)
  } else if (num < 1000000000000) {
    result += numberToText(Math.floor(num / 1000000000), level) + ' میلیارد' + numberToText(num % 1000000000, level + 1)
  } else if (num < 1000000000000000) {
    result +=
      numberToText(Math.floor(num / 1000000000000), level) + ' تریلیۆن' + numberToText(num % 1000000000000, level + 1)
  }
  return result
}
