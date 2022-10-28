"use strict";(self["webpackChunkmy_flipper_net"]=self["webpackChunkmy_flipper_net"]||[]).push([[809],{4809:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Re});var a=s(9835),i=s(6970),r=s(1957),n=s(9759),l=s.n(n);const o=e=>((0,a.dD)("data-v-070c549a"),e=e(),(0,a.Cn)(),e),c={class:"flex-center column"},d={class:"device-screen column"},p={class:"flex"},h={class:"info"},f=o((()=>(0,a._)("span",null,"Firmware:",-1))),g=o((()=>(0,a._)("span",null,"Build date:",-1))),u=o((()=>(0,a._)("span",null,"SD card:",-1))),m=o((()=>(0,a._)("span",null,"Databases:",-1))),w=o((()=>(0,a._)("span",null,"Hardware:",-1))),_=o((()=>(0,a._)("span",null,"Radio FW:",-1))),v=o((()=>(0,a._)("span",null,"Radio stack:",-1))),S={class:"column items-center"},y=["width","height"],b={key:0,src:l()},R={key:0,class:"flex-center column q-my-xl"},k=o((()=>(0,a._)("p",null,"Waiting for Flipper...",-1)));function E(e,t,s,n,l,o){const E=(0,a.up)("router-link"),D=(0,a.up)("Updater"),$=(0,a.up)("q-spinner"),F=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(F,{class:"flex-center column"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.wy)((0,a._)("div",d,[(0,a._)("div",p,[(0,a._)("div",h,[(0,a._)("p",null,[f,(0,a._)("span",null,(0,i.zw)("unknown"!==e.info.firmware_version?e.info.firmware_version:e.info.firmware_commit),1)]),(0,a._)("p",null,[g,(0,a._)("span",null,(0,i.zw)(e.info.firmware_build_date),1)]),(0,a._)("p",null,[u,(0,a._)("span",null,(0,i.zw)(e.info.storage_sdcard_present),1)]),(0,a._)("p",null,[m,(0,a._)("span",null,(0,i.zw)(e.info.storage_databases_present),1)]),(0,a._)("p",null,[w,(0,a._)("span",null,(0,i.zw)(e.info.hardware_ver+".F"+e.info.hardware_target+"B"+e.info.hardware_body+"C"+e.info.hardware_connect),1)]),(0,a._)("p",null,[_,(0,a._)("span",null,(0,i.zw)(!1!==e.info.radio_alive?e.info.radio_stack_major+"."+e.info.radio_stack_minor+"."+e.info.radio_stack_sub:"corrupt"),1)]),(0,a._)("p",null,[v,(0,a._)("span",null,(0,i.zw)(e.radioStackType),1)])]),(0,a._)("div",S,[(0,a._)("h5",null,(0,i.zw)(e.info.hardware_name),1),(0,a._)("div",{class:(0,i.C_)(["flipper","1"===e.info.hardware_color?"body-black":"body-white"])},[(0,a.Wm)(E,{class:"display",to:"/device",style:(0,i.j5)("width: "+128*e.screenScale+"px; height: "+64*e.screenScale+"px;"),width:128*e.screenScale,height:64*e.screenScale},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("canvas",{width:128*e.screenScale,height:64*e.screenScale,style:{"image-rendering":"pixelated"},ref:"screenStreamCanvas"},null,8,y),[[r.F8,e.flags.screenStream]])])),_:1},8,["style","width","height"]),e.flags.updateInProgress?((0,a.wg)(),(0,a.iD)("img",b)):(0,a.kq)("",!0)],2)])]),(0,a.Wm)(D,{flipper:e.flipper,rpcActive:e.rpcActive,info:e.info,installFromFile:e.installFromFile,onUpdate:e.onUpdateStage,onShowNotif:e.passNotif,onLog:e.passLog},null,8,["flipper","rpcActive","info","installFromFile","onUpdate","onShowNotif","onLog"])],512),[[r.F8,e.flags.updateInProgress||e.connected&&null!==e.info&&this.info.storage_databases_present&&e.flags.rpcActive&&e.info.hardware_name]]),e.flags.updateInProgress||e.connected&&null!=e.info&&e.flags.rpcActive&&!e.flags.rpcToggling?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",R,[(0,a.Wm)($,{color:"primary",size:"3em",class:"q-mb-md"}),k]))])])),_:1})}s(6822),s(4110),s(8727),s(2166);var D=s(499);const $={class:"updater column flex-center text-center"},F={key:0},U={key:1},C={key:2},q={key:1},T=(0,a.Uk)(" Detected custom firmware "),I={key:0},L=(0,a.Uk)(" with "),B=(0,a._)("b",null,"unsupported",-1),H=(0,a.Uk)(" filetype"),A=[L,B,H],P={class:"flex q-mt-sm"},x=(0,a.Uk)("Install"),Z=(0,a.Uk)("Install from file"),W={key:0},O=(0,a.Uk)("Your firmware doesn't support self-update. Install latest release with "),M=(0,a._)("a",{href:"https://update.flipperzero.one"},"qFlipper desktop tool",-1),N=(0,a.Uk)("."),V=[O,M,N],z={key:1},j=(0,a.Uk)("Cancel");function Y(e,t,s,r,n,l){const o=(0,a.up)("q-item-label"),c=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),p=(0,a.up)("q-select"),h=(0,a.up)("q-btn"),f=(0,a.up)("ProgressBar"),g=(0,a.up)("q-icon"),u=(0,a.up)("q-file"),m=(0,a.up)("q-card-section"),w=(0,a.up)("q-card-actions"),_=(0,a.up)("q-card"),v=(0,a.up)("q-dialog"),S=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",$,[e.flags.updateInProgress?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("p",null,(0,i.zw)(e.updateStage),1),e.flags.updateError?((0,a.wg)(),(0,a.j4)(h,{key:0,outline:"",class:"q-mt-md",onClick:t[3]||(t[3]=t=>{e.flags.updateInProgress=!1,e.flags.updateError=!1})},{default:(0,a.w5)((()=>[j])),_:1})):(0,a.kq)("",!0),e.write.filename.length>0?((0,a.wg)(),(0,a.j4)(f,{key:1,title:e.write.filename,progress:e.write.progress},null,8,["title","progress"])):(0,a.kq)("",!0)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.flags.ableToUpdate&&e.info.storage_sdcard_present?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[void 0!==e.flags.outdated?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.flags.outdated?((0,a.wg)(),(0,a.iD)("p",F,"Your firmware is out of date, newest release is "+(0,i.zw)(e.channels.release.version)+".",1)):e.flags.aheadOfRelease?((0,a.wg)(),(0,a.iD)("p",U,"Your firmware is ahead of current release.")):"unknown"!==e.info.firmware_version?((0,a.wg)(),(0,a.iD)("p",C,"Your firmware is up to date.")):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0),e.channels.custom?((0,a.wg)(),(0,a.iD)("p",q,[T,(0,a._)("b",null,'"'+(0,i.zw)(e.channels.custom.channel)+'"',1),this.channels.custom.url.endsWith("tgz")?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",I,A))])):(0,a.kq)("",!0),(0,a._)("div",P,[(0,a.Wm)(p,{modelValue:e.fwModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fwModel=t),options:e.fwOptions,label:"Choose firmware",suffix:e.fwOptions.find((({label:t})=>t===e.fwModel.label))?e.fwOptions.find((({label:t})=>t===e.fwModel.label)).version:"",id:"fw-select",style:(0,i.j5)(e.$q.screen.xs?"width: 290px;":"width: 320px;")},{option:(0,a.w5)((e=>[(0,a.Wm)(d,(0,i.vs)((0,a.F4)(e.itemProps)),{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"items-start"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{innerHTML:e.opt.label},null,8,["innerHTML"])])),_:2},1024),(0,a.Wm)(c,{class:"items-end"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{innerHTML:e.opt.version,class:(0,i.C_)("fw-option-label "+e.opt.value)},null,8,["innerHTML","class"])])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options","suffix","style"]),e.fwModel?((0,a.wg)(),(0,a.j4)(h,{key:0,onClick:t[1]||(t[1]=t=>e.update(!1)),color:"positive",padding:"12px 30px",class:(0,i.C_)(e.$q.screen.xs?"q-mt-sm":"q-ml-lg")},{default:(0,a.w5)((()=>[x])),_:1},8,["class"])):(0,a.kq)("",!0)]),e.installFromFile&&e.flags.uploadEnabled?((0,a.wg)(),(0,a.j4)(h,{key:2,onClick:t[2]||(t[2]=t=>{e.flags.uploadPopup=!0,e.uploadedFile=null}),class:"q-mt-lg",flat:""},{default:(0,a.w5)((()=>[Z])),_:1})):(0,a.kq)("",!0)],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[e.info.storage_sdcard_present?((0,a.wg)(),(0,a.iD)("span",W,V)):((0,a.wg)(),(0,a.iD)("span",z,"Self-update is impossible without an SD card."))],64))],64)),(0,a.Wm)(v,{modelValue:e.flags.uploadPopup,"onUpdate:modelValue":t[6]||(t[6]=t=>e.flags.uploadPopup=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{outlined:"",modelValue:e.uploadedFile,"onUpdate:modelValue":t[4]||(t[4]=t=>e.uploadedFile=t),label:"Drop or select files",class:"q-pt-md",style:(0,i.j5)(e.$q.screen.width>380?"width: 300px;":"")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"file_upload"})])),_:1},8,["modelValue","style"])])),_:1}),(0,a.Wm)(w,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(h,{flat:"",label:"Upload",onClick:t[5]||(t[5]=t=>e.update(!0))},null,512),[[S]]),(0,a.wy)((0,a.Wm)(h,{flat:"",label:"Cancel",color:"negative"},null,512),[[S]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}s(702),s(8170),s(5231),s(9359),s(6408),s(3269);var Q=s(5530),G=s(7593),K=s(2721),X=s.n(K),J=s(5186),ee=s(4430);const te=(0,a.aZ)({name:"Updater",components:{ProgressBar:G.Z},props:{flipper:Object,rpcActive:Boolean,info:Object,installFromFile:Boolean},setup(){return{flags:(0,D.iH)({restarting:!1,rpcActive:!1,rpcToggling:!1,outdated:void 0,aheadOfRelease:!1,ableToUpdate:!0,updateInProgress:!1,updateError:!1,uploadEnabled:!0,uploadPopup:!1,overrideDevRegion:!1}),channels:(0,D.iH)({}),fwModel:(0,D.iH)({label:"Release",value:"release",version:""}),fwOptions:(0,D.iH)([{label:"Release",value:"release",version:""},{label:"Release-candidate",value:"rc",version:""},{label:"Dev (unstable)",value:"dev",version:""}]),updateStage:(0,D.iH)(""),write:(0,D.iH)({filename:"",progress:0}),uploadedFile:(0,D.iH)(null)}},watch:{async fwModel(e,t){localStorage.setItem("selectedFwChannel",e.value)}},methods:{async update(e){if(this.flags.updateInProgress=!0,this.$emit("update","start"),this.$emit("log",{level:"info",message:"Updater: Update started"}),e){if(!this.uploadedFile)throw this.flags.updateError=!0,this.$emit("update","end"),this.updateStage="No file selected",new Error("No file selected");if(!this.uploadedFile.name.endsWith(".tgz"))throw this.flags.updateError=!0,this.$emit("update","end"),this.updateStage="Wrong file format",new Error("Wrong file format");this.$emit("log",{level:"info",message:"Updater: Uploading firmware from file"})}await this.loadFirmware(e).catch((e=>{throw this.flags.updateError=!0,this.updateStage=e,this.$emit("showNotif",{message:e.toString(),color:"negative"}),this.$emit("log",{level:"error",message:"Updater: "+e.toString()}),e})),this.flags.updateInProgress=!1},async loadFirmware(e){if(this.updateStage="Loading firmware bundle...","0"!==this.info.hardware_region||this.flags.overrideDevRegion){const e=await(0,Q.nx)().catch((e=>{throw this.$emit("showNotif",{message:"Failed to fetch regions: "+e.toString(),color:"negative"}),this.$emit("log",{level:"error",message:"Updater: Failed to fetch regions: "+e.toString()}),e}));let t;e.countries[e.country]?t=e.countries[e.country].map((t=>e.bands[t])):(t=e.default.map((t=>e.bands[t])),e.country="JP");const s={countryCode:e.country,bands:[]};for(const r of t){const e={start:r.start,end:r.end,powerLimit:r.max_power,dutyCycle:r.duty_cycle},t=ee.PB.Region.Band.create(e);s.bands.push(t)}this.$emit("log",{level:"debug",message:"Updater: Region provisioning message: "+JSON.stringify(s)}),s.countryCode=(new TextEncoder).encode(e.country);const a=ee.PB.Region.create(s),i=new Uint8Array(ee.PB.Region.encodeDelimited(a).finish()).slice(1);await this.flipper.commands.storage.write("/int/.region_data",i).catch((e=>this.rpcErrorHandler(e,"storage.write"))),this.$emit("log",{level:"info",message:"Updater: Set Sub-GHz region: "+e.country})}if(e||this.channels[this.fwModel.value]&&this.channels[this.fwModel.value].url){let t;if(e){const e=await this.uploadedFile.arrayBuffer();t=await(0,Q.Vv)(e).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: Unpacked firmware"})}))}else t=await(0,Q.Yj)(this.channels[this.fwModel.value].url).catch((e=>{throw this.flags.updateError=!0,this.updateStage=e,this.$emit("showNotif",{message:"Failed to fetch firmware: "+e.toString(),color:"negative"}),this.$emit("log",{level:"error",message:"Updater: Failed to fetch firmware: "+e.toString()}),e})).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: Downloaded firmware from "+this.channels[this.fwModel.value].url})}));this.updateStage="Loading firmware files",this.$emit("log",{level:"info",message:"Updater: Loading firmware files"});let s="/ext/update/";await this.flipper.commands.storage.stat("/ext/update").catch((async e=>{"ERROR_STORAGE_NOT_EXIST"!==e.toString()?this.rpcErrorHandler(e,"storage.stat"):await this.flipper.commands.storage.mkdir("/ext/update").catch((e=>this.rpcErrorHandler(e,"storage.mkdir"))).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: storage.mkdir: /ext/update"})}))}));for(const e of t){if(0===e.size)s="/ext/update/"+e.name,e.name.endsWith("/")&&(s=s.slice(0,-1)),await this.flipper.commands.storage.mkdir(s).catch((e=>this.rpcErrorHandler(e,"storage.mkdir"))).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: storage.mkdir: "+s})}));else{this.write.filename=e.name.slice(e.name.lastIndexOf("/")+1);const t=this.flipper.emitter.on("storageWriteRequest/progress",(e=>{this.write.progress=e.progress/e.total}));await this.flipper.commands.storage.write("/ext/update/"+e.name,e.buffer).catch((e=>this.rpcErrorHandler(e,"storage.write"))).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: storage.write: /ext/update/"+e.name})})),t()}await(0,J.Z)(300)}this.write.filename="",this.write.progress=0,this.updateStage="Loading manifest...",this.$emit("log",{level:"info",message:"Updater: Loading update manifest"}),await this.flipper.commands.system.update(s+"/update.fuf").catch((e=>this.rpcErrorHandler(e,"system.update"))).finally((()=>{this.$emit("log",{level:"debug",message:"Updater: system.update: OK"})})),this.updateStage="Update in progress, pay attention to your Flipper",this.$emit("log",{level:"info",message:"Updater: Rebooting Flipper"}),await this.flipper.commands.system.reboot(2).catch((e=>this.rpcErrorHandler(e,"system.reboot")))}else this.flags.updateError=!0,this.updateStage="Failed to fetch channel",this.$emit("showNotif",{message:"Unable to load firmware channel from the build server. Reload the page and try again.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"Updater: Failed to fetch channel"})},compareVersions(){X().lt(this.info.protobuf_version_major+"."+this.info.protobuf_version_minor+".0","0.6.0")&&(this.flags.ableToUpdate=!1),this.info.firmware_version&&("unknown"!==this.info.firmware_version&&X().valid(this.info.firmware_version)?X().eq(this.info.firmware_version,this.channels.release.version)?this.flags.outdated=!1:X().gt(this.info.firmware_version,this.channels.release.version)?(this.flags.outdated=!1,this.flags.aheadOfRelease=!0):this.flags.outdated=!0:this.flags.outdated=void 0)},rpcErrorHandler(e,t){e=e.toString(),this.$emit("showNotif",{message:`RPC error in command '${t}': ${e}`,color:"negative"}),this.$emit("log",{level:"error",message:`Updater: RPC error in command '${t}': ${e}`})}},async mounted(){this.channels=await(0,Q.UR)(this.info.hardware_target).catch((e=>{throw this.$emit("showNotif",{message:"Unable to load firmware channels from the build server. Reload the page and try again.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"Updater: failed to fetch channels"}),e})),this.compareVersions(),this.fwOptions[0].version=this.channels.release.version,this.fwOptions[1].version=this.channels.rc.version,this.fwOptions[2].version=this.channels.dev.version,this.channels.custom&&this.channels.custom.url.endsWith("tgz")&&this.fwOptions.unshift({label:this.channels.custom.channel||"Custom",value:"custom",version:this.channels.custom.version||"unknown"});const e=this.fwOptions.find((e=>e.value===localStorage.getItem("selectedFwChannel")));e&&!this.channels.custom?this.fwModel=e:this.fwModel=this.fwOptions[0],"true"===new URLSearchParams(location.search).get("overrideDevRegion")&&(this.flags.overrideDevRegion=!0)}});var se=s(1639),ae=s(6997),ie=s(490),re=s(1233),ne=s(3115),le=s(4455),oe=s(2074),ce=s(4458),de=s(3190),pe=s(3837),he=s(2857),fe=s(1821),ge=s(2146),ue=s(9984),me=s.n(ue);const we=(0,se.Z)(te,[["render",Y]]),_e=we;me()(te,"components",{QSelect:ae.Z,QItem:ie.Z,QItemSection:re.Z,QItemLabel:ne.Z,QBtn:le.Z,QDialog:oe.Z,QCard:ce.Z,QCardSection:de.Z,QFile:pe.Z,QIcon:he.Z,QCardActions:fe.Z}),me()(te,"directives",{ClosePopup:ge.Z});const ve=(0,a.aZ)({name:"PageDeviceInformation",props:{flipper:Object,connected:Boolean,rpcActive:Boolean,info:Object,installFromFile:Boolean},components:{Updater:_e},setup(){return{flags:(0,D.iH)({restarting:!1,rpcActive:!1,rpcToggling:!1,screenStream:!1,updateInProgress:!1}),screenScale:(0,D.iH)(1),channels:(0,D.iH)({})}},computed:{radioStackType(){switch(parseInt(this.info.radio_stack_type)){case 1:return"full";case 2:return"BLE_HCI";case 3:return"light";case 4:return"BLE_BEACON";case 5:return"BLE_BASIC";case 6:return"BLE_FULL_EXT_ADV";case 7:return"BLE_HCI_EXT_ADV";case 16:return"THREAD_FTD";case 17:return"THREAD_MTD";case 48:return"ZIGBEE_FFD";case 49:return"ZIGBEE_RFD";case 64:return"MAC";case 80:return"BLE_THREAD_FTD_STATIC";case 81:return"BLE_THREAD_FTD_DYAMIC";case 96:return"802154_LLD_TESTS";case 97:return"802154_PHY_VALID";case 98:return"BLE_PHY_VALID";case 99:return"BLE_LLD_TESTS";case 100:return"BLE_RLV";case 101:return"802154_RLV";case 112:return"BLE_ZIGBEE_FFD_STATIC";case 113:return"BLE_ZIGBEE_RFD_STATIC";case 120:return"BLE_ZIGBEE_FFD_DYNAMIC";case 121:return"BLE_ZIGBEE_RFD_DYNAMIC";case 128:return"RLV";case 144:return"BLE_MAC_STATIC";default:return this.info.radio_stack_type}}},watch:{async info(e,t){null!==e&&e.storage_databases_present&&this.connected&&await this.start()}},methods:{async startRpc(){this.flags.rpcToggling=!0;const e=await this.flipper.commands.startRpcSession(this.flipper);if(!e.resolved||e.error)throw this.$emit("showNotif",{message:"Unable to start RPC session. Reload the page or reconnect Flipper manually.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"Device: Couldn't start rpc session"}),new Error("Couldn't start rpc session");this.flags.rpcActive=!0,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!0),this.$emit("log",{level:"info",message:"Device: RPC started"})},async stopRpc(){this.flags.rpcToggling=!0,await this.flipper.commands.stopRpcSession(),this.flags.rpcActive=!1,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!1),this.$emit("log",{level:"info",message:"Device: RPC stopped"})},async restartRpc(e){if(this.connected&&this.flags.rpcActive&&!this.flags.restarting||e)return this.flags.restarting=!0,await this.flipper.closeReader(),await(0,J.Z)(300),await this.flipper.disconnect(),await(0,J.Z)(300),await this.flipper.connect(),await this.startRpc(),this.$emit("log",{level:"info",message:"Device: Restarted RPC"}),this.startScreenStream()},async startScreenStream(){await this.flipper.commands.gui.startScreenStreamRequest().catch((e=>this.rpcErrorHandler(e,"gui.startScreenStreamRequest"))).finally((()=>{this.$emit("log",{level:"debug",message:"Device: gui.startScreenStreamRequest: OK"})})),this.flags.screenStream=!0;const e=this.$refs.screenStreamCanvas.getContext("2d");e.lineWidth=1,e.lineCap="square",e.imageSmoothingEnabled=!1,e.fillStyle="#fe8a2b",e.fillRect(0,0,128*this.screenScale,64*this.screenScale),e.fillStyle="black";const t=this.flipper.emitter.on("screen frame",(s=>{for(let t=0;t<128;t++)for(let a=0;a<64;a++){const i=128*Math.floor(a/8)+t,r=7&a;s.at(i)&1<<r?(e.fillStyle="black",e.fillRect(t*this.screenScale,a*this.screenScale,1*this.screenScale,1*this.screenScale)):(e.fillStyle="#fe8a2b",e.fillRect(t*this.screenScale,a*this.screenScale,1*this.screenScale,1*this.screenScale))}const a=this.flipper.emitter.on("stop screen streaming",(()=>{this.flags.screenStream=!1,t(),a()}))}));this.unbindRestart=this.flipper.emitter.on("restart session",(()=>(this.flags.screenStream=!1,this.unbindRestart(),this.restartRpc())))},async stopScreenStream(){await this.flipper.commands.gui.stopScreenStreamRequest().catch((e=>this.rpcErrorHandler(e,"gui.stopScreenStreamRequest"))).finally((()=>{this.$emit("log",{level:"debug",message:"Device: gui.stopScreenStreamRequest: OK"})})),this.flags.screenStream=!1},onUpdateStage(e){this.$emit("update",e),"start"===e?(this.flags.updateInProgress=!0,this.stopScreenStream()):"end"===e&&(this.flags.updateInProgress=!1,this.startScreenStream())},passNotif(e){this.$emit("showNotif",e)},passLog(e){this.$emit("log",e)},rpcErrorHandler(e,t){e=e.toString(),this.$emit("showNotif",{message:`RPC error in command '${t}': ${e}`,color:"negative"}),this.$emit("log",{level:"error",message:`Device: RPC error in command '${t}': ${e}`})},async start(){this.flags.rpcActive=this.rpcActive,this.rpcActive||(setTimeout((()=>{if(!this.rpcActive)return this.restartRpc(!0)}),1e3),await this.startRpc()),this.flags.screenStream||await this.startScreenStream()}},async mounted(){this.connected&&null!==this.info&&this.info.storage_databases_present&&await this.start(),navigator.serial.addEventListener("disconnect",(e=>{this.flags.rpcActive=!1,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!1),this.flags.screenStream=!1}))},async beforeUnmount(){this.unbindRestart(),await this.stopScreenStream(),await(0,J.Z)(3e3)}});var Se=s(9885),ye=s(3940);const be=(0,se.Z)(ve,[["render",E],["__scopeId","data-v-070c549a"]]),Re=be;me()(ve,"components",{QPage:Se.Z,QSpinner:ye.Z})}}]);