// order screens left to right so they are easier to reference
slate.config('orderScreensLeftToRight', true);

// Setup screen refs
var macbookMonitor = '0';
var mainMonitor = '1';

// Window Operations
var focusChrome = slate.operation('focus', {'app' : 'Google Chrome'});

// Current Monitor ops
var fixAllApps = slate.eachApp(function(app) {
  app.eachWindow(function(win) {
    win.doOperation(pushFullScreen);
  });
});

// Main Montior Ops
var pushMainRightHalf = slate.operation('push', {
  'screen': mainMonitor,
  'direction': 'right',
  'style': 'bar-resize:screenSizeX/2'
});


var pushMainLeftHalf = slate.operation('push', {
  'screen': mainMonitor,
  'direction': 'left',
  'style': 'bar-resize:screenSizeX/2'
});

var pushMainFullScreen = slate.operation('throw', {
  'screen': mainMonitor,
  'x' : 'screenOriginX',
  'y' : 'screenOriginY',
  'width' : 'screenSizeX',
  'height' : 'screenSizeY'
});

var pushMain = slate.operation('throw', { 'screen' : mainMonitor });

// Macbook Monitor Ops
var pushMacbookLeftHalf = slate.operation('push', {
  'screen': macbookMonitor,
  'direction': 'left',
  'style': 'bar-resize:screenSizeX/2'
});

var pushMacbookRightHalf = slate.operation('push', {
  'screen': macbookMonitor,
  'direction': 'right',
  'style': 'bar-resize:screenSizeX/2'
});

var pushMacbookFullScreen = slate.operation('throw', {
  'screen': macbookMonitor,
  'x' : 'screenOriginX',
  'y' : 'screenOriginY',
  'width' : 'screenSizeX',
  'height' : 'screenSizeY'
});

var pushMacbook = slate.operation('throw', { 'screen' : macbookMonitor });

var pushFullScreen = slate.operation('move', {
  'x' : 'screenOriginX',
  'y' : 'screenOriginY',
  'width' : 'screenSizeX',
  'height' : 'screenSizeY'
});

var pushLeftHalf = slate.operation('push', {
  'direction': 'left',
  'style': 'bar-resize:screenSizeX/2'
});

var pushRightHalf = slate.operation('push', {
  'direction': 'right',
  'style': 'bar-resize:screenSizeX/2'
});

var macbookLayout = slate.layout('macbook', {
  '_after_'   : { 'operations' : focusChrome },
  'Adium' : {
    'operations'  : [pushMacbookLeftHalf, pushMacbookRightHalf],
    'ignore-fail' : true,
    'title-order' : ['Contacts'],
    'repeat-last' : true // only repeat
  },
  'iTerm' : {
    'operations'  : [pushMacbookFullScreen]
  },
  'Google Chrome' : {
    'operations'  : [pushMacbookFullScreen],
    'ignore-fail' : true,
    'repeat'      : true
  },
  'Textual' : {
    'operations'  : [pushMacbookFullScreen]
  },
  'Mail' : {
    'operations'  : [pushMacbookFullScreen]
  },
  'Spotify' : {
    'operations'  : [pushMacbookFullScreen]
  },
  'Sublime Text 2' : {
    'operations'  : [pushMacbookFullScreen],
    'repeat'      : true
  }
});

// Layouts
var twoMonitorLayout = slate.layout('twoMonitor', {
  '_after_' : {'operations' : focusChrome},
  'Adium' : {
    'operations': [pushMacbookLeftHalf, pushMacbookRightHalf],
    'ignore-fail': true,
    'title-order': ['Contacts'],
    'repeat-last': true // only repeat
  },
  'iTerm' : {
    'operations': [pushMainFullScreen],
    'repeat': true
  },
  'Sublime Text 2' : {
    'operations': [pushMainFullScreen],
    'repeat': true
  },
  'Google Chrome' : {
    'operations' : [function(win) {
      var title = win.title();
      if (title !== undefined && title.match(/^Developer\sTools\s-\s.+$/)) {
        win.doOperation(pushMacbookFullScreen);
      } else {
        win.doOperation(pushMainFullScreen);
      }
    }],
    'ignore-fail': true,
    'repeat': true
  },
  'Textual' : {
    'operations': [function(win) {
      win.doOperation(slate.operation('corner', {
        'screen': macbookMonitor,
        'direction': 'top-right',
        'width': '1280',
        'height': '2*(screenSizeY/3)'
      }));
    }],
    'repeat': true
  },
  'Mail' : {
    'operations': [function(win) {
      win.doOperation(slate.operation('corner', {
        'screen': mainMonitor,
        'direction': 'bottom-right',
        'width': '1440',
        'height': '700'
      }));
    }],
    'repeat' : true
  }
});

// Layout Operations
var oneMonitor = slate.operation('layout', { 'name': macbookLayout });
var twoMonitor = slate.operation('layout', { 'name': twoMonitorLayout });
var universalLayout = function() {
  slate.log('[SLATE] universalLayout');
  if (slate.screenCount() === 1) {
    oneMonitor.run();
  } else {
    twoMonitor.run();
  }
}

slate.bindAll({
  'esc:cmd' : universalLayout,

  // Location Bindings
  '1:cmd'       : pushMainFullScreen,
  '2:cmd'       : pushMainLeftHalf,
  '3:cmd'       : pushMainRightHalf,
  '1:cmd,shift' : pushMacbookFullScreen,
  '2:cmd,shift' : pushMacbookLeftHalf,
  '3:cmd,shift' : pushMacbookRightHalf,
  '9:cmd,shift' : function() {
    if (macbookMonitor === 0) {
      macbookMonitor = 1;
      mainMonitor = 0;
    } else {
      macbookMonitor = 0;
      mainMonitor = 1;
    }
    slate.log("SLATE" + macbookMonitor);
  },

  'esc:ctrl' : slate.operation('grid'),

  // Relaunch and reload config
  'r:ctrl,shift': slate.operation('relaunch')
});

// default the layout so it activates when I plug in my two external monitors.
slate.on('screenConfigurationChanged', function(event) {
  universalLayout();
});

slate.log('[SLATE] Config Loaded');
