document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

#SiteNav a[href='/pages/Home'] {
	color: blue;

}

 	header{
		position:fixed;
	}


#shopify-section-collection-template .collection-hero__image{
	    height: 100%;
}
#shopify-section-collection-template h1.collection-hero__title{
	text-align: left !important;

theme.Slideshow = function(el) {
  this.cache = {
    $slider: $(el),
    sliderArgs: {
      animation: 'fade',
      
