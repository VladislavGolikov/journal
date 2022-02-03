import './main.scss';
import {CreateTable} from './createtable.js';



const journalPage=new CreateTable();

document.querySelector('.changePage').addEventListener('click', ()=>{journalPage.updatePage(true,false,this)});

document.querySelector('.changeMonthForward').addEventListener('click', ()=>{journalPage.updatePage(false,1,this)});

document.querySelector('.changeMonthBackward').addEventListener('click', ()=>{journalPage.updatePage(false,-1,this)});

document.querySelector('.printPage').addEventListener('click', ()=>window.print());