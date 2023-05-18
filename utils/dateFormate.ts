import dayjs from 'dayjs'

function dateToEnDate(dateStr: string): string{
    let str = ''
    const date = dayjs(dateStr).locale('en')
    const formattedDate = date.format('MMM DD')
    return formattedDate
  }

export { dateToEnDate }