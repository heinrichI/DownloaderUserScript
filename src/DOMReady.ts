var noop = function () { }

export function DOMReady(callback? : any) {
    callback = typeof callback === 'function' ? callback : noop
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      var r = callback()
      return Promise.resolve(r)
    }
    var resolve: any
    var promise = new Promise(function (res) {
      resolve = res
    })
    document.addEventListener('DOMContentLoaded', function () 
    {
      var r = callback()
      resolve(r)
    })
    return promise
  }