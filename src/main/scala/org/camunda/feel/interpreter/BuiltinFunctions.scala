package org.camunda.feel.interpreter

import org.camunda.feel._
import org.joda.time.LocalDate
import org.joda.time.LocalTime

/**
 * @author Philipp
 */
object BuiltinFunctions {
  
	// conversion functions
	
	val builtinFunctions: List[(String, ValFunction)] = List (
		"date" -> dateFunction,
		"date" -> dateFunction3,
		"date_and_time" -> dateTime,	// note that function has whitespaces in spec which will be changed in further version
		"date_and_time" -> dateTime2,
		"time" -> timeFunction,
		"time" -> timeFunction3,
		"time" -> timeFunction4
	)
	
	def dateFunction = ValFunction(List("from"), _ match {
		case List(ValString(from)) => ValDate(from)
		case List(ValDateTime(from)) => ValDate(from.toLocalDate())
		case e => error(e)
	})
	
	def dateFunction3 = ValFunction(List("year", "month", "day"), _ match {
		case List(ValNumber(year), ValNumber(month), ValNumber(day)) => ValDate(new LocalDate(year.intValue(), month.intValue(), day.intValue()))
		case e => error(e)
	})
	
	def dateTime = ValFunction(List("from"), _ match {
		case List(ValString(from)) => ValDateTime(from)
		case e => error(e)
	})
	
	def dateTime2 = ValFunction(List("date", "time"), _ match {
		case List(ValDate(date), ValTime(time)) => ValDateTime(date.toLocalDateTime(time))
		case List(ValDateTime(dateTime), ValTime(time)) => ValDateTime(dateTime.toLocalDate().toLocalDateTime(time))
		case e => error(e)
	})	
	
	def timeFunction = ValFunction(List("from"), _ match {
		case List(ValString(from)) => ValTime(from)
		case List(ValDateTime(from)) => ValTime(from.toLocalTime())
		case e => error(e)
	})
	
	def timeFunction3 = ValFunction(List("hour", "minute", "second"), _ match {
		case List(ValNumber(hour), ValNumber(minute), ValNumber(second)) => ValTime(new LocalTime(hour.intValue(), minute.intValue(), second.intValue()))
		case e => error(e)
	})
	
	def timeFunction4 = ValFunction(List("hour", "minute", "second", "offset"), _ match {
		case List(ValNumber(hour), ValNumber(minute), ValNumber(second), ValDuration(offset)) => ValTime(new LocalTime(hour.intValue() + offset.getHours, minute.intValue() + offset.getMinutes, second.intValue() + offset.getSeconds))
		case e => error(e)
	})
	
	private def error(e:List[Val]) = ValError(s"illegal arguments: $e")
	
}