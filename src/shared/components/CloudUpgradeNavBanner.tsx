// Libraries
import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

// Components
import {
  Panel,
  ComponentSize,
  Heading,
  HeadingElement,
  Gradients,
  JustifyContent,
  Icon,
  IconFont,
} from '@influxdata/clockface'
import CloudOnly from 'src/shared/components/cloud/CloudOnly'

// Constants
import {CLOUD_URL, CLOUD_CHECKOUT_PATH} from 'src/shared/constants'
import {isFlagEnabled} from 'src/shared/utils/featureFlag'
import {shouldShowUpgradeButton} from 'src/me/selectors'

const CloudUpgradeNavBanner: FC = () => {
  const showUpgradeButton = useSelector(shouldShowUpgradeButton)
  return (
    <>
      {showUpgradeButton && (
        <CloudOnly>
          <Panel
            gradient={Gradients.HotelBreakfast}
            className="cloud-upgrade-banner"
          >
            <Panel.Header
              size={ComponentSize.ExtraSmall}
              justifyContent={JustifyContent.Center}
            >
              <Heading element={HeadingElement.H5}>
                Need more wiggle room?
              </Heading>
            </Panel.Header>
            <Panel.Footer size={ComponentSize.ExtraSmall}>
              {isFlagEnabled('unityCheckout') ? (
                <Link
                  className="cf-button cf-button-md cf-button-primary cf-button-stretch cloud-upgrade-banner--button upgrade-payg--button__nav"
                  to="/checkout"
                >
                  Upgrade Now
                </Link>
              ) : (
                <a
                  className="cf-button cf-button-md cf-button-primary cf-button-stretch cloud-upgrade-banner--button upgrade-payg--button__nav"
                  href={`${CLOUD_URL}${CLOUD_CHECKOUT_PATH}`}
                  target="_self"
                >
                  Upgrade Now
                </a>
              )}
            </Panel.Footer>
          </Panel>
          {isFlagEnabled('unityCheckout') ? (
            <Link className="cloud-upgrade-banner__collapsed" to="/checkout">
              <Icon glyph={IconFont.CrownSolid} />
              <Heading element={HeadingElement.H5}>Upgrade Now</Heading>
            </Link>
          ) : (
            <a
              className="cloud-upgrade-banner__collapsed"
              href={`${CLOUD_URL}${CLOUD_CHECKOUT_PATH}`}
              target="_self"
            >
              <Icon glyph={IconFont.CrownSolid} />
              <Heading element={HeadingElement.H5}>Upgrade Now</Heading>
            </a>
          )}
        </CloudOnly>
      )}
    </>
  )
}

export default CloudUpgradeNavBanner
