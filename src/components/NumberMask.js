import React, {useEffect, useState} from 'react'
import NumberFormat from 'react-number-format'

const NumberMask = React.forwardRef((props, ref) => {
  const {inputRef, defaultValue, value, inputProps, onChangeCustom, ...other} = props
  const [curValue, setCurValue] = useState()

  /**
   * @param {{floatValue, formattedValue, value}} values
   */
  const customChangeHandler = (values) => {
    console.log('onValueChange', values)
    setCurValue(values.formattedValue)
    if (onChangeCustom) {
      onChangeCustom(values, props.name)
    }
  }

  const onChageInterceptor = (event) => {
    console.log('onChange', event.target.value)
    setCurValue(event.target.value)
    if (props.onChange) {
      props.onChange(event)
    }
  }

  const onBlurInterceptor = (event) => {
    console.log('onBlur', event.target.value)
    setCurValue(event.target.value)
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  const onFocusInterceptor = (event) => {
    event.target.select()
    if (props.onFocus) {
      props.onFocus(event)
    }
  }

  useEffect(() => {
    setCurValue(defaultValue)
  }, [defaultValue])

  // console.log('mask render')
  return (
    <NumberFormat
      getInputRef={inputRef || ref}
      displayType="input"
      {...other}
      onValueChange={customChangeHandler}
      onChange={onChageInterceptor}
      onBlur={onBlurInterceptor}
      onFocus={onFocusInterceptor}
      value={curValue}
    />
  )
})

export default NumberMask
