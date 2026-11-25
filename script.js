const pages=[...document.querySelectorAll('main>.page')];
const menu=document.getElementById('mobile-nav');const toggle=document.getElementById('menu-toggle');
const records=[
{id:'TPZ-001',name:'The Yonaguni Discovery',type:'FIELD NOTE',detail:'1949 · Ryukyu Archipelago',page:'manuscripts'},
{id:'TPZ-012',name:'The Twelve Manuscripts',type:'COLLECTION',detail:'Primary sources · Translation pending',page:'manuscripts'},
{id:'TPZ-033',name:'The Tristimulus',type:'RESEARCH',detail:'Perception · Temporal awareness',page:'research'},
{id:'TPZ-049',name:'Yonaguni Island',type:'LOCATION',detail:'24.4667° N · 122.9167° E',page:'locations'},
{id:'TPZ-080',name:'Renval Sanchez',type:'PERSON / ACCOUNT',detail:'1980 lecture · Interpretations',page:'research'},
{id:'TPZ-109',name:'The Valley of the Shadow',type:'TRANSMISSION',detail:'Signal record · Status unknown',page:'transmissions'},
{id:'TPZ-201',name:'The Louvre Papers',type:'DOCUMENT',detail:'2009 · Future-origin claim',page:'archive'},
{id:'TPZ-219',name:'The Split Theory',type:'DOCUMENT',detail:'2019 · Anonymous correspondence',page:'archive'}
];
const recordsEl=document.getElementById('records');
function renderRecords(query=''){const filtered=records.filter(r=>(r.id+' '+r.name+' '+r.type+' '+r.detail).toLowerCase().includes(query.toLowerCase()));recordsEl.innerHTML=filtered.map(r=>`<a class="record" href="#${r.page}"><small>${r.id} / ${r.type}</small><strong>${r.name}</strong><span>${r.detail} →</span></a>`).join('');document.getElementById('no-results').hidden=filtered.length>0}
function route(){let name=decodeURIComponent(location.hash.slice(1))||'home';if(!pages.some(p=>p.id===name))name='home';pages.forEach(p=>p.hidden=p.id!==name);document.title=(name==='home'?'The Pantheon Zaibatsu':name.charAt(0).toUpperCase()+name.slice(1)+' — The Pantheon Zaibatsu');menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'instant'});}
toggle.addEventListener('click',()=>{const opened=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened))});document.getElementById('archive-search').addEventListener('input',e=>renderRecords(e.target.value));window.addEventListener('hashchange',route);renderRecords();route();
