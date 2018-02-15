  var previousOnload = window.onload; 
        var EikonIdToQuery;
        var EikonUUId;
        var question="";
        var UserId;
        var QueryType="";
      //  sforce.connection.serverUrl = '{!$Site.Prefix}/services/Soap/u/40.0';
     //   sforce.connection.sessionId = "{!$Api.Session_ID}";
        var visitorid="";
        var ContactId  ="";
       // alert('123');
  /*   function getContactByLoginId(){
        
        if(EikonUUId!=null && EikonUUId!=''){
        alert('EikonUUId');
            EikonIdToQuery = EikonUUId;
            var TempUUID = EikonIdToQuery; //Store the UUID before removing extra characters.
            var staticLabel = '{!($Label.ExtraCharacterEikonMessenger)}';
            
            EikonIdToQuery = EikonIdToQuery.substring(staticLabel,EikonIdToQuery.length);
            
            result = sforce.connection.query("select name, id, UserId__c,UUID__c,ContactId__c,ContactId__r.Name from Contact_User_Id__c where UUID__c = \'"+EikonIdToQuery+"\' limit 1");
            var contactuserid= result.getArray("records");
             
            if(contactuserid.length==0){
                result = sforce.connection.query("select name, id, UserId__c,UUID__c,ContactId__c,ContactId__r.Name from Contact_User_Id__c where UUID__c = \'"+TempUUID+"\' limit 1"); 
                var contactuserid= result.getArray("records");
            }
            if(!contactuserid.length==0){
                 UserId = contactuserid[0];
                 ContactId =UserId.ContactId__c;
            }
        }
        }*/
        
     
   
var initESW = function(gslbBaseURL) {
     var CRRID;
    var url= new URL(location);
     question= url.searchParams.get("question");
    var caseNumber=url.searchParams.get("casenumber");
    var firstname=url.searchParams.get("firstname");
    var lastname=url.searchParams.get("lastname");
    EikonUUId= url.searchParams.get("UUID");
  
            
embedded_svc.settings.displayHelpButton = true; //Or false
embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
embedded_svc.settings.defaultMinimizedText = 'Chat with Thomson Reuters Customer Support'; //(Defaults to Chat with an Expert)
//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
//embedded_svc.settings.loadingText = 'Waiting for Queue to be allocated'; //(Defaults to Loading)
//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
// Settings for Live Agent
embedded_svc.settings.avatarImgURL = '';
embedded_svc.settings.prechatBackgroundImgURL = 'https://thomsonreuterstrust--trpocebb--c.cs68.visual.force.com/resource/1518003331000/LiveAgentEikonLogoSignIn';
embedded_svc.settings.waitingStateBackgroundImgURL = 'https://thomsonreuterstrust--trpocebb--c.cs68.visual.force.com/resource/1518003331000/LiveAgentLoaderOrangeonDark';
embedded_svc.settings.smallCompanyLogoImgURL = '';
 
    obj = [{ "label": "UUID", "value": EikonUUId, "displayToAgent": true,"transcriptFields":["ESC_UUID__c"] },
          /* 
            { "label": "Question",
            "value": question,
            "displayToAgent": true,
            "transcriptFields":["Question_del__c"] 
            },*/
            { "label": "CaseNumber",
            "value": caseNumber,
            "displayToAgent": true,
            "transcriptFields":["CaseNumber"] 
            }
           /* ,{ "label": "ContactId",
            "value": ContactId,
            "displayToAgent": true,
            "transcriptFields":["ContactId"] 
            }*/
            ];
          
    embedded_svc.settings.extraPrechatFormDetails = obj;
    embedded_svc.settings.prepopulatedPrechatFields = {
                                                    FirstName: firstname,
                                                    LastName:lastname,
                                                    }; 
    if(caseNumber==null||caseNumber==""){
    embedded_svc.settings.extraPrechatInfo=[
                    {"entityFieldMaps":[
                                        {"doCreate":false,"doFind":false,"fieldName":"LastName","isExactMatch":false,"label":"Last Name"},
                                        {"doCreate":false,"doFind":false,"fieldName":"FirstName","isExactMatch":false,"label":"First Name"}
                                        ]
                    ,"entityName":"Contact","saveToTranscript":"Contact","showOnCreate":false},
                    {"entityFieldMaps":[
                                        {"doCreate":true,"doFind":false,"fieldName":"Subject","isExactMatch":false,"label":"Question"}
                                        ]
                    ,"entityName":"Case","saveToTranscript":"Case","showOnCreate":true}]; 
    }
    else{
    
    embedded_svc.settings.extraPrechatInfo = [
                    {"entityFieldMaps":[
                                        {"doCreate":false,"doFind":false,"fieldName":"LastName","isExactMatch":false,"label":"Last Name"},
                                        {"doCreate":false,"doFind":false,"fieldName":"FirstName","isExactMatch":false,"label":"First Name"}
                                        ]
                    ,"entityName":"Contact","saveToTranscript":"Contact","showOnCreate":false},
                    {"entityFieldMaps":[
                                        {"doCreate":false,"doFind":true,"fieldName":"CaseNumber","isExactMatch":false,"label":"CaseNumber"}
                                        ]
                    ,"entityName":"Case","saveToTranscript":"Case","showOnCreate":false}];  
    }
    
  embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
    
  // alert('12');
  var ret = "573e0000000CavW";
  if(EikonUUId !=null && EikonUUId != '')
              ret = "573e0000000Cavb";
    //alert(ret);    
    return ret;
    }  
    
embedded_svc.settings.enabledFeatures = ['LiveAgent'];
embedded_svc.settings.entryFeature = 'LiveAgent';
embedded_svc.init('https://thomsonreuterstrust--MTRDEV.cs15.my.salesforce.com', 'https://mtrdev-mythomsonreuters.cs15.force.com/HelpApp', gslbBaseURL, '00De0000005Vydr', 'Snap_in', { baseLiveAgentContentURL: 'https://c.la1-c1cs-ord.salesforceliveagent.com/content', deploymentId: '572400000004Ctq', buttonId: '573e0000000CavW', baseLiveAgentURL: 'https://d.la1-c1cs-ord.salesforceliveagent.com/chat', eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Ie00000004C9XEAU_1616eb190b3'}); };
if (!window.embedded_svc)
    { var s = document.createElement('script'); s.setAttribute('src', 'https://thomsonreuterstrust--MTRDEV.cs15.my.salesforce.com/embeddedservice/3.1/esw.min.js'); 
s.onload = function()
 { initESW(null);
 }; 
 document.body.appendChild(s);
 } 
else { initESW('https://service.force.com');
 }