import React from 'react';
import ReactLoading from 'react-loading';
import docReact from 'doc-react'
import reactLoadingMd from '../doc/reactLoading.md'

const Doc = docReact({ ReactLoading }, reactLoadingMd)

const Add = () => <div><Doc /></div>;

export default Add;
