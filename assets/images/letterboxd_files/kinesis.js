(window.webpackJsonppageos=window.webpackJsonppageos||[]).push([[2],{"8+I6":function(e,i,t){"use strict";t.r(i),t.d(i,"default",(function(){return c}));var s=t("lwsE"),n=t.n(s),a=t("W8MJ"),r=t.n(a),o=t("YfMo"),c=function(){function e(i){n()(this,e),this.PAGEOS=window.PageOS,this.hasStorage=!!this.PAGEOS.environment&&this.PAGEOS.environment.hasLocalStorage,this._REGION="us-east-1",this._API_VERSION="2013-12-02",this._creds=i,this.lastBatchSent=Date.now(),this.queue=[],this.batchTimer=null,this.BATCH_SIZE=10,this.BATCH_INTERVAL=5e3,this.hasStorage&&localStorage.getItem("PageOS_Kinesis")&&(this.queue=JSON.parse(localStorage.getItem("PageOS_Kinesis"))),this.init()}return r()(e,[{key:"addToQueue",value:function(e){var i=e.records,t=e.streamName,s=e.sampling;i=Array.isArray(i)?i:[i];var n=[];i.forEach((function(e){!1!==s&&!1!==e.Sampling||n.push({Data:e.Data,PartitionKey:e.PartitionKey})})),n.length>0&&(this.queue.push({records:n,streamName:t}),this.hasStorage&&localStorage.setItem("PageOS_Kinesis",JSON.stringify(this.queue)),this.isBatchReady())}},{key:"clearTimer",value:function(){clearTimeout(this.batchTimer),this.batchTimer=null}},{key:"configureAwsKinesis",value:function(){try{window.AWS.config.credentials=new window.AWS.Credentials(this._creds.AccessKeyId,this._creds.SecretAccessKey,this._creds.SessionToken),window.AWS.config.region=this._REGION,this._awsKinesis=new window.AWS.Kinesis({apiVersion:this._API_VERSION}),o.c.info("SUCCESS Kinesis configured")}catch(e){return void o.c.warn("Disabled due to lack of credentials error 😤",e)}}},{key:"getQueueCount",value:function(){var e=0;return this.queue.forEach((function(i){e+=i.records.length})),e}},{key:"init",value:function(){var e=this,i=document.createElement("script");i.src="https://cdn.intergi.com/pageos/js/libs/aws-sdk-kinesis.min.js",document.head.appendChild(i),i.onload=function(){e.configureAwsKinesis()}}},{key:"isBatchReady",value:function(){var e=this;if(!this.queue.length)return!1;this.getQueueCount()>=this.BATCH_SIZE||Date.now()-this.lastBatchSent>this.BATCH_INTERVAL?(this.clearTimer(),this.sendToKinesis()):this.batchTimer||(this.batchTimer=setTimeout((function(){e.sendToKinesis()}),this.BATCH_INTERVAL))}},{key:"sendToKinesis",value:function(){var e=this;if(this._awsKinesis&&0!==this.queue.length){for(var i={};this.queue.length;){var t=this.queue.shift(),s=t.records,n=t.streamName;Array.isArray(i[n])?i[n]=i[n].concat(s):i[n]=s}this.hasStorage&&localStorage.setItem("PageOS_Kinesis",JSON.stringify(this.queue));var a=function(t){if(!i[t].length)return"continue";e._awsKinesis.putRecords({Records:i[t],StreamName:t},(function(e){e&&o.c.error("Kinesis Send Error: ".concat(e,"\n                        , pipeline: ").concat(t,", data: ").concat(i[t]))}))};for(var r in i)a(r);this.lastBatchSent=Date.now()}}}]),e}()}}]);