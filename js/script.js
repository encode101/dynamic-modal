// JavaScript Document

jQuery(function($){
	$("#event").on({
		click:function(){
			$.ajax({
				url:'process.php',
				//data:$("#form").serialize();
				success:function(data){
					$('#modalGeneric .modal-body').html(data);
					$('#modalGeneric').modal();
				}
			});
		}
	})
})