<!DOCTYPE html>
<Title>Snap In Chat</title>
<body>
<h1>Chat plugin</h1>
<style type='text/css'>
    .embeddedServiceHelpButton .helpButton .uiButton { background-color: #fc881b; font-family: "Salesforce Sans", sans-serif; }
    .embeddedServiceHelpButton .helpButton .uiButton:focus { outline: 1px solid #fc881b; }
    .modalContainer .dockableContainer .sidebarHeader {background-color: #fc881b}
    
    .embeddedServiceLiveAgentStatePrechatDefaultUI .backgroundImg{
        background-size: 250px;
        padding-left: 200px;
        width: 100px;
        height: 100px;
    }
    .embeddedServiceLiveAgentStateChatHeader:not(.alert) .message {
    display: none;
    }
    .embeddedServiceLiveAgentStateWaitingHeader .waitingImage{
        background-size: 30px;
        padding-left: 200px;
        width: 20px;
        height: 30px;
    }
    .embeddedServiceLiveAgentStateWaitingHeader .content{
        background-color:#222222;   
    }
    .embeddedServiceLiveAgentStateChatHeader .content{
        padding-top: 10px;
        background-color:#222222; 
    }
    @font-face {
    font-family: 'Salesforce Sans';
    src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'),
    url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');
    }
</style>
<!--<script src="/soap/ajax/40.0/connection.js" type="text/javascript"></script> -->
<script type='text/javascript' src='https://service.force.com/embeddedservice/3.1/esw.min.js'></script>
<script type='text/javascript' src='https://github.com/karthigk44/Tools-Guide/blob/master/SnapIn%20JSFile.js'>

 </script>
</body>
</html>
