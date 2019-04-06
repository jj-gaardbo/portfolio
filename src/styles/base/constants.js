export const wrapperMaxWidthDesktop = '1366px'
export const wrapperMaxWidthDesktopSmall = '1200px'
export const wrapperMaxWidthTablet = '992px'
export const wrapperMaxWidthMobile = '576px'
export const padDesktop = '24px'
export const padMobile = '20px'

export const headerHeight = '300px'
export const logoWidth = '230px'
export const burgerBtnWidth = '58px'
export const burgerBtnHeight = '50px'
export const projectBoxSmallWidth = '442px'
export const projectBoxLargeWidth = '904px'
export const projectBoxHeight = '500px'

// Colors
export const babyBlue = '#008cff'
export const babyBlueBright = '#1997ff'
export const blue = '#0062b2'
export const blueGray = '#52738e'
export const darkWhite = '#eff2f4'
export const pink = '#f5bfb3'
export const gray = '#c1abaa'
export const brown = '#b26d00'
export const yellow = '#ff9800'
export const black = '#010101'

export const breakpoints = [576, 768, 992, 1200, 1366]
export const xs = `@media (max-width: ${breakpoints[0]}px)`
export const sm = `@media (min-width: ${breakpoints[0]}px)`
export const md = `@media (min-width: ${breakpoints[1]}px)`
export const lg = `@media (min-width: ${breakpoints[2]}px)`
export const xl = `@media (min-width: ${breakpoints[3]}px)`
export const xxl = `@media (min-width: ${breakpoints[4]}px)`

export const tabletPortrait = `@media screen and (min-device-width: ${breakpoints[0]}px) and (max-device-width: ${breakpoints[1]}px) and (orientation: portrait)`
export const tabletLandscape = `@media screen and (min-device-width: ${breakpoints[1]}px) and (max-device-width: ${breakpoints[2]}px) and (orientation: landscape)`

export const mobilePortrait = `@media screen and (max-device-width: ${breakpoints[0]}px) and (orientation: portrait)`
export const mobileLandscape = `@media screen and (max-device-width: ${breakpoints[0]}px) and (orientation: landscape)`