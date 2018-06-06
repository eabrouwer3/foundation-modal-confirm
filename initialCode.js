var a = '<div class="small reveal" id="modalConfirm">
	<h1>Are you sure?</h1>
	<p class="lead" id="confirmSubHeader"></p>
	<p id="confirmMessage"></p>
	<div class="row">
		<div class="small-4 small-offset-2 columns large-offset-4 large-2">
			<button class="button expanded" id="confirmSubmit">Yes</button>
		</div>
		<div class="small-4 columns large-2 end">
			<button class="button expanded" data-close>No</button>
		</div>
	</div>
</div>'

// Simple Foundation reveal based modal confirm dialog. You pass in the message, if you have more of a subheader kind
// of a thing one of those, and what to do when yes is clicked. For some examples of how to use it, look at the delete
// and invite functions below.
function modalConfirm(message, submitAction, subheader) {
    $('#confirmSubHeader').text(subheader);
    $('#confirmMessage').text(message);

    var modalHTML = $('#modalConfirm');
    var modal = new Foundation.Reveal(modalHTML);

    $('#confirmSubmit').off();
    $('#confirmSubmit').click(function() {
        modal.close();
        submitAction();
    });
    
    modal.open();
}

function deleteResp(grpID, PID, version, sName) {
    modalConfirm("Are you sure you want to delete the respondent " + fName + " " + lName + " from this survey", function() {
        location.href="/index.cfm?fuseaction=" + deleteRespURL + "&proxyUID=" + proxyUID + "&RID=" + proxyUID + "&sName=" + sName + "&proxyPID=" + PID + "&version=" + version + "&grpID=" + grpID;
    });
}
