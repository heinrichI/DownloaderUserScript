// import { Buttons } from "./button";
// import { Settings } from "./settings";
// import { h } from "./utils";
import { main}  from './main';
import { DOMReady}  from './DOMReady';
//export const settings = new Settings()

    
DOMReady().then(function () 
{
  console.log('DOMReady');
  main.Run()
})

function app() 
{
  console.log(`DownloaderUserScript: ${location.hostname}`);
  //Logger.settingsModel = settingsModel
  // if (window.self === window.top
  //   && (
  //     location.hostname === 'vk.com'
  //     || location.hostname === 'm.vk.com'
  //   )
  // ) 
  // {
    //main.Run()
  // } 
//   else if (window.self !== window.top) {
//     return child()
//   }
  // return Promise.resolve()
}

// app().catch(function (error) {
//   logger.error(time(), 'app error', error)
// })

module.exports = app
