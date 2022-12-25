import React from 'react'
import PropTypes from 'prop-types'

import {Stack , Text} from "@chakra-ui/react"

const SummaryComponent = ({total}) => {
  return (
    <Stack>
        <Text>
            summary {total}
        </Text>
    </Stack>
  )
}


export default SummaryComponent