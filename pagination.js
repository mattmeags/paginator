var pagination = {
   getPaginationObject: function(displayNumber, paginationNumber, leftArrow, rightArrow, itemClass){
    this.displayNumber = displayNumber;
    this.paginationNumber = paginationNumber;
    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
    this.itemClass = itemClass;
  },
  //returns number of items to be paginated
  getItemNumber: function(itemClass){
    var num = 0;
    $(itemClass).each(function(){
        num++;
    });
    alert(num);
    return num;
  },
  setPaginationControls: function(number, displayNumber){
    //may want to rename, this function returns the number of pagination buttons needed
    var numPaginationControls = number/displayNumber;

    for (var i; i <= numPaginationControls; i++){
      $(".paginationContainer").append('<div class="control-' + i +'"></div>');
    }
    return numPaginationControls;
  },
  //sets inital display of itemClass
  displayInit: function(displayAmount){
    var itemCount = 0;
    $(itemClass).each(function(){
      itemCount++;
      if(itemCount > displayAmount){
        $(this).addClass('hiddenItem');
      }
    });
  },
  //tracks what stage pagination is in
  clickStatus: 0,
  //function for click next and previous
  arrowClick: function(direction){
    if(direction == 'next'){
      //go next in pagination
      pagination.clickStatus++;
      var nextAmount = pagination.clickStatus * pagination.getPaginationObject.paginationNumber;

    }else{
      //go previous in pagination
    }
  },
  //function for clicking next
  //function for clicing previous
};

//temporary init section
$(document).ready(function(){
  pagination.getItemNumber('.item');
});
