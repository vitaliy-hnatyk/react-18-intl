import { injectIntl } from 'react-intl'

function react18Intl ({ children, ...props }) {
    if (typeof children === 'function') {
        return (
            children(props)
        )
    } else {
        return null
    }
}

export default injectIntl(react18Intl)