import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import logger from '#logger/index.js'
import { AmountSelectorCard } from '#components/AmountSelectorCard/index.js'
import { BigNumber, utils } from 'ethers'
import { Button } from '#components/Button/index.js'
import { Slider } from '#components/slider/index.js'
import { Token } from '@hop-protocol/sdk'
import { commafy } from '#utils/index.js'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    marginBottom: '2rem',
  },
  amounts: {
    fontSize: '2rem',
  },
  amountInput: {
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  action: {},
  sendButton: {}
}))

interface Props {
  token: Token
  maxBalance: BigNumber
  onConfirm: (confirmed: boolean, withdrawAmount: BigNumber) => void
}

const WithdrawStake = (props: Props) => {
          //const withdrawAmount = stakeBalance.mul(amountPercent).div(100)
  const { token, maxBalance, onConfirm } = props
  const styles = useStyles()
  const [sending, setSending] = useState<boolean>(false)
  const [withdrawAmount, setWithdrawAmount] = useState<BigNumber>(BigNumber.from(0))
  const [inputValue, setInputValue] = useState<string>('')
  const [amountSliderValue, setAmountSliderValue] = useState<number>(0)
  const tokenDecimals = token.decimals

  const handleSubmit = async () => {
    try {
      setSending(true)
      onConfirm(true, withdrawAmount)
    } catch (err) {
      logger.error(err)
    }
    setSending(false)
  }

  const handleAmountSliderChange = (percent: number) => {
    const _balance = Number(utils.formatUnits(maxBalance, tokenDecimals))
    const _amount = (_balance ?? 0) * (percent / 100)
    setInputValue(_amount.toFixed(5))
    setAmountSliderValue(percent)
    if (percent === 100) {
      setWithdrawAmount(maxBalance)
    } else {
      setWithdrawAmount(utils.parseUnits(_amount.toString(), tokenDecimals))
    }
  }

  const handleAmountChange = (_amount: string) => {
    const value = Number(_amount)
    const _balance = Number(utils.formatUnits(maxBalance, tokenDecimals))
    const sliderValue = 100 / (_balance / value)
    setInputValue(_amount)
    setAmountSliderValue(sliderValue)
    setWithdrawAmount(utils.parseUnits(_amount, tokenDecimals))
  }

  const disabled = amountSliderValue === 0
  const tokenAmount = Number(utils.formatUnits(withdrawAmount, tokenDecimals))
  const formattedAmount = commafy(tokenAmount.toFixed(5), 5)
  const withdrawAndClaim = amountSliderValue === 100

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Typography variant="h5" color="textPrimary">
          Withdraw
        </Typography>
        <Typography variant="body2" color="textPrimary" className={styles.amounts}>
          {formattedAmount} {token.symbol}
        </Typography>
      </div>
      <div>
        <div className={styles.amountInput}>
          <AmountSelectorCard
            label={`${token.symbol} to withdraw`}
            balance={maxBalance}
            balanceLabel={'Available:'}
            value={inputValue}
            token={token as any}
            onChange={handleAmountChange}
            decimalPlaces={5}
          />
        </div>
        <Slider
          defaultValue={0}
          value={amountSliderValue}
          onChange={handleAmountSliderChange} />
      </div>
      <div className={styles.action}>
        <Button
          disabled={disabled}
          className={styles.sendButton}
          onClick={handleSubmit}
          loading={sending}
          large
          highlighted
        >
          {withdrawAndClaim ? 'Withdraw & Claim' : 'Withdraw'}
        </Button>
      </div>
    </div>
  )
}

export default WithdrawStake
