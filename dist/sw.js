const key='arbre-v6';
const assets=['./','./index.html','./app.js?v=illustre-0711','./style.css?v=illustre-0711','./logo.png','./icon-192.png','./icon-512.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(key).then(cache=>cache.addAll(assets)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(name=>name.startsWith('arbre-')&&name!==key).map(name=>caches.delete(name)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 if(event.request.mode==='navigate'&&new URL(event.request.url).origin===self.location.origin){
  event.respondWith(fetch(event.request,{cache:'reload'}).catch(()=>caches.match(new URL('./',self.registration.scope).href)));
 }else if(assets.some(asset=>new URL(asset,self.registration.scope).href===event.request.url)){
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
 }
});
