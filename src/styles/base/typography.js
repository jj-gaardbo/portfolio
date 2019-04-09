import { css } from '@emotion/core'

import * as constant from './constants'

export default css`
  body{
    font-family: 'Open Sans', sans-serif;
  }
	
	h1,h2,h3,h4,h5,h6{
	  font-family: 'Pixel', sans-serif;
	}
	
	a{
	  font-family: 'Open Sans', sans-serif;
	}
	
	h1{
	  font-size: ${constant.h1SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h1SizeDesk};
	  }
	}
	
	h2{
	  font-size: ${constant.h2SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h2SizeDesk};
	  }
	}
	
	h3{
	  font-size: ${constant.h3SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h3SizeDesk};
	  }
	}
	
	h4{
	  font-size: ${constant.h4SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h4SizeDesk};
	  }
	}
	
	h5{
	  font-size: ${constant.h5SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h5SizeDesk};
	  }
	}
	
	h6{
	  font-size: ${constant.h6SizeMob};
	  ${constant.md}{
	    font-size: ${constant.h6SizeDesk};
	  }
	}
	
	p,strong,a,li,b,i, ul, ol{
	  font-size: ${constant.textSize};
	}
	
	a{
	  outline: none;
	  text-decoration: none;
	  transition: color .4s;
	  color: ${constant.black};
	  &:hover{
	    color: ${constant.blueGray};
	  }
	}
	
	.nav-menu ul li a{
	  font-size: ${constant.navFontSizeMob};
	  ${constant.md}{
	    font-size: ${constant.navFontSizeDesk};
	  }
	}
	
	ul, ol{
	  padding: 0;
	  list-style-type: none;
	}
`
