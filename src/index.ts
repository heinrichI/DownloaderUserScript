// import { Buttons } from "./button";
// import { Settings } from "./settings";
// import { h } from "./utils";
import { Main }  from './main';
import { DOMReady}  from './DOMReady';
//export const settings = new Settings()
import { MessageService }  from './MessageService';


DOMReady().then(function () 
{
  console.log('DOMReady');

  const messageService = new MessageService();

  let main = new Main();
  main.Run(messageService)
})

export function app() 
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

//module.exports = app
