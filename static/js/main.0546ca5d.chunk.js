(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.969910ab.png"},function(e,t,n){e.exports=n(36)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){var a={"./gary.png":24,"./karen.png":25,"./larry.png":26,"./mrkrabs.png":27,"./patrick.png":28,"./pearl.png":29,"./perkins.png":30,"./plankton.png":31,"./puff.png":32,"./sandy.png":33,"./spongebob.png":34,"./squidward.png":35};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=23},function(e,t,n){e.exports=n.p+"static/media/gary.14ee7c26.png"},function(e,t,n){e.exports=n.p+"static/media/karen.6410ca4f.png"},function(e,t,n){e.exports=n.p+"static/media/larry.9a9d6b0e.png"},function(e,t,n){e.exports=n.p+"static/media/mrkrabs.507476a9.png"},function(e,t,n){e.exports=n.p+"static/media/patrick.06d479d4.png"},function(e,t,n){e.exports=n.p+"static/media/pearl.d1fd4fa4.png"},function(e,t,n){e.exports=n.p+"static/media/perkins.7e381354.png"},function(e,t,n){e.exports=n.p+"static/media/plankton.578771f3.png"},function(e,t,n){e.exports=n.p+"static/media/puff.1fe421dd.png"},function(e,t,n){e.exports=n.p+"static/media/sandy.615a6e8c.png"},function(e,t,n){e.exports=n.p+"static/media/spongebob.eddb1937.png"},function(e,t,n){e.exports=n.p+"static/media/squidward.37f67002.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(1),i=n(2),l=n(4),p=n(3),u=n(5),m=n(8),f=n.n(m),h=(n(15),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top justify-content-between text-light"},r.a.createElement("a",{className:"navbar-brand d-flex flex-row",href:"#"},r.a.createElement("img",{src:f.a,className:"mr-2",style:{height:"60px"}}),r.a.createElement("h3",{className:"d-flex flex-column"},r.a.createElement("span",null,"Clicky Game"),r.a.createElement("small",null,"Spongebob Edition"))),r.a.createElement("span",{className:"nav-item"},r.a.createElement("h2",null,e.message)),r.a.createElement("span",{className:"nav-item"},r.a.createElement("h3",null,"Score: ",e.score," | Top Score: ",e.topScore)))}),d=(n(17),function(e){return r.a.createElement("img",{key:e.name,src:e.photo,alt:e.name,onClick:function(){return e.handleClick(e.name)}})}),g=(n(19),n(21),function(e){return r.a.createElement("img",{className:"img-thumbnail img",key:e.name,src:e.photo,alt:e.name,onClick:function(){return e.handleClick(e.name)},style:{cursor:"pointer"}})}),k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).renderCharacter=function(e){return r.a.createElement(g,{name:e.path,photo:e.img,handleClick:n.props.handleClick,key:e.path})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex flex-wrap align-items-center justify-content-center board"},this.props.won?r.a.createElement("button",{className:"btn btn-lg",style:{maxHeight:50,backgroundColor:"#ff6700",color:"#fff"},onClick:this.props.newGame},"Start Over!"):this.props.order.map(function(t){return e.renderCharacter(e.props.characters[t])})))}}]),t}(a.Component),b=n(23),C=b.keys().map(function(e){return{path:e.replace(/^.\/(\w+)\.png$/g,"$1"),img:b(e),clicked:!1}});function v(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}return t}var S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={topScore:0,score:0,characters:C,order:v(function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}(0,C.length-1)),message:"Click on any picture to begin!",won:!1},n.handleClick=function(e){var t=n.state.characters.findIndex(function(t){return t.path===e});if(-1===t)return n.setMessage("Something went wrong! Try reloading the page.");!0===n.state.characters[t].clicked?(n.setMessage("Oops! Click on any picture to start over!"),n.resetScore(),n.unClickAllCharacters()):(n.setCharacterToClicked(t),n.incrementScore()),n.shuffleCharacters()},n.newGame=function(){n.unClickAllCharacters(),n.resetScore(),n.resetTopScore(),n.setMessage("Click on any picture to begin!"),n.setState({won:!1})},n.setMessage=function(e){n.setState({message:e})},n.setCharacterToClicked=function(e){n.setState(function(t){return t.characters[e].clicked=!0,{characters:t.characters}})},n.unClickAllCharacters=function(){n.setState(function(e){return{characters:e.characters.map(function(e){return e.clicked=!1,e})}})},n.incrementScore=function(){n.setState(function(e){var t=e.score+1===e.characters.length;return{score:e.score+1,topScore:e.topScore===e.score?e.topScore+1:e.topScore,won:!!t,message:t?"Congratulations! You've won!":"Don't click on the same picture again!"}})},n.resetScore=function(){n.setState({score:0})},n.resetTopScore=function(){n.setState({topScore:0})},n.shuffleCharacters=function(){n.setState(function(e){return{order:v(e.order)}})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{topScore:this.state.topScore,score:this.state.score,message:this.state.message}),r.a.createElement(k,{handleClick:this.handleClick,topScore:this.state.topScore,score:this.state.score,order:this.state.order,characters:this.state.characters,won:this.state.won,newGame:this.newGame}),r.a.createElement(d,null))}}]),t}(a.Component);o.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.0546ca5d.chunk.js.map