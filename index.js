$(window).on('load', function(){
    $.instagramFeed({
      'username': 'lehealthygang',
      'container': "#instagram-feed-demo",
      'display_profile':false,
      'display_biography':false,
      'display_igtv':false,
      'items':4,
        // 'items_per_row': 4,
        // Determine the image size: Accepted values [150, 240, 320, 480, 640].
        // 'image_size': 320,  
        'display_gallery':true,
        'styling':false,
        
  
    });
  });