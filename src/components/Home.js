import React from 'react';
import Tooltip from 'rc-tooltip'
import docReact from 'doc-react'
import 'rc-tooltip/assets/bootstrap_white.css'

import toolipMd from '../doc/tooltip.md'

const Doc = docReact({ Tooltip }, toolipMd)

const Home = () => <div><Doc /></div>;

export default Home;
