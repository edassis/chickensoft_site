(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[4439],{6524:(e,t,a)=>{var s,o=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,a,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of r(t))c.call(e,o)||o===a||l(e,o,{get:()=>t[o],enumerable:!(s=n(t,o))||s.enumerable});return e},y=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),u={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>b}),e.exports=(s=u,p(l({},"__esModule",{value:!0}),s));var h=((e,t,a)=>(a=null!=e?o(i(e)):{},p(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(7294)),d=a(8045),P=a(1776);const f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,g=/youtube-nocookie\.com/;class b extends h.Component{constructor(){super(...arguments),y(this,"callPlayer",d.callPlayer),y(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(f.test(e)){const[,t]=e.match(f);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),y(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:a,onPause:s,onBuffer:o,onBufferEnd:l,onEnded:n,onReady:r,loop:i,config:{playerVars:c,onUnstarted:p}}=this.props,{UNSTARTED:y,PLAYING:u,PAUSED:h,BUFFERING:d,ENDED:P,CUED:f}=window.YT.PlayerState;if(t===y&&p(),t===u&&(a(),l()),t===h&&s(),t===d&&o(),t===P){const e=!!this.callPlayer("getPlaylist");i&&!e&&(c.start?this.seekTo(c.start):this.play()),n()}t===f&&r()})),y(this,"mute",(()=>{this.callPlayer("mute")})),y(this,"unmute",(()=>{this.callPlayer("unMute")})),y(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||f.test(e)?null:e.match(P.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:a,muted:s,playsinline:o,controls:l,loop:n,config:r,onError:i}=this.props,{playerVars:c,embedOptions:p}=r,y=this.getID(e);if(t)return f.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:y,startSeconds:(0,d.parseStartTime)(e)||c.start,endSeconds:(0,d.parseEndTime)(e)||c.end});(0,d.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:y,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:l?1:0,start:(0,d.parseStartTime)(e),end:(0,d.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{n&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:g.test(e)?"https://www.youtube-nocookie.com":void 0,...p}))}),i),p.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return h.default.createElement("div",{style:t},h.default.createElement("div",{ref:this.ref}))}}y(b,"displayName","YouTube"),y(b,"canPlay",P.canPlay.youtube)}}]);