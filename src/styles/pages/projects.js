import { css } from '@emotion/core'
import * as constant from '../base/constants'
import globalStyles from '../base/global'

export default css`
  ${globalStyles}
  
  .container{
    grid-template-columns: 1fr;
    grid-column-gap: ${constant.padMobile};
    grid-row-gap: ${constant.padMobile};
  }  
  
  ${constant.md}{
    .container{
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: ${constant.padMobile};
      grid-row-gap: ${constant.padMobile};
    }
  }
    
  ${constant.lg}{
    padding: ${constant.padDesktop} 0;
    
    .container{
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: ${constant.padDesktop};
      grid-row-gap: ${constant.padDesktop};
    
    }
  }

`
