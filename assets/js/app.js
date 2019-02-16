// Make the lighbox work

jQuery(document).ready(function ($) {

    var images = [];
   $( ".Lightbox" ).each(function( index ) {
       images.push($(this).attr('src'));
     $(this).attr('id',index)
     });
     
   //Function to open LightBox
   $(document).on('click','.Lightbox',function(){open_lb($(this).attr('id'));});
 
   $(document).on('click','#Lightbox .next',function(){
     if(parseInt($('#Lightbox img').attr('id')) < (images.length-1)){
       open_lb(parseInt($('#Lightbox img').attr('id'))+1)
     };
   });
   $(document).on('click','#Lightbox .prev',function(){
     if(parseInt($('#Lightbox img').attr('id')) > 0){
       open_lb(parseInt($('#Lightbox img').attr('id'))-1);
     };
     
   });
 
 function open_lb(id){
     $('body').append('<div id="Lightbox"><span aria-label="Close" class="close"><i class="material-icons">&#xE5CD;</i></span><img src="" alt="" /><span aria-label="Previous" class="prev"><i class="material-icons">&#xE5CB;</i></span><span aria-label="Next" class="next"><i class="material-icons">&#xE5CC;</i></span></div>');
     $('#Lightbox').css('display','block');
     $('#Lightbox img').attr('id',id);
     $('#Lightbox img').attr('src',$('#'+id).attr('src'));
     $('#Lightbox').animate({opacity: 1});
 };
 
   //Function to close LightBox
   $(document).on('click','#Lightbox .close',function(){
     $('#Lightbox').animate({opacity: 0}, 200, function() {
       $('#Lightbox').css('display','none');
       $('#Lightbox').remove();
     });
   });
 
 });
 