// service-worker.js
/*
self.addEventListener('message', (event) => {
  if (event.data.action === 'prompt') {
    self.addEventListener('beforeinstallprompt', (beforeInstallPromptEvent) => {
      beforeInstallPromptEvent.prompt();
    });
  }
});
*/

// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data.action === 'prompt') {
    self.addEventListener('beforeinstallprompt', (beforeInstallPromptEvent) => {
      beforeInstallPromptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User added to home screen');
        } else {
          console.log('User dismissed the add to home screen prompt');
        }
      });
    });
    event.ports[0].postMessage('Handling add to home screen prompt');
  }
});
