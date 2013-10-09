// Create Operations
var pushRight = slate.operation('push', {
  'direction': 'right',
  'style': 'bar-resize:screenSizeX/2'
});

var pushLeft = slate.operation('push', {
  'direction': 'left',
  'style': 'bar-resize:screenSizeX/2'
});

var fullScreen = slate.operation('move', {
  'x' : 'screenOriginX',
  'y' : 'screenOriginY',
  'width' : 'screenSizeX',
  'height' : 'screenSizeY'
});

slate.bind('1:cmd', function(win) {
  win.doOperation(fullScreen);
});

slate.bind('2:cmd', function(win) {
  win.doOperation(pushRight);
});

slate.bind('3:cmd', function(win) {
  win.doOperation(pushLeft);
});
