(function () {

    let SSWZ = function () {
  
        this.keyScrollHandler = function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                return false;
            }
        }
    };
  
    if (window === top) {
        let sswz = new SSWZ();
        window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });
    }
  
  })();