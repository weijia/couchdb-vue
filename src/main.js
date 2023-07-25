import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PouchDB from 'pouchdb-browser'
import PouchFind from 'pouchdb-find'
import PouchLiveFind from 'pouchdb-live-find'
import Vue from 'vue';
import PouchVue from 'pouch-vue';

PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)

createApp(App).mount('#app')

Vue.use(PouchVue, {
  pouch: PouchDB,    // optional if `PouchDB` is available on the global object
  defaultDB: 'remoteDbName',  // this is used as a default connect/disconnect database
  optionDB: {}, // this is used to include a custom fetch() method (see TypeScript example)
  debug: '*' // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings (will be a separate Plugin in PouchDB 7.0)
});