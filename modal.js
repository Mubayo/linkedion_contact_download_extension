var list = document.getElementsByClassName('search-results__result-list');
var data = '<div id="myModal" class="modal" style="display:none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div id="modal-content" class="modal-content" style="background-color:transparent; margin: 15% auto;padding: 20px;border: 1px solid #888;width: 20%;"><span class="close" style="color: #aaa;float: right; font-size: 28px; font-weight: bold; cursor:pointer;">&times;</span> <p>Some text in the Modal..</p> </div> </div>';
pop = document.createElement("div");
pop.innerHTML= data;
list[0].appendChild(pop);