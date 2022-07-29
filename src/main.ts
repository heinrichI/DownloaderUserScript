//import { SettingsModel } from "./settingsModel";
import { IMessageService } from "./Interfaces";
import { LogMethodDecorator } from "./Decorator/LogMethodDecorator";

export class Main
{
  //   logger.info(time(), info.script_name, info.script_version, info.script_handler)
  //   iframeChannel.init()
  //   audioController.register()
  //   videoController.register()
  //   keyboardController.register()
  //   audioController.setSettingsModel(settingsModel)
  //   audioController.setTooltip(audioTooltip)
  //   audioTooltip.init({ controller: audioController, settings: settingsModel })
  //   videoTooltip.init({ controller: videoController, settings: settingsModel, model: videoModel })
  //settingsModel.init({ view: settingsView })
  //return settingsModel.fetchValues().then(function () {
  //   mediaObserver.observe()
  //i18n.setLang(settingsModel.getValue('vkmd-lang'))
  //return DOMReady()
  //}).then(function () {
  //downloadIcon.addIconStyle()
  //playerObserver.init({ settings: settingsModel })
  // var modal = modalView.create()
  // var props = settingsModel.getSettingsViewProps()
  //  settingsView.create(props, modal.querySelector('.modal-content'))
  //versionController.init()
  //eventEmitter.on('*', eventLogger)
  // }).then(migrateSettings).then(cleanStorage)

    //private _messageService: MessageService;

      //сonstructor(private readonly _messageService: IMessageService)
     //сonstructor(private messageService: MessageService)
     //{
       //this._messageService = messageService;
     //}

    // name: string;
    // toppings: string[] = [];
  
    // constructor(name: string){
    //   this.name = name; 
    // }


    @LogMethodDecorator
    Run(messageService: IMessageService) 
    {
      // Кнопка скачать в верхней части музыки
      let btn_dwnl = document.createElement("div");
      btn_dwnl.textContent = 'Download all doc';
      btn_dwnl.addEventListener("click", async function () 
      {
        console.log("btn_dwnl click");
        // const playlistContainer = window.unsafeWindow.audioPlaylistLayerWrap.querySelector<HTMLDivElement>("._audio_pl")
        // const [_, ownerId, albumId] = (<string>(playlistContainer?.dataset.playlistId)).split("_")
        // const accessHash = <string>playlistContainer?.dataset.accessHash
        // const playlist = window.unsafeWindow.getAudioPlayer().getPlaylist(AudioPlaylist.TYPE_PLAYLIST, +ownerId, +albumId, accessHash, false)
        // playlist.loadAll(async playlist =>
        // {
        //     console.log(playlist._list);
        //     const reloaded = (await Download.reload_playlist(playlist._list));
        //     Queue.add(reloaded, 'idle');
        //     Queue.start()
        // })

        messageService.Show();

        const response = await fetch("https://vk.com/al_wall.php?act=get_wall", {
          method: 'POST',
          body: new URLSearchParams({
            act: 'get_wall',
            al: '1',
            fixed: '',
            offset: '10',
            onlyCache: 'false',
            owner_id: '486758265',
            type: 'own'
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        });

        // If you care about a response:
        if (response.body !== null) 
        {
          // body is ReadableStream<Uint8Array>
          // parse as needed, e.g. reading directly, or
          //const asString = new TextDecoder("utf-8").decode(response.body as BufferSource);
          // and further:
          let responceText: string = await response.text();
          //const asJSON = JSON.parse(responceText);  // implicitly 'any', make sure to verify type on runtime.
          console.log(`response: ${responceText}`);
        }

        var x = window.open();
        if (x != null) 
        {
          //x.document.open().write('<h1>Test</h1>');
          //x.close();

          //var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
          //win.document.body.innerHTML = "HTML";

          const winHtml = `<!DOCTYPE html>
                <html>
                    <head>
                        <title>Window with Blob</title>
                    </head>
                    <body>
                        <h1>Hello from the new window!</h1>
                    </body>
                </html>`;
          x.document.body.innerHTML = winHtml;
        }
      });
      btn_dwnl.className = 'FlatButton FlatButton--primary FlatButton--size-m';
      //let el = (<HTMLDivElement>mutation.addedNodes[0]).querySelector<HTMLDivElement>('.ui_actions_menu._ui_menu')
      let wallTabs = document.querySelector<HTMLElement>('#wall_tabs');
      //wallTabs?.appendChild(btn_dwnl)

      const li = document.createElement("li");
      li.appendChild(btn_dwnl);
      wallTabs?.appendChild(li);

      //btn_dwnl.innerHTML = settings.getText('TEXT_LOAD');
      //if(el) el.prepend(btn_dwnl);

      // new MutationObserver(function (mutations)
      // {
      //     mutations.forEach(function (mutation)
      //     {
      //         if(
      //             mutation.type == "childList" &&
      //             mutation.addedNodes.length == 1 &&
      //             (<HTMLDivElement>mutation.addedNodes[0]).id == "profile_wall"
      //         )
      //         {
      //             // Buttons.albumDownlaod(mutation)
      //             // if(
      //             //     settings.getComponent('telegram')?.enable &&
      //             //     settings.getComponent('telegram')?.prop.channel &&
      //             //     settings.getComponent('telegram')?.prop.token
      //             // ) Buttons.albumTelegram(mutation)                
      //         }
      //         // if(
      //         //     mutation.type == "childList" &&
      //         //     mutation.addedNodes.length == 1 &&
      //         //     (<HTMLDivElement>mutation.addedNodes[0]).className ==
      //         //     "_audio_row__actions audio_row__actions"
      //         // )
      //         // {
      //         //     // Кнопка скачать при навадке на песню
      //         //     if(settings.getComponent('download')?.enable) Buttons.inlineDownload(mutation)

      //         //     // Кнопка Отправить в телеграм канал при навадке на песню
      //         //     if(
      //         //         settings.getComponent('telegram')?.enable &&
      //         //         settings.getComponent('telegram')?.prop.channel &&
      //         //         settings.getComponent('telegram')?.prop.token
      //         //     )
      //         //     Buttons.telegram(mutation)


      //         //     // Кнопка Копировать название при навoдке на песню
      //         //     // РАБОТАЕТ
      //         //     if(settings.getComponent('copy')?.enable) Buttons.copy(mutation)
      //         // }
      //     });
      // }).observe(document.querySelector("body") as Node, {
      //     attributes: false,
      //     characterData: true,
      //     childList: true,
      //     subtree: true,
      //     attributeOldValue: false,
      //     characterDataOldValue: false,
      // });

      // // Выбираем целевой элемент
      // var target = document.getElementById('some-id');

      // // Конфигурация observer (за какими изменениями наблюдать)
      // const config = {
      //     attributes: true,
      //     childList: true,
      //     subtree: true
      // };

      // // Колбэк-функция при срабатывании мутации
      // const callback = function(mutationsList, observer) {
      //     for (let mutation of mutationsList) {
      //         if (mutation.type === 'childList') {
      //             console.log('A child node has been added or removed.');
      //         } else if (mutation.type === 'attributes') {
      //             console.log('The ' + mutation.attributeName + ' attribute was modified.');
      //         }
      //     }
      // };

      // // Создаём экземпляр наблюдателя с указанной функцией колбэка
      // const observer = new MutationObserver(callback);

      // // Начинаем наблюдение за настроенными изменениями целевого элемента
      // observer.observe(target, config);

      // // Позже можно остановить наблюдение
      // observer.disconnect();
  }
}