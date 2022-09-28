import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import webPlugin from 'grapesjs-preset-webpage'
import formPlugin from 'grapesjs-plugin-forms'
import basicPlugin from 'grapesjs-blocks-basic'
import ReactText from "./simple-react-text";
import BaseReactComponent from './base-react-component';
import ReactComponents from './react-components';
import MuiComponents from './epos';
import grapejsRulers from 'grapesjs-rulers';
import tabs from 'grapesjs-tabs';
import flexbox from 'grapesjs-blocks-flexbox'

function WebBuilder() {
  useEffect(() => {
  const editor =  grapesjs.init({
      container: '#gjs',
      height: '1024px',
      width: '100%',
      plugins: [basicPlugin,formPlugin, webPlugin, BaseReactComponent, ReactComponents, MuiComponents, grapejsRulers, tabs, flexbox],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices:
        [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile portrait',
            width: '320px',
            widthMedia: '575px',
          },
        ]
      },
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
        },
      }
    })

    editor.BlockManager.add('my-block-id', {
      label: 'ReactText',
      category: 'ePOS',
      components: ReactText,
      activate: true
      // ...
    })

  },[])

 return (
  
   <div id="gjs">
     TESTS
   </div>
  
 );
}
export default WebBuilder;