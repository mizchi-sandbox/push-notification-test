require('babel/polyfill');

window.addEventListener('load', async () => {
  document.getElementById('register')
  .addEventListener('click', async () => {
    Notification.requestPermission(permission => {
      console.log('got permission', permission);
      if(permission == 'denied') alert('Failed');
    });

    const registration = await navigator.serviceWorker.register('sw.js');
    const subscription = await registration.pushManager.subscribe({userVisibleOnly: true});

    console.log('[endpoint]', subscription.endpoint);
  });

  try {
    await navigator.serviceWorker.ready;
  } catch (e) {
  }
});
