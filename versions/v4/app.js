/* Seanapps Pro · prototype (données d’exemple) */
const I = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  boat:'<path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"/><path d="M21 14 10 2 3 14h18Z"/><path d="M10 2v16"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  msg:'<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
  key:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  hist:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/>',
  euro:'<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  chev:'<path d="m9 18 6-6-6-6"/>',
  back:'<path d="m15 18-6-6 6-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  filter:'<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  pulse:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  wifi:'<path d="M5 12.6a10 10 0 0 1 14 0"/><path d="M8.5 16.1a5 5 0 0 1 7 0"/><path d="M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="20" r="1"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  sparkle:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  alert:'<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
};
const ic=(n,s=20,w=1.8)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;

const NEW='<span class="chip c-new">Nouveau</span>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf=(v,d=0)=>Number(v).toLocaleString('fr-FR',{minimumFractionDigits:d,maximumFractionDigits:d});

/* ======================= Métiers ======================= */
const ROLES=[
  {id:'directeur',l:'Directeur',i:'award',d:'Vue d’ensemble de la concession : activité, état du parc, alertes et ventes que les capteurs font apparaître.'},
  {id:'commercial',l:'Commercial',i:'euro',d:'Vos ventes, vos clients, et les ventes que les capteurs repèrent pour vous (batterie usée, bateau mal équipé…).'},
  {id:'technicien',l:'Technicien',i:'pulse',d:'Les alertes capteurs en cours, bateau par bateau, et l’état des boîtiers pour diagnostiquer à distance.'},
  {id:'atelier',l:'Atelier',i:'gear',d:'Les entretiens à prévoir d’après les heures moteur, le planning et la charge de l’atelier.'}
];
const roleOf=id=>ROLES.find(r=>r.id===id);

/* ======================= Données d'exemple ======================= */
const S = {
  role:(()=>{try{return localStorage.getItem('sp-role')||'directeur'}catch(e){return 'directeur'}})(),
  cb:'b2', capOnlyMine:false, q:'', fam:'',
  tasks:[
    {id:'t1',kind:'insp',title:'Faire le « Contrôle à 1 an » de Test Boat',ctx:'Prévu avant le 27/08/2026',late:true,go:'#bateaux',boat:'b3',done:false},
    {id:'t2',kind:'stock',title:'Déclarer 2 bateaux en stock',ctx:'Déclaration de novembre',go:'#stock',done:false},
    {id:'t3',kind:'msg',title:'Répondre à Jean Teste',ctx:'Reçu il y a 3 h. Répondre ?',nudge:true,go:'#messages',done:false},
    {id:'t4',kind:'box',title:'Activer le boîtier de Princess 3',ctx:'Étape 4 sur 5 de la mise en service',go:'#bateaux',boat:'b1',done:false},
    {id:'t5',kind:'client',title:'Relancer Edouard Gatouillat',ctx:'Consentement Insight manquant · Princess 1',go:'#clients',done:true}
  ],
  boats:[
    {id:'b1',name:'Princess 3',owner:'killian hocquet',status:'Mise en service',brand:'P',hin:'FR-BEN3K401G526',order:'CMD-24-0612',steps:[true,true,true,false,false]},
    {id:'b2',name:'Princess 2',owner:'Jean Teste',status:'Vendu',brand:'P',notif:3},
    {id:'b3',name:'Test Boat',owner:'Jane Doe',status:'Vendu',brand:'T',insp:'Contrôle à 1 an en retard'},
    {id:'b4',name:'Fastkiti',owner:'killian hocquet',status:'Vendu',brand:'C'},
    {id:'b5',name:'Virtual Customer Test Boat',owner:'Test A',status:'Mise en service',brand:'K',steps:[true,true,false,false,false]},
    {id:'b6',name:'Princess 1',owner:'Edouard Gatouillat',status:'Vendu',brand:'S',notif:3},
    {id:'b7',name:'Mate (Simulation 22)',owner:'Ronan Leroy',status:'Vendu',brand:'M'}
  ],
  sel:'b1',
  convs:[
    {id:'c1',name:'Jean Teste',boat:'Princess 2',last:'Bonjour, une alerte batterie s’affiche depuis ce matin…',ago:'il y a 3 h',unread:true,msgs:[
      {me:false,t:'Bonjour, une alerte batterie s’affiche depuis ce matin sur l’app. Est-ce que je dois m’inquiéter ?',h:'10:12'}]},
    {id:'c2',name:'Jane Doe',boat:'Test Boat',last:'Vous : Parfait, on vous attend jeudi à 9 h.',ago:'hier',msgs:[
      {me:false,t:'Bonjour, je peux passer pour le contrôle à 1 an la semaine prochaine ?',h:'Hier 16:02'},
      {me:true,t:'Bonjour Jane, oui bien sûr. Jeudi 9 h vous convient ?',h:'Hier 16:40'},
      {me:false,t:'Oui très bien.',h:'Hier 17:05'},
      {me:true,t:'Parfait, on vous attend jeudi à 9 h.',h:'Hier 17:10'}]},
    {id:'c3',name:'Ronan Leroy',boat:'Mate (Simulation 22)',last:'Vous : Le devis est dans vos documents.',ago:'lun.',msgs:[
      {me:false,t:'Vous avez pu préparer le devis pour l’hivernage ?',h:'Lun. 09:20'},
      {me:true,t:'Le devis est dans vos documents.',h:'Lun. 10:35'}]}
  ],
  conv:'c1',
  showOwners:false
};
const sel=()=>S.boats.find(b=>b.id===S.sel);
const boat=id=>S.boats.find(b=>b.id===id);

/* ---------- Séries capteurs : 7 jours, une valeur par heure (mer. 4 0 h → mar. 10 14 h) ---------- */
const DAYS=['mer. 4','jeu. 5','ven. 6','sam. 7','dim. 8','lun. 9','mar. 10'];
const NOWH=6*24+14;
const hourLabel=i=>`${DAYS[Math.floor(i/24)]} · ${i%24} h`;
function rng(seed){return()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
function series(seed,f){const r=rng(seed);const a=[];for(let i=0;i<=NOWH;i++)a.push(f(i,r()));return a}
const sun=i=>Math.max(0,Math.sin(((i%24)-7)/12*Math.PI));
const CUT=NOWH-20; // Princess 2 : prise de quai débranchée lundi 18 h
const SER={
  b2:{batt:series(11,(i,r)=>i<CUT?12.72+.12*sun(i)+(r-.5)*.05:12.62-(i-CUT)*.061+(r-.5)*.03),
      hum:series(12,(i,r)=>64+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.6),
      pres:series(13,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)},
  b3:{batt:series(21,(i,r)=>12.38+.14*sun(i)+(r-.5)*.05),
      hum:series(22,(i,r)=>60+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),
      pres:series(23,(i,r)=>1020-Math.max(0,i-96)*.18+(r-.5)*.5)},
  b4:{batt:series(31,(i,r)=>12.6+.12*sun(i)+(r-.5)*.05).slice(0,NOWH-1),
      hum:series(32,(i,r)=>63+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4).slice(0,NOWH-1),
      pres:series(33,(i,r)=>1018-Math.max(0,i-96)*.18+(r-.5)*.5).slice(0,NOWH-1)},
  b6:{batt:series(41,(i,r)=>12.66+.18*sun(i)+(r-.5)*.05),
      hum:series(42,(i,r)=>69.5+i/NOWH*11+1.6*Math.sin(i/24*2*Math.PI)+(r-.5)*1.2),
      pres:series(43,(i,r)=>1019-Math.max(0,i-96)*.2+(r-.5)*.5)},
  b7:{batt:series(51,(i,r)=>12.74+.1*sun(i)+(r-.5)*.05),
      hum:series(52,(i,r)=>57+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),
      pres:series(53,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)}
};
const last=a=>a[a.length-1];

/* ---------- Valeurs actuelles par bateau (bateaux avec boîtier actif) ---------- */
const V={
  b2:{battS:last(SER.b2.batt),soc:22,soh:88,battM:12.5,quai:false,eh:186,next:250,et:81,op:3.6,cale:false,porte:false,mvt:false,fumee:false,carb:64,cap:400,eau:40,noires:35,hum:last(SER.b2.hum),tc:15,pres:last(SER.b2.pres),gsm:4,hubB:100,sat:9,lastSeen:'il y a 4 min',
      since:{battS:'depuis ce matin 6 h',quai:'depuis lundi 18 h'}},
  b3:{battS:last(SER.b3.batt),soc:71,soh:62,battM:12.6,quai:true,eh:412,next:500,et:83,op:3.4,cale:false,porte:false,mvt:false,carb:30,cap:300,eau:75,noires:10,hum:last(SER.b3.hum),tc:16,pres:last(SER.b3.pres),gsm:3,hubB:96,sat:8,lastSeen:'il y a 6 min',
      since:{battS:'mesuré le 2 nov.'}},
  b4:{battS:last(SER.b4.batt),soc:84,soh:94,battM:12.7,quai:true,eh:98,next:100,et:79,op:3.7,porte:false,carb:55,cap:180,eau:60,hum:last(SER.b4.hum),tc:15,pres:last(SER.b4.pres),gsm:1,hubB:78,sat:5,lastSeen:'il y a 2 h 10',
      since:{gsm:'depuis 12 h 05',eh:'à la dernière sortie, dim. 8'}},
  b6:{battS:last(SER.b6.batt),soc:90,soh:91,battM:12.8,quai:true,sol:45,solE:310,eh:132,next:250,et:80,op:3.8,cale:false,mvt:false,fumee:false,carb:80,cap:500,eau:20,noires:15,hum:last(SER.b6.hum),tc:9,pres:last(SER.b6.pres),gsm:4,hubB:100,sat:10,lastSeen:'il y a 3 min',
      since:{hum:'en hausse depuis mercredi'}},
  b7:{battS:last(SER.b7.batt),soc:93,soh:90,battM:12.8,quai:true,eh:247,next:250,et:82,op:3.5,cale:false,porte:false,carb:45,cap:250,eau:65,noires:5,hum:last(SER.b7.hum),tc:14,pres:last(SER.b7.pres),gsm:4,hubB:100,sat:9,lastSeen:'il y a 5 min',
      since:{eh:'à la dernière sortie, sam. 7'}}
};
const NOBOX={b1:'Boîtier installé, pas encore activé (étape 4 de la mise en service).',b5:'Boîtier pas encore installé.'};
const online=id=>V[id]&&V[id].gsm>1;

/* ---------- Appareils : ce que la concession voit, regroupé par appareil ---------- */
const FAM={
  securite:{t:'Sécurité et surveillance',roles:['technicien','directeur','commercial']},
  batteries:{t:'Batteries et électricité',roles:['technicien','atelier','commercial']},
  moteur:{t:'Moteur et carburant',roles:['atelier','technicien','commercial']},
  reservoirs:{t:'Réservoirs et eau',roles:['atelier','technicien']},
  navigation:{t:'Navigation et position',roles:['technicien']},
  meteo:{t:'Météo et environnement',roles:['technicien','directeur']},
  confort:{t:'Confort et éclairage',roles:['technicien','commercial']},
  boitier:{t:'Le boîtier Seanapps et ses connexions',roles:['technicien']},
  verifier:{t:'À vérifier',roles:['technicien']}
};
const ST_OK=t=>['ok',t];
const DEV=[
  {k:'battS',fam:'batteries',n:'Batterie de service',raw:['Service Battery','State of Charge','State of Health'],ser:'batt',
   what:'La batterie de la vie à bord : lumières, frigo, pompes (dont la pompe de cale).',
   main:v=>nf(v.battS,1)+' V',gauge:v=>v.soc,
   subs:v=>[['Charge',v.soc+' %'],['Santé (usure)',v.soh+' %']],
   st:v=>v.battS<11.8?['crit','Presque vide : la pompe de cale peut s’arrêter']:v.battS<12.2?['warn','Faible']:v.soh<70?['warn','Batterie usée ('+v.soh+' %)']:ST_OK('Bien chargée'),
   why:{directeur:'Première cause d’alerte du parc sur 90 jours.',commercial:'Santé sous 70 % : proposer une batterie neuve.',technicien:'Sous 11,8 V : appeler le client, vérifier le courant de quai.',atelier:'Santé sous 70 % : prévoir le remplacement à la prochaine visite.'}},
  {k:'battM',fam:'batteries',n:'Batterie moteur',raw:['Engine Voltage'],
   what:'La batterie qui démarre le moteur, comme celle d’une voiture.',
   main:v=>nf(v.battM,1)+' V',subs:()=>[],
   st:v=>v.battM<12.2?['warn','Risque de ne pas démarrer']:ST_OK('Démarrage assuré'),
   why:{technicien:'Sous 12,2 V, le moteur risque de ne pas démarrer.',atelier:'À tester avant chaque remise à l’eau.'}},
  {k:'quai',fam:'batteries',n:'Prise de quai',raw:['Shore Power','Shore power 1 voltage','Shore power 1 frequency'],
   what:'Le bateau est-il branché à la borne électrique du ponton ?',
   main:v=>v.quai?'Branché':'Débranché',
   subs:v=>[['Tension',v.quai?'229 V':'0 V'],['Fréquence',v.quai?'50 Hz':'—']],
   st:v=>v.quai?ST_OK('Courant du port reçu'):['warn','Courant du port coupé : les batteries se vident'],
   why:{technicien:'Coupure : prévenir la capitainerie ou le client.',directeur:'Une coupure non vue, c’est un client mécontent.',commercial:'Argument de vente du capteur de prise de quai.'}},
  {k:'sol',fam:'batteries',n:'Panneaux solaires',raw:['Solar Power','Solar Energy'],
   what:'Ce que produisent les panneaux en ce moment, et sur la journée.',
   main:v=>v.sol+' W',subs:v=>[['Énergie du jour',nf(v.solE)+' Wh']],
   st:()=>ST_OK('Produit normalement'),why:{technicien:'Production nulle en plein jour : régulateur à vérifier.'}},
  {k:'eh',fam:'moteur',n:'Moteur',raw:['Engine Hours','Engine Temperature','Oil Pressure'],
   what:'Le compteur d’heures dit quand faire la révision, comme le kilométrage d’une voiture.',
   main:v=>nf(v.eh)+' h',gauge:v=>Math.min(100,v.eh/v.next*100),
   subs:v=>[['Prochaine révision',nf(v.next)+' h'],['Température (dernière sortie)',v.et+' °C'],['Pression d’huile',nf(v.op,1)+' bar']],
   st:v=>v.next-v.eh<=10?['warn','Révision dans '+(v.next-v.eh)+' h']:ST_OK('Révision dans '+(v.next-v.eh)+' h'),
   why:{atelier:'Moins de 10 h avant la révision : planifier un créneau.',commercial:'Révision proche : proposer un contrat d’entretien.',technicien:'Surchauffe ou chute d’huile : alerte immédiate.',directeur:'Les révisions viennent d’ici : c’est du travail pour l’atelier.'}},
  {k:'carb',fam:'moteur',n:'Carburant',raw:['Fuel Level'],
   what:'La jauge du réservoir de carburant.',
   main:v=>v.carb+' %',gauge:v=>v.carb,subs:v=>[['Environ',nf(v.carb*v.cap/100)+' L sur '+v.cap+' L']],
   st:v=>v.carb<15?['warn','Réservoir presque vide']:ST_OK('Niveau correct'),
   why:{atelier:'Pour l’hivernage, un réservoir plein limite la condensation.'}},
  {k:'cale',fam:'securite',n:'Eau dans la cale',raw:['Bilge sensor'],
   what:'Détecte l’eau qui s’accumule au fond du bateau, sous le plancher.',
   main:v=>v.cale?'Eau détectée':'Sec',subs:()=>[],
   st:v=>v.cale?['crit','Possible voie d’eau']:ST_OK('Rien à signaler'),
   why:{technicien:'Alerte : intervenir le jour même.',directeur:'Le capteur le plus important pour le propriétaire.',commercial:'Pas installé ? C’est la première vente à proposer.'}},
  {k:'porte',fam:'securite',n:'Porte de cabine',raw:['Door','Capteur de porte - Signal strength'],
   what:'Un aimant sur la porte : il signale toute ouverture.',
   main:v=>v.porte?'Ouverte':'Fermée',subs:()=>[['Pile','80 %'],['Signal Bluetooth','−62 dBm, bon']],
   st:v=>v.porte?['warn','Ouverte bateau vide']:ST_OK('Fermée'),
   why:{technicien:'Ouverture bateau vide : intrusion possible.',commercial:'Se vend avec le détecteur de mouvement.'}},
  {k:'mvt',fam:'securite',n:'Détecteur de mouvement',raw:['Motion Sensor'],
   what:'Détecte une présence dans la cabine, comme une alarme de maison.',
   main:v=>v.mvt?'Mouvement':'Aucun mouvement',subs:()=>[],
   st:v=>v.mvt?['crit','Présence à bord']:ST_OK('Rien à signaler'),why:{technicien:'Présence à bord bateau vide : prévenir le client.'}},
  {k:'fumee',fam:'securite',n:'Détecteur de fumée',raw:['Smoke Detector'],
   what:'Comme le détecteur de fumée d’une maison.',
   main:v=>v.fumee?'Fumée':'Pas de fumée',subs:()=>[],
   st:v=>v.fumee?['crit','Alerte incendie']:ST_OK('Rien à signaler'),why:{technicien:'Alerte incendie : appeler le port immédiatement.'}},
  {k:'eau',fam:'reservoirs',n:'Eau douce',raw:['Fresh Water Level'],
   what:'L’eau propre pour l’évier et la douche.',
   main:v=>v.eau+' %',gauge:v=>v.eau,subs:()=>[],
   st:()=>ST_OK('Niveau correct'),why:{atelier:'À vidanger avant l’hivernage (gel).'}},
  {k:'noires',fam:'reservoirs',n:'Eaux noires (toilettes)',raw:['Black water Level'],
   what:'Le réservoir des toilettes, à vider au port.',
   main:v=>v.noires+' %',gauge:v=>v.noires,subs:()=>[],
   st:v=>v.noires>80?['warn','Presque plein']:ST_OK('Niveau correct'),why:{atelier:'À vider avant la sortie de l’eau.'}},
  {k:'hum',fam:'meteo',n:'Humidité cabine',raw:['Humidity','Temperature'],ser:'hum',
   what:'Trop d’humidité fait apparaître de la moisissure, surtout l’hiver.',
   main:v=>nf(v.hum)+' %',gauge:v=>v.hum,subs:v=>[['Température cabine',v.tc+' °C']],
   st:v=>v.hum>75?['warn','Trop humide : risque de moisissure']:ST_OK('Air sain'),
   why:{technicien:'Au-dessus de 75 % : aérer ou installer un déshumidificateur.',commercial:'Humidité haute : proposer déshumidificateur ou hivernage.',directeur:'Signal utile pour vendre les hivernages.'}},
  {k:'pres',fam:'meteo',n:'Pression atmosphérique',raw:['Atmospheric Pressure'],ser:'pres',
   what:'Comme un baromètre : si elle baisse vite, le mauvais temps arrive.',
   main:v=>nf(v.pres)+' hPa',subs:()=>[['Sur 24 h','en baisse de 5 hPa']],
   st:()=>ST_OK('Vent annoncé, rien d’urgent'),why:{technicien:'Baisse rapide : vérifier les amarres des bateaux au port.',directeur:'Coup de vent annoncé : prévenir l’équipe du port.'}},
  {k:'gsm',fam:'boitier',n:'Boîtier Seanapps',raw:['GSM Signal strength','Hub Battery','GPS Satellites'],
   what:'Le boîtier envoie les valeurs par le réseau mobile. Sans réseau, plus de nouvelles.',
   main:v=>v.gsm+' / 5 barres',subs:v=>[['Dernier envoi',v.lastSeen],['Batterie du boîtier',v.hubB+' %'],['Satellites GPS',v.sat]],
   st:v=>v.gsm<=1?['warn','Réseau faible : données en retard']:ST_OK('Données à jour'),
   why:{technicien:'Données en retard : vérifier l’antenne ou l’emplacement au port.',directeur:'Un boîtier hors ligne ne protège plus le bateau.'}}
];
function devicesOf(id){const v=V[id];if(!v)return[];return DEV.filter(d=>v[d.k]!==undefined).map(d=>({...d,s:d.st(v)}))}
function alerts(){
  const out=[];
  S.boats.forEach(b=>{devicesOf(b.id).forEach(d=>{if(d.s[0]!=='ok')out.push({b,d,sev:d.s[0],txt:d.s[1],val:d.main(V[b.id]),since:(V[b.id].since||{})[d.k]||''})})});
  return out.sort((a,b)=>(a.sev==='crit'?0:1)-(b.sev==='crit'?0:1));
}
function boatState(id){if(!V[id])return'off';const s=devicesOf(id).map(d=>d.s[0]);return s.includes('crit')?'crit':s.includes('warn')?'warn':'ok'}

/* ---------- Les 169 capteurs de la liste ---------- */
const SENSORS=[["AC Input Voltage", "voltage_volts", "batteries", "Tension du courant de quai", "La tension qui arrive de la borne du port, normalement environ 230 V comme une prise de maison."], ["AC Output Voltage", "voltage_volts", "batteries", "Convertisseur (onduleur)", "Le convertisseur transforme le 12 V des batteries en 230 V pour les prises à bord. On voit s'il marche et quelle tension il donne."], ["Actual Temperature", "temperature_kelvin", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Aft Door", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["Air cond", "boolean_connected", "confort", "Climatisation", "Indique si la climatisation est branchée ou allumée."], ["Air pressure", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Alarme de incêndio ou inundação", "boolean_activated", "securite", "Alarme incendie ou inondation", "Une alarme qui se déclenche en cas de feu ou d'inondation (nom en portugais). La liste précise : valeur 0 ou 1."], ["Alternator Potential", "voltage_volts", "batteries", "Alternateur", "L'alternateur recharge les batteries quand le moteur tourne, comme une dynamo de vélo. On mesure la tension qu'il produit."], ["Altitude", "length_meters", "navigation", "Altitude", "L'altitude donnée par le GPS. Sur un bateau, elle reste proche de 0 m. La liste note d'ailleurs qu'il faudrait relier les valeurs qui viennent du même capteur."], ["Atmospheric Pressure", "pressure_hpa", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["AWA", "angle_radians", "meteo", "Vent apparent", "Le vent ressenti sur le bateau quand il avance : son angle (AWA) et sa vitesse (AWS). C'est comme le vent qu'on sent à vélo."], ["AWS", "speed_mps", "meteo", "Vent apparent", "Le vent ressenti sur le bateau quand il avance : son angle (AWA) et sa vitesse (AWS). C'est comme le vent qu'on sent à vélo."], ["Battery Board Current", "current_ampere", "batteries", "Courant électrique", "La quantité d'électricité qui entre ou sort de la batterie, en ampères. Positif = elle se recharge, négatif = elle se vide."], ["Battery board state of charge", "relative_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["Battery Board Temperature", "temperature_kelvin", "batteries", "Température des batteries", "Une batterie trop chaude s'abîme et peut devenir dangereuse."], ["Battery Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Bewegungsmelder", "boolean_activated", "securite", "Détecteur de mouvement", "Détecte une présence dans la cabine, comme une alarme de maison. « Bewegungsmelder » est le même capteur en allemand."], ["Bilge sensor", "boolean_activated", "securite", "Eau dans la cale", "La cale est le fond du bateau, sous le plancher. Ce capteur détecte si de l'eau s'y accumule."], ["Black water Level", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Board and Engine Voltage", "voltage_volts", "batteries", "Batterie moteur", "La batterie qui sert à démarrer le moteur, comme celle d'une voiture."], ["Bränslenivå (styrbord)", "relative_percentage", "moteur", "Niveau de carburant", "La jauge du réservoir d'essence ou de gasoil. « Bränslenivå (styrbord) » veut dire niveau de carburant tribord, en suédois (côté droit)."], ["Cabin Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Capacity", "capacity_liters", "reservoirs", "Taille du réservoir", "La contenance totale d'un réservoir, en litres. Sert à transformer un pourcentage en litres."], ["Capteur de porte - Signal strength", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["COG", "angle_radians", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["COG Reference", "unknown", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["COI/O1 Toilet flush", "unknown", "reservoirs", "Chasse d'eau", "Indique quand on tire la chasse des toilettes."], ["Concentration Dioxyde d'azote (NO2)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration Dioxyde de souffre (SO2)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration Monoxyde de carbone (CO)", "pressure_mbar", "meteo", "Monoxyde de carbone (CO)", "Un gaz invisible et sans odeur, rejeté par les moteurs et les chauffages. Il est mortel en cabine fermée."], ["Concentration Ozone (O3)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration particules < 10µm (PM10)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Concentration particules < 1µm (PM1)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Concentration particules < 2,5µm (PM2,5)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Courtesy Lights Blue", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Courtesy Lights White", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Ctrl1/O1 Roof open", "unknown", "securite", "Toit ouvert", "Indique si le toit ouvrant (hard-top) est ouvert."], ["Current", "current_ampere", "batteries", "Courant électrique", "La quantité d'électricité qui entre ou sort de la batterie, en ampères. Positif = elle se recharge, négatif = elle se vide."], ["Day Cruise", "unknown", "navigation", "Mode jour / mode nuit", "Des réglages tout prêts qui allument les bons équipements (lumières, instruments) pour naviguer de jour ou de nuit."], ["DC Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Destination Latitude", "angle_latitude_degrees", "navigation", "Destination", "Les coordonnées GPS du point où le bateau veut aller."], ["Destination Longitude", "angle_longitude_degrees", "navigation", "Destination", "Les coordonnées GPS du point où le bateau veut aller."], ["Direction Order", "unknown", "navigation", "Consigne du pilote automatique", "La direction demandée au pilote automatique, qui tient la barre tout seul."], ["Données environnementales station uRADMonitor Temperature", "temperature_kelvin", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Door", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["Energy", "watt_hours", "batteries", "Énergie consommée ou produite", "La quantité totale d'électricité, en wattheures, comme le compteur électrique d'une maison."], ["Engine Alert Port Engine 3 1", "unknown", "moteur", "Alertes moteur", "Des codes d'alerte envoyés directement par le moteur bâbord (côté gauche)."], ["Engine Alert Port Engine 3 2", "unknown", "moteur", "Alertes moteur", "Des codes d'alerte envoyés directement par le moteur bâbord (côté gauche)."], ["Engine Boost Pressure", "pressure_hpa", "moteur", "Pression du turbo", "Le turbo souffle de l'air dans le moteur pour lui donner plus de puissance. On mesure la force de ce souffle."], ["Engine hours", "time_seconds", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["Engine Hours", "time_hours", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["Engine Room Fan", "unknown", "moteur", "Ventilation salle moteur", "Le ventilateur qui évacue la chaleur et les vapeurs d'essence de la salle moteur."], ["Engine Speed", "angular_velocity_rpm", "moteur", "Régime moteur", "La vitesse de rotation du moteur, en tours par minute, comme le compte-tours d'une voiture."], ["Engine Temperature", "temperature_kelvin", "moteur", "Température moteur", "Si le moteur chauffe trop, il peut casser."], ["Engine Tilt/Trim", "relative_percentage", "moteur", "Inclinaison du moteur (trim)", "Sur un moteur hors-bord, l'angle du moteur vers le haut ou vers le bas. Il change la façon dont le bateau avance."], ["Engine Voltage", "voltage_volts", "batteries", "Batterie moteur", "La batterie qui sert à démarrer le moteur, comme celle d'une voiture."], ["Equalization Time Remaining", "time_seconds", "batteries", "Charge d'entretien", "Temps restant d'une charge spéciale qui « rééquilibre » la batterie pour la garder en forme."], ["Freezer", "temperature_celsius", "confort", "Congélateur", "La température du congélateur."], ["Frequency", "frequency_hz", "batteries", "Fréquence du courant", "Le rythme du courant alternatif, normalement 50 Hz en Europe. S'il varie, il y a un souci électrique."], ["Fresh Water Level", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Fresh Water Pump", "unknown", "reservoirs", "Pompe à eau douce", "La pompe qui envoie l'eau aux robinets."], ["Fuel Level", "relative_percentage", "moteur", "Niveau de carburant", "La jauge du réservoir d'essence ou de gasoil. « Bränslenivå (styrbord) » veut dire niveau de carburant tribord, en suédois (côté droit)."], ["Fuel Pressure", "unknown", "moteur", "Pression du carburant", "La pression avec laquelle le carburant arrive au moteur. Si elle baisse, un filtre est peut-être bouché."], ["Fuel Rate", "rate_liters_per_hour", "moteur", "Consommation de carburant", "Combien de litres le moteur brûle par heure."], ["FWD Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Galley Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Generator Battery", "voltage_volts", "batteries", "Batterie du groupe électrogène", "La batterie qui sert à démarrer le groupe électrogène (voir famille Moteur)."], ["Genset Fuel level", "relative_percentage", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset Hours", "time_hours", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset running hours (mac: B43) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset running hours (mac: BF9) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset running hours (mac: C0C) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset Speed", "angular_velocity_rpm", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset Temperature", "temperature_kelvin", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["GPS Satellites", "gps_integer", "boitier", "Satellites GPS", "Le nombre de satellites captés. Plus il y en a, plus la position du bateau est précise."], ["Gray Water Level", "relative_percentage", "reservoirs", "Eaux grises", "Le réservoir des eaux de l'évier et de la douche."], ["GSM Signal strength", "rssi_lookup", "boitier", "Réseau mobile", "La qualité du réseau téléphone (4G) captée par le boîtier. C'est grâce à lui que les données arrivent dans l'app."], ["Hatch status", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["HDG (M)", "angle_radians", "navigation", "Cap", "La direction vers laquelle pointe l'avant du bateau. (M) = par rapport au nord de la boussole, (T) = par rapport au vrai nord."], ["HDG (T)", "angle_radians", "navigation", "Cap", "La direction vers laquelle pointe l'avant du bateau. (M) = par rapport au nord de la boussole, (T) = par rapport au vrai nord."], ["HDOP", "unknown", "boitier", "Précision du GPS", "Une note de précision de la position. Plus le chiffre est petit, plus la position est fiable."], ["Holding #1 (Forward)", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding #3 (Aft)", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank #1", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank #3", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["House Batteries Temp", "temperature_kelvin", "batteries", "Température des batteries", "Une batterie trop chaude s'abîme et peut devenir dangereuse."], ["Hub Battery", "relative_percentage", "boitier", "Batterie du boîtier", "La batterie interne du boîtier, qui le fait tenir même si le courant du bateau est coupé."], ["HUB - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Humidity", "relative_humidity", "meteo", "Humidité", "L'humidité de l'air dans la cabine. Trop d'humidité fait apparaître de la moisissure."], ["Inverter", "unknown", "batteries", "Convertisseur (onduleur)", "Le convertisseur transforme le 12 V des batteries en 230 V pour les prises à bord. On voit s'il marche et quelle tension il donne."], ["Level", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["MF695 S2", "boolean_activated", "verifier", "Référence technique", "Ressemble à une référence de produit avec un numéro d'entrée. On ne sait pas ce qu'il surveille."], ["Motion Sensor", "boolean_activated", "securite", "Détecteur de mouvement", "Détecte une présence dans la cabine, comme une alarme de maison. « Bewegungsmelder » est le même capteur en allemand."], ["MPPT1 current", "current_ampere", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Navigation Lights", "unknown", "navigation", "Feux de navigation", "Les feux obligatoires la nuit (rouge, vert, blanc) pour être vu des autres bateaux."], ["Night Cruise", "unknown", "navigation", "Mode jour / mode nuit", "Des réglages tout prêts qui allument les bons équipements (lumières, instruments) pour naviguer de jour ou de nuit."], ["NMEA Instruments", "boolean_power", "boitier", "Instruments de bord", "Indique si les instruments de navigation (sondeur, anémomètre, GPS du bateau) sont allumés et envoient leurs données au boîtier."], ["Number of GPS Satellites", "gps_integer", "boitier", "Satellites GPS", "Le nombre de satellites captés. Plus il y en a, plus la position du bateau est précise."], ["Offset", "length_meters", "navigation", "Profondeur d'eau", "La hauteur d'eau sous le bateau, donnée par le sondeur. « Offset » est le réglage qui corrige la mesure selon la place de la sonde."], ["Oil Pressure", "pressure_hpa", "moteur", "Pression d'huile", "L'huile protège le moteur. Si sa pression chute, le moteur s'abîme très vite."], ["Oil temperature", "temperature_kelvin", "moteur", "Température d'huile", "La chaleur de l'huile moteur."], ["PDOP", "unknown", "boitier", "Précision du GPS", "Une note de précision de la position. Plus le chiffre est petit, plus la position est fiable."], ["Percent Engine Load", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Percent Engine Torque 1", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Percent Engine Torque 2", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Pitch", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Port", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["PORT Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Position", "angle_radians", "navigation", "Position", "La position du bateau. Dans la liste, elle est notée comme un angle, ce qui est inhabituel."], ["Pression atmosphérique boitier Oceano Vox", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Pression atmosphérique boitier Océano Vox", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Rate", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Relay", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay 1", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay 2", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay Output", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Roll", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Route °", "angle_radians", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["Running hours", "time_seconds", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["RuzMor", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Saloon Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["SaLut", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Service Battery", "voltage_volts", "batteries", "Batterie de service", "La batterie qui fait marcher la vie à bord : lumières, frigo, pompes, prises."], ["Shore Power", "boolean_connected", "batteries", "Branché au port", "Dit si le bateau est branché à la borne électrique du ponton (le « courant de quai »)."], ["Shore power 1 frequency", "frequency_hz", "batteries", "Fréquence du courant", "Le rythme du courant alternatif, normalement 50 Hz en Europe. S'il varie, il y a un souci électrique."], ["Shore power 1 voltage", "voltage_volts", "batteries", "Tension du courant de quai", "La tension qui arrive de la borne du port, normalement environ 230 V comme une prise de maison."], ["Signal strength", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Smoke Detector", "boolean_activated", "securite", "Détecteur de fumée", "Comme le détecteur de fumée d'une maison."], ["SOC 0-10V to 0 -> 100%", "boolean_connected", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["SOG", "speed_mps", "navigation", "Vitesse sur le fond", "La vraie vitesse du bateau par rapport à la terre, donnée par le GPS. On la compte en nœuds (1 nœud ≈ 1,85 km/h)."], ["Solar Current", "current_ampere", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Energy", "watt_hours", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Power", "watts", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Voltage", "voltage_volts", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Source", "unknown", "verifier", "Source", "Sans doute la source d'énergie utilisée (port, batterie, générateur), mais le type de valeur est inconnu."], ["SPARE", "boolean_connected", "verifier", "Entrée libre", "« Spare » veut dire « de réserve » : une entrée du boîtier pas encore attribuée."], ["Speed", "unknown", "navigation", "Vitesse du bateau", "La vitesse, sans préciser comment elle est mesurée."], ["Speed Ground Referenced", "speed_mps", "navigation", "Vitesse sur le fond", "La vraie vitesse du bateau par rapport à la terre, donnée par le GPS. On la compte en nœuds (1 nœud ≈ 1,85 km/h)."], ["Speed Water Referenced", "speed_mps", "navigation", "Vitesse sur l'eau", "La vitesse par rapport à l'eau. Elle diffère de la vitesse sur le fond à cause du courant."], ["Starboard", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["State of Charge", "relative_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["State-of-Charge", "voltage_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["State of Health", "unknown", "batteries", "Santé de la batterie", "L'usure de la batterie. Une batterie neuve est à 100 %, une batterie fatiguée tient moins longtemps."], ["Status", "boolean_activated", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["STBD Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Systems Off", "unknown", "batteries", "Tout allumer / tout éteindre", "Une commande ou un état global qui allume ou coupe tous les systèmes du bateau d'un coup."], ["Systems On", "unknown", "batteries", "Tout allumer / tout éteindre", "Une commande ou un état global qui allume ou coupe tous les systèmes du bateau d'un coup."], ["TALALUTTE", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Tank 1", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Tank 2", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Tankfüllstand", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Temperature", "temperature_celsius", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Time Remaining", "time_seconds", "batteries", "Autonomie restante", "Combien de temps la batterie peut encore tenir avec la consommation actuelle."], ["TWA", "angle_radians", "meteo", "Vent réel", "Le vrai vent, sans l'effet de la vitesse du bateau : angle (TWA) et vitesse (TWS)."], ["TWS", "speed_mps", "meteo", "Vent réel", "Le vrai vent, sans l'effet de la vitesse du bateau : angle (TWA) et vitesse (TWS)."], ["Unkown Level D", "relative_percentage", "verifier", "Niveau inconnu", "Un niveau de réservoir dont on ne connaît pas la nature (et dont le nom contient une faute)."], ["Variation", "angle_radians", "navigation", "Écart de la boussole", "La différence entre le nord de la boussole et le vrai nord. Elle change selon l'endroit sur la Terre."], ["Vitesse du bateau", "unknown", "navigation", "Vitesse du bateau", "La vitesse, sans préciser comment elle est mesurée."], ["Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Water #1 (Forward)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water #2 (Port)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water #3 (Starboard)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water Depth", "length_meters", "navigation", "Profondeur d'eau", "La hauteur d'eau sous le bateau, donnée par le sondeur. « Offset » est le réglage qui corrige la mesure selon la place de la sonde."], ["Water Temperature", "temperature_kelvin", "meteo", "Température de l'eau", "La température de la mer."], ["Water usage", "capacity_liters", "reservoirs", "Eau consommée", "Combien de litres d'eau ont été utilisés."], ["Weather station Pressure", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Yaw", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."]];
const MT={relative_percentage:'Pourcentage (%)',relative_humidity:'Humidité (%)',voltage_percentage:'Charge (%)',voltage_volts:'Tension (V)',current_ampere:'Courant (A)',watts:'Puissance (W)',watt_hours:'Énergie (Wh)',frequency_hz:'Fréquence (Hz)',temperature_celsius:'Température (°C)',temperature_kelvin:'Température (K, −273 pour des °C)',pressure_hpa:'Pression (hPa)',pressure_mbar:'Pression (mbar)',speed_mps:'Vitesse (m/s, ×2 ≈ nœuds)',angle_radians:'Angle (radians, ×57 ≈ degrés)',angle_latitude_degrees:'Latitude (°)',angle_longitude_degrees:'Longitude (°)',angular_velocity_rpm:'Régime (tr/min)',length_meters:'Distance (m)',time_hours:'Durée (h)',time_seconds:'Durée (s)',capacity_liters:'Volume (L)',rate_liters_per_hour:'Débit (L/h)',power_dbm:'Signal (dBm)',rssi_lookup:'Réseau mobile (barres)',gps_integer:'Nombre (satellites)',unknown:'Non précisé'};
const mt=t=>t.startsWith('boolean')?'Oui / Non':(MT[t]||t);

/* ======================= Graphiques (SVG, une seule échelle par graphique) ======================= */
const CH={};let chN=0;
function lineChart(o){
  const id='ch'+(chN++),W=640,H=o.h||230,L=50,R=16,T=18,B=30;
  const x=i=>L+(W-L-R)*i/NOWH, y=v=>T+(H-T-B)*(1-(v-o.min)/(o.max-o.min));
  const d=o.data.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const n=o.data.length;
  const area=`${d}L${x(n-1).toFixed(1)},${H-B}L${x(0)},${H-B}Z`;
  CH[id]={o,x,y,W,L,R,n};
  const e=last(o.data);
  return `<div class="chart"><svg data-ch="${id}" viewBox="0 0 ${W} ${H}" tabindex="0" role="img" aria-label="${esc(o.label)}">
    ${o.ticks.map(t=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(t)}" y2="${y(t)}"/><text class="ax" x="${L-8}" y="${y(t)+4}" text-anchor="end">${o.tf(t)}</text>`).join('')}
    ${DAYS.map((dd,i)=>`${i?`<line class="gd" x1="${x(i*24)}" x2="${x(i*24)}" y1="${T}" y2="${H-B}"/>`:''}<text class="ax" x="${Math.min(x(i*24+12),W-R-18)}" y="${H-9}" text-anchor="middle">${dd}</text>`).join('')}
    ${o.ev?`<line class="ev" x1="${x(o.ev.i)}" x2="${x(o.ev.i)}" y1="${T}" y2="${H-B}"/><text class="lbl" x="${x(o.ev.i)-6}" y="${T+12}" text-anchor="end">${esc(o.ev.l)}</text>`:''}
    ${o.thr!=null?`<line class="thr" x1="${L}" x2="${W-R}" y1="${y(o.thr)}" y2="${y(o.thr)}"/><text class="lbl" x="${L+8}" y="${y(o.thr)-6}">${esc(o.thrL)}</text>`:''}
    <path class="ar" d="${area}"/><path class="ln" d="${d}"/>
    <circle class="dt" cx="${x(n-1)}" cy="${y(e)}" r="4.5"/>
    <g class="hov" visibility="hidden"><line class="cross" y1="${T}" y2="${H-B}"/><circle class="dt" r="5"/></g>
    <rect x="${L}" y="${T}" width="${W-L-R}" height="${H-T-B}" fill="transparent"/>
  </svg></div>`;
}
function barChart(o){
  const W=640,H=o.h||220,L=44,R=12,T=22,B=30,n=o.items.length,band=(W-L-R)/n,bw=Math.min(band*.6,44);
  const y=v=>T+(H-T-B)*(1-v/o.max), y0=H-B;
  const bars=o.items.map((it,i)=>{
    const cx=L+band*i+band/2,x0=cx-bw/2,top=y(it.v),r=Math.min(4,(y0-top)/2);
    const p=it.v>0?`M${x0},${y0}V${top+r}Q${x0},${top} ${x0+r},${top}H${x0+bw-r}Q${x0+bw},${top} ${x0+bw},${top+r}V${y0}Z`:'';
    return `<g class="bar ${it.c||''}" tabindex="0" data-tip="${esc(o.fmt(it.v))}|${esc(it.tip||it.l)}">
      <rect x="${L+band*i}" y="${T}" width="${band}" height="${y0-T}" fill="transparent"/>${p?`<path d="${p}"/>`:''}
      ${it.show?`<text class="bv" x="${cx}" y="${top-6}" text-anchor="middle">${esc(o.fmt(it.v))}</text>`:''}
      <text class="ax" x="${cx}" y="${H-9}" text-anchor="middle">${esc(it.l)}</text></g>`}).join('');
  return `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(o.label)}">
    ${o.ticks.map(t=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(t)}" y2="${y(t)}"/><text class="ax" x="${L-8}" y="${y(t)+4}" text-anchor="end">${o.tf?o.tf(t):t}</text>`).join('')}
    ${bars}
    ${o.ref?`<line class="ref" x1="${L}" x2="${W-R}" y1="${y(o.ref.v)}" y2="${y(o.ref.v)}"/><text class="lbl" x="${W-R}" y="${y(o.ref.v)-6}" text-anchor="end">${esc(o.ref.l)}</text>`:''}
  </svg></div>`;
}
function hbars(items,max,fmt){
  return items.map(it=>`<div class="hrow" data-tip="${esc(fmt(it.v))}|${esc(it.tip||it.l)}"><span>${esc(it.l)}</span><span class="tr"><i style="width:${it.v/max*100}%"></i></span><span class="v">${esc(fmt(it.v))}</span></div>`).join('');
}
function spark(a,min,max){
  const W=240,H=34,x=i=>i/NOWH*W,y=v=>2+(H-6)*(1-(v-min)/(max-min));
  const d=a.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path class="ar" d="${d}L${x(a.length-1)},${H}L0,${H}Z"/><path class="ln" d="${d}" vector-effect="non-scaling-stroke"/></svg>`;
}
const SPK={batt:[11,13.2],hum:[40,90],pres:[995,1025]};
function bindCharts(){
  document.querySelectorAll('svg[data-ch]').forEach(svg=>{
    const c=CH[svg.dataset.ch];if(!c)return;
    const g=svg.querySelector('.hov'),ln=g.querySelector('line'),dt=g.querySelector('circle');
    let cur=c.n-1;
    const show=(i,cx,cy)=>{
      i=Math.max(0,Math.min(c.n-1,i));cur=i;
      const X=c.x(i),Y=c.y(c.o.data[i]);
      ln.setAttribute('x1',X);ln.setAttribute('x2',X);dt.setAttribute('cx',X);dt.setAttribute('cy',Y);g.setAttribute('visibility','visible');
      if(cx==null){const r=svg.getBoundingClientRect();cx=r.left+X/c.W*r.width;cy=r.top+Y/c.W*r.width;}
      tip(c.o.tf(c.o.data[i],true),hourLabel(i),cx,cy);
    };
    svg.addEventListener('pointermove',e=>{const r=svg.getBoundingClientRect();const vx=(e.clientX-r.left)/r.width*c.W;show(Math.round((vx-c.L)/(c.W-c.L-c.R)*NOWH),e.clientX,e.clientY)});
    svg.addEventListener('pointerleave',()=>{g.setAttribute('visibility','hidden');hideTip()});
    svg.addEventListener('focus',()=>show(cur));
    svg.addEventListener('blur',()=>{g.setAttribute('visibility','hidden');hideTip()});
    svg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(cur-1)}if(e.key==='ArrowRight'){e.preventDefault();show(cur+1)}});
  });
}
const TIP=()=>document.getElementById('tip');
function tip(v,l,x,y){const t=TIP();t.replaceChildren();const b=document.createElement('b');b.textContent=v;const s=document.createElement('span');s.textContent=l;t.append(b,s);t.hidden=false;
  const w=t.offsetWidth,h=t.offsetHeight;let left=x+14,top=y-h-12;if(left+w>innerWidth-8)left=x-w-14;if(top<8)top=y+16;t.style.left=Math.max(8,left)+'px';t.style.top=top+'px';}
function hideTip(){TIP().hidden=true}
document.addEventListener('pointerover',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const [v,l]=el.dataset.tip.split('|');tip(v,l,e.clientX,e.clientY)});
document.addEventListener('pointermove',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const [v,l]=el.dataset.tip.split('|');tip(v,l,e.clientX,e.clientY)});
document.addEventListener('pointerout',e=>{const el=e.target.closest('[data-tip]');if(el&&!el.contains(e.relatedTarget))hideTip()});
document.addEventListener('focusin',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const r=el.getBoundingClientRect();const [v,l]=el.dataset.tip.split('|');tip(v,l,r.left+r.width/2,r.top)});
document.addEventListener('focusout',e=>{if(e.target.closest('[data-tip]'))hideTip()});

const battChart=(id,h)=>{const s=serOf(id).batt;return lineChart({data:s,min:11,max:13.5,ticks:[11,11.5,12,12.5,13,13.5],tf:(v,p)=>nf(v,p?2:1)+' V',thr:11.8,thrL:'Seuil d’alerte 11,8 V',ev:id==='b2'?{i:CUT,l:'Prise de quai débranchée'}:null,label:'Tension de la batterie de service sur 7 jours',h})};
const humChart=id=>lineChart({data:serOf(id).hum,min:40,max:90,ticks:[40,50,60,70,80,90],tf:(v,p)=>nf(v,p?1:0)+' %',thr:75,thrL:'Au-dessus de 75 % : moisissure',label:'Humidité de la cabine sur 7 jours'});
const presChart=id=>lineChart({data:serOf(id).pres,min:995,max:1025,ticks:[995,1005,1015,1025],tf:(v,p)=>nf(v,p?1:0)+' hPa',label:'Pression atmosphérique sur 7 jours'});

/* ======================= Calculs (prototype) ======================= */
function health(){
  const late=S.tasks.find(t=>t.id==='t1'&&!t.done);
  const stock=S.tasks.find(t=>t.id==='t2'&&!t.done);
  const box=!S.boats.find(b=>b.id==='b1').steps[3];
  const acts=[];
  const crit=alerts().filter(a=>a.sev==='crit');
  crit.forEach(a=>acts.push({t:`Alerte capteur : ${a.d.n.toLowerCase()}`,d:`${a.b.name} · ${a.val}`,go:'#capteurs',cap:a.b.id}));
  if(late) acts.push({t:'1 inspection en retard',d:'Contrôle à 1 an · Test Boat',go:'#bateaux',boat:'b3'});
  if(stock) acts.push({t:'2 bateaux non déclarés',d:'Déclaration de novembre',go:'#stock'});
  if(box) acts.push({t:'1 boîtier à activer',d:'Princess 3 · mise en service',go:'#bateaux',boat:'b1'});
  const m={insp:late?92:97,stock:stock?96:100,box:box?80:90};
  return {ok:acts.length===0,acts,m};
}
function statusCrit(){
  const h=health().m;
  return [
    {k:'Inspections faites à temps',v:h.insp,seuil:95,why:'Inspections réalisées avant leur date limite, sur le trimestre.'},
    {k:'Stock déclaré chaque mois',v:h.stock,seuil:90,why:'Part des bateaux en stock déclarés à temps.'},
    {k:'Boîtiers activés à la livraison',v:h.box,seuil:85,why:'Bateaux livrés avec le boîtier activé et le client rattaché.'}
  ];
}
const connected=()=>Object.keys(V).filter(online).length+(S.boats.find(b=>b.id==='b1').steps[3]?1:0);
const offline=()=>Object.keys(V).filter(id=>!online(id));

/* ======================= Navigation ======================= */
const NAV=[
  {sec:'Activité'},
  {h:'dashboard',l:'Tableau de bord',i:'grid'},
  {h:'capteurs',l:'Capteurs',i:'pulse',cnt:()=>alerts().length,nw:true},
  {h:'bateaux',l:'Bateaux',i:'boat'},
  {h:'clients',l:'Clients',i:'users'},
  {h:'messages',l:'Messages',i:'msg',cnt:()=>S.convs.filter(c=>c.unread).length},
  {h:'fleet',l:'Fleet',i:'key',cnt:()=>1},
  {h:'notifications',l:'Notifications',i:'bell',cnt:()=>2},
  {sec:'Stock'},
  {h:'stock',l:'Déclaration…',i:'clip',cnt:()=>S.tasks.find(t=>t.id==='t2').done?0:2},
  {h:'historique',l:'Historique',i:'hist'},
  {h:'partage',l:'Stock partagé',i:'share'},
  {sec:'Compte'},
  {h:'concession',l:'Ma concession',i:'award'},
  {h:'services',l:'Services',i:'euro'},
  {h:'parametres',l:'Paramètres',i:'gear'}
];
function route(){return (location.hash||'#dashboard').slice(1)||'dashboard'}
function renderNav(){
  const r=route();
  document.getElementById('nav').innerHTML=NAV.map(n=>{
    if(n.sec) return `<div class="nav-sec">${n.sec}</div>`;
    const c=n.cnt?n.cnt():0;
    const on=r===n.h||(r==='bilan'&&n.h==='dashboard');
    return `<a href="#${n.h}" class="${on?'on':''}">${ic(n.i,22,1.6)}${n.l}${c?`<span class="cnt">${c}</span>`:''}${n.nw&&!c?`<span class="nw">${NEW}</span>`:''}</a>`;
  }).join('');
  const ro=roleOf(S.role);
  document.getElementById('me').innerHTML=`${ic('user',20)}<span style="min-width:0">Laurine G.<span class="muted" style="display:block;font-size:12.5px;font-weight:400">Vue ${ro.l}</span></span>`;
}
const roleTabs=()=>`<div class="roles" role="group" aria-label="Choisir le métier">${ROLES.map(r=>`<button data-role="${r.id}" aria-pressed="${S.role===r.id}">${ic(r.i,16,1.8)}${r.l}</button>`).join('')}</div>`;
const kpi=(l,v,s,st='')=>`<section class="card kpi ${st?'is-'+st:''}"><small>${l}</small><b>${v}</b><span class="s">${s}</span></section>`;
const stChip=s=>s==='crit'?`<span class="chip c-red">${ic('alert',13,2)} Alerte</span>`:s==='warn'?`<span class="chip c-orange">${ic('alert',13,2)} À surveiller</span>`:s==='off'?`<span class="chip c-grey">${ic('wifi',13,2)} Pas de données</span>`:`<span class="chip c-green">${ic('check',13,2.4)} OK</span>`;

/* ======================= Tableau de bord ======================= */

function myDay(){
  const open=S.tasks.filter(t=>!t.done), done=S.tasks.filter(t=>t.done);
  const pct=Math.round(done.length/S.tasks.length*100);
  const body=open.length?`<div>${open.map(t=>`
        <div class="task"><button class="tick" data-tick="${t.id}" aria-label="Marquer « ${t.title} » comme fait"></button>
          <div class="tt"><b>${t.title}</b><span class="${t.nudge?'nudge':''}">${t.late?'<span class="chip c-orange" style="margin-right:6px">En retard</span>':''}${t.ctx}</span></div>
          <a class="btn btn-out btn-sm" href="${t.go}" data-go-boat="${t.boat||''}">${t.kind==='msg'?'Répondre':'Ouvrir'}</a></div>`).join('')}</div>
      ${done.length?`<div class="done-list">Traité aujourd’hui : ${done.map(t=>t.title).join(' · ')}</div>`:''}`
    :`<div class="alldone"><div class="big">${ic('check',30,2.4)}</div><h4>Tout est traité</h4><div class="muted">Plus rien n’attend aujourd’hui.</div><button class="linkbtn" id="resetDay">Revoir la journée (démo)</button></div>`;
  return `<section class="card" aria-label="Ma journée"><div class="card-h" style="flex-direction:column;gap:10px">
      <div class="day-h" style="width:100%"><h3>Ma journée</h3><span class="muted" style="margin-left:auto">Mardi 10 novembre</span></div>
      <div style="width:100%;display:flex;align-items:center;gap:12px"><div class="prog" style="flex:1"><i style="width:${pct}%"></i></div><span class="muted" style="font-size:13px;font-variant-numeric:tabular-nums">${done.length} sur ${S.tasks.length} traitées</span></div>
    </div><div class="card-b" style="padding-top:6px">${body}</div></section>`;
}
function parc(){
  const h=health();
  return `<section class="card" aria-label="État du parc"><div class="card-h"><h3>État du parc</h3><span class="muted" style="margin-left:auto;font-size:13px">90 derniers jours</span></div>
    <div class="card-b" style="display:flex;flex-direction:column;gap:12px">
      <div class="health ${h.ok?'ok':'warn'}"><div class="ico">${ic(h.ok?'check':'pulse',20,2.2)}</div><div><b>${h.ok?'Parc en bonne santé':'À surveiller'}</b><span style="font-size:13px">${h.ok?'Aucune alerte en retard, stock à jour.':`${h.acts.length} point${h.acts.length>1?'s':''} pour revenir au vert`}</span></div></div>
      ${h.ok?'':`<div>${h.acts.map(a=>`<div class="act"><span class="b"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${a.t}</b><div class="muted" style="font-size:12.5px">${a.d}</div></div><a class="linkbtn" href="${a.go}" data-go-boat="${a.boat||''}" data-capboat="${a.cap||''}">Régler</a></div>`).join('')}</div>`}
      <div>${[['Inspections à temps',h.m.insp,95],['Stock déclaré',h.m.stock,90],['Boîtiers activés à la livraison',h.m.box,85]].map(([k,v,s])=>`
        <div class="metric"><span>${k}</span><span class="v">${v} %</span><div class="mbar"><i style="width:${v}%;background:${v>=s?'var(--green)':'var(--orange)'}"></i><u style="left:${s}%" title="Objectif ${s} %"></u></div></div>`).join('')}
        <div class="muted" style="font-size:12px;margin-top:4px">Le trait marque l’objectif du réseau.</div></div>
    </div></section>`;
}
const WEEKS=['S35','S36','S37','S38','S39','S40','S41','S42','S43','S44','S45','S46'];
const ALW=[3,2,4,1,2,5,3,6,4,3,5,7];
function alertsCard(){
  const all=alerts(),lim=S.alAll?all.length:6,al=all.slice(0,lim);
  return `<section class="card"><div class="card-h"><div><h3>Alertes capteurs en cours</h3><div class="sub">Sur ${withData().length} bateaux qui envoient des données · les plus graves en premier</div></div><div class="total"><small>Ouvertes</small><b>${all.length}</b></div></div>
    <div class="card-b" style="padding-top:4px">${al.map(a=>`<div class="alrow"><span class="sv is-${a.sev}"></span>
      <div style="min-width:0"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b style="font-weight:600">${esc(a.b.name)}</b>${stChip(a.sev)}<span class="muted" style="font-size:12.5px">${esc(a.b.owner)}</span></div>
        <div style="margin-top:3px"><b style="font-weight:500">${a.d.n} : ${a.val}</b> · <span class="muted">${a.txt}${a.since?` · ${a.since}`:''}</span></div></div>
      <div class="acts">${a.sev==='crit'?`<a class="btn btn-pri btn-sm" href="#messages">${ic('phone',15)} Prévenir le client</a>`:''}<a class="btn btn-out btn-sm" href="#capteurs" data-capboat="${a.b.id}">Ouvrir le bateau</a></div></div>`).join('')}
    ${all.length>6?`<button class="btn btn-ghost more" data-alall>${S.alAll?'Afficher moins':`Afficher les ${all.length-6} autres alertes`}</button>`:''}</div></section>`;
}
const OPP=[
  {b:'b3',sig:'Santé batterie 62 %',sv:'warn',p:'Batterie de service neuve, pose comprise',pr:'≈ 420 €'},
  {b:'b6',sig:'Humidité cabine 81 %',sv:'warn',p:'Déshumidificateur + hivernage surveillé',pr:'Sur devis'},
  {b:'b7',sig:'Révision 250 h dans 3 h',sv:'warn',p:'Contrat d’entretien annuel',pr:'Sur devis'},
  {b:'b4',k:'cale',sig:'Pas de capteur d’eau dans la cale',sv:'off',p:'Capteur de présence d’eau',pr:'178,80 €'},
  {b:'b2',sig:'Batterie vidée après une coupure du quai',sv:'crit',p:'Panneau solaire d’appoint',pr:'Sur devis'}
];
const SHOP0=[
  ['Capteur d’ouverture de porte magnétique','94,80 €','porte','Sécurité'],['Capteur d’ouverture de trappe mécanique','202,80 €','trappe','Sécurité'],['Détecteur de mouvement','178,80 €','mvt','Sécurité'],['Capteur de présence d’eau','178,80 €','cale','Sécurité'],
  ['Capteur antivol pour moteur hors-bord','94,80 €','antiM','Sécurité'],['Capteur antivol pour annexe','94,80 €','antiA','Sécurité'],['Capteur de tension de batterie','310,80 €','battS','Maintenance'],['Capteur de prise de quai','178,80 €','quai','Maintenance']
];
const shop=()=>SHOP0.map(s=>[s[0],s[1],eqCount(s[2]),s[3],s[2]]);


const PLAN=[
  {d:'Mer. 11',b:'b7',t:'Révision 250 h : vidange, filtres, courroie',o:'Capteur · heures moteur',st:'warn'},
  {d:'Jeu. 12',b:'b3',t:'Contrôle à 1 an + test de la batterie de service (santé 62 %)',o:'Inspection en retard',st:'crit'},
  {d:'Ven. 13',b:'b4',t:'Révision de rodage 100 h',o:'Capteur · heures moteur',st:'warn'},
  {d:'Lun. 16',b:'b6',t:'Hivernage : déshumidificateur, vidange eau douce',o:'Capteur · humidité',st:'warn'},
  {d:'Mar. 17',b:'b2',t:'Contrôle batterie après décharge profonde',o:'Capteur · batterie',st:'warn'}
];

/* ======================= Capteurs ======================= */

function devCard(d,v){
  const sv=d.s[0],why=d.why[S.role];
  const g=d.gauge?d.gauge(v):null;
  return `<article class="dev ${sv==='ok'?'':'is-'+sv}">
    <div class="dev-top"><b>${d.n}</b>${stChip(sv)}</div>
    <div><div class="dv">${d.main(v)}</div><div class="st">${d.s[1]}${(v.since||{})[d.k]?` · ${v.since[d.k]}`:''}</div></div>
    ${g!=null?`<div class="gauge"><i style="width:${g}%;${sv!=='ok'?'background:var(--orange)':''}"></i></div>`:''}
    ${d.ser?spark(serOf(S.cb)[d.ser],...SPK[d.ser]):''}
    <p class="what">${d.what}</p>
    ${d.subs(v).length?`<div class="subs">${d.subs(v).map(s=>`<div><span class="muted">${s[0]}</span><span>${s[1]}</span></div>`).join('')}</div>`:''}
    ${why?`<div class="why"><b>Pour le ${roleOf(S.role).l.toLowerCase()} :</b> ${why}</div>`:''}
    <div class="codes">${d.raw.map(r=>`<span class="code">${esc(r)}</span>`).join('')}</div>
  </article>`;
}
function listRows(){
  const q=S.q.trim().toLowerCase();
  const rows=SENSORS.filter(s=>(!S.fam||s[2]===S.fam)&&(!q||(s[0]+' '+s[3]+' '+s[4]+' '+mt(s[1])).toLowerCase().includes(q)));
  return {n:rows.length,html:rows.map(s=>`<tr><td><span class="code">${esc(s[0])}</span></td><td><b style="font-weight:500">${esc(s[3])}</b><div class="muted" style="font-size:12.5px">${esc(s[4])}</div></td><td>${esc(FAM[s[2]].t)}</td><td>${esc(mt(s[1]))}</td><td>${FAM[s[2]].roles.map(r=>`<span class="rtag ${r===S.role?'me':''}">${roleOf(r).l}</span>`).join(' ')}</td></tr>`).join('')||`<tr><td colspan="5" class="muted">Aucun capteur ne correspond. Essayez « batterie », « porte » ou « Bilge ».</td></tr>`};
}
function listSection(){
  const r=listRows();
  return `<div style="display:flex;flex-direction:column;gap:12px">
      <div class="filters"><label class="in">${ic('search',18)}<input id="sq" type="search" placeholder="Ex. batterie, porte, Bilge, AWS…" value="${esc(S.q)}" aria-label="Chercher un capteur" autocomplete="off"></label>
        <select id="sf" aria-label="Famille"><option value="">Toutes les familles</option>${Object.entries(FAM).map(([k,f])=>`<option value="${k}" ${S.fam===k?'selected':''}>${f.t} (${SENSORS.filter(s=>s[2]===k).length})</option>`).join('')}</select>
        <span class="muted"><b id="lcount" style="color:var(--ink)">${r.n}</b> affichés</span></div>
      <div class="tw"><table class="st"><thead><tr><th>Nom dans le fichier</th><th>En clair</th><th>Famille</th><th>Type de valeur</th><th>Utile pour</th></tr></thead><tbody id="lbody">${r.html}</tbody></table></div>
    </div>`;
}
/* ======================= Bateaux (prototype + bloc capteurs) ======================= */
const STEPS=[
  {t:'Réception du bateau',d:'Bateau reçu et contrôlé à l’arrivée.'},
  {t:'Déclaration en stock',d:'Déclaré dans le stock de la concession.'},
  {t:'Rattacher le propriétaire',d:'Fiche client créée et liée au bateau.'},
  {t:'Activer le boîtier',d:'Unité principale 3426100474 : lancer le diagnostic pour vérifier qu’elle remonte bien.',btn:'Lancer le diagnostic'},
  {t:'Préparer la mise en service',d:'Formulaire de livraison avec le client.',btn:'Préparer la mise en service',warn:true}
];


/* = fin */

/* ======================= Parc élargi : 41 bateaux d'exemple en plus, pour tester une grande flotte ======================= */
(function(){
  const NAMES=['Alizé','Bora','Dune','Écume','Fleur de Sel','Goéland','Héol','Iroise','Jade','Kalinda','Lagon','Marée Haute','Nausicaa','Orque','Perle','Quiétude','Ressac','Sillage','Tramontane','Ulysse','Vent d’Ouest','Wahoo','Xora','Yole','Zéphyr','Albatros','Brise','Cormoran','Dauphin','Embrun','Farniente','Gwenn','Hirondelle','Île Verte','Joséphine','Korrigan','Libeccio','Mouette','Noroît','Océane','Sirène'];
  const MODELS=['Oceanis 30.1','Antares 9','Flyer 8','Swift Trawler 41','First 27','Gran Turismo 36','Sun Odyssey 410','Merry Fisher 795','Cap Camarat 7.5','Prestige 520','Leader 33','NC 1095'];
  const LN=['Martin','Bernard','Dubois','Thomas','Robert','Richard','Petit','Durand','Moreau','Simon','Laurent','Lefebvre','Michel','Garcia','David','Bertrand','Roux','Vincent','Fournier','Girard'];
  const FN=['A.','C.','É.','F.','J.','L.','M.','N.','P.','S.'];
  NAMES.forEach((n,i)=>{
    const id='g'+String(i+1).padStart(2,'0');
    const st=i>=38?'En stock':i>=36?'Mise en service':'Vendu';
    S.boats.push({id,name:n,model:MODELS[i%MODELS.length],owner:st==='En stock'?'—':`${FN[i%FN.length]} ${LN[(i*7)%LN.length]}`,status:st,brand:n[0].toUpperCase(),hin:`FR-BEN${(31000+i*137)}`,steps:st==='Mise en service'?[true,true,i%2===0,false,false]:null});
    if(st!=='Vendu'){NOBOX[id]=st==='En stock'?'En stock : pas encore de boîtier.':'Boîtier pas encore installé.';return;}
    const r=rng(1000+i*31),R=(a,b)=>a+(b-a)*r();
    const next=[100,250,500,750,1000][i%5],eh=Math.round(next-R(30,90));
    const v={battS:0,soc:Math.round(R(70,97)),soh:Math.round(R(76,98)),battM:+R(12.5,12.9).toFixed(2),quai:true,eh:i===11?495:Math.max(12,eh),next:i===11?500:next,et:Math.round(R(76,85)),op:+R(3.2,3.9).toFixed(1),
      carb:Math.round(R(20,95)),cap:[180,250,300,400,500][i%5],eau:Math.round(R(15,90)),noires:i===26?86:Math.round(R(0,60)),hum:0,tc:Math.round(R(8,16)),pres:0,gsm:i===18?1:2+Math.round(R(0,3)),hubB:Math.round(R(60,100)),sat:Math.round(R(5,11)),
      lastSeen:i===18?'il y a 5 h':`il y a ${2+i%9} min`,since:{}};
    if(i===4)v.soh=64;
    if(i%2)v.porte=false; if(i%3!==0)v.cale=false; if(i%4===0)v.mvt=false; if(i%5===0)v.fumee=false; if(i%7===0)v.trappe=false;
    if(i%3===0){v.sol=Math.round(R(20,160));v.solE=Math.round(R(150,600))}
    if(i===18)v.since.gsm='depuis 9 h 10';
    V[id]=v;
    const s=serOf(id);v.battS=last(s.batt);v.hum=i===32?78:last(s.hum);v.pres=last(s.pres);
    if(i===32)v.since.hum='depuis 3 jours';
  });
  V.b3.trappe=false;
})();
function serOf(id){
  if(SER[id])return SER[id];
  let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))%100000;
  const base=12.55+(h%30)/100;
  SER[id]={batt:series(h+7,(i,r)=>base+.13*sun(i)+(r-.5)*.05),hum:series(h+8,(i,r)=>56+(h%12)+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),pres:series(h+9,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)};
  return SER[id];
}
const equipped=()=>S.boats.filter(b=>V[b.id]||b.id==='b1');
const withData=()=>S.boats.filter(b=>V[b.id]);
const RANK={crit:0,warn:1,off:2,ok:3};
function boatIssues(id){return devicesOf(id).filter(d=>d.s[0]!=='ok').length+(V[id]&&!online(id)?0:0)}
function oppList(){
  const L=[...OPP];
  withData().forEach(b=>{const v=V[b.id];if(OPP.some(o=>o.b===b.id))return;
    if(v.soh<70)L.push({b:b.id,sig:`Santé batterie ${v.soh} %`,sv:'warn',p:'Batterie de service neuve, pose comprise',pr:'≈ 420 €'});
    else if(v.next-v.eh<=10)L.push({b:b.id,sig:`Révision ${v.next} h dans ${v.next-v.eh} h`,sv:'warn',p:'Contrat d’entretien annuel',pr:'Sur devis'});
    else if(v.hum>75)L.push({b:b.id,sig:`Humidité cabine ${nf(v.hum)} %`,sv:'warn',p:'Déshumidificateur + hivernage surveillé',pr:'Sur devis'});
  });
  return L;
}
const SHOPK=['porte','trappe','mvt','cale','antiM','antiA','battS','quai'];
const eqCount=k=>withData().filter(b=>V[b.id][k]!==undefined).length;
const DEVDEF={directeur:'battS',commercial:'battS',technicien:'battS',atelier:'eh'};
const DIST={
  battS:[['< 11,8 V',v=>v.battS<11.8,1],['11,8 à 12,2',v=>v.battS>=11.8&&v.battS<12.2,1],['12,2 à 12,5',v=>v.battS>=12.2&&v.battS<12.5],['12,5 à 12,8',v=>v.battS>=12.5&&v.battS<12.8],['12,8 V et +',v=>v.battS>=12.8]],
  battM:[['< 12,2 V',v=>v.battM<12.2,1],['12,2 à 12,5',v=>v.battM>=12.2&&v.battM<12.5],['12,5 à 12,8',v=>v.battM>=12.5&&v.battM<12.8],['12,8 V et +',v=>v.battM>=12.8]],
  quai:[['Branché',v=>v.quai],['Débranché',v=>!v.quai,1]],
  sol:[['< 50 W',v=>v.sol<50],['50 à 150 W',v=>v.sol>=50&&v.sol<150],['150 W et +',v=>v.sol>=150]],
  eh:[['10 h ou moins',v=>v.next-v.eh<=10,1],['11 à 50 h',v=>v.next-v.eh>10&&v.next-v.eh<=50],['51 à 150 h',v=>v.next-v.eh>50&&v.next-v.eh<=150],['plus de 150 h',v=>v.next-v.eh>150]],
  carb:[['< 15 %',v=>v.carb<15,1],['15 à 50 %',v=>v.carb>=15&&v.carb<50],['50 à 100 %',v=>v.carb>=50]],
  eau:[['< 25 %',v=>v.eau<25],['25 à 50 %',v=>v.eau>=25&&v.eau<50],['50 à 75 %',v=>v.eau>=50&&v.eau<75],['75 % et +',v=>v.eau>=75]],
  noires:[['< 40 %',v=>v.noires<40],['40 à 80 %',v=>v.noires>=40&&v.noires<=80],['> 80 %',v=>v.noires>80,1]],
  cale:[['Sec',v=>!v.cale],['Eau détectée',v=>v.cale,1]],
  porte:[['Fermée',v=>!v.porte],['Ouverte',v=>v.porte,1]],
  mvt:[['Aucun mouvement',v=>!v.mvt],['Mouvement',v=>v.mvt,1]],
  fumee:[['Pas de fumée',v=>!v.fumee],['Fumée',v=>v.fumee,1]],
  hum:[['< 60 %',v=>v.hum<60],['60 à 75 %',v=>v.hum>=60&&v.hum<=75],['> 75 %',v=>v.hum>75,1]],
  pres:[['< 1 005',v=>v.pres<1005],['1 005 à 1 010',v=>v.pres>=1005&&v.pres<1010],['1 010 et +',v=>v.pres>=1010]],
  gsm:[['0 à 1 barre',v=>v.gsm<=1,1],['2 à 3 barres',v=>v.gsm>=2&&v.gsm<=3],['4 à 5 barres',v=>v.gsm>=4]]
};

/* ======================= Tableau de bord : des cases qui se déplient, différentes pour chaque métier ======================= */
S.dtab={directeur:'jour',commercial:'opp',technicien:'alertes',atelier:'rev'};
S.capAll=false; S.acc={};
const card=(h,sub,body,tot)=>`<section class="card"><div class="card-h"><div><h3>${h}</h3>${sub?`<div class="sub">${sub}</div>`:''}</div>${tot?`<div class="total"><small>${tot[0]}</small><b>${tot[1]}</b></div>`:''}</div><div class="card-b">${body}</div></section>`;
const TABS={
  directeur:()=>{const al=alerts(),crit=al.filter(a=>a.sev==='crit'),open=S.tasks.filter(t=>!t.done).length,h=health();return [
    {id:'jour',l:'Ma journée',v:`${open}`,s:open?`tâche${open>1?'s':''} à faire aujourd’hui`:'Tout est traité',st:open?'':'ok',body:()=>myDay()},
    {id:'parc',l:'État du parc',v:h.ok?'OK':`${h.acts.length}`,s:h.ok?'Parc en bonne santé':'points pour revenir au vert',st:h.ok?'ok':'warn',body:()=>`
      <div class="banner"><div class="ico">${ic('mail',20)}</div><div style="flex:1;min-width:200px"><b>Votre bilan du lundi est arrivé</b><div class="muted" style="font-size:13px">Semaine du 2 au 8 novembre : 11 tâches traitées, 3 à venir.</div></div><a class="btn btn-out btn-sm" href="#bilan">Voir le bilan</a></div>
      <div class="grid g2">${parc()}${card('Bateaux connectés','Boîtiers qui envoient leurs données',`<div class="muted">${offline().length} boîtier${offline().length>1?'s':''} hors ligne, ${S.boats.filter(b=>b.status!=='Vendu').length} bateaux en mise en service ou en stock. Le technicien suit le détail.</div>`,['Total',`${connected()} / ${equipped().length}`])}</div>`},
    {id:'alertes',l:'Alertes capteurs',v:`${al.length}`,s:`dont ${crit.length} critique${crit.length>1?'s':''}`,st:crit.length?'crit':'warn',body:()=>`
      ${crit.map(a=>`<div class="health warn"><div class="ico">${ic('alert',20,2.2)}</div><div style="flex:1;min-width:0"><b>${a.b.name} : ${a.d.n.toLowerCase()} ${a.val}</b><span style="font-size:13px">${a.txt}. Le technicien est prévenu.</span></div><a class="btn btn-out btn-sm" href="#capteurs" data-capboat="${a.b.id}">Voir</a></div>`).join('')}
      <div class="grid g2">
      ${card('Alertes par semaine','12 dernières semaines, tout le parc',barChart({items:WEEKS.map((w,i)=>({l:w,v:ALW[i],c:i===11?'cur':'',tip:`alertes · semaine ${w.slice(1)}${i===11?' (en cours)':''}`,show:i===11})),max:8,ticks:[0,2,4,6,8],fmt:v=>`${v}`,label:'Nombre d’alertes capteurs par semaine'})+'<div class="chart-note">Barre claire : semaine en cours.</div>',['Cette semaine',last(ALW)])}
      ${card('D’où viennent les alertes','90 derniers jours, par famille',hbars([{l:'Batteries',v:14},{l:'Boîtier et réseau',v:9},{l:'Moteur',v:6},{l:'Météo et humidité',v:5},{l:'Sécurité',v:3},{l:'Réservoirs',v:3}],14,v=>`${v}`)+'<div class="chart-note">Les batteries arrivent en tête : souvent le courant de quai coupé.</div>',['Total',40])}
      </div>`},
    {id:'perf',l:'Ventes et statut',v:`${statusCrit().filter(c=>c.v>=c.seuil).length} / 3`,s:'critères du statut atteints',st:'',body:()=>`<div class="grid g3">
      ${card('Mes ventes','À l’heure actuelle',barChart({items:[{l:'Livraison',v:1},{l:'Transféré',v:3},{l:'Reprises',v:6}].map(i=>({...i,show:true,tip:i.l})),max:6,ticks:[0,2,4,6],fmt:v=>`${v}`,label:'Mes ventes',h:200})+'<div class="chart-note">5 bateaux vendus en 2026.</div>',['Total',10])}
      ${card('Ma concession','Statut T4 2026',statusCrit().map(c=>`<div class="metric"><span>${c.k}</span><span class="v">${c.v} %</span><div class="mbar"><i style="width:${c.v}%;background:${c.v>=c.seuil?'var(--green)':'var(--orange)'}"></i><u style="left:${c.seuil}%"></u></div></div>`).join('')+'<a class="linkbtn" href="#concession">Voir le détail →</a>')}
      ${card('Délai de réponse','Messages clients, 30 jours','<div class="muted">Objectif réseau : moins de 4 h.</div>',['Moyen','2 h 10'])}</div>`}
  ]},
  commercial:()=>{const E=withData().length,SH=shop(),OP=oppList(),toEquip=SH.reduce((s,x)=>s+(E-x[2]),0);const SAL=[380,0,950,1420,2100,1680,760,310,540,890,180],M=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.'];return [
    {id:'opp',l:'Ventes à proposer',v:`${OP.length}`,s:'repérées par les capteurs',st:'ok',body:()=>card('Ventes repérées par les capteurs','Le boîtier voit ce dont le bateau a besoin. Vous le proposez au bon moment.',OP.slice(0,S.oppAll?99:6).map(o=>{const b=boat(o.b);return `<div class="opp">
      <div style="min-width:0"><b style="font-weight:600">${b.name}</b> <span class="muted">· ${b.owner}</span><div style="margin-top:4px;display:flex;gap:6px;align-items:center;flex-wrap:wrap"><span class="sdot is-${o.sv}"></span><span style="font-size:13.5px">${o.sig}</span></div></div>
      <div style="min-width:0"><span class="muted" style="font-size:12.5px">À proposer</span><div style="font-weight:500">${o.p} · <span class="pr">${o.pr}</span></div></div>
      ${S.sent[sentKey(o.b,o.k||('opp:'+o.p))]?`<span class="chip c-green">${ic('check',13,2.4)} Proposé</span>`:`<button class="btn btn-out btn-sm" data-propose="${o.b}|opp|${encodeURIComponent(o.p)}">${ic('msg',15)} Proposer au client</button>`}</div>`}).join('')+(OP.length>6?`<button class="btn btn-ghost more" data-oppall>${S.oppAll?'Afficher moins':`Afficher les ${OP.length-6} autres`}</button>`:''))},
    {id:'ventes',l:'Capteurs et services vendus',v:'9 210 €',s:'en 2026, à fin octobre',st:'',body:()=>card('Capteurs et services vendus','Par mois, 2026',barChart({items:SAL.map((v,i)=>({l:M[i],v,c:i===10?'cur':'',tip:`${M[i]} 2026${i===10?' (en cours)':''}`})),max:2500,ticks:[0,500,1000,1500,2000,2500],tf:v=>v?nf(v/1000,1)+' k':'0',fmt:v=>nf(v)+' €',label:'Ventes de capteurs et services par mois'})+'<div class="chart-note">Le pic du printemps correspond aux remises à l’eau. Novembre est en cours.</div>',['Total','9 210 €'])},
    {id:'equip',l:'Capteurs à poser',v:`${toEquip}`,s:'sur les bateaux du parc',st:'warn',body:()=>card('Équipement du parc',`Bateaux équipés sur ${E}, par capteur vendu`,hbars(SH.map(s=>({l:s[0].replace('Capteur d’ouverture de ','').replace('Capteur de ','').replace('Capteur antivol pour ','Antivol ').replace(/^./,c=>c.toUpperCase()),v:s[2],tip:`bateaux équipés sur ${E} · ${s[0]}`})),E,v=>`${v} / ${E}`)+'<div class="chart-note">Plus la barre est courte, plus il reste de bateaux à équiper.</div>')},
    {id:'cat',l:'Catalogue',v:`${SH.length}`,s:'capteurs sans fil à vendre',st:'',body:()=>card('Catalogue des capteurs Seanapps','Sans fil (Bluetooth), pour un bateau déjà équipé du boîtier',`<div class="cat">${SH.map(s=>`<div class="it"><div class="row"><b style="font-weight:500">${s[0]}</b><span style="font-variant-numeric:tabular-nums;font-weight:600;white-space:nowrap">${s[1]}</span></div><div class="row"><span class="muted" style="font-size:12.5px">${s[3]} · à proposer à ${E-s[2]} bateau${E-s[2]>1?'x':''}</span>${E-s[2]>0?`<button class="btn btn-out btn-sm" data-propose="|${s[4]}">Proposer</button>`:''}</div></div>`).join('')}</div>`)}
  ]},
  technicien:()=>{const al=alerts(),crit=al.filter(a=>a.sev==='crit').length,off=Object.keys(V).filter(id=>!online(id)),todo=S.boats.filter(b=>b.status==='Mise en service');return [
    {id:'alertes',l:'Alertes ouvertes',v:`${al.length}`,s:`dont ${crit} critique${crit>1?'s':''}`,st:crit?'crit':'warn',body:()=>alertsCard()},
    {id:'diag',l:'Diagnostic batterie',v:`${nf(V.b2.battS,1)} V`,s:'Princess 2 · batterie de service',st:'crit',body:()=>card('Batterie de service · Princess 2','Tension sur 7 jours, une mesure par heure',battChart('b2')+'<div class="chart-note">Diagnostic : la prise de quai est débranchée depuis lundi 18 h. La batterie perd environ 0,06 V par heure. Survolez la courbe pour lire chaque heure.</div>',['Maintenant',`${nf(V.b2.battS,1)} V`])},
    {id:'boitiers',l:'Boîtiers hors ligne',v:`${off.length}`,s:off.map(id=>boat(id).name).join(', ')||'Aucun',st:off.length?'warn':'ok',body:()=>card('Boîtiers à vérifier',`Seulement ceux qui posent problème · les ${withData().filter(b=>online(b.id)&&V[b.id].hubB>=65).length} autres envoient bien leurs données`,`<div style="overflow-x:auto"><table class="st"><thead><tr><th>Bateau</th><th>Réseau</th><th class="num">Batt. boîtier</th><th>Dernier envoi</th></tr></thead><tbody>
      ${S.boats.filter(b=>V[b.id]?(!online(b.id)||V[b.id].hubB<65):b.status==='Vendu'||b.id==='b1').map(b=>{const v=V[b.id];return v?`<tr><td><span class="sdot ${online(b.id)?'is-ok':'is-warn'}"></span> ${esc(b.name)}</td><td>${v.gsm} / 5</td><td class="num">${v.hubB} %</td><td>${v.lastSeen}</td></tr>`:`<tr><td><span class="sdot is-off"></span> ${b.name}</td><td colspan="3" class="muted">${NOBOX[b.id]}</td></tr>`}).join('')}</tbody></table></div>`)},
    {id:'mes',l:'Mises en service',v:`${todo.length}`,s:'boîtiers à activer ou installer',st:'',body:()=>card('Mises en service en cours','Le boîtier doit être activé avant la livraison',todo.map(b=>`<div class="act"><span class="b" style="background:var(--blue)"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${b.name}</b><div class="muted" style="font-size:12.5px">${b.steps.filter(Boolean).length} étapes sur 5 · ${NOBOX[b.id]||'Boîtier activé'}</div></div><a class="btn btn-out btn-sm" href="#bateaux" data-go-boat="${b.id}">Ouvrir</a></div>`).join(''))}
  ]},
  atelier:()=>{const LOAD=[58,66,77,52,40,30],WK=['S46','S47','S48','S49','S50','S51'];const eng=Object.keys(V).map(id=>({b:boat(id),v:V[id]})).sort((a,b)=>(a.v.next-a.v.eh)-(b.v.next-b.v.eh));const soon=eng.filter(e=>e.v.next-e.v.eh<=10);return [
    {id:'rev',l:'Révisions bientôt',v:`${soon.length}`,s:soon.length<=2?soon.map(e=>e.b.name.split(' (')[0]).join(' et ')+' · moins de 10 h':'bateaux à moins de 10 h de la révision',st:'warn',body:()=>card('Heures moteur avant révision',`Les 8 révisions les plus proches sur ${eng.length} bateaux`,eng.slice(0,8).map(e=>{const p=Math.min(100,e.v.eh/e.v.next*100),r=e.v.next-e.v.eh;return `<div class="metric" data-tip="${r} h restantes|${esc(e.b.name)} · ${e.v.eh} h sur ${e.v.next} h"><span>${e.b.name} <span class="muted" style="font-size:12.5px">· révision à ${e.v.next} h</span></span><span class="v">${nf(e.v.eh)} h</span><div class="mbar"><i style="width:${p}%;background:${r<=10?'var(--orange)':'var(--bar-2)'}"></i></div></div>`}).join('')+'<div class="chart-note">Orange : moins de 10 heures avant la révision. Il faut planifier un créneau.</div><a class="linkbtn" href="#capteurs" data-dev="eh">Voir tous les bateaux →</a>')},
    {id:'charge',l:'Charge semaine 48',v:'110 %',s:'77 h prévues pour 70 h',st:'crit',body:()=>card('Charge de l’atelier','Heures de travail prévues par semaine',barChart({items:LOAD.map((v,i)=>({l:WK[i],v,c:v>70?'over':'',tip:`prévues · semaine ${WK[i].slice(1)}${v>70?' · au-dessus de la capacité':''}`,show:true})),max:90,ticks:[0,30,60,90],fmt:v=>v+' h',ref:{v:70,l:'Capacité 70 h'},label:'Charge de l’atelier par semaine'})+`<div class="legend"><span><i style="background:var(--bar-2)"></i>Heures prévues</span><span><i style="background:var(--orange)"></i>Au-dessus de la capacité</span></div>`,['Capacité','70 h'])},
    {id:'plan',l:'Planning',v:`${PLAN.length}`,s:'interventions sur 2 semaines',st:'',body:()=>card('Planning des interventions','Créées à partir des capteurs et des inspections',PLAN.map(p=>{const b=boat(p.b);return `<div class="plan"><span class="d">${p.d}</span><div style="min-width:0"><b style="font-weight:600">${b.name}</b> <span class="muted">· ${b.owner}</span><div style="font-size:13.5px">${p.t}</div></div><span class="chip ${p.st==='crit'?'c-red':'c-yellow'}">${p.o}</span></div>`}).join(''))},
    {id:'pieces',l:'Pièces à prévoir',v:'3',s:'à commander cette semaine',st:'',body:()=>card('Pièces à prévoir','D’après le planning',[['Kit vidange + filtres','Mate (Simulation 22), Fastkiti','2 kits'],['Batterie de service 12 V AGM','Test Boat (santé 62 %)','1'],['Déshumidificateur 12 V','Princess 1','1']].map(r=>`<div class="act"><span class="b" style="background:var(--blue)"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${r[0]}</b><div class="muted" style="font-size:12.5px">${r[1]}</div></div><span style="font-variant-numeric:tabular-nums;font-weight:600">${r[2]}</span></div>`).join(''))}
  ]}
};
function vDashboard(){
  const ro=roleOf(S.role),T=TABS[S.role](),cur=S.dtab[S.role],t=T.find(x=>x.id===cur);
  return `<div class="top"><div class="h1">Tableau de bord</div>${roleTabs()}</div>
  <div class="wrap"><p class="role-intro"><b>Vue ${ro.l}.</b> ${ro.d} Tapez sur une case pour l’ouvrir.</p>
    <div class="grid g4" role="tablist" aria-label="Sections du tableau de bord">${T.map(x=>`<button class="card kpi tabk ${x.st?'is-'+x.st:''}" data-dtab="${x.id}" role="tab" aria-selected="${x.id===cur}" aria-expanded="${x.id===cur}">
      <small>${x.l}</small><b>${x.v}</b><span class="s">${x.s}</span><span class="chev">${ic('chev',18,2)}</span></button>`).join('')}</div>
    ${t?`<div class="panel" role="tabpanel">${t.body()}</div>`:`<div class="hint">${ic('grid',18)} Tapez sur une case pour voir le détail.</div>`}
    <div class="proto-note">Prototype · données d’exemple (compte de test)</div></div>`;
}

/* ======================= Capteurs : familles repliables, filtrées par métier ======================= */
const CHARTS_FOR={technicien:['batt','hum','pres','res'],atelier:['batt','res'],commercial:['batt','hum'],directeur:['batt','pres']};
function acc(key,title,meta,body,defOpen){
  const open=S.acc[key]!==undefined?S.acc[key]:defOpen;
  return `<section class="acc ${open?'open':''}"><button class="acc-h" data-acc="${key}" data-def="${defOpen?1:0}" aria-expanded="${open}"><span class="acc-t"><b>${title}</b>${meta?`<span>${meta}</span>`:''}</span><span class="chev">${ic('chev',18,2)}</span></button>${open?`<div class="acc-b">${body()}</div>`:''}</section>`;
}

/* = fin */

/* ======================= Bateaux : liste qui tient la charge + fiche à onglets ======================= */
Object.assign(S,{bq:'',bf:'all',bsort:'grav',blim:20,bpage:0,bfOpen:false,capBoat:null,ficheOpen:true,ftab:null,dev:null,cf:'all',clim:15,alAll:false,oppAll:false});
const BF=[
  {id:'all',l:'Tous',t:()=>true},
  {id:'crit',l:'Alerte',t:b=>boatState(b.id)==='crit'},
  {id:'warn',l:'À surveiller',t:b=>boatState(b.id)==='warn'},
  {id:'off',l:'Sans données',t:b=>!V[b.id]||!online(b.id)},
  {id:'mes',l:'Mise en service / stock',t:b=>b.status!=='Vendu'}
];
function boatList(){
  const q=norm(S.bq.trim()),f=BF.find(x=>x.id===S.bf);
  let L=S.boats.filter(b=>f.t(b)&&(!q||norm(b.name+' '+b.owner+' '+(b.model||'')+' '+(b.hin||'')).includes(q)));
  const st=b=>{const s=boatState(b.id);return V[b.id]&&!online(b.id)&&s==='ok'?'warn':s};
  if(S.bsort==='grav')L.sort((a,b)=>RANK[st(a)]-RANK[st(b)]||a.name.localeCompare(b.name,'fr'));
  else if(S.bsort==='nom')L.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  else if(S.bsort==='rev')L.sort((a,b)=>(V[a.id]?V[a.id].next-V[a.id].eh:1e6)-(V[b.id]?V[b.id].next-V[b.id].eh:1e6));
  return L;
}

function updateBoats(){const el=document.getElementById('blist');if(el)el.innerHTML=boatRowsHTML();const c=document.getElementById('bfil');if(c)c.innerHTML=bfChips();}
const bfChips=()=>BF.map(f=>`<button class="fchip" data-bf="${f.id}" aria-pressed="${S.bf===f.id}">${f.l} <span>${S.boats.filter(f.t).length}</span></button>`).join('');




/* ======================= Capteurs : un capteur, tous les bateaux ======================= */
function capRows(d){
  return withData().map(b=>{const v=V[b.id];if(v[d.k]===undefined)return null;return {b,v,s:d.st(v)}}).filter(Boolean)
    .sort((a,c)=>RANK[a.s[0]]-RANK[c.s[0]]||a.b.name.localeCompare(c.b.name,'fr'));
}


/* = fin */

/* ======================= Fiche bateau › Capteurs : le bateau en plan + son journal ======================= */
S.zone={};
const ZONES=[
  {id:'elec',l:'Électricité',devs:['battS','quai','sol'],r:[40,40,110,220],t:[95,150]},
  {id:'moteur',l:'Salle moteur',devs:['eh','battM','carb'],r:[150,40,140,110],t:[220,95]},
  {id:'reserv',l:'Réservoirs',devs:['eau','noires'],r:[150,150,140,110],t:[220,205]},
  {id:'pont',l:'Poste de pilotage',devs:['gsm','pres'],r:[290,40,140,110],t:[360,95]},
  {id:'cale',l:'Cale',devs:['cale'],r:[290,150,140,110],t:[360,205]},
  {id:'cabine',l:'Cabine',devs:['hum','porte','mvt','fumee'],r:[430,30,270,240],t:[525,150]}
];
const HULL='M40,58 L470,38 Q700,150 470,262 L40,242 Q28,150 40,58 Z';
function zoneInfo(id,z){
  const v=V[id],ds=DEV.filter(d=>z.devs.includes(d.k)&&v[d.k]!==undefined).map(d=>({...d,s:d.st(v)}));
  const st=!ds.length?'none':ds.some(d=>d.s[0]==='crit')?'crit':ds.some(d=>d.s[0]==='warn')?'warn':'ok';
  const key=ds.find(d=>d.s[0]===st)||ds[0];
  return {ds,st,key,missing:z.devs.filter(k=>v[k]===undefined)};
}
function boatPlan(b){
  const v=V[b.id],info=ZONES.map(z=>({z,...zoneInfo(b.id,z)}));
  const cur=S.zone[b.id]||(info.find(i=>i.st==='crit')||info.find(i=>i.st==='warn')||info[0]).z.id;
  const fill={crit:'var(--red-bg)',warn:'var(--orange-bg)',ok:'var(--green-bg)',none:'var(--line-2)'};
  const svg=`<svg class="plan-svg" viewBox="0 0 720 300" role="group" aria-label="Plan du bateau ${esc(b.name)}">
    <defs><clipPath id="hull"><path d="${HULL}"/></clipPath></defs>
    <path d="${HULL}" fill="var(--panel)" stroke="var(--line)" stroke-width="2"/>
    <g clip-path="url(#hull)">${info.map(i=>{const [x,y,w,h]=i.z.r;return `<g class="zn ${i.z.id===cur?'on':''}" data-zone="${i.z.id}" tabindex="0" role="button" aria-pressed="${i.z.id===cur}" aria-label="${esc(i.z.l)}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill[i.st]}"/></g>`}).join('')}</g>
    ${info.map(i=>{const [tx,ty]=i.z.t;return `<g class="zt" pointer-events="none"><text x="${tx}" y="${ty-12}" text-anchor="middle" class="zl">${esc(i.z.l)}</text>
      <text x="${tx}" y="${ty+20}" text-anchor="middle" class="zv is-${i.st}">${i.key?esc(i.key.main(v)):'—'}</text></g>`}).join('')}
    <path d="${HULL}" fill="none" stroke="var(--ink-3)" stroke-width="2"/>
    <text x="700" y="290" text-anchor="end" class="zl">Avant →</text>
  </svg>`;
  const zi=info.find(i=>i.z.id===cur);
  const chips=info.map(i=>`<button class="zchip ${i.z.id===cur?'on':''}" data-zone="${i.z.id}" aria-pressed="${i.z.id===cur}"><span class="sdot is-${i.st==='none'?'off':i.st}"></span>${esc(i.z.l)}<b>${i.key?esc(i.key.main(v)):'—'}</b></button>`).join('');
  return {svg,chips,zi};
}
function journal(b){
  const v=V[b.id];
  if(b.id==='b2')return [['mar. 10 · 11 h','Batterie de service sous 11,8 V','crit'],['mar. 10 · 10 h 12','Message du client : « une alerte batterie s’affiche »','info'],['mar. 10 · 6 h','Batterie de service sous 12,2 V','warn'],['lun. 9 · 18 h','Prise de quai débranchée','warn'],['dim. 8 · 16 h 40','Retour au port après 2 h 10 de moteur','ok']];
  const E=devicesOf(b.id).filter(d=>d.s[0]!=='ok').map(d=>[v.since&&v.since[d.k]?v.since[d.k]:'récemment',`${d.n} : ${d.s[1].toLowerCase()}`,d.s[0]]);
  let h=0;for(const c of b.id)h+=c.charCodeAt(0);
  E.push([`dernier envoi`,`Le boîtier a envoyé ses valeurs ${v.lastSeen}`,online(b.id)?'ok':'warn']);
  if(v.porte!==undefined)E.push([`sam. 7 · ${9+h%4} h ${10+h%40}`,'Porte ouverte puis fermée : propriétaire à bord','info']);
  E.push([`dim. 8 · ${14+h%3} h`,`Sortie en mer · ${1+h%3} h ${10+h%45} de moteur`,'ok']);
  E.push(['ven. 6 · 13 h','Batterie de service chargée à 100 %','ok']);
  return E;
}
function tabCapteurs(b){
  const v=V[b.id],ro=roleOf(S.role);S.cb=b.id;
  if(!v)return `<div class="blk offline"><div class="medal">${ic('wifi',28,1.6)}</div><div style="flex:1;min-width:200px"><b>${esc(b.name)} n’envoie pas encore de données</b><div class="muted">${NOBOX[b.id]}</div></div>${b.steps?`<button class="btn btn-out" data-ftab="suivi">Voir la mise en service</button>`:''}</div>`;
  const {svg,chips,zi}=boatPlan(b);
  const J=journal(b);
  const CH4={
    batt:()=>card('Batterie de service','Tension, une mesure par heure',battChart(b.id),['Maintenant',`${nf(v.battS,1)} V`]),
    hum:()=>card('Humidité de la cabine','En %, une mesure par heure',humChart(b.id),['Maintenant',`${nf(v.hum)} %`]),
    res:()=>card('Réservoirs','Niveau actuel',barChart({items:[['Carburant','carb'],['Eau douce','eau'],['Eaux noires','noires']].filter(r=>v[r[1]]!=null).map(r=>({l:r[0],v:v[r[1]],show:true,tip:r[0]})),max:100,ticks:[0,25,50,75,100],tf:t=>t+' %',fmt:t=>t+' %',label:'Niveau des réservoirs',h:210})),
    pres:()=>card('Pression atmosphérique','En hPa',presChart(b.id),['Maintenant',`${nf(v.pres)} hPa`])
  };
  return `<div class="bview">
    <div class="blk plan-blk"><div class="row"><h4>Le bateau en plan</h4><span class="muted" style="font-size:12.5px">Tapez sur une zone</span></div>
      ${svg}<div class="zchips">${chips}</div></div>
  </div>
  <div class="bview2"><div class="blk"><div class="row"><h4>${esc(zi.z.l)}</h4>${stChip(zi.st==='none'?'off':zi.st)}</div>
    ${zi.ds.length?`<div class="dev-grid" style="margin-top:12px;grid-template-columns:repeat(auto-fill,minmax(230px,1fr))">${zi.ds.map(d=>devCard(d,v)).join('')}</div>`:''}
    ${zi.missing.length?`<div class="${S.role==='commercial'?'warn-note':'muted'}" style="font-size:13px;margin-top:10px">${S.role==='commercial'?ic('euro',16):''}<span>Pas de capteur ici pour : ${zi.missing.map(k=>DEV.find(d=>d.k===k).n.toLowerCase()).join(', ')}.${S.role==='commercial'?' C’est une vente possible.':''}</span></div>`:''}
  </div>
  <div class="blk"><h4>Journal du bateau</h4><ol class="jrnl">${J.map(e=>`<li class="is-${e[2]}"><span class="jd">${esc(e[0])}</span><span>${esc(e[1])}</span></li>`).join('')}</ol></div></div>
  <div class="accs">${acc('courbes','Courbes et historique','<span>7 jours ou mois · ensemble ou individuel · zoom</span>',()=>`<div id="explorer" data-boat="${b.id}">${explorerHTML(b.id)}</div>${CHARTS_FOR[S.role].includes('res')?`<div class="grid g2">${CH4.res()}</div>`:''}`,false)}</div>`;
}

/* ======================= Capteurs : la grille du parc (bateaux × capteurs) ======================= */
const COLS={
  technicien:['battS','quai','gsm','cale','battM','hum','porte','eh','carb','noires'],
  atelier:['eh','battM','battS','carb','noires','cale','hum','quai','gsm','porte'],
  commercial:['cale','porte','mvt','battS','hum','eh','quai','gsm','carb','noires'],
  directeur:['battS','quai','cale','gsm','eh','hum','porte','battM','carb','noires']
};
const SHORT={battS:['Batt. service','V'],battM:['Batt. moteur','V'],quai:['Prise de quai',''],eh:['Révision dans',''],cale:['Cale',''],porte:['Porte',''],mvt:['Mouvement',''],hum:['Humidité',''],carb:['Carburant',''],noires:['Eaux noires',''],gsm:['Réseau',''],eau:['Eau douce',''],pres:['Pression','hPa'],fumee:['Fumée',''],sol:['Solaire','']};
function cellVal(k,v){
  switch(k){case'battS':return nf(v.battS,1);case'battM':return nf(v.battM,1);case'quai':return v.quai?'Branché':'Coupé';case'eh':return (v.next-v.eh)+' h';case'cale':return v.cale?'Eau':'Sec';
  case'porte':return v.porte?'Ouverte':'Fermée';case'mvt':return v.mvt?'Oui':'Non';case'hum':return nf(v.hum)+' %';case'carb':return v.carb+' %';case'noires':return v.noires+' %';case'gsm':return v.gsm+'/5';default:return DEV.find(d=>d.k===k).main(v)}
}
function vCapteursGrid(){
  const ro=roleOf(S.role),cols=COLS[S.role],k=S.dev||null;
  const B=withData();
  const worst=b=>{const s=cols.map(c=>V[b.id][c]===undefined?'ok':DEV.find(d=>d.k===c).st(V[b.id])[0]);return s.includes('crit')?'crit':s.includes('warn')?'warn':'ok'};
  let rows=B.map(b=>({b,w:worst(b)})).filter(r=>S.cf==='all'||r.w===S.cf).sort((a,c)=>RANK[a.w]-RANK[c.w]||a.b.name.localeCompare(c.b.name,'fr'));
  const tot=rows.length,shown=rows.slice(0,S.clim+5);
  const colBad=c=>B.filter(b=>V[b.id][c]!==undefined&&DEV.find(d=>d.k===c).st(V[b.id])[0]!=='ok').length;
  const colMiss=c=>B.filter(b=>V[b.id][c]===undefined).length;
  const cnt=s=>B.filter(b=>worst(b)===s).length;
  const isCom=S.role==='commercial';
  const mx=`<div class="mxw"><table class="mx"><thead><tr><th class="bc">Bateau</th>${cols.map(c=>{const d=DEV.find(x=>x.k===c),bad=colBad(c),miss=colMiss(c);return `<th><button class="mxh ${c===k?'on':''}" data-dev="${c}" aria-pressed="${c===k}" data-tip="${bad} hors seuil · ${miss} sans capteur|${esc(d.n)} · tapez pour le détail">${esc(SHORT[c][0])}${SHORT[c][1]?` <span>${SHORT[c][1]}</span>`:''}${bad?`<i class="${bad&&B.some(b=>V[b.id][c]!==undefined&&d.st(V[b.id])[0]==='crit')?'is-crit':''}">${bad}</i>`:''}</button></th>`}).join('')}</tr></thead>
    <tbody>${shown.map(({b})=>{const v=V[b.id];return `<tr><th class="bc"><a href="#capteurs" data-capboat="${b.id}">${esc(b.name)}</a><span>${esc(b.owner)}</span></th>${cols.map(c=>{
      if(v[c]===undefined&&isCom&&PROD[c])return `<td class="${c===k?'sel':''}">${S.sent[sentKey(b.id,c)]?`<span class="cell is-ok" data-tip="Proposition envoyée|${esc(b.name)} · ${esc(cap1(PROD[c].n))}">Proposé ✓</span>`:`<button class="cell is-none sell" data-propose="${b.id}|${c}" data-tip="${esc(PROD[c].pr)} · tapez pour préparer le message|${esc(b.name)} · ${esc(cap1(PROD[c].n))}">+ proposer</button>`}</td>`;
      if(v[c]===undefined)return `<td class="${c===k?'sel':''}"><span class="cell is-none ${isCom?'sell':''}" data-tip="${isCom?'À proposer':'Pas de capteur'}|${esc(b.name)} · ${esc(DEV.find(d=>d.k===c).n)}">${isCom?'+ proposer':'—'}</span></td>`;
      const d=DEV.find(x=>x.k===c),s=d.st(v);return `<td class="${c===k?'sel':''}"><span class="cell is-${s[0]}" data-tip="${esc(d.main(v))} · ${esc(s[1])}|${esc(b.name)} · ${esc(d.n)}">${esc(cellVal(c,v))}</span></td>`}).join('')}</tr>`}).join('')}</tbody></table></div>
    ${tot>shown.length?`<button class="btn btn-ghost more" data-cmore>Afficher 15 bateaux de plus · ${tot-shown.length} restants</button>`:''}`;
  let zoom='';
  if(k){
    const d=DEV.find(x=>x.k===k),R=capRows(d),E=B.length,c=s=>R.filter(r=>r.s[0]===s).length;
    const dist=(DIST[d.k]||[]).map(([l,f,bad])=>({l,v:R.filter(r=>f(r.v)).length,c:bad?'over':'',show:true,tip:`bateau(x) · ${l}`}));
    const top=Math.ceil(Math.max(4,...dist.map(x=>x.v))/4)*4;
    zoom=`<section class="card zoom"><div class="card-h"><div><h3>${esc(d.n)} sur tout le parc</h3><div class="sub">${esc(d.what)}</div></div><button class="btn btn-ghost btn-sm" data-dev="" style="margin-left:auto">${ic('x',14)} Fermer</button></div>
      <div class="card-b zoom-b">
        <div class="zstats">${[['Équipés',`${R.length} / ${E}`,''],['En alerte',c('crit'),c('crit')?'crit':''],['À surveiller',c('warn'),c('warn')?'warn':''],['Sans capteur',E-R.length,isCom&&E-R.length?'sell':'']].map(x=>`<div class="zs ${x[2]?'is-'+x[2]:''}"><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}
          ${d.why[S.role]?`<div class="why2"><b>Pour le ${ro.l.toLowerCase()} :</b> ${esc(d.why[S.role])}</div>`:''}
          <div class="codes">${d.raw.map(r=>`<span class="code">${esc(r)}</span>`).join('')}</div></div>
        <div style="min-width:0">${barChart({items:dist,max:top,ticks:[0,top/4,top/2,top*3/4,top],fmt:v=>`${v}`,label:'Répartition des bateaux',h:200})}<div class="legend"><span><i style="background:var(--bar-2)"></i>Normal</span><span><i style="background:var(--orange)"></i>Hors seuil</span></div></div>
      </div></section>`;
  }
  return `<div class="top"><div class="h1">Capteurs</div>${roleTabs()}</div>
  <div class="wrap">
    <p class="role-intro"><b>La grille du parc.</b> Une ligne par bateau, une colonne par capteur. Seuls les problèmes ressortent en couleur. Tapez sur un nom de colonne pour comparer ce capteur sur tout le parc, ou sur un bateau pour ouvrir sa fiche.</p>
    ${zoom}
    <section class="card"><div class="card-b" style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;justify-content:space-between">
        <div class="fchips">${[['all','Tous',B.length],['crit','Alerte',cnt('crit')],['warn','À surveiller',cnt('warn')],['ok','OK',cnt('ok')]].map(([id,l,n])=>`<button class="fchip" data-cf="${id}" aria-pressed="${S.cf===id}">${l} <span>${n}</span></button>`).join('')}</div>
        <div class="mxleg"><span><span class="cell is-crit">11,4</span> Alerte</span><span><span class="cell is-warn">79 %</span> À surveiller</span><span><span class="cell is-ok">12,6</span> OK</span><span><span class="cell is-none ${isCom?'sell':''}">${isCom?'+ proposer':'—'}</span> Pas de capteur</span></div>
      </div>
      ${mx}
      <div class="muted" style="font-size:12.5px">${S.boats.length-B.length} bateaux n’envoient pas de données (stock, mise en service) et ne sont pas dans la grille. Colonnes choisies pour le ${ro.l.toLowerCase()}.</div>
    </div></section>
    <div class="accs">
    ${acc('lire','Comment lire les valeurs','<span>Oui / Non, pourcentage, mesure</span>',()=>`<div class="types3">
      <div class="vt"><span class="gz">OUI/NON</span><p><b>Oui / Non</b> : la porte est ouverte ou fermée, il y a de l’eau ou pas. Dans le fichier : 0 = non, 1 = oui.</p></div>
      <div class="vt"><span class="gz">68 %</span><p><b>Pourcentage</b> : une jauge, comme la batterie d’un téléphone ou le niveau d’un réservoir.</p></div>
      <div class="vt"><span class="gz">12,6 V</span><p><b>Mesure</b> : un chiffre avec une unité (volts, °C, heures, hPa…).</p></div></div>`,false)}
    ${acc('liste',`Les ${SENSORS.length} capteurs du fichier`,'<span>Recherche par nom, famille et métier</span>',()=>listSection(),false)}
    </div>
    <div class="proto-note">Prototype · ${S.boats.length} bateaux d’exemple. La liste des 169 capteurs vient du fichier Capteurs.xlsx.</div>
  </div>`;
}

/* ======================= Bateaux : même mise en page que Seanapps Pro, optimisée pour une grande flotte ======================= */
S.fx={hist:false,docs:false};
const PER=10;
function boatRowsHTML(){
  const L=boatList(),pages=Math.max(1,Math.ceil(L.length/PER));
  if(S.bpage>=pages)S.bpage=pages-1;
  const shown=L.slice(S.bpage*PER,S.bpage*PER+PER);
  if(!L.length)return `<div class="muted" style="padding:16px 6px">Aucun bateau ne correspond. Effacez la recherche ou choisissez « Tous ».</div>`;
  const rows=shown.map(x=>{const n=boatIssues(x.id);
    return `<button class="boat ${x.id===S.sel?'on':''}" data-boat="${x.id}">
      <span class="av">${esc(x.brand)}</span>
      <span class="nm"><b>${esc(x.name)}</b><span class="muted">${esc(x.owner)}</span></span>
      ${n?`<span class="dot">${n}</span>`:''}
      <span class="chip ${x.status==='Vendu'?'c-green':'c-yellow'}">${x.status}</span>
    </button>`}).join('');
  const win=[];for(let i=Math.max(0,S.bpage-2);i<Math.min(pages,S.bpage+3);i++)win.push(i);
  const pager=`<nav class="pager" aria-label="Pages"><button data-bpage="${S.bpage-1}" ${S.bpage===0?'disabled':''} aria-label="Page précédente">${ic('back',18)}</button>${win.map(i=>`<button data-bpage="${i}" class="${i===S.bpage?'on':''}" aria-current="${i===S.bpage?'page':'false'}">${i+1}</button>`).join('')}<button data-bpage="${S.bpage+1}" ${S.bpage>=pages-1?'disabled':''} aria-label="Page suivante">${ic('chev',18)}</button></nav>
    <div class="muted lcnt">${S.bpage*PER+1}–${Math.min(L.length,S.bpage*PER+PER)} sur ${L.length} bateaux</div>`;
  return `<div class="boats-in">${rows}</div>${pager}`;
}
function vBateaux(){
  const b=sel(),nf_=BF.find(f=>f.id===S.bf);
  return `<div class="split">
    <div class="listcol"><div class="lh">
        <div style="display:flex;align-items:center;gap:10px;font-size:18px;font-weight:500">${ic('back',20)} Mes bateaux <span class="muted" style="font-size:14px;font-weight:400">${S.boats.length}</span></div>
        <div class="search"><label class="in">${ic('search',20)}<input id="q" value="${esc(S.bq)}" placeholder="Rechercher" aria-label="Rechercher un bateau, un client, un HIN" autocomplete="off"><button class="fbtn ${S.bfOpen||S.bf!=='all'?'on':''}" data-bfopen aria-expanded="${S.bfOpen}" aria-label="Filtrer et trier">${ic('filter',20)}</button></label><button class="sq sq-blue" aria-label="Ajouter un bateau">${ic('boat',22)}</button></div>
        ${S.bfOpen?`<div class="fpanel"><div class="fchips" id="bfil" role="group" aria-label="Filtrer">${bfChips()}</div>
          <label class="muted" style="display:flex;gap:8px;align-items:center;font-size:13px">Trier par <select id="bsort" class="bsel"><option value="grav" ${S.bsort==='grav'?'selected':''}>Les plus urgents</option><option value="nom" ${S.bsort==='nom'?'selected':''}>Nom A → Z</option><option value="rev" ${S.bsort==='rev'?'selected':''}>Révision la plus proche</option></select></label></div>`
          :(S.bf!=='all'?`<div class="muted" style="font-size:12.5px">Filtre : <b>${nf_.l}</b> · <button class="linkbtn" data-bf="all">Effacer</button></div>`:'')}
      </div><div class="boats" id="blist">${boatRowsHTML()}</div></div>
    <div class="fiche">${fiche(b)}</div></div>`;
}
function fiche(b){
  const steps=b.steps,n=steps?steps.filter(Boolean).length:0,cur=steps?steps.findIndex(s=>!s):-1;
  const al=boatIssues(b.id),has=!!V[b.id];
  const notifTxt=has?(al?`${al} alerte${al>1?'s':''} capteur${al>1?'s':''}`:'(Aucune)'):'(Aucune)';
  return `
    <div class="fh">${ic('boat',24)}<h2>${esc(b.name)}</h2>
      <span class="chip ${b.status==='Vendu'?'c-green':'c-yellow'}" style="margin-left:auto">${b.status}</span>
      <button class="fold" data-fold aria-expanded="${S.ficheOpen}" aria-label="${S.ficheOpen?'Replier':'Déplier'} les informations">${ic('chev',18,2)}</button>
      ${S.ficheOpen?`<div class="meta"><span>HIN : ${b.hin||'—'}</span><span>N° commande : ${b.order||'—'}</span>${b.model?`<span>Modèle : ${esc(b.model)}</span>`:''}<a href="#bateaux" style="margin-left:auto">Transférer</a></div>`:''}</div>
    ${steps?`<div class="blk">
      <div class="ck-h"><h4>Mise en service</h4>${NEW}<span class="muted" style="margin-left:auto;font-variant-numeric:tabular-nums">${n===5?'Terminée':`${n} étapes sur 5`}</span></div>
      <div class="prog" style="margin:12px 0 4px"><i style="width:${n*20}%;${n===5?'background:var(--green)':''}"></i></div>
      ${STEPS.map((s,i)=>`<div class="step ${steps[i]?'ok':i===cur?'cur':''}"><span class="n">${steps[i]?ic('check',14,3):i+1}</span>
          <div class="sb"><b>${s.t}</b>${!steps[i]&&i===cur?`<div class="sd">${s.d}</div>`:''}${!steps[i]&&i===cur&&s.warn?`<div class="warn-note">${ic('alert',16)}<span>La mise en service envoie un e-mail au client avec son accès à l’app.</span></div>`:''}</div>
          ${!steps[i]&&i===cur&&s.btn&&i!==4?`<button class="btn btn-out btn-sm" data-step="${i}">${s.btn}</button>`:''}</div>`).join('')}
    </div>`:''}
    ${b.insp?`<div class="blk" style="border-left:4px solid var(--orange)"><div class="row"><div><h4>Inspection en retard</h4><div class="muted" style="font-size:13.5px">${b.insp} · prévu avant le 27/08/2026</div></div><button class="btn btn-pri btn-sm" data-insp="t1">${S.tasks.find(t=>t.id==='t1').done?'Inspection faite ✓':'Commencer l’inspection'}</button></div></div>`:''}
    <div class="fgrid">
      <div class="fcol">
        <div class="blk"><div class="row"><h4>Équipement</h4><button class="btn btn-out btn-sm" data-step="3">Diagnostics</button></div>
          <div class="field"><span>Unité principale</span><span style="display:flex;gap:8px;align-items:center">${has||b.id==='b1'?'3426100474':'—'} ${ic('edit',16)}</span></div></div>
        <div class="blk"><div class="row"><h4>Gestion locative</h4><span class="toggle" role="switch" aria-checked="false" aria-label="Gestion locative"></span></div><div class="muted" style="margin-top:6px">Activez la gestion locative pour gérer ce bateau depuis Fleet.</div></div>
        <div class="blk"><div class="row"><h4>Abonnement propriétaire</h4><span class="chip c-grey">${ic('x',12,2)} Aucun</span></div></div>
        <div class="blk"><div class="row"><h4>Abonnement Insight</h4><span class="chip c-red">${ic('x',12,2)} indisponible</span></div><div class="muted" style="margin-top:6px">Pas de consentement du propriétaire</div></div>
      </div>
      <div class="fcol">
        <div class="blk"><h4>Notifications</h4><div class="field" style="justify-content:center;${al?'color:var(--orange-ink);border-color:var(--orange);font-weight:500':''}">${notifTxt}</div>
          ${has?`<a class="btn btn-out" href="#capteurs" data-capboat="${b.id}" style="width:100%;justify-content:center;margin-top:10px">Voir plus${al?' dans Capteurs':''}</a>`:`<button class="btn btn-out" style="width:100%;justify-content:center;margin-top:10px" disabled>Voir plus</button>`}</div>
        <div class="blk"><button class="row xrow" data-fx="hist" aria-expanded="${S.fx.hist}"><h4>Historique</h4><span class="xch ${S.fx.hist?'open':''}">${ic('chev',18)}</span></button>
          ${S.fx.hist?`<div class="xbody">${(b.status==='Vendu'?[['12/09/2026','Contrôle après 1ère saison'],['03/05/2026','Livraison au client'],['28/04/2026','Mise en service']]:[['02/11/2026','Réception du bateau']]).map(h=>`<div class="act"><span class="b" style="background:var(--blue)"></span><span style="flex:1">${h[1]}</span><span class="muted" style="font-variant-numeric:tabular-nums">${h[0]}</span></div>`).join('')}</div>`:''}</div>
        <div class="blk"><button class="row xrow" data-fx="docs" aria-expanded="${S.fx.docs}"><h4>Documents</h4><span class="xch ${S.fx.docs?'open':''}">${ic('chev',18)}</span></button>
          ${S.fx.docs?`<div class="xbody">${['Bon de livraison.pdf','Facture.pdf','Manuel du propriétaire.pdf'].map(d=>`<div class="act"><span class="b" style="background:var(--ink-3)"></span><span style="flex:1">${d}</span></div>`).join('')}</div>`:''}</div>
      </div>
    </div>
    <div class="foot">
      <div class="owner">${ic('user',20)}<span style="flex:1;min-width:0">${esc(b.owner)}</span><span class="ib">${ic('mail',20)}</span><span class="ib">${ic('phone',20)}</span><span class="ib x">${ic('x',20)}</span></div>
      ${steps&&b.status==='Mise en service'?`<button class="big-btn" id="mes" ${cur!==4?'disabled title="Terminez les étapes précédentes"':''}>Préparer la mise en service</button>`:`<button class="big-btn" style="background:var(--panel);color:var(--blue);border:1px solid var(--blue)">Voir la fiche client</button>`}
    </div>`;
}

/* ======================= Capteurs : la grille du parc, ou un bateau en plan ======================= */
function vCapteurs(){
  if(S.capBoat&&V[S.capBoat])return capBoatPage(boat(S.capBoat));
  S.capBoat=null;return vCapteursGrid();
}
function capBoatPage(b){
  const v=V[b.id];
  return `<div class="top"><div class="h1">Capteurs</div>${roleTabs()}</div>
  <div class="wrap">
    <div><button class="btn btn-ghost btn-sm" data-capback>${ic('back',16)} Retour à la grille du parc</button></div>
    <section class="card"><div class="card-b" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
      <div style="flex:1;min-width:220px"><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h2 style="margin:0;font-size:20px">${esc(b.name)}</h2>${stChip(boatState(b.id))}</div>
        <div class="muted">${esc(b.owner)}${b.model?` · ${esc(b.model)}`:''} · dernier envoi ${v.lastSeen}</div></div>
      <a class="btn btn-out btn-sm" href="#bateaux" data-go-boat="${b.id}">${ic('boat',16)} Ouvrir la fiche bateau</a>
    </div></section>
    ${tabCapteurs(b)}
  </div>`;
}

/* ======================= Recherche universelle ======================= */
const norm=s=>Array.from(String(s)).map(c=>c.normalize('NFD')[0]||c).join('').toLowerCase();
const SUGG={
  directeur:['Alertes','Batterie','Prise de quai','Princess 2','Statut concession','Ventes'],
  commercial:['Batterie usée','Porte','Eau dans la cale','Antivol','Humidité','Catalogue'],
  technicien:['Bilge','GSM','Prise de quai','Bluetooth','Kelvin','À vérifier'],
  atelier:['Heures moteur','Vidange','Huile','Carburant','Eaux noires','Groupe électrogène']
};
const GS={q:'',open:false,sel:0,items:[]};
function recent(){try{return JSON.parse(localStorage.getItem('sp-recent')||'[]')}catch(e){return[]}}
function pushRecent(q){q=q.trim();if(!q)return;try{const r=[q,...recent().filter(x=>norm(x)!==norm(q))].slice(0,5);localStorage.setItem('sp-recent',JSON.stringify(r))}catch(e){}}
function pages(){
  const P=[
    {l:'Tableau de bord',k:'accueil dashboard',go:()=>{location.hash='#dashboard'}},
    {l:'Capteurs',k:'sondes boitier valeurs',go:()=>{location.hash='#capteurs'}},
    {l:'Bateaux',k:'fiche bateau mise en service',go:()=>{location.hash='#bateaux'}},
    {l:'Messages',k:'clients repondre conversation',go:()=>{location.hash='#messages'}},
    {l:'Ma concession',k:'statut concession criteres trimestre',go:()=>{location.hash='#concession'}},
    {l:'Bilan du lundi',k:'email semaine resume',go:()=>{location.hash='#bilan'}},
    {l:'Déclaration de stock',k:'stock declarer',go:()=>{location.hash='#stock'}}
  ];
  ROLES.forEach(r=>TABS[r.id]().forEach(t=>P.push({l:`${r.l} › ${t.l}`,k:`${r.l} ${t.s}`,go:()=>{S.role=r.id;try{localStorage.setItem('sp-role',r.id)}catch(e){}S.dtab[r.id]=t.id;location.hash==='#dashboard'?render():location.hash='#dashboard'}})));
  return P;
}
function score(q,...fields){let best=0;fields.forEach((f,i)=>{const n=norm(f);const w=i===0?3:i===1?2:1;if(n.startsWith(q))best=Math.max(best,10*w);else if(n.includes(' '+q))best=Math.max(best,6*w);else if(n.includes(q))best=Math.max(best,3*w)});return best}
function hl(text,q){
  const t=String(text),n=norm(t),i=q?n.indexOf(q):-1;
  return i<0?esc(t):esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length));
}
function openSensor(raw){S.q=raw;S.fam='';S.acc.liste=true;goList()}
function goList(){const done=()=>{const el=document.querySelector('[data-acc="liste"]');if(el)el.scrollIntoView({block:'start',behavior:'smooth'})};if(route()==='capteurs'){render();done()}else{location.hash='#capteurs';setTimeout(done,30)}}
function searchAll(qRaw){
  const q=norm(qRaw.trim());const G=[];if(!q)return G;
  const pg=pages().map(p=>({p,s:score(q,p.l,p.k)})).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,4);
  if(pg.length)G.push({t:'Écrans',items:pg.map(({p})=>({i:'grid',h:hl(p.l,q),sub:'Aller à l’écran',go:p.go}))});
  const bt=S.boats.map(b=>({b,s:score(q,b.name,b.owner)})).filter(x=>x.s).slice(0,4);
  if(bt.length)G.push({t:'Bateaux et clients',items:bt.map(({b})=>({i:'boat',h:hl(b.name,q),sub:`${hl(b.owner,q)} · ${b.status}`,st:boatState(b.id),go:()=>{S.sel=b.id;S.ftab=null;location.hash==='#bateaux'?render():location.hash='#bateaux'}}))});
  const al=alerts().map(a=>({a,s:score(q,a.d.n,a.b.name+' '+a.txt,a.d.raw.join(' '))})).filter(x=>x.s).slice(0,4);
  if(al.length)G.push({t:'Alertes en cours',items:al.map(({a})=>({i:'alert',h:`${esc(a.b.name)} · ${hl(a.d.n,q)} ${esc(a.val)}`,sub:esc(a.txt),st:a.sev,go:()=>{S.capBoat=a.b.id;location.hash==='#capteurs'?render():location.hash='#capteurs'}}))});
  const dv=DEV.map(d=>({d,s:score(q,d.n,d.raw.join(' '),d.what)})).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,3);
  if(dv.length)G.push({t:'Comparer sur tout le parc',items:dv.map(({d})=>{const R=capRows(d),bad=R.filter(r=>r.s[0]!=='ok').length;return {i:'pulse',h:hl(d.n,q),sub:`${R.length} bateaux équipés${bad?` · ${bad} hors seuil`:''}`,go:()=>{S.dev=d.k;S.cf='all';S.clim=15;location.hash==='#capteurs'?render():location.hash='#capteurs'}}})});
  const sn=SENSORS.map(s=>({s,sc:score(q,s[3],s[0],s[4]+' '+FAM[s[2]].t+' '+mt(s[1])+' '+s[1])})).filter(x=>x.sc).sort((a,b)=>b.sc-a.sc);
  if(sn.length)G.push({t:`Capteurs de la liste · ${sn.length} sur ${SENSORS.length}`,items:sn.slice(0,6).map(({s})=>({i:'pulse',h:`${hl(s[3],q)} <span class="code">${hl(s[0],q)}</span>`,sub:`${esc(FAM[s[2]].t)} · ${esc(mt(s[1]))}`,go:()=>openSensor(s[0])})).concat(sn.length>6?[{i:'search',h:`<b>Voir les ${sn.length} capteurs pour « ${esc(qRaw.trim())} »</b>`,sub:'Ouvre la liste filtrée',go:()=>{S.q=qRaw.trim();S.fam='';S.acc.liste=true;goList()}}]:[])});
  const sh=shop().map(x=>({x,s:score(q,x[0],x[3])})).filter(y=>y.s).slice(0,3);
  if(sh.length)G.push({t:'Catalogue Seanapps',items:sh.map(({x})=>({i:'euro',h:hl(x[0],q),sub:`${x[1]} · à proposer à ${withData().length-x[2]} bateaux`,go:()=>{S.role='commercial';S.dtab.commercial='cat';location.hash==='#dashboard'?render():location.hash='#dashboard'}}))});
  return G;
}
function chips(list,cls){return list.map(s=>`<button class="gchip ${cls||''}" data-gs="${esc(s)}">${cls==='rec'?ic('hist',14):ic('search',14)}${esc(s)}</button>`).join('')}
function renderResults(){
  const box=document.getElementById('gres');if(!box)return;
  if(!GS.open){box.hidden=true;return}
  const ro=roleOf(S.role),q=GS.q.trim();
  let html='';GS.items=[];
  if(!q){
    const rc=recent();
    html=`<div class="gsec"><div class="gt">Recherches conseillées pour le ${ro.l.toLowerCase()}</div><div class="gchips">${chips(SUGG[S.role])}</div></div>
      ${rc.length?`<div class="gsec"><div class="gt">Vos dernières recherches</div><div class="gchips">${chips(rc,'rec')}</div></div>`:''}
      <div class="gsec gtip">${ic('book',16)}<span>Cherchez en français ou avec le nom du fichier : « cale » ou « Bilge », « batterie » ou « SOC ». ${SENSORS.length} capteurs, ${S.boats.length} bateaux et tous les écrans.</span></div>`;
  }else{
    const G=searchAll(q);
    if(!G.length){
      html=`<div class="gsec"><div class="gempty">Aucun résultat pour « ${esc(q)} ».</div><div class="gt">Essayez plutôt</div><div class="gchips">${chips(SUGG[S.role])}</div></div>`;
    }else{
      let n=0;
      html=G.map(g=>`<div class="gsec"><div class="gt">${esc(g.t)}</div>${g.items.map(it=>{GS.items.push(it);const k=n++;return `<button class="gitem ${k===GS.sel?'on':''}" data-gi="${k}" role="option" aria-selected="${k===GS.sel}"><span class="gi">${ic(it.i,18)}</span><span class="gx"><span class="gh">${it.h}</span><span class="gs">${it.sub}</span></span>${it.st?`<span class="sdot is-${it.st}"></span>`:''}</button>`}).join('')}</div>`).join('');
    }
  }
  box.innerHTML=html;box.hidden=false;
  const on=box.querySelector('.gitem.on');if(on)on.scrollIntoView({block:'nearest'});
}
function choose(k){const it=GS.items[k];if(!it)return;pushRecent(GS.q);closeSearch();it.go();}
function closeSearch(){GS.open=false;renderResults();}
function gbar(){
  return `<div class="gbar"><div class="gwrap"><label class="gin" for="gq">${ic('search',20)}<input id="gq" type="search" placeholder="Rechercher un capteur, un bateau, un client, un écran…" autocomplete="off" aria-label="Rechercher partout" role="combobox" aria-expanded="false" aria-controls="gres"><kbd>/</kbd></label>
    <div class="gres" id="gres" role="listbox" hidden></div></div></div>`;
}
document.addEventListener('focusin',e=>{if(e.target.id==='gq'){GS.open=true;GS.sel=0;renderResults();e.target.setAttribute('aria-expanded','true')}});
document.addEventListener('input',e=>{if(e.target.id==='gq'){GS.q=e.target.value;GS.sel=0;GS.open=true;renderResults()}});
document.addEventListener('keydown',e=>{
  const gq=document.getElementById('gq');
  if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();gq.focus();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();gq.focus();return}
  if(e.target!==gq)return;
  if(e.key==='ArrowDown'){e.preventDefault();GS.sel=Math.min(GS.items.length-1,GS.sel+1);renderResults()}
  else if(e.key==='ArrowUp'){e.preventDefault();GS.sel=Math.max(0,GS.sel-1);renderResults()}
  else if(e.key==='Enter'){e.preventDefault();if(GS.items.length)choose(GS.sel);gq.blur()}
  else if(e.key==='Escape'){closeSearch();gq.blur()}
});
document.addEventListener('pointerdown',e=>{
  const gi=e.target.closest('[data-gi]');if(gi){e.preventDefault();choose(+gi.dataset.gi);document.getElementById('gq').blur();return}
  const gc=e.target.closest('[data-gs]');if(gc){e.preventDefault();const gq=document.getElementById('gq');gq.value=gc.dataset.gs;GS.q=gq.value;GS.sel=0;renderResults();gq.focus();return}
  if(!e.target.closest('.gwrap'))closeSearch();
});

/* ======================= Proposer un produit : message prêt à envoyer, avec le lien du produit ======================= */
/* Adresse de la boutique : à remplacer par les vraies pages produit Seanapps. */
const SHOP_BASE='https://www.seanapps.app/boutique/';
const PROD={
  cale:{n:'capteur de présence d’eau',pr:'178,80 €',slug:'capteur-presence-eau',why:'n’a pas encore de capteur de présence d’eau dans la cale',gain:'Vous seriez prévenu sur votre téléphone dès que de l’eau entre dans la cale, même quand vous n’êtes pas à bord.'},
  porte:{n:'capteur d’ouverture de porte magnétique',pr:'94,80 €',slug:'capteur-ouverture-porte',why:'n’a pas encore de capteur d’ouverture sur la porte de la cabine',gain:'Vous sauriez tout de suite si quelqu’un ouvre la porte de la cabine en votre absence.'},
  trappe:{n:'capteur d’ouverture de trappe mécanique',pr:'202,80 €',slug:'capteur-ouverture-trappe',why:'n’a pas de capteur sur ses trappes et coffres',gain:'Vous seriez alerté dès qu’une trappe ou un coffre est ouvert.'},
  mvt:{n:'détecteur de mouvement',pr:'178,80 €',slug:'detecteur-mouvement',why:'n’a pas encore de détecteur de mouvement dans la cabine',gain:'Vous seriez alerté de toute présence à bord quand le bateau est vide.'},
  antiM:{n:'capteur antivol pour moteur hors-bord',pr:'94,80 €',slug:'capteur-antivol-moteur',why:'n’a pas d’antivol sur son moteur hors-bord',gain:'Vous seriez prévenu si quelqu’un déplace ou démonte votre moteur.'},
  antiA:{n:'capteur antivol pour annexe',pr:'94,80 €',slug:'capteur-antivol-annexe',why:'n’a pas d’antivol sur son annexe',gain:'Vous seriez prévenu si quelqu’un emporte votre annexe.'},
  battS:{n:'capteur de tension de batterie',pr:'310,80 €',slug:'capteur-tension-batterie',why:'ne suit pas encore la tension de toutes ses batteries',gain:'Vous suivriez la charge de vos batteries à distance et seriez prévenu avant qu’elles ne soient vides.'},
  quai:{n:'capteur de prise de quai',pr:'178,80 €',slug:'capteur-prise-de-quai',why:'n’est pas équipé de capteur de prise de quai',gain:'Vous seriez prévenu dès que le courant du ponton est coupé, avant que les batteries ne se vident.'}
};
const prodLink=k=>SHOP_BASE+PROD[k].slug;
const cap1=s=>s.replace(/^./,c=>c.toUpperCase());
S.sent={};S.prop=null;
const sentKey=(b,k)=>b+'|'+k;
function clientName(b){return b.owner==='—'?'':b.owner.split(' ').map(w=>w?w[0].toUpperCase()+w.slice(1):w).join(' ')}
function buildMsg(p){
  const b=boat(p.b),nm=clientName(b),hello=nm?`Bonjour ${nm},`:'Bonjour,';
  const sig='\n\nBien cordialement,\nLaurine G.\nVotre concession Seanapps';
  if(p.k&&PROD[p.k]){const P=PROD[p.k];
    return `${hello}\n\nEn suivant les données de ${b.name} dans l’app Seanapps, j’ai remarqué que votre bateau ${P.why}.\n\n${P.gain}\n\nJe vous propose le ${P.n}, à ${P.pr}. Il se connecte sans fil au boîtier Seanapps déjà installé à bord.\nVoir le produit : ${prodLink(p.k)}\n\nNous pouvons l’installer lors de votre prochain passage. Souhaitez-vous que je vous réserve un créneau ?${sig}`;}
  const o=p.opp;
  return `${hello}\n\nEn suivant les données de ${b.name} dans l’app Seanapps, j’ai remarqué un point à surveiller : ${o.sig.charAt(0).toLowerCase()+o.sig.slice(1)}.\n\nPour éviter une panne ou une mauvaise surprise, je vous propose : ${o.p.charAt(0).toLowerCase()+o.p.slice(1)} (${o.pr.toLowerCase()}).\n\nJe peux vous envoyer un devis détaillé et vous proposer un rendez-vous à l’atelier. Qu’en dites-vous ?${sig}`;
}
function missingFor(k){return withData().filter(b=>V[b.id][k]===undefined)}
function openProp(spec){
  // spec: "boatId|key"  |  "|key" (catalogue)  |  "boatId|opp|texte"
  const [bid,k,txt]=spec.split('|');
  let p;
  if(k==='opp'){const o=oppList().find(x=>x.b===bid&&x.p===decodeURIComponent(txt));p={b:bid,k:o&&o.k||null,opp:o};}
  else{const cands=missingFor(k);p={b:bid||(cands[0]&&cands[0].id)||withData()[0].id,k,opp:null};}
  p.msg=buildMsg(p);S.prop=p;renderProp();
  setTimeout(()=>{const t=document.getElementById('pmsg');if(t)t.focus({preventScroll:true})},30);
}
function renderProp(){
  const el=document.getElementById('pmodal');const p=S.prop;
  if(!p){el.hidden=true;el.innerHTML='';document.body.style.overflow='';return;}
  const b=boat(p.b),isProd=p.k&&PROD[p.k];
  const boats=isProd?[...new Set([b,...missingFor(p.k)])]:[b];
  el.hidden=false;document.body.style.overflow='hidden';
  el.innerHTML=`<div class="pm-scrim" data-pclose></div>
  <div class="pm" role="dialog" aria-modal="true" aria-labelledby="pmt">
    <div class="pm-h"><div><h3 id="pmt">Proposer à ${esc(clientName(b)||'ce client')}</h3><div class="muted" style="font-size:13px">${esc(b.name)}${b.model?` · ${esc(b.model)}`:''}</div></div><button class="btn btn-ghost btn-sm" data-pclose aria-label="Fermer">${ic('x',16)}</button></div>
    <div class="pm-b">
      <div class="pm-row">
        <label class="pm-f"><span>Bateau</span><select id="pboat">${boats.map(x=>`<option value="${x.id}" ${x.id===p.b?'selected':''}>${esc(x.name)} · ${esc(clientName(x)||'sans client')}</option>`).join('')}</select></label>
        <label class="pm-f"><span>Produit</span><select id="pprod">${p.opp&&!isProd?`<option value="">${esc(p.opp.p)} · ${esc(p.opp.pr)}</option>`:''}${Object.entries(PROD).map(([k,P])=>`<option value="${k}" ${k===p.k?'selected':''}>${esc(cap1(P.n))} · ${P.pr}</option>`).join('')}</select></label>
      </div>
      ${isProd?`<div class="pm-link">${ic('share',16)}<span class="muted">Lien du produit</span><a href="${prodLink(p.k)}" target="_blank" rel="noopener">${prodLink(p.k)}</a></div>`:`<div class="pm-link muted">${ic('clip',16)}<span>Service sur devis : pas de page produit, le message propose un devis.</span></div>`}
      <label class="pm-f"><span>Message (vous pouvez le modifier)</span><textarea id="pmsg" rows="14">${esc(p.msg)}</textarea></label>
    </div>
    <div class="pm-foot"><button class="btn btn-ghost" data-pcopy>${ic('clip',16)} Copier le message</button><button class="btn btn-pri" data-psend>${ic('send',16)} Envoyer dans Messages</button></div>
  </div>`;
}
function sendProp(){
  const p=S.prop,b=boat(p.b),t=document.getElementById('pmsg').value.trim();if(!t)return;
  const nm=clientName(b)||b.name;
  let c=S.convs.find(x=>x.boat===b.name)||S.convs.find(x=>x.name===nm);
  if(!c){c={id:'c'+(S.convs.length+1)+'_'+b.id,name:nm,boat:b.name,msgs:[]};S.convs.unshift(c);}
  c.msgs.push({me:true,t,h:'À l’instant'});c.last='Vous : '+t.split('\n').find(l=>l.trim()&&!/^Bonjour/.test(l))?.slice(0,80);c.ago='à l’instant';
  S.sent[sentKey(p.b,p.k||('opp:'+(p.opp&&p.opp.p)))]=true;
  S.prop=null;renderProp();render();toast(`Proposition envoyée à ${nm}`);
}
function linkify(s){return esc(s).replace(/https?:\/\/[^\s<]+/g,u=>`<a href="${u}" target="_blank" rel="noopener">${u}</a>`)}
document.addEventListener('click',e=>{
  const pr=e.target.closest('[data-propose]');
  if(pr){e.preventDefault();e.stopPropagation();openProp(pr.dataset.propose);return;}
  if(!S.prop)return;
  if(e.target.closest('[data-pclose]')){S.prop=null;renderProp();return;}
  if(e.target.closest('[data-psend]')){sendProp();return;}
  if(e.target.closest('[data-pcopy]')){const t=document.getElementById('pmsg');const done=()=>toast('Message copié');
    try{navigator.clipboard.writeText(t.value).then(done,()=>{t.select();toast('Sélectionné : faites Ctrl+C')})}catch(_){t.select();toast('Sélectionné : faites Ctrl+C')}return;}
},true);
document.addEventListener('change',e=>{
  if(!S.prop)return;
  if(e.target.id==='pboat'){S.prop.b=e.target.value;S.prop.msg=buildMsg(S.prop);renderProp();}
  if(e.target.id==='pprod'){const k=e.target.value;if(k){S.prop.k=k;S.prop.opp=S.prop.opp&&S.prop.opp.k===k?S.prop.opp:null;}else{S.prop.k=null;}S.prop.msg=buildMsg(S.prop);renderProp();}
});
document.addEventListener('input',e=>{if(e.target.id==='pmsg'&&S.prop)S.prop.msg=e.target.value;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&S.prop){S.prop=null;renderProp();}});

/* ======================= Explorateur de courbes : 7 jours ou mois, ensemble ou individuel, zoom ======================= */
const XS={
  batt:{l:'Batterie de service',u:'V',d:1,thr:11.8,thrL:'Seuil d’alerte 11,8 V'},
  hum:{l:'Humidité de la cabine',u:'%',d:0,thr:75,thrL:'Au-dessus de 75 % : moisissure'},
  pres:{l:'Pression atmosphérique',u:'hPa',d:0}
};
const H0=Date.UTC(2026,10,4)/36e5, HNOW=H0+NOWH;
const WD=['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'],MO=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],MOL=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const dOf=t=>new Date(t*36e5);
const lblT=t=>{const d=dOf(t);return `${WD[d.getUTCDay()]} ${d.getUTCDate()} ${MO[d.getUTCMonth()]} · ${d.getUTCHours()} h`};
const lblD=t=>{const d=dOf(t);return `${WD[d.getUTCDay()]} ${d.getUTCDate()}`};
const hsh=(i,s)=>{const x=Math.sin(i*12.9898+s*78.233)*43758.5453;return x-Math.floor(x)};
function seedOf(id){let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))%9973;return h}
function genVal(id,k,t){
  const s=seedOf(id),ph=s%17,day=2*Math.PI*t/24,sun=Math.max(0,Math.sin(((t%24+24)%24-7)/12*Math.PI)),n=hsh(Math.floor(t),s+k.length)-.5;
  if(k==='batt')return 12.62+(s%20)/200+.13*sun+.05*Math.sin(2*Math.PI*t/97+ph)+n*.04-(hsh(Math.floor(t/24),s)>.88?.35*Math.exp(-Math.pow((t%24)-21,2)/10):0);
  if(k==='hum'){const base=56+(s%10)+(id==='b6'?Math.max(0,(t-(H0-20*24))/(24*26))*8:0);return base+6*Math.sin(2*Math.PI*t/(24*9)+ph)+2*Math.sin(day)+n*1.4;}
  return 1013+8*Math.sin(2*Math.PI*t/(24*6.3)+ph)+4*Math.sin(2*Math.PI*t/(24*2.1)+ph*2)+n*.5;
}
function xval(id,k,t){
  if(t>HNOW)return null;
  const i=Math.round(t-H0),ser=serOf(id)[k];
  if(i>=0&&i<ser.length)return ser[i];
  if(i>=ser.length)return null;
  const g=genVal(id,k,t);
  if(i>-24){const w=(i+24)/24;return g*(1-w)+ser[0]*w;}
  return g;
}
S.ex={per:'7j',y:2026,m:10,mode:'ensemble',sel:null,one:null,z:null,boat:null};
const MONTHS=[[2026,7],[2026,8],[2026,9],[2026,10]];
function exRange(){if(S.ex.per==='7j')return [H0,HNOW];const a=Date.UTC(S.ex.y,S.ex.m,1)/36e5,b=Date.UTC(S.ex.y,S.ex.m+1,1)/36e5;return [a,b];}
function exWin(){const [a,b]=exRange();if(!S.ex.z)return [a,b];let [z0,z1]=S.ex.z;z0=Math.max(a,z0);z1=Math.min(b,z1);if(z1-z0<3)return [a,b];return [z0,z1];}
function exKeys(){
  const def=CHARTS_FOR[S.role].filter(k=>XS[k]);if(!S.ex.sel)S.ex.sel=def.length?def:['batt'];if(!S.ex.one||!XS[S.ex.one])S.ex.one=S.ex.sel[0];
  return S.ex.mode==='ensemble'?Object.keys(XS).filter(k=>S.ex.sel.includes(k)):[S.ex.one];
}
function niceTicks(lo,hi){const span=hi-lo||1,raw=span/4,p=Math.pow(10,Math.floor(Math.log10(raw))),m=raw/p,st=(m<=1?1:m<=2?2:m<=2.5?2.5:m<=5?5:10)*p;const t0=Math.floor(lo/st)*st,t1=Math.ceil(hi/st)*st,out=[];for(let v=t0;v<=t1+st*.001;v+=st)out.push(+v.toFixed(6));return {ticks:out,lo:out[0],hi:out[out.length-1]}}
function timeTicks(a,b){const span=b-a,steps=[1,2,3,6,12,24,48,72,96,120,168];const st=steps.find(s=>span/s<=(XW<500?5:8))||168;const out=[];const base=st>=24?(S.ex.per==='mois'?exRange()[0]:Math.ceil(a/24)*24):0;let t=st>=24?base+Math.ceil((a-base)/st)*st:Math.ceil(a/st)*st;for(;t<=b;t+=st)out.push(t);return {ticks:out,st}}
const XEX={};let xexN=0,XW=760,XL=58;
function exMeasure(){const el=document.getElementById('explorer');const w=el&&el.clientWidth?el.clientWidth-18:(innerWidth<760?innerWidth-70:760);XW=Math.max(300,Math.min(760,Math.round(w)));XL=XW<500?44:58;}
function panelSVG(id,k,a,b,h,showX,big,first){
  const pid='xp'+(xexN++),W=XW,L=XL,R=16,T=14,B=showX?28:8,cfg=XS[k];
  const n=Math.ceil(b-a),step=Math.max(1,Math.floor(n/700)),pts=[];
  for(let t=Math.ceil(a);t<=b;t+=step)pts.push([t,xval(id,k,t)]);
  const vs=pts.map(p=>p[1]).filter(v=>v!=null);
  let lo=Math.min(...vs),hi=Math.max(...vs);if(!vs.length){lo=0;hi=1}
  if(cfg.thr!=null){lo=Math.min(lo,cfg.thr);hi=Math.max(hi,cfg.thr)}
  const pad=(hi-lo)*.12||1;const nt=niceTicks(lo-pad,hi+pad);
  const x=t=>L+(W-L-R)*(t-a)/(b-a),y=v=>T+(h-T-B)*(1-(v-nt.lo)/(nt.hi-nt.lo));
  let d='',area='',seg=[];const segs=[];
  pts.forEach(([t,v])=>{if(v==null){if(seg.length)segs.push(seg);seg=[];}else seg.push([t,v])});if(seg.length)segs.push(seg);
  segs.forEach(sg=>{const p=sg.map(([t,v],i)=>`${i?'L':'M'}${x(t).toFixed(1)},${y(v).toFixed(1)}`).join('');d+=p;area+=`${p}L${x(sg[sg.length-1][0]).toFixed(1)},${h-B}L${x(sg[0][0]).toFixed(1)},${h-B}Z`;});
  const tt=timeTicks(a,b);
  const fut=HNOW<b?`<rect x="${x(Math.max(a,HNOW))}" y="${T}" width="${x(b)-x(Math.max(a,HNOW))}" height="${h-T-B}" class="fut"/>${b-Math.max(a,HNOW)>(b-a)*.12?`<text class="ax" x="${(x(Math.max(a,HNOW))+x(b))/2}" y="${T+16}" text-anchor="middle">À venir</text>`:''}`:'';
  const ev=(id==='b2'&&H0+CUT>a&&H0+CUT<b)?`<line class="ev" x1="${x(H0+CUT)}" x2="${x(H0+CUT)}" y1="${T}" y2="${h-B}"/>${first?`<text class="lbl" x="${x(H0+CUT)-6}" y="${T+12}" text-anchor="end">Prise de quai débranchée</text>`:''}`:'';
  const last=vs.length&&HNOW>=a&&HNOW<=b?`<circle class="dt" cx="${x(HNOW)}" cy="${y(xval(id,k,HNOW))}" r="4.5"/>`:'';
  XEX[pid]={id,k,a,b,L,R,W,h,T,B,x,y};
  return `<svg class="xp" data-xp="${pid}" viewBox="0 0 ${W} ${h}" tabindex="0" role="img" aria-label="${esc(cfg.l)}, ${esc(lblT(a))} à ${esc(lblT(b))}">
    ${nt.ticks.map(v=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}"/><text class="ax" x="${L-8}" y="${y(v)+4}" text-anchor="end">${nf(v,cfg.d&&nt.hi-nt.lo<5?1:0)}${cfg.u==='%'?' %':''}</text>`).join('')}
    ${tt.ticks.map(t=>`<line class="gd" x1="${x(t)}" x2="${x(t)}" y1="${T}" y2="${h-B}"/>${showX?`<text class="ax" x="${Math.min(Math.max(x(t),L+18),W-R-18)}" y="${h-8}" text-anchor="middle">${tt.st<24?(dOf(t).getUTCHours()===0?lblD(t):dOf(t).getUTCHours()+' h'):(S.ex.per==='mois'?dOf(t).getUTCDate()+(t===tt.ticks[0]?' '+MO[dOf(t).getUTCMonth()]:''):lblD(t))}</text>`:''}`).join('')}
    ${fut}${ev}
    ${cfg.thr!=null?`<line class="thr" x1="${L}" x2="${W-R}" y1="${y(cfg.thr)}" y2="${y(cfg.thr)}"/><text class="lbl" x="${L+8}" y="${y(cfg.thr)-6}">${esc(cfg.thrL)}</text>`:''}
    <path class="ar" d="${area}"/><path class="ln" d="${d}"/>${last}
    <g class="hov" visibility="hidden"><line class="cross" y1="${T}" y2="${h-B}"/><circle class="dt" r="5"/></g>
    <rect class="brush" y="${T}" height="${h-T-B}" width="0" visibility="hidden"/>
    <rect class="hit" x="${L}" y="${T}" width="${W-L-R}" height="${h-T-B}" fill="transparent"/>
  </svg>`;
}
function stats(id,k,a,b){const vs=[];for(let t=Math.ceil(a);t<=b;t++){const v=xval(id,k,t);if(v!=null)vs.push(v)}if(!vs.length)return null;const c=XS[k],f=v=>nf(v,c.d)+' '+c.u;return {min:f(Math.min(...vs)),avg:f(vs.reduce((s,v)=>s+v,0)/vs.length),max:f(Math.max(...vs))}}
function overviewSVG(id,k,a,b,z0,z1){
  const W=XW,H=40,L=XL,R=16,x=t=>L+(W-L-R)*(t-a)/(b-a);const vs=[];for(let t=Math.ceil(a);t<=b;t+=Math.max(1,Math.floor((b-a)/300)))vs.push([t,xval(id,k,t)]);
  const ok=vs.filter(p=>p[1]!=null);const lo=Math.min(...ok.map(p=>p[1])),hi=Math.max(...ok.map(p=>p[1]));const y=v=>4+(H-8)*(1-(v-lo)/((hi-lo)||1));
  const d=ok.map(([t,v],i)=>`${i?'L':'M'}${x(t).toFixed(1)},${y(v).toFixed(1)}`).join('');
  return `<svg class="xov" data-xov="1" viewBox="0 0 ${W} ${H}" aria-label="Vue d’ensemble de la période : tapez pour déplacer le zoom">
    <rect x="${L}" y="0" width="${W-L-R}" height="${H}" class="ovbg"/><path d="${d}" class="ovln"/>
    ${(z0>a||z1<b)?`<rect x="${L}" y="0" width="${x(z0)-L}" height="${H}" class="ovmask"/><rect x="${x(z1)}" y="0" width="${W-R-x(z1)}" height="${H}" class="ovmask"/>`:''}
    <rect x="${x(z0)}" y="1" width="${Math.max(3,x(z1)-x(z0))}" height="${H-2}" class="ovwin"/>
  </svg>`;
}
function explorerHTML(id){
  for(const k in XEX)delete XEX[k];exMeasure();
  if(S.ex.boat!==id){S.ex.boat=id;S.ex.z=null}
  const keys=exKeys(),[a,b]=exRange(),[z0,z1]=exWin(),zoomed=z0>a||z1<b;
  const mi=MONTHS.findIndex(([y,m])=>y===S.ex.y&&m===S.ex.m);
  const dim=new Date(Date.UTC(S.ex.y,S.ex.m+1,0)).getUTCDate();
  const title=S.ex.per==='7j'?'Du mer. 4 au mar. 10 novembre, une mesure par heure':`Historique du 1 au ${dim} ${MOL[S.ex.m]} ${S.ex.y}${S.ex.m===10?' (données jusqu’au mar. 10)':''}`;
  const big=S.ex.mode==='individuel';
  const panels=keys.map((k,i)=>{const st=stats(id,k,z0,z1),c=XS[k];
    return `<div class="xpanel"><div class="xph"><b>${esc(c.l)}</b>${st?`<span class="xst"><span>Min <b>${st.min}</b></span><span>Moy. <b>${st.avg}</b></span><span>Max <b>${st.max}</b></span></span>`:'<span class="muted">Pas de données</span>'}</div>
      ${panelSVG(id,k,z0,z1,big?300:(keys.length>2?150:180),big||i===keys.length-1,big,i===0)}</div>`}).join('');
  return `<div class="xbar">
      <div class="seg" role="group" aria-label="Période"><button data-ex-per="7j" aria-pressed="${S.ex.per==='7j'}">7 derniers jours</button><button data-ex-per="mois" aria-pressed="${S.ex.per==='mois'}">Mois</button></div>
      ${S.ex.per==='mois'?`<div class="mnav"><button data-ex-m="-1" ${mi<=0?'disabled':''} aria-label="Mois précédent">${ic('back',16)}</button><b>${cap1(MOL[S.ex.m])} ${S.ex.y}</b><button data-ex-m="1" ${mi>=MONTHS.length-1?'disabled':''} aria-label="Mois suivant">${ic('chev',16)}</button></div>`:''}
      <div class="seg" role="group" aria-label="Vue"><button data-ex-mode="ensemble" aria-pressed="${S.ex.mode==='ensemble'}">${ic('grid',14)} Ensemble</button><button data-ex-mode="individuel" aria-pressed="${S.ex.mode==='individuel'}">${ic('pulse',14)} Individuel</button></div>
      <div class="fchips">${Object.entries(XS).map(([k,c])=>{const on=S.ex.mode==='ensemble'?S.ex.sel.includes(k):S.ex.one===k;return `<button class="fchip" data-ex-ser="${k}" aria-pressed="${on}">${S.ex.mode==='ensemble'?(on?ic('check',13,2.4):''):''}${esc(c.l)}</button>`}).join('')}</div>
    </div>
    <div class="xsub"><span class="muted">${title}</span>
      <div class="zbtns"><span class="muted zl">${zoomed?`Zoom : ${lblT(z0)} → ${lblT(z1)}`:'Glissez sur une courbe pour zoomer'}</span>
        <button data-ex-z="out" aria-label="Dézoomer" ${!zoomed?'disabled':''}>−</button><button data-ex-z="in" aria-label="Zoomer">+</button><button data-ex-z="left" aria-label="Plus tôt" ${z0<=a?'disabled':''}>${ic('back',14)}</button><button data-ex-z="right" aria-label="Plus tard" ${z1>=b?'disabled':''}>${ic('chev',14)}</button><button data-ex-z="reset" class="wide" ${!zoomed?'disabled':''}>Tout voir</button></div></div>
    <div class="xpanels ${big?'big':''}">${panels}</div>
    ${overviewSVG(id,keys[0],a,b,z0,z1)}`;
}
function renderExplorer(){const el=document.getElementById('explorer');if(!el)return;el.innerHTML=explorerHTML(el.dataset.boat);bindExplorer();}
function setZoom(z0,z1){const [a,b]=exRange();let w=z1-z0;if(w>=b-a-0.5){S.ex.z=null;return}w=Math.max(w,4);if(z0<a){z0=a;z1=a+w}if(z1>b){z1=b;z0=b-w}S.ex.z=[z0,z1]}
function tipRows(title,rows,cx,cy){const t=TIP();t.replaceChildren();const h=document.createElement('span');h.textContent=title;t.append(h);rows.forEach(([l,v])=>{const r=document.createElement('div');r.className='trow';const b=document.createElement('b');b.textContent=v;const s=document.createElement('span');s.textContent=l;r.append(b,s);t.append(r)});t.hidden=false;
  const w=t.offsetWidth,hh=t.offsetHeight;let left=cx+16,top=cy-hh-12;if(left+w>innerWidth-8)left=cx-w-16;if(top<8)top=cy+16;t.style.left=Math.max(8,left)+'px';t.style.top=top+'px';}
function bindExplorer(){
  const root=document.getElementById('explorer');if(!root)return;
  const svgs=[...root.querySelectorAll('svg.xp')];
  const tOf=(svg,cx)=>{const m=XEX[svg.dataset.xp],r=svg.getBoundingClientRect(),vx=(cx-r.left)/r.width*m.W;return m.a+(vx-m.L)/(m.W-m.L-m.R)*(m.b-m.a)};
  const showAt=(t,cx,cy)=>{const rows=[];svgs.forEach(s=>{const m=XEX[s.dataset.xp],tt=Math.round(Math.min(m.b,Math.max(m.a,t))),v=xval(m.id,m.k,tt),g=s.querySelector('.hov');
      if(v==null){g.setAttribute('visibility','hidden');rows.push([XS[m.k].l,'—']);return;}
      g.setAttribute('visibility','visible');g.querySelector('line').setAttribute('x1',m.x(tt));g.querySelector('line').setAttribute('x2',m.x(tt));const c=g.querySelector('circle');c.setAttribute('cx',m.x(tt));c.setAttribute('cy',m.y(v));
      rows.push([XS[m.k].l,nf(v,XS[m.k].d===1?2:1)+' '+XS[m.k].u]);});
    tipRows(lblT(Math.round(t)),rows,cx,cy);};
  const hideAll=()=>{svgs.forEach(s=>s.querySelector('.hov').setAttribute('visibility','hidden'));hideTip();};
  let drag=null;
  svgs.forEach(svg=>{
    const m=XEX[svg.dataset.xp],br=svg.querySelector('.brush');
    svg.addEventListener('pointerdown',e=>{if(e.button)return;drag={t0:tOf(svg,e.clientX),svg};try{svg.setPointerCapture(e.pointerId)}catch(_){}});
    svg.addEventListener('pointermove',e=>{const t=tOf(svg,e.clientX);showAt(t,e.clientX,e.clientY);
      if(drag&&drag.svg===svg){const t0=Math.max(m.a,Math.min(drag.t0,t)),t1=Math.min(m.b,Math.max(drag.t0,t));svgs.forEach(s=>{const mm=XEX[s.dataset.xp],b2=s.querySelector('.brush');b2.setAttribute('x',mm.x(t0));b2.setAttribute('width',Math.max(0,mm.x(t1)-mm.x(t0)));b2.setAttribute('visibility','visible')});}});
    svg.addEventListener('pointerup',e=>{if(!drag)return;const t=tOf(svg,e.clientX),t0=Math.min(drag.t0,t),t1=Math.max(drag.t0,t);drag=null;
      if(t1-t0>=2&&Math.abs(XEX[svg.dataset.xp].x(t1)-XEX[svg.dataset.xp].x(t0))>8){setZoom(t0,t1);hideTip();renderExplorer();}else svgs.forEach(s=>s.querySelector('.brush').setAttribute('visibility','hidden'));});
    svg.addEventListener('pointerleave',()=>{if(!drag)hideAll();});
    svg.addEventListener('dblclick',()=>{S.ex.z=null;hideTip();renderExplorer();});
    svg.addEventListener('focus',()=>{const r=svg.getBoundingClientRect();showAt(Math.min(m.b,HNOW),r.right-40,r.top+20)});
    svg.addEventListener('blur',hideAll);
    svg.addEventListener('keydown',e=>{const map={ArrowLeft:'left',ArrowRight:'right','+':'in','=':'in','-':'out',Escape:'reset'};if(map[e.key]){e.preventDefault();exZoom(map[e.key]);const s=document.querySelector('#explorer svg.xp');if(s)s.focus();}});
  });
  const ov=root.querySelector('svg.xov');
  if(ov){const move=e=>{const r=ov.getBoundingClientRect(),vx=(e.clientX-r.left)/r.width*XW,[a,b]=exRange(),[z0,z1]=exWin();const t=a+(vx-XL)/(XW-XL-16)*(b-a);const w=(S.ex.z?z1-z0:Math.max(24,(b-a)/4));setZoom(t-w/2,t+w/2);renderExplorer();};
    ov.addEventListener('pointerdown',e=>{move(e)});}
}
function exZoom(kind){const [a,b]=exRange(),[z0,z1]=exWin(),w=z1-z0,c=(z0+z1)/2;
  if(kind==='reset')S.ex.z=null;else if(kind==='in')setZoom(c-w/4,c+w/4);else if(kind==='out')setZoom(c-w,c+w);else if(kind==='left')setZoom(z0-w/2,z1-w/2);else if(kind==='right')setZoom(z0+w/2,z1+w/2);
  hideTip();renderExplorer();}
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-ex-per],[data-ex-m],[data-ex-mode],[data-ex-ser],[data-ex-z]');if(!el||!el.closest('#explorer'))return;
  e.stopPropagation();
  if(el.dataset.exPer){S.ex.per=el.dataset.exPer;S.ex.z=null;if(S.ex.per==='mois'){S.ex.y=2026;S.ex.m=10}}
  else if(el.dataset.exM){const i=MONTHS.findIndex(([y,m])=>y===S.ex.y&&m===S.ex.m)+(+el.dataset.exM);if(MONTHS[i]){[S.ex.y,S.ex.m]=MONTHS[i];S.ex.z=null}}
  else if(el.dataset.exMode){S.ex.mode=el.dataset.exMode}
  else if(el.dataset.exSer){const k=el.dataset.exSer;if(S.ex.mode==='individuel')S.ex.one=k;else{const s=S.ex.sel;if(s.includes(k)){if(s.length>1)S.ex.sel=s.filter(x=>x!==k)}else S.ex.sel=[...s,k];}}
  else if(el.dataset.exZ){exZoom(el.dataset.exZ);return}
  hideTip();renderExplorer();
},true);

/* ======================= Messages ======================= */
function vMessages(){
  const c=S.convs.find(x=>x.id===S.conv);
  return `<div class="msgs">
    <div class="listcol">
      <div class="lh"><div style="font-size:18px;font-weight:500">Messages</div>
        <div class="rt" style="box-shadow:none;border:1px solid var(--line);padding:12px">
          <div style="flex:1;min-width:0">
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="muted" style="font-size:13px">Votre délai de réponse</span>${NEW}</div>
            <div class="big">2 h 10</div>
            <div class="muted" style="font-size:12.5px">Moyenne des 30 derniers jours · objectif réseau : moins de 4 h</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;font-size:13.5px">
          <span class="toggle" id="ownTog" role="switch" tabindex="0" aria-checked="${S.showOwners}" aria-label="Afficher le délai aux propriétaires"></span>
          <span>Afficher « Répond en 2 h en moyenne » aux propriétaires dans l’app</span>
        </div>
        <div class="muted" style="font-size:12.5px">Pour l’instant, seuls vous et Bénéteau voyez ce chiffre.</div>
      </div>
      <div class="boats">${S.convs.map(x=>`
        <button class="conv ${x.id===S.conv?'on':''}" data-conv="${x.id}">
          <span class="boat" style="all:unset"><span class="av" style="width:34px;height:34px;border-radius:50%;background:var(--line-2);display:grid;place-items:center;font-weight:600;color:var(--ink-2)">${x.name[0]}</span></span>
          <span class="nm"><b>${x.name}</b> <span style="display:inline;font-size:12px">· ${x.boat}</span><span>${x.last}</span></span>
          <span style="display:flex;flex-direction:column;align-items:flex-end;gap:4px"><span class="muted" style="font-size:12px">${x.ago}</span>${x.unread?'<span class="dot" style="width:10px;height:10px"></span>':''}</span>
        </button>`).join('')}</div>
    </div>
    <div class="thread">
      <div class="th"><b style="font-size:16px">${c.name}</b><span class="muted">${c.boat}</span>${c.unread?`<span class="chip c-orange" style="margin-left:auto">${ic('clock',13,2)} Reçu ${c.ago}. Répondre ?</span>`:''}</div>
      <div class="bubbles" id="bubbles">${c.msgs.map(m=>`<div class="bub ${m.me?'me':''}">${linkify(m.t)}<small>${m.h}</small></div>`).join('')}</div>
      <form class="composer" id="compose">
        <label for="reply" class="muted" style="position:absolute;left:-9999px">Votre réponse</label>
        <textarea id="reply" rows="3" placeholder="Écrire à ${c.name}…">${c.unread&&c.id==='c1'?'Bonjour Jean, c’est souvent la batterie de service quand le bateau reste au port. Je regarde les données du boîtier et je vous rappelle avant midi.':''}</textarea>
        <button class="btn btn-pri" type="submit">${ic('send',18)} Envoyer</button>
      </form>
    </div>
  </div>`;
}

/* ======================= Ma concession ======================= */
function vConcession(){
  const cr=statusCrit();
  const ok=cr.filter(c=>c.v>=c.seuil).length;
  const all=ok===3;
  return `
  <div class="top"><div class="h1">Ma concession</div>${NEW}</div>
  <div class="wrap">
    <section class="card"><div class="card-b">
      <div class="status-hero">
        <div class="medal ${all?'get':''}">${ic('award',36,1.6)}</div>
        <div style="flex:1;min-width:220px">
          <div class="muted" style="font-size:13px;text-transform:uppercase;letter-spacing:.05em;font-weight:600">Statut « Concession Seanapps » · T4 2026</div>
          <div style="font-size:22px;font-weight:600;margin:2px 0">${all?'Vous avez le statut ce trimestre':`${ok} critère${ok>1?'s':''} sur 3 atteint${ok>1?'s':''}`}</div>
          <div class="muted">${all?'Il sera affiché sur votre fiche dans l’app propriétaire à partir du 1er janvier.':'Revu le 31 décembre. Il vous reste 51 jours.'}</div>
        </div>
        <a class="btn btn-out" href="#dashboard">Voir ce qu’il reste à faire</a>
      </div>
      <div style="margin-top:14px">${cr.map(c=>`
        <div class="crit">
          <span class="ci ${c.v>=c.seuil?'ok':'no'}">${ic(c.v>=c.seuil?'check':'clock',16,2.2)}</span>
          <div><b style="font-weight:500">${c.k}</b><div class="muted" style="font-size:12.5px">${c.why}</div></div>
          <span style="font-variant-numeric:tabular-nums;font-weight:600">${c.v} % <span class="muted" style="font-weight:400">/ ${c.seuil} %</span></span>
          <div class="mbar"><i style="width:${c.v}%;background:${c.v>=c.seuil?'var(--green)':'var(--orange)'}"></i><u style="left:${c.seuil}%"></u></div>
        </div>`).join('')}</div>
    </div></section>
    <div class="grid g2">
      <section class="card"><div class="card-h"><h3>Ce que le statut apporte</h3><span class="chip c-grey" style="margin-left:auto">À définir avec Bénéteau</span></div>
        <div class="card-b">
          <div class="perk"><span class="pi">${ic('star',16)}</span><div><b style="font-weight:500">Badge sur la fiche concession</b><div class="muted" style="font-size:13px">Visible par les propriétaires dans l’app Seanapps.</div></div></div>
          <div class="perk"><span class="pi">${ic('zap',16)}</span><div><b style="font-weight:500">Support prioritaire</b><div class="muted" style="font-size:13px">Réponse de l’équipe Seanapps en moins de 24 h.</div></div></div>
          <div class="perk"><span class="pi">${ic('target',16)}</span><div><b style="font-weight:500">Mise en avant dans le réseau</b><div class="muted" style="font-size:13px">Concession recommandée aux nouveaux propriétaires de la région.</div></div></div>
        </div></section>
      <section class="card"><div class="card-h"><h3>Comment ça marche</h3></div>
        <div class="card-b" style="color:var(--ink-2);display:flex;flex-direction:column;gap:8px">
          <div>Le statut est revu chaque trimestre sur 3 critères. Il n’y a ni points ni classement entre concessions.</div>
          <div>Une absence ou un trimestre creux ne fait pas perdre le statut tout de suite : il est gardé un trimestre de plus.</div>
          <div class="muted" style="font-size:12.5px">Inspiré d’Airbnb Superhost et d’Etsy Star Seller.</div>
        </div></section>
    </div>
  </div>`;
}

/* ======================= Bilan du lundi ======================= */
function vBilan(){
  const h=health();
  return `
  <div class="top"><a class="btn btn-ghost btn-sm" href="#dashboard">${ic('back',16)} Tableau de bord</a><span class="muted">Aperçu de l’e-mail envoyé chaque lundi à 8 h</span>${NEW}</div>
  <div class="wrap">
    <article class="mail">
      <div class="mh"><span><b style="color:var(--ink)">Seanapps Pro</b> · Lundi 9 novembre, 08:00</span><span>Objet : Votre semaine · 11 tâches traitées, 3 à venir</span></div>
      <div class="mb">
        <div class="logo" style="padding:0;font-size:22px"><span class="p">Pro.</span><span class="s">seanapps</span></div>
        <div><div class="muted" style="font-size:13px">Semaine du 2 au 8 novembre</div><h2>Bonne semaine passée, Laurine.</h2></div>
        <div class="mrow">
          <div class="mstat"><b>6</b><span>inspections faites</span></div>
          <div class="mstat"><b>3</b><span>bateaux déclarés en stock</span></div>
          <div class="mstat"><b>2 h 10</b><span>délai de réponse moyen</span></div>
        </div>
        <div>
          <b>Cette semaine</b>
          <div class="mlist">
            <a href="#bateaux" data-go-boat="b3"><span>Contrôle à 1 an · Test Boat (en retard)</span><span>Faire →</span></a>
            <a href="#stock"><span>Déclarer 2 bateaux en stock</span><span>Déclarer →</span></a>
            <a href="#bateaux" data-go-boat="b1"><span>Activer le boîtier · Princess 3</span><span>Activer →</span></a>
          </div>
        </div>
        <div class="health ${h.ok?'ok':'warn'}"><div class="ico">${ic(h.ok?'check':'pulse',20,2.2)}</div><div><b>${h.ok?'Parc en bonne santé':'Parc à surveiller'}</b><span style="font-size:13px">Statut « Concession Seanapps » : ${statusCrit().filter(c=>c.v>=c.seuil).length} critères sur 3 atteints ce trimestre.</span></div></div>
        <a class="btn btn-pri" href="#dashboard" style="justify-content:center;padding:13px">Ouvrir Seanapps Pro</a>
        <div class="muted" style="font-size:12px">Vous recevez ce bilan car vous êtes administrateur de la concession. Vous pouvez le désactiver dans Paramètres › Notifications.</div>
      </div>
    </article>
  </div>`;
}

/* ======================= Écrans inchangés ======================= */
function vStock(){
  const d=S.tasks.find(t=>t.id==='t2').done;
  return `<div class="top"><div class="h1">Déclaration de stock</div></div>
  <div class="wrap"><section class="card"><div class="card-h"><h3>Novembre 2026</h3><span class="chip ${d?'c-green':'c-yellow'}" style="margin-left:auto">${d?'Déclaration validée':'2 bateaux à déclarer'}</span></div>
  <div class="card-b">${['Oceanis 30.1 · FR-BEN30E112','Antares 9 · FR-BEN9A2208'].map(x=>`<div class="act"><span class="b" style="background:${d?'var(--green)':'var(--orange)'}"></span><span style="flex:1">${x}</span><span class="chip ${d?'c-green':'c-grey'}">${d?'Déclaré':'Non déclaré'}</span></div>`).join('')}
  <div style="margin-top:14px">${d?'':'<button class="btn btn-pri" id="declare">Confirmer le stock</button>'}</div></div></section>
  <div class="proto-note">Écran simplifié pour le prototype</div></div>`;
}
function vEmpty(title){
  return `<div class="top"><div class="h1">${title}</div></div><div class="wrap"><div class="empty"><b>Écran inchangé</b><div style="margin-top:6px">Cet écran reste comme dans Seanapps Pro aujourd’hui. Le prototype se concentre sur le tableau de bord par métier et les capteurs.</div><div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-out" href="#dashboard">Tableau de bord</a><a class="btn btn-pri" href="#capteurs">Voir les capteurs</a></div></div></div>`;
}

/* ======================= Rendu + événements ======================= */
function toast(t){const el=document.getElementById('toast');el.innerHTML=ic('check',18,2.4)+t;el.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>el.classList.remove('show'),2600);}
function render(){
  const r=route();
  const views={dashboard:vDashboard,capteurs:vCapteurs,bateaux:vBateaux,messages:vMessages,concession:vConcession,bilan:vBilan,stock:vStock,
    clients:()=>vEmpty('Clients'),fleet:()=>vEmpty('Fleet'),notifications:()=>vEmpty('Notifications'),historique:()=>vEmpty('Historique'),partage:()=>vEmpty('Stock partagé'),services:()=>vEmpty('Services'),parametres:()=>vEmpty('Paramètres')};
  const bl=document.getElementById('blist'),bs=bl?bl.scrollTop:0;
  for(const k in CH)delete CH[k];
  hideTip();
  document.getElementById('view').innerHTML=(views[r]||vDashboard)();
  renderNav();bindCharts();if(document.getElementById('explorer')&&typeof renderExplorer==='function')renderExplorer();
  const nb=document.getElementById('blist');if(nb&&bs)nb.scrollTop=bs;
  document.getElementById('side').classList.remove('open');
}
function doneTask(id,msg){const t=S.tasks.find(x=>x.id===id);if(t&&!t.done){t.done=true;if(id==='t4'){S.boats.find(b=>b.id==='b1').steps[3]=true;}if(id==='t3'){S.convs[0].unread=false;}if(msg)toast(msg);}}
function checkAllDone(){if(S.tasks.every(t=>t.done))toast('Tout est traité pour aujourd’hui');}
function updateList(){const r=listRows();const b=document.getElementById('lbody');if(b)b.innerHTML=r.html;const c=document.getElementById('lcount');if(c)c.textContent=r.n;}

document.addEventListener('click',e=>{
  if(e.target.closest('.nav a[href="#capteurs"]')){S.capBoat=null;if(route()==='capteurs'){render();return;}}
  const cbt=e.target.closest('[data-capboat]');
  if(cbt&&cbt.dataset.capboat){S.capBoat=cbt.dataset.capboat;if(route()==='capteurs'){e.preventDefault();render();document.getElementById('main').scrollTop=0;}return;}
  if(e.target.closest('[data-capback]')){S.capBoat=null;render();return;}
  if(e.target.closest('[data-bfopen]')){S.bfOpen=!S.bfOpen;render();return;}
  const bp=e.target.closest('[data-bpage]');if(bp){if(bp.disabled)return;S.bpage=+bp.dataset.bpage;updateBoats();const l=document.getElementById('blist');if(l)l.scrollTop=0;return;}
  if(e.target.closest('[data-fold]')){S.ficheOpen=!S.ficheOpen;render();return;}
  const fx=e.target.closest('[data-fx]');if(fx){S.fx[fx.dataset.fx]=!S.fx[fx.dataset.fx];render();return;}
  const a=e.target.closest('[data-go-boat]');
  if(a&&a.dataset.goBoat){S.sel=a.dataset.goBoat;S.ftab=a.dataset.ftab||null;if(route()==='bateaux'){render();return;}}
  const ft=e.target.closest('[data-ftab]');
  if(ft&&!ft.dataset.goBoat&&ft.dataset.ftab){S.ftab=ft.dataset.ftab;render();return;}
  const bf=e.target.closest('[data-bf]');if(bf){S.bf=bf.dataset.bf;S.bpage=0;render();return;}
  if(e.target.closest('[data-bmore]')){S.blim+=20;updateBoats();return;}
  if(e.target.closest('[data-cmore]')){S.clim+=15;render();return;}
  if(e.target.closest('[data-alall]')){S.alAll=!S.alAll;render();return;}
  if(e.target.closest('[data-oppall]')){S.oppAll=!S.oppAll;render();return;}
  const cf=e.target.closest('[data-cf]');if(cf){S.cf=cf.dataset.cf;S.clim=15;render();return;}
  const dv=e.target.closest('[data-dev]');if(dv){const k=dv.dataset.dev;S.dev=(route()==='capteurs'&&S.dev===k)?null:(k||null);if(route()==='capteurs'){render();if(S.dev){const z=document.querySelector('.zoom');if(z)z.scrollIntoView({block:'nearest'});}}return;}
  const zn=e.target.closest('[data-zone]');if(zn){S.zone[S.capBoat||S.sel]=zn.dataset.zone;render();const f=document.querySelector(`[data-zone="${zn.dataset.zone}"]`);if(f&&f.tagName!=='BUTTON')f.focus({preventScroll:true});return;}
  const cb=e.target.closest('[data-cb]');
  if(cb&&cb.dataset.cb){S.cb=cb.dataset.cb;if(cb.tagName==='BUTTON'||route()==='capteurs'){render();document.getElementById('main').scrollTop=0;if(cb.tagName==='BUTTON')return;}}
  const ro=e.target.closest('[data-role]');
  if(ro){S.role=ro.dataset.role;try{localStorage.setItem('sp-role',S.role)}catch(_){}render();return;}
  const tick=e.target.closest('[data-tick]');
  if(tick){doneTask(tick.dataset.tick);render();checkAllDone();return;}
  if(e.target.closest('#resetDay')){S.tasks.forEach(t=>t.done=t.id==='t5');const b1=S.boats.find(b=>b.id==='b1');b1.steps=[true,true,true,false,false];b1.status='Mise en service';S.convs[0].unread=true;render();return;}
  if(e.target.closest('#mineTog')){S.capAll=!S.capAll;render();return;}
  const dt=e.target.closest('[data-dtab]');
  if(dt){S.dtab[S.role]=S.dtab[S.role]===dt.dataset.dtab?null:dt.dataset.dtab;render();return;}
  const ac=e.target.closest('[data-acc]');
  if(ac){const k=ac.dataset.acc;const was=S.acc[k]!==undefined?S.acc[k]:ac.dataset.def==='1';S.acc[k]=!was;render();const el=document.querySelector(`[data-acc="${k}"]`);if(el)el.focus({preventScroll:true});return;}
  const bt=e.target.closest('[data-boat]');
  if(bt){S.sel=bt.dataset.boat;render();if(innerWidth<=980){const f=document.querySelector('.fiche');if(f)f.scrollIntoView({block:'start'});}return;}
  const st=e.target.closest('[data-step]');
  if(st){const b=sel();if(b.steps){const i=+st.dataset.step;if(i===3&&!b.steps[3]&&b.steps[2]){b.steps[3]=true;if(b.id==='b1')doneTask('t4');toast('Boîtier activé · il remonte bien ses données');render();}else if(i===3&&!b.steps[2]){toast('Rattachez d’abord le propriétaire');}}return;}
  if(e.target.closest('#mes')){const b=sel();b.steps[4]=true;b.status='Livré';toast(`Mise en service terminée · ${b.owner} a reçu son accès`);render();checkAllDone();return;}
  if(e.target.closest('[data-insp]')){doneTask('t1','Inspection enregistrée');render();checkAllDone();return;}
  if(e.target.closest('#declare')){doneTask('t2','Stock de novembre déclaré');render();checkAllDone();return;}
  const cv=e.target.closest('[data-conv]');
  if(cv){S.conv=cv.dataset.conv;render();return;}
  if(e.target.closest('#ownTog')){S.showOwners=!S.showOwners;render();toast(S.showOwners?'Délai affiché aux propriétaires':'Délai visible seulement par vous et Bénéteau');return;}
  if(e.target.closest('#menuBtn')){document.getElementById('side').classList.toggle('open');return;}
});
document.addEventListener('keydown',e=>{
  if((e.key===' '||e.key==='Enter')&&(e.target.id==='ownTog'||e.target.id==='mineTog'||(e.target.dataset&&e.target.dataset.zone&&e.target.tagName!=='BUTTON'))){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}
});
document.addEventListener('submit',e=>{
  if(e.target.id!=='compose')return;
  e.preventDefault();
  const ta=document.getElementById('reply');const v=ta.value.trim();if(!v)return;
  const c=S.convs.find(x=>x.id===S.conv);
  c.msgs.push({me:true,t:v,h:'À l’instant'});c.last='Vous : '+v;c.ago='à l’instant';
  if(c.unread){c.unread=false;if(c.id==='c1')doneTask('t3');}
  render();toast('Message envoyé');checkAllDone();
  const bb=document.getElementById('bubbles');if(bb)bb.scrollTop=bb.scrollHeight;
});
document.addEventListener('input',e=>{
  if(e.target.id==='sq'){S.q=e.target.value;updateList();return;}
  if(e.target.id!=='q')return;
  S.bq=e.target.value;S.bpage=0;updateBoats();
});
document.addEventListener('change',e=>{if(e.target.id==='sf'){S.fam=e.target.value;updateList();}if(e.target.id==='bsort'){S.bsort=e.target.value;S.bpage=0;updateBoats();}if(e.target.id==='devsel'){S.dev=e.target.value;S.cf='all';S.clim=15;render();}});
window.addEventListener('hashchange',()=>{closeSearch();render();document.getElementById('main').scrollTop=0;});
render();

