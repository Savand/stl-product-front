$(function () {

  const carouselItemList = $('.carousel-inner');
  const carouselndicators = $('.carousel-indicators');
  const lastItemList = carouselItemList.children(":last-child");
  const firstItemList = carouselItemList.children(":first-child");

  setInterval(() => {
    currentCarouselItem = carouselItemList.children('.current-active');
    currentCarouselIndicator = carouselndicators.children('.active');
    currentCarouselIndicator.removeClass('active');
    currentCarouselItem.fadeOut(2000);
    currentCarouselItem.removeClass('current-active');
    if(lastItemList.is(currentCarouselItem)){
      currentCarouselItem = firstItemList;
      currentCarouselIndicator = carouselndicators.children(":first");
    } else {
      currentCarouselItem = currentCarouselItem.next();
      currentCarouselIndicator = currentCarouselIndicator.next();
    }
    currentCarouselItem.fadeIn(2000)
    currentCarouselItem.addClass('current-active');
    currentCarouselIndicator.addClass('active');

  },6000);

});

