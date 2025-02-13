﻿import icons from 'url:../../img/icons.svg';
import previewView from "./previewView.js" 
import View from "./View.js"

class BookmarksView extends View{
    _parentElement = document.querySelector(".bookmarks__list")
   addHandlerRender(handler){
    window.addEventListener("load", handler)
   }
    _erroMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`
    _message = "";
    _generateMarkup(){
      return this._data.map(bookmark => previewView.render(bookmark, false)).join("") 
  }
    
}
export default new BookmarksView()