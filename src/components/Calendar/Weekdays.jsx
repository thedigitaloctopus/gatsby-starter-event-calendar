import React from 'react'
import { Box, Text } from 'grommet'
import { format, eachDay, startOfWeek, endOfWeek } from 'date-fns'
import CalendarBox from './CalendarBox'

const getWeekdays = () => {
  const now = new Date()
  const weekdays = eachDay(startOfWeek(now), endOfWeek(now)).map(day =>
    format(day, 'dddd'),
  )
  return weekdays
}

const Weekdays = () => {
  const weekdays = getWeekdays()
  return (
    <Box direction="row" wrap>
      {weekdays.map(weekday => (
        <CalendarBox
          border={{ color: 'calendar-border-color' }}
          background="weekdays-background"
          pad="small"
        >
          <Text textAlign="center" color="weekdays-font-color" truncate>
            {weekday}
          </Text>
        </CalendarBox>
      ))}
    </Box>
  )
}

export default Weekdays
