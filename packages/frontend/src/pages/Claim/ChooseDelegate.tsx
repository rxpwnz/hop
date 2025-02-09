import Box from '@mui/material/Box'
import ChatIcon from '@mui/icons-material/Chat'
import CircularProgress from '@mui/material/CircularProgress'
import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Button } from '#components/Button/index.js'
import { Delegate } from '#pages/Claim/useClaim.js'
import { DelegateConfirmModal } from '#pages/Claim/DelegateConfirmModal.js'
import { DelegateIcon } from '#pages/Claim/DelegateIcon.js'
import { DelegateInfoModal } from '#pages/Claim/DelegateInfoModal.js'
import { Link } from '#components/Link/index.js'
import { makeStyles } from '@mui/styles'
import { useDelegates } from './useDelegates.js'
import { useThemeMode } from '#theme/ThemeProvider.js'

const useStyles = makeStyles(() => ({
  box: {
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#b7b7b721',
    }
  }
}))

export function ChooseDelegate(props: any) {
  const styles = useStyles()
  const { delegate, selectDelegate, onContinue, inputValue, setInputValue, showConfirmModal, setShowConfirmModal, showInfoModal, setShowInfoModal, handleDelegateConfirm } = props
  const { delegates } = useDelegates()
  const { theme } = useThemeMode()

  function handleSelectDelegate(del: Delegate) {
    if (inputValue) {
      setInputValue('')
    }
    if (del?.address?.toString() === delegate?.address?.toString()) {
      return selectDelegate()
    }
    selectDelegate(del)
  }

  function handleModalClose() {
    setShowConfirmModal(false)
    setShowInfoModal(null)
  }

  return (
    <Box>
      <Box my={3} textAlign="left">
        <Typography variant="body1">
          Select a community member to represent you.
          You can change this at any time.
        </Typography>
        <Box mt={1} textAlign="left">
          <Typography variant="body1">
            Click on the <Box mx={1} display="inline-flex"><ChatIcon style={{ color: theme.palette.secondary.main }} /></Box> icon to read their application.
          </Typography>
        </Box>
      </Box>

      <Box my={4} py={2} display="flex" flexWrap="wrap" justifyContent="space-around" style={{
          borderRadius: '6px'
        }}>
        {!delegates?.length && (
          <Box display="flex" justifyContent="center" alignItems="center" textAlign="center" p={6}>
            <CircularProgress size={24} />
            <Box ml={2}>
              <Typography variant="body1">
                Fetching delegates...
              </Typography>
            </Box>
          </Box>
        )}
        {delegates.map((del: Delegate, i) => {
          const isSelected = (del?.address && delegate?.address) && delegate?.address.toString() !== del?.address.toString()
          return (
            <Box
              key={i}
              my={2}
              mx={1}
              borderRadius={'10px'}
              boxShadow={'0px 4px 25px 10px rgba(255, 255, 255, 0.01)'}
              width={[300, 300]}
              maxWidth={[275, 325]}
              style={isSelected ? {
                background: 'rgba(0, 0, 0, 0) linear-gradient(99.85deg, rgb(179, 46, 255) -18.29%, rgb(242, 164, 152) 109.86%) repeat scroll 0% 0%',
              } : {
                cursor: 'pointer'
              }}
            >
              <Box display="flex" justifyContent="space-between" alignContent="center" className={styles.box} width="100%"
                py={1}
              >
                <Box display="flex" alignItems="center" alignContent="center" justifyContent="space-between" width="100%" onClick={() => handleSelectDelegate(del)}>
                  <Box ml={2} mr={2}>
                    <DelegateIcon delegate={del} />
                  </Box>
                  <Box mt={2} mb={2} display="flex" flexDirection="column" alignContent="flex-start" textAlign="left" width="100%" flex="content" overflow="auto">
                    <Typography variant="subtitle2"
                    title={del.ensName}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '100%',
                      ...(isSelected ? {
                      color: '#fff'
                    } : {})
                    }}
                    >{del.ensName || del.address?.truncate()}</Typography>
                    <Typography title="Votes" variant="body1" color="secondary"
                    style={isSelected ? {
                      color: '#fff'
                    } : {}}
                    >{del.votes == null ? '...' : del.votesFormatted}</Typography>
                  </Box>
                  <Box ml={2} mr={2} fontSize={20} display="flex" justifyContent="center" alignItems="center">
                    {!!del.infoUrl && (
                      <Link
                        target="_blank" rel="noopener noreferrer"
                        title="Read more"
                        style={{
                          color: isSelected ? '#fff' : theme.palette.secondary.main
                        }}
                        onClick={() => {
                          setShowInfoModal(del)
                        }}
                      >
                        <ChatIcon />
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
      <Box display="flex" flexDirection="column">
        <Box mb={4} fontSize={2} textAlign="center">
          <Typography variant="body1">
            You can delegate to someone not listed, or to yourself, by entering an ENS name or Ethereum
            address.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" width="100%">
          <Box display="flex" justifyContent="center" alignContent="center" width="100%">
            <Box ml={'-45px'} mr={2} width="45px">
              {inputValue && delegate && (
                <DelegateIcon delegate={delegate} />
              )}
            </Box>
            <Box display="flex" justifyContent="content" width="100%" maxWidth="480px">
              <TextField
                fullWidth
                value={inputValue}
                placeholder="Enter ENS or address"
                onChange={(event: ChangeEvent<{value: string}>) => setInputValue(event.target.value)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="center" width="100%">
        <Button large highlighted onClick={onContinue} disabled={!delegate?.address}>
          Continue to Review
        </Button>
      </Box>
      {showConfirmModal && (
        <DelegateConfirmModal onSubmit={handleDelegateConfirm} onClose={handleModalClose} />
      )}
      {showInfoModal && (
        <DelegateInfoModal delegate={showInfoModal} onClose={handleModalClose} />
      )}
    </Box>
  )
}
