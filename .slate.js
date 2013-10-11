// order screens left to right so they are easier to reference
slate.config('orderScreensLeftToRight', true);

// Setup screen refs

var macbookMonitor = '0';
var mainMonitor = '1';

// Window Operations
var focusChrome = slate.operation('focus', {'app' : 'Google Chrome'});

// Current Monitor ops

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

var pushMain = slate.operation('throw', { 'screen' : mainMonitor })

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

var macbookLayout = slate.layout('macbook', {
  '_after_' : {'operations' : focusChrome},
  'Adium' : {
    'operations': [pushMainLeftHalf, pushMainRightHalf],
    'ignore-fail': true,
    'title-order': ['Contacts'],
    'repeat-last': true // only repeat
  },
  'iTerm' : {
    'operations': [pushMainFullScreen]
  },
  'Google Chrome' : {
    'operations': [pushMainFullScreen]
  },
  'Textual' : {
    'operations': [pushMainFullScreen]
  },
  'Mail' : {
    'operations': [pushMainFullScreen]
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

// Key Bindings
slate.bind('1:cmd', function(win) {
  win.doOperation(pushMainFullScreen );
});

slate.bind('2:cmd', function(win) {
  win.doOperation(pushMainLeftHalf);
});

slate.bind('3:cmd', function(win) {
  win.doOperation(pushMainRightHalf);
});

slate.bind('1:cmd,shift', function(win) {
  win.doOperation(pushMacbookFullScreen);
});

slate.bind('2:cmd,shift', function(win) {
  win.doOperation(pushMacbookLeftHalf);
});

slate.bind('3:cmd,shift', function(win) {
  win.doOperation(pushMacbookRightHalf);
});

slate.bind('esc:cmd', slate.operation('layout', {
  'name' : 'twoMonitor'
}));

slate.bind('esc:cmd,shift', slate.operation('layout', {
  'name' : 'macbook'
}));

// default the layout so it activates when I plug in my two external monitors.
slate.default(['1440x900','1920x1080'], twoMonitorLayout);

slate.on('screenConfigurationChanged', function() {
  if (slate.screenCount() > 1) {
    slate.operation('layout', {'name': 'macbook'});
  } else {
    slate.operation('layout', {'name': 'twoMonitor'});
  }
});
