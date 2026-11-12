const sections=[
 ['Racines','D’où je viens','Quels lieux, personnes ou événements ont marqué mon histoire ? Je peux noter un souvenir en quelques mots et choisir comment le qualifier aujourd’hui.'],
 ['Sol','Ce qui me nourrit','De quoi ai-je besoin aujourd’hui pour me sentir bien et avancer ? Qu’est-ce qui compte assez pour que je le protège ?'],
 ['Tronc','Mes forces et compétences','Quelle qualité est déjà présente chez moi ? Dans quel moment récent l’ai-je mise en pratique ?'],
 ['Branches','Mes rêves et projets','Si je faisais un peu plus de place à ce qui m’importe, à quoi ressemblerait ma vie ?'],
 ['Feuilles','Mes appuis et mes inspirations','Qui m’a encouragé·e ou me rappelle ce dont je suis capable ? Une personne, un animal, un lieu ou un personnage peuvent trouver leur place ici.'],
 ['Fruits ou fleurs','Les cadeaux reçus et mes réussites','Quel geste, quelle occasion ou quelle réussite ai-je envie de garder en mémoire ? Qu’est-ce que cela m’a apporté ?']
];
const tones={
 happy:{label:'Heureux',color:'#27603b'},
 hard:{label:'Difficile',color:'#a52f3c'},
 neutral:{label:'Mitigé ou non classé',color:'#675d50'}
};
const examples=[
 [['Événements heureux',['Les vacances chez mes grands-parents','Une amitié qui a commencé à l’école','Mon premier concert','Une rencontre qui m’a ouvert une porte','Le jour où j’ai obtenu mon diplôme'],'happy'],
  ['Événements difficiles',['Une séparation dans ma famille','La perte d’un proche ou d’un animal','Une période où je me suis senti·e à l’écart','Un échec qui m’a marqué·e','Une période de maladie ou d’incertitude'],'hard'],
  ['Souvenirs mitigés ou autres repères',['Un déménagement entre excitation et tristesse','Quitter la maison familiale','Les traditions de mon enfance'],'neutral']],
 [['Sécurité et stabilité',['Des repères réguliers','De l’affection','Du réconfort quand ça va mal','Me sentir accepté·e dans un groupe']],
  ['Compétence et autonomie',['Choisir par moi-même','Apprendre à mon rythme','Me sentir capable de faire face']],
  ['Expression de soi',['Dire ce que je ressens','Être entendu·e','Exprimer mon désaccord']],
  ['Cadre et limites',['Pouvoir dire non','Avoir des règles claires','Faire respecter mon espace']],
  ['Plaisir et spontanéité',['Rire et jouer','Faire quelque chose juste pour le plaisir','Avoir du temps libre']]],
 [['Qualités personnelles',['Authentique · Je reste fidèle à moi-même','Curieux·se · J’aime découvrir et apprendre','Persévérant·e · Je continue malgré les obstacles','Flexible · Je sais m’adapter','Réfléchi·e · Je prends le temps de décider']],
  ['Qualités relationnelles',['Empathique · Je comprends ce que l’autre vit','Bienveillant·e · Je prends soin de mes liens','Patient·e · Je laisse du temps aux autres','Coopératif·ve · Je sais travailler en équipe']],
  ['Compétences en action',['Organisé·e · Je prépare les étapes d’un projet','Inventif·ve · Je trouve une autre façon de faire','Communicatif·ve · Je formule clairement une demande','Responsable · Je tiens mes engagements']]],
 [['Liens et quotidien',['Retrouver un ami perdu de vue','Construire des liens où je me sens libre','Me garder une soirée par semaine','Créer une tradition avec mes proches']],
  ['Création et découvertes',['Reprendre la musique','Enregistrer une chanson','Faire un voyage en train en solo','Apprendre une langue','Créer un jardin']],
  ['Travail et engagement',['Découvrir un nouveau métier','Me former à quelque chose qui me plaît','Transmettre un savoir-faire','M’engager dans une association']],
  ['Projets à mon rythme',['Essayer une activité qui m’intimide','Faire une première randonnée accessible','Aménager un coin à moi','Oser présenter une création']]],
 [['Des exemples pour m’inspirer',['Une amie qui m’encourage','Mon chien','Un personnage de roman','Mon ancien professeur','Un lieu où je me sens bien']]],
 [['Des exemples pour m’inspirer',['Une seconde chance','Un geste de confiance','Un projet mené à terme','Une amitié inattendue','Un premier pas difficile']]]
];
const moreExamples=[
 [['Un adulte qui m’a encouragé·e','Un anniversaire dont je garde un beau souvenir','Le jour où je me suis fait un ami'],['Un changement d’école vécu seul·e','Une blessure qui a interrompu une activité','Une période de tensions à la maison'],['Un voyage qui m’a fait voir les choses autrement','Mon arrivée dans une nouvelle ville','Une décision importante dont je garde des sentiments partagés']],
 [['Pouvoir compter sur quelqu’un','Un endroit où je me sens en sécurité'],['Prendre une décision sans demander la permission','Avoir des occasions d’essayer et de progresser'],['Pouvoir demander de l’aide','Parler d’un sujet qui me tient à cœur'],['Savoir ce qu’on attend de moi','Avoir des temps de pause respectés'],['Danser sans me juger','Faire une place à l’imprévu']],
 [['Courageux·se · J’ose poser une question difficile','Intègre · Je tiens compte de mes valeurs quand je décide','Calme · Je prends un temps avant de réagir'],['Respectueux·se · Je laisse l’autre terminer','Ouvert·e d’esprit · Je peux entendre un avis différent','Accessible · Les autres se sentent à l’aise pour me parler'],['Rigoureux·se · Je vérifie les détails importants','Proactif·ve · Je propose une solution avant que la situation se complique','Inventif·ve · Je répare un objet avec ce que j’ai sous la main']],
 [['Partager davantage de repas avec mes proches','Inviter quelqu’un à faire une promenade'],['Écrire un récit de famille','Voir la mer en hiver','Apprendre à photographier la nature'],['Accompagner un jeune qui débute','Créer une activité qui me ressemble'],['Reprendre une pratique sportive qui me plaît','Visiter un musée que je remets toujours à plus tard']],
 [['Une tante qui m’a transmis sa passion','Un camarade qui m’a défendu·e','Un voisin qui prend de mes nouvelles','Une équipe où je me sens à ma place','Un auteur dont les mots m’accompagnent','Le souvenir d’une personne qui croyait en moi','Un endroit où je retrouve du calme']],
 [['Des paroles qui m’ont redonné confiance','Du temps que quelqu’un m’a offert','Une activité que j’ai osé reprendre','Un obstacle que j’ai franchi avec du soutien','Une limite que j’ai réussi à poser','Un savoir-faire qu’on m’a transmis','La première fois que j’ai demandé de l’aide']]
];
examples.forEach((groups,section)=>groups.forEach((group,index)=>group[1].push(...moreExamples[section][index])));
const extraGroups=[
 ['D’autres moments qui m’ont marqué·e',['Le jour où j’ai rejoint une équipe','Une fête improvisée avec mes proches','Un moment où quelqu’un a pris ma défense','Une rupture qui a changé mes habitudes','Une période où j’ai dû recommencer ailleurs','Un retour dans un lieu familier après longtemps']],
 ['Ce qui m’aide dans la vie de tous les jours',['Un rythme de sommeil régulier','Du calme après une journée chargée','Avoir mon mot à dire dans une décision commune','Recevoir des retours précis pour progresser','Pouvoir changer d’avis','Passer du temps dehors']],
 ['Des forces que je peux reconnaître dans mes actes',['Fiable · Je préviens si je ne peux pas tenir un engagement','Observateur·rice · Je remarque ce qui a changé','Déterminé·e · Je découpe un objectif en petites étapes','Réceptif·ve · J’écoute un retour avant de répondre','Juste · Je veille à ce que chacun puisse s’exprimer','Audacieux·se · Je propose une idée même si elle est nouvelle']],
 ['Des rêves petits ou grands',['Apprendre à nager','Préparer un repas avec une personne que j’aime','Adopter un animal quand ce sera possible','Créer un spectacle avec des amis','Retrouver du temps pour lire','Faire un premier séjour seul·e','Apprendre à réparer mon vélo']],
 ['Des appuis auxquels je pense moins souvent',['Une personne qui m’a appris à dire non','Une ancienne collègue qui a reconnu mon travail','Un groupe qui m’a accueilli·e à mon arrivée','Un personnage qui m’aide à me sentir compris·e','Un arbre ou un banc où j’aime revenir','Un animal dont la présence m’apaise']],
 ['Des cadeaux et des réussites du quotidien',['Un message reçu au bon moment','Une invitation qui m’a fait me sentir attendu·e','Un choix que j’ai fait pour moi','Une conversation que j’ai enfin osé avoir','Un moment où j’ai accepté de me reposer','Un jour où j’ai fait une erreur et su la réparer']]
];
extraGroups.forEach((group,index)=>examples[index].push(group));
const newExamples=[
 [['Un nouveau départ que j’attendais',['Une première nuit dans un endroit où je me sentais chez moi','Le jour où un projet collectif a abouti','Un retour qui m’a fait plaisir'],'happy'],['Des moments éprouvants',['Une injustice dont je me souviens','Un changement que je n’avais pas choisi','Un moment où j’ai dû dire au revoir'],'hard'],['Des souvenirs aux couleurs mélangées',['La fin de mes études','Mon premier emploi','Une décision qui m’a à la fois soulagé·e et inquiété·e'],'neutral']],
 [['Des besoins dans mes relations et mes journées',['Avoir une personne à appeler en cas de doute','Savoir quand je pourrai souffler','Faire des choses utiles à mes yeux','Recevoir un signe de reconnaissance','Pouvoir être en désaccord sans craindre de perdre le lien','Avoir un espace à moi','Me sentir libre de demander des explications','Ralentir quand j’en ai besoin']]],
 [['Des talents souvent discrets',['Attentionné·e · Je me souviens de ce qui compte pour quelqu’un','Ingénieux·se · Je fais beaucoup avec peu','Pragmatique · Je trouve un premier pas réalisable','Pédagogue · J’explique une idée avec un exemple','Adaptable · Je réorganise mon planning quand il y a un imprévu','Créatif·ve · J’associe des idées qui semblaient éloignées','Diplomate · J’aide deux personnes à s’entendre','Solidaire · Je propose mon aide quand elle peut être utile']]],
 [['Des projets que j’aimerais essayer',['Planter des fleurs sur un balcon','Apprendre quelques morceaux au piano','Partir en week-end avec un proche','Participer à un projet dans mon quartier','Découvrir un sport avec un ami','Créer un album de souvenirs','Préparer un examen qui m’ouvrirait des portes','Aménager du temps pour une activité bénévole']]],
 [['Des présences qui comptent',['Un grand-parent dont je garde une phrase en mémoire','Un ami avec qui je peux être silencieux·se','Une personne qui m’a accueilli·e sans me connaître','Un enseignant qui a pris mon idée au sérieux','Une équipe avec laquelle je peux rire','Une personne dont j’admire la façon de prendre soin des autres','Une bibliothèque où je me sens à ma place','Le souvenir d’un animal qui me tenait compagnie']]],
 [['Des choses reçues ou accomplies',['Une personne qui m’a donné le droit d’essayer','Un conseil que j’utilise encore','Un repas que quelqu’un m’a préparé','Une journée où j’ai pris soin de moi','La première fois que j’ai parlé devant un groupe','Un projet imparfait que j’ai quand même terminé','Un conflit que j’ai pu apaiser','Un rendez-vous important que j’ai pris pour moi']]]
];
newExamples.forEach((groups,index)=>examples[index].push(...groups));
const latestExamples=[
 [['Des souvenirs qui me réchauffent',['Le jour où j’ai appris à faire du vélo','Une promenade que j’aimais faire avec quelqu’un','La première fois que je me suis senti·e chez moi quelque part'],'happy'],
  ['Des souvenirs que je peux nommer à mon rythme',['Un projet auquel j’ai dû renoncer','Une période où je me suis senti·e incompris·e','Un changement dans ma famille qui m’a bousculé·e'],'hard']],
 [['Des besoins parfois difficiles à nommer',['Recevoir des consignes claires','Pouvoir prendre le temps de réfléchir avant de répondre','Avoir des moments sans sollicitations','Sentir que ma contribution est reconnue','Pouvoir dire que je suis fatigué·e','Retrouver un peu de légèreté']]],
 [['Des capacités que j’utilise déjà',['Méticuleux·se · Je repère une erreur avant de rendre un travail','Encourageant·e · Je remarque les progrès de quelqu’un','Autonome · Je cherche les informations qui me manquent','Inventif·ve · J’imagine un jeu avec ce que j’ai sous la main','Perspicace · Je pose une question qui aide à mieux comprendre','Prévenant·e · J’anticipe un besoin concret chez un proche']]],
 [['Des envies que je pourrais transformer en projets',['Organiser un repas de quartier','Découvrir un sentier près de chez moi','Suivre un atelier de céramique','Faire un court voyage à vélo','Apprendre à cuisiner un plat de mon enfance','Passer une journée par mois à créer']]],
 [['Des appuis que je pourrais inscrire sur une feuille',['Une personne qui a respecté mon silence','Un cousin qui me fait rire quand tout paraît lourd','Une voisine qui m’a donné un coup de main','Un lieu où j’ai osé montrer ce que je fais','Une équipe qui m’a fait confiance','Une personne dont le parcours me donne des idées']]],
 [['De petites réussites qui ont du poids',['Le jour où j’ai dit ce dont j’avais besoin','Une semaine où j’ai mieux respecté mon rythme','Un objet auquel j’ai donné une seconde vie','Une occasion où j’ai pris une décision qui me ressemblait','Une attention reçue quand je ne l’attendais pas','Une difficulté que j’ai pu partager avec quelqu’un']]]
];
latestExamples.forEach((groups,index)=>examples[index].push(...groups));
const colors=['#8b5341','#557443','#245866','#82506c','#3a754f','#a03e57'];
const values=sections.map(()=>[]);
const rootTones=[];
let rootTone="neutral";
const details={name:'',email:'',phone:''};
const strokes=[];
let latestPdfUrl;
const $=selector=>document.querySelector(selector);
const canvas=$('#tree');
const editor=$('#editor');
const logo=$('.top img');
let step=0, editing=-1, pen=false, active=null, draft='';
const safe=value=>value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const titles=['Coordonnées',...sections.map(x=>x[0]),'Mon bilan'];
function button(label,action,cls=''){return '<button type="button" class="'+cls+'" data-action="'+action+'">'+label+'</button>'}
function answerMarkup(value,section,index){
 if(section!==0)return safe(value);
 const tone=tones[rootTones[index]];
 return '<strong style="color:'+tone.color+'">'+safe(value)+'</strong> <small style="color:'+tone.color+'">('+tone.label+')</small>';
}
function render(){
 $('#steps').innerHTML=titles.map((label,i)=>'<button type="button" data-step="'+i+'" '+(i===step?'aria-current="step"':'')+'>'+label+'</button>').join('');
 let body='';
 if(step===0){
  body='<h2 id="stepTitle">Avant de commencer</h2><p>Construisez votre arbre à votre rythme. Vous pouvez écrire un mot, raconter un souvenir ou passer une étape. Les exemples sont là pour vous aider à trouver vos propres mots.</p><p class="prompt">Les coordonnées sont facultatives et figurent dans le PDF si vous les renseignez. Vos réponses restent dans cet onglet pendant l’exercice. Téléchargez votre PDF avant de fermer la page.</p>';
  for(const [key,label,type,auto] of [['name','Prénom et nom','text','name'],['email','Adresse e-mail','email','email'],['phone','Téléphone','tel','tel']]){
   body+='<label for="'+key+'">'+label+'</label><input id="'+key+'" type="'+type+'" maxlength="100" autocomplete="'+auto+'" value="'+safe(details[key])+'">';
  }
 }else if(step===7){
  body='<h2 id="stepTitle">Mon arbre, aujourd’hui</h2><p class="muted">Relisez votre arbre et revenez à une étape pour y apporter une modification. Le PDF contient le dessin et toutes vos réponses.</p>'+sections.map(([label],i)=>'<div class="summary"><strong style="color:'+colors[i]+'">'+label+'</strong><div>'+ (values[i].map((value,index)=>answerMarkup(value,i,index)).join('<br>')||'À compléter si vous le souhaitez')+'</div>'+button('Revoir','review-'+(i+1))+'</div>').join('')+'<p id="exportStatus" role="status"></p>';
 }else{
  const [label,heading,question]=sections[step-1];
  const tonePicker=step===1?'<fieldset><legend>Comment je le vis aujourd’hui</legend>'+Object.entries(tones).map(([key,tone])=>'<label class="tone" style="--tone:'+tone.color+'"><input type="radio" name="tone" value="'+key+'" '+(rootTone===key?'checked':'')+'>'+tone.label+'</label>').join('')+'</fieldset>':'';
  body='<p class="eyebrow">'+step+' / 6 · '+label.toUpperCase()+'</p><h2 id="stepTitle">'+heading+'</h2><p class="prompt">'+question+'</p><form id="entry"><label for="word">Un mot ou une phrase</label><div class="entry"><input id="word" maxlength="160" placeholder="Écrivez ici…" value="'+safe(draft)+'"><button class="primary">'+(editing<0?'Ajouter':'Valider')+'</button></div>'+tonePicker+'</form>';
  body+='<details open><summary>Des exemples pour m’inspirer · '+examples[step-1].reduce((sum,[,items])=>sum+items.length,0)+'</summary>'+examples[step-1].map(([group,items,tone],g)=>'<p class="group">'+group+'</p><div class="chips '+(tone||'')+'">'+items.map((value,i)=>button(safe(value),'example-'+g+'-'+i)).join('')+'</div>').join('')+'</details>';
  body+='<ul class="items">'+values[step-1].map((value,i)=>'<li><span>'+answerMarkup(value,step-1,i)+'</span>'+button('Modifier','edit-'+i)+button('Retirer','remove-'+i)+'</li>').join('')+'</ul>';
 }
 editor.innerHTML=body+'<div class="actions">'+(step?button('Retour','back'):'<span></span>')+(step===7?button('Télécharger le PDF illustré','pdf','primary'):button(step===0?'Commencer':step===6?'Voir mon bilan':'Continuer','next','primary'))+'</div>';
 draw();
 drawLabels();
}
function navigate(index){
 if(step>0&&step<7&&draft.trim())saveDraft();
 step=index; editing=-1; draft='';rootTone='neutral'; render();
 $('#stepTitle').tabIndex=-1;
 $('#stepTitle').focus({preventScroll:true});
}
function saveDraft(){
 const value=draft.trim();
 if(!value)return;
 if(step===1)rootTones[editing<0?values[0].length:editing]=rootTone;
 if(editing<0)values[step-1].push(value);
 else values[step-1][editing]=value;
 editing=-1;draft='';rootTone='neutral';
}
$('#steps').onclick=event=>{const control=event.target.closest('[data-step]');if(control)navigate(Number(control.dataset.step))};
editor.oninput=event=>{
 const field=event.target;
 if(Object.hasOwn(details,field.id))details[field.id]=field.value;
 if(field.id==='word')draft=field.value;
 if(field.name==='tone')rootTone=field.value;
};
editor.onsubmit=event=>{event.preventDefault();if(draft.trim()){saveDraft();render();$('#word').focus()}};
editor.onclick=async event=>{
 const action=event.target.closest('[data-action]')?.dataset.action;
 if(!action)return;
 if(action==='next'||action==='back'){navigate(step+(action==='next'?1:-1));return}
 if(action==='pdf'){
  const status=$('#exportStatus');
  try{const url=await exportPdf();status.textContent='Votre PDF contient '+values.flat().length+' réponse(s). ';const open=document.createElement('a');open.href=url;open.target='_blank';open.rel='noopener';open.textContent='Ouvrir le PDF';status.append(open)}catch{status.textContent='Le PDF n’a pas pu être créé. Réessayez avant de fermer cette page.'}
  return;
 }
 const [kind,number,item]=action.split('-'), i=Number(number);
 if(kind==='review'){navigate(i);return}
 if(kind==='example'){const [,items,tone]=examples[step-1][i];draft=items[Number(item)];if(tone)rootTone=tone;render();$('#word').focus();return}
 if(kind==='edit'){editing=i;draft=values[step-1][i];if(step===1)rootTone=rootTones[i];render();$('#word').focus();return}
 if(kind==='remove'){values[step-1].splice(i,1);if(step===1)rootTones.splice(i,1);if(editing===i){editing=-1;draft=''}else if(editing>i)editing--;render()}
};
function tree(ctx){
 const sky=ctx.createLinearGradient(0,0,0,680);
 sky.addColorStop(0,'#e6eee6');sky.addColorStop(.74,'#faf0dc');sky.addColorStop(1,'#e9d6bb');
 ctx.fillStyle=sky;ctx.fillRect(0,0,720,680);
 ctx.fillStyle='#f7e7bd';ctx.beginPath();ctx.arc(370,228,167,0,Math.PI*2);ctx.fill();
 const path=(d,color,width)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke(new Path2D(d))};
 const fill=(d,color)=>{ctx.fillStyle=color;ctx.fill(new Path2D(d))};
 fill('M0 520 Q140 481 269 508 T520 501 Q625 481 720 506 V680 H0Z','#e4d0b1');
 path('M32 526 Q174 509 266 524 M471 523 Q557 506 688 518','#acaa7c',2);
 const bark=ctx.createLinearGradient(295,0,420,0);
 bark.addColorStop(0,'#4b3c33');bark.addColorStop(.49,'#9c7555');bark.addColorStop(1,'#503c30');
 fill('M231 554 Q304 520 316 469 Q340 409 328 352 Q323 317 310 274 Q348 303 358 329 Q367 288 392 247 Q386 317 386 352 Q373 431 406 491 Q425 526 484 551 Q432 551 392 531 Q385 558 357 579 Q339 552 344 532 Q301 564 231 554Z',bark);
 path('M337 477 Q365 419 344 345 M366 508 Q355 468 369 436 M384 523 Q368 516 361 493','#b58f67',3);
 path('M313 528 Q277 559 212 569 T94 601 M406 523 Q450 557 522 566 T640 600 M360 536 Q360 576 328 610 M276 552 Q239 550 207 547 M453 550 Q491 542 523 545 M330 543 Q311 581 264 591','#765840',5);
 const limbs=[
  ['M350 389 Q309 313 234 286 T92 188',22],
  ['M365 363 Q421 283 493 255 T639 164',20],
  ['M347 332 Q310 262 285 202 T247 109',16],
  ['M368 322 Q396 236 424 192 T472 88',15],
  ['M225 280 Q178 274 121 258 T61 247',9],
  ['M196 262 Q180 214 166 165 T131 120',8],
  ['M287 206 Q265 159 209 151',7],
  ['M427 191 Q399 142 398 105',8],
  ['M491 257 Q548 262 608 237 T674 222',9],
  ['M526 240 Q554 188 548 128',8]
 ];
 for(const [d,width] of limbs){path(d,'#674d3c',width);path(d,'#9d7758',Math.max(1,width*.24))}
 const clusters=[[94,183,52,37],[137,126,49,39],[189,166,53,43],[236,109,57,41],[283,138,58,52],[343,104,56,40],[400,112,60,46],[470,91,59,41],[524,121,64,46],[581,149,62,49],[636,176,50,41],[650,230,48,32],[551,225,68,47],[110,248,65,32],[235,221,54,39],[437,198,62,39],[329,191,51,40]];
 const greens=['#41654e','#52765a','#68855c','#819365','#9da878'];
 for(const [index,[x,y,rx,ry]] of clusters.entries()){
  for(let i=0;i<25;i++){
   const angle=i*2.399+index;
   const radius=Math.sqrt((i+.5)/25);
   ctx.fillStyle=greens[(i+index*3)%greens.length];
   ctx.globalAlpha=.75;
   ctx.beginPath();ctx.ellipse(x+Math.cos(angle)*radius*rx,y+Math.sin(angle)*radius*ry,15+(i%5)*2,8+(i%4)*2,angle,0,Math.PI*2);ctx.fill();
  }
 }
 ctx.globalAlpha=1;
 const foliage=[[140,223],[180,256],[275,173],[298,228],[422,147],[466,221],[579,189],[560,270],[152,296],[575,292],[221,306],[490,266]];
 foliage.forEach(([x,y],i)=>{if(i>=values[4].length)return;ctx.fillStyle='#c7db9d';ctx.beginPath();ctx.ellipse(x,y,24,12,i%2?-.65:.55,0,Math.PI*2);ctx.fill()});
 [[208,335],[291,262],[420,260],[504,305],[543,224],[326,211]].forEach(([x,y],i)=>{if(i>=values[5].length)return;ctx.fillStyle='#b54559';ctx.beginPath();ctx.arc(x,y,11,0,Math.PI*2);ctx.fill()});
 for(const stroke of strokes){
  const first=stroke[0];if(!first)continue;
  ctx.beginPath();ctx.moveTo(...first);
  if(stroke.length===1)ctx.lineTo(first[0]+.1,first[1]);
  else stroke.slice(1).forEach(point=>ctx.lineTo(...point));
  ctx.strokeStyle='#963650';ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();
 }
 const rootSlots=[[214,566],[499,560],[318,583],[559,590],[143,578],[396,577],[262,594],[470,594]];
 rootSlots.forEach(([x,y],index)=>{
  if(index>=rootTones.length)return;
  ctx.fillStyle=tones[rootTones[index]].color;
  ctx.strokeStyle='#fff9ee';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();ctx.stroke();
 });
 const anchors=[[310,625],[490,509],[380,405],[206,280],[500,116],[510,279]];
 anchors.forEach(([x,y],i)=>{
  ctx.fillStyle=values[i].length?colors[i]:'#675d50';
  ctx.strokeStyle='#fff9ee';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(x,y,15,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='bold 16px system-ui';ctx.textAlign='center';
  ctx.fillText(String(i+1),x,y+6);ctx.textAlign='start';
 });
}
function drawLabels(){
 $('#treeLabels').innerHTML=[3,4,5,2,1,0].map(i=>{
  const list=values[i];
  return '<section class="tree-label" style="--branch:'+colors[i]+'"><h3><span>'+(i+1)+'</span> '+sections[i][0]+'</h3>'+
   (list.length?'<ul>'+list.map((value,index)=>'<li>'+answerMarkup(value,i,index)+'</li>').join('')+'</ul>':'')+'</section>';
 }).join('');
}
function draw(){
 tree(canvas.getContext('2d'));
 const total=values.reduce((sum,list)=>sum+list.length,0);
 $('#count').textContent=total+' '+(total===1?'élément':'éléments');
 $('#undo').disabled=!strokes.length;
}
$('#pen').onclick=()=>{
 pen=!pen;
 $('#pen').setAttribute('aria-pressed',pen);
 $('#pen').textContent=pen?'Terminer le dessin':'✎ Dessiner';
 canvas.classList.toggle('drawing',pen);
 $('#hint').textContent=pen?'Tracez avec le doigt, un stylet ou la souris.':'Les numéros relient les réponses à chaque partie de l’arbre.';
};
$('#undo').onclick=()=>{strokes.pop();draw()};
function point(event){const rect=canvas.getBoundingClientRect();return [(event.clientX-rect.left)*720/rect.width,(event.clientY-rect.top)*680/rect.height]}
canvas.onpointerdown=event=>{
 if(!pen||active!==null||event.button!==0)return;
 active=event.pointerId;canvas.setPointerCapture(active);
 strokes.push([point(event)]);draw();
};
canvas.onpointermove=event=>{if(event.pointerId===active&&strokes.length){strokes.at(-1).push(point(event));draw()}};
canvas.onlostpointercapture=()=>{active=null};
async function exportPdf(){
 const pages=[];
 const date=new Intl.DateTimeFormat('fr-FR',{dateStyle:'long'}).format(new Date());
 let page,ctx;
 function start(title){
  page=document.createElement('canvas');page.width=1000;page.height=1414;
  ctx=page.getContext('2d');ctx.fillStyle='#fcfaf5';ctx.fillRect(0,0,1000,1414);
  if(logo.complete&&logo.naturalWidth)ctx.drawImage(logo,66,42,135,84);
  ctx.fillStyle='#963650';ctx.font='bold 20px system-ui';ctx.fillText(date,700,100);
  ctx.fillStyle='#205461';ctx.font='bold 58px Georgia';ctx.fillText(title,66,206);
  ctx.strokeStyle='#dfd3c2';ctx.beginPath();ctx.moveTo(66,232);ctx.lineTo(934,232);ctx.stroke();
  ctx.fillStyle='#50686b';ctx.font='18px system-ui';ctx.fillText('Ombaliz Thérapie · contact@ombaliz.com',66,1350);
  ctx.font='15px system-ui';ctx.fillText('Rapport illustré · '+values.flat().length+' réponse(s)',680,1350);
  ctx.fillText(String(pages.length+1),911,1350);
  pages.push(page);
 }
 function lines(text,width){
  const result=[];let line='';
  for(const char of text){
   if(line&&ctx.measureText(line+char).width>width){
    const split=line.lastIndexOf(' ');
    if(split>0){result.push(line.slice(0,split));line=line.slice(split+1)}
    else{result.push(line);line=''}
   }
   line+=char;
  }
  if(line)result.push(line);
  return result;
 }
 const illustration=document.createElement('canvas');illustration.width=720;illustration.height=680;
 tree(illustration.getContext('2d'));
 const positions=[
  [66,1033,868,270,310,625],
  [690,774,244,229,490,509],
  [690,523,244,229,380,405],
  [66,272,244,229,206,280],
  [690,272,244,229,500,116],
  [66,523,244,480,510,279]
 ];
 const remaining=values.map((list,i)=>list.map((answer,index)=>({
  answer,
  tone:i===0?tones[rootTones[index]]:null
 })));
 function drawCard(i,top,first){
  const [x,relativeY,width,height,anchorX,anchorY]=positions[i];
  const cardY=top+relativeY-272;
  const queue=remaining[i];
  if(!first&&!queue.length)return;
  const color=colors[i];
  ctx.strokeStyle=color;ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(320+anchorX*.5,top+282+anchorY*.5);
  ctx.lineTo(x+width/2,cardY+22);ctx.stroke();
 }
 function writeCard(i,top,first){
  const [x,relativeY,width,height]=positions[i];
  const cardY=top+relativeY-272;
  const queue=remaining[i];
  if(!first&&!queue.length)return;
  ctx.fillStyle='#fffaf1';ctx.beginPath();ctx.roundRect(x,cardY,width,height,12);ctx.fill();
  ctx.fillStyle=colors[i];ctx.fillRect(x,cardY+10,4,height-20);
  ctx.font='bold 22px system-ui';
  ctx.fillText((i+1)+' · '+sections[i][0],x+14,cardY+30,width-28);
  let row=cardY+59;
  ctx.font='20px system-ui';
  if(!queue.length){ctx.fillStyle='#50686b';ctx.fillText('Étape laissée libre',x+14,row);return}
  while(queue.length){
   const entry=queue[0];
   entry.lines??=lines((entry.tone?entry.tone.label+' · ':'')+entry.answer,width-35);
   const available=Math.floor((cardY+height-14-row)/25)+1;
   if(available<1)break;
   ctx.fillStyle=entry.tone?.color??'#183e44';
   const part=entry.lines.splice(0,available);
   if(!entry.started){ctx.fillText('•',x+12,row);entry.started=true}
   else ctx.fillText('↳',x+10,row);
   for(const line of part){ctx.fillText(line,x+29,row);row+=25}
   if(entry.lines.length)break;
   queue.shift();row+=9;
  }
 }
 let first=true;
 do{
  start(first?'Mon arbre de vie':'Mon arbre de vie · suite');
  const top=272;
  if(first){
   ctx.fillStyle='#50686b';ctx.font='16px system-ui';
   const contact=[details.name,details.email,details.phone].filter(Boolean).join(' · ');
   let contactY=254;
   if(contact)for(const line of lines(contact,350)){ctx.fillText(line,326,contactY);contactY+=21}
  }
  ctx.drawImage(illustration,320,top+282,360,340);
  positions.forEach((_,i)=>drawCard(i,top,first));
  positions.forEach((_,i)=>writeCard(i,top,first));
  first=false;
 }while(remaining.some(queue=>queue.length));
 const data=pages.map(p=>Uint8Array.from(atob(p.toDataURL('image/jpeg',.9).split(',')[1]),c=>c.charCodeAt(0)));
 const encoder=new TextEncoder(), chunks=[], offsets=[0];let length=0;
 function add(value){const bytes=typeof value==='string'?encoder.encode(value):value;chunks.push(bytes);length+=bytes.length}
 function object(id,body,bytes){offsets[id]=length;add(id+' 0 obj\n'+body);if(bytes)add(bytes);add((bytes?'\nendstream':'')+'\nendobj\n')}
 add('%PDF-1.4\n');
 object(1,'<< /Type /Catalog /Pages 2 0 R >>');
 object(2,'<< /Type /Pages /Count '+data.length+' /Kids ['+data.map((_,i)=>(3+i*3)+' 0 R').join(' ')+'] >>');
 data.forEach((jpeg,i)=>{
  const id=3+i*3;
  object(id,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im '+(id+1)+' 0 R >> >> /Contents '+(id+2)+' 0 R >>');
  object(id+1,'<< /Type /XObject /Subtype /Image /Width 1000 /Height 1414 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n',jpeg);
  const stream=encoder.encode('q 595 0 0 842 0 0 cm /Im Do Q\n');
  object(id+2,'<< /Length '+stream.length+' >>\nstream\n',stream);
 });
 const xref=length;
 add('xref\n0 '+offsets.length+'\n0000000000 65535 f \n');
 offsets.slice(1).forEach(offset=>add(String(offset).padStart(10,'0')+' 00000 n \n'));
 add('trailer\n<< /Size '+offsets.length+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n');
 if(latestPdfUrl)URL.revokeObjectURL(latestPdfUrl);
 const url=latestPdfUrl=URL.createObjectURL(new Blob(chunks,{type:'application/pdf'}));
 const link=document.createElement('a');link.href=url;link.download='Mon-arbre-de-vie-Ombaliz-rapport-illustre.pdf';
 document.body.append(link);link.click();link.remove();return url;
}
render();
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
