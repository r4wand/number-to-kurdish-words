export function numberToText(num: number): string {
  const kurdish = [
    'سفر',
    'یەک',
    'دوو',
    'سێ',
    'چوار',
    'پێنج',
    'شەش',
    'حەوت',
    'هەشت',
    'نۆ',
    'دە',
    'یانزە',
    'دوانزە',
    'سیانزە',
    'چواردە',
    'پانزە',
    'شانزە',
    'حەڤە',
    'هەژدە',
    'نۆزدە',
  ]
  const tens = ['بیست', 'سی', 'چل', 'پەنجا', 'شەست', 'حەفتا', 'هەشتا', 'نەوە']
  const hundred = 'سەد'
  const thousand = 'هەزار'
  const million = 'ملیۆن'

  if (num < 20) {
    return kurdish[num]
  }

  if (num < 100) {
    return tens[Math.floor(num / 10) - 2] + '-' + kurdish[num % 10]
  }

  if (num < 1000) {
    return kurdish[Math.floor(num / 100)] + ' ' + hundred + ' ' + numberToText(num % 100)
  }

  if (num < 1000000) {
    return numberToText(Math.floor(num / 1000)) + ' ' + thousand + ' ' + numberToText(num % 1000)
  }

  if (num < 1000000000) {
    return numberToText(Math.floor(num / 1000000)) + ' ' + million + ' ' + numberToText(num % 1000000)
  }

  return ''
}
