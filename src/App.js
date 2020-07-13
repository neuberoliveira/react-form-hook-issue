import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import NumberMask from 'components/NumberMask'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

const moneyProps = {
  thousandSeparator: ',',
  decimalSeparator: '.',
  prefix: '$ ',
  decimalScale: 2,
  fixedDecimalScale: true,
}

const CadastroDoImovel = ({history, match, setActiveStep, activeStep}) => {
  const {register, handleSubmit, setError, clearErrors, errors, reset} = useForm()
  const [currentProperty] = useState({
    name: 'John Doe',
    amount1: 100,
    amount2: undefined,
  })

  /* useEffect(() => {
    setTimeout(
      () =>
        reset({
          name: 'John Doe',
          amount: 100,
        }),
      1500
    )
  }, []) */

  const handleFormSubmit = () => {
    handleSubmit(processForm)()
  }

  const processForm = async (formData) => {
    console.log('form validated', formData)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Grid container direction="column" alignItems="center" style={{margin: '40px 0'}}>
          <Grid item direction="column" alignItems="center" justify="center">
            <TextField
              label="Name"
              name="name"
              defaultValue={currentProperty.name}
              inputRef={register({required: 'required fied'})}
              error={errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Amount 1"
              name="amount1"
              defaultValue={currentProperty.amount1}
              error={errors.amount1}
              helperText={errors.amount1?.message}
              inputRef={register({required: 'required fied'})}
              onChange={(e) => console.log('TextField onChange', e.target.value)}
              InputProps={{
                inputComponent: NumberMask,
                inputProps: {
                  ...moneyProps,
                },
              }}
            />

            <TextField
              label="Amount 2"
              name="amount2"
              defaultValue={currentProperty.amount2}
              error={errors.amount2}
              helperText={errors.amount2?.message}
              inputRef={register({required: 'required fied'})}
              onChange={(e) => console.log('TextField onChange', e.target.value)}
              onFocus={(e) => console.log('TextField onFocus', e.target.value)}
              InputProps={{
                inputComponent: NumberMask,
                inputProps: {
                  ...moneyProps,
                },
              }}
            />
          </Grid>
          <Grid item style={{marginTop: '20px'}}>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
export default CadastroDoImovel
