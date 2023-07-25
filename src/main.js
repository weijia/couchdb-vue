import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PouchDB from 'pouchdb-browser'
import PouchFind from 'pouchdb-find'
import PouchLiveFind from 'pouchdb-live-find'

PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)

createApp(App).mount('#app')
