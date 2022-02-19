import './main.scss';
import {CreateTableGeneral} from './createtable.js';

const journal=new CreateTableGeneral();

document.querySelector('.changePage').addEventListener('click', ()=>{journal.updatePage(true,false,this)});

document.querySelector('.changeMonthForward').addEventListener('click', ()=>{journal.updatePage(false,1,this)});

document.querySelector('.changeMonthBackward').addEventListener('click', ()=>{journal.updatePage(false,-1,this)});

document.querySelector('.printPage').addEventListener('click', ()=>window.print());

document.querySelector('.changeJournal').addEventListener('click', ()=>{journal.changeJournal(this)});