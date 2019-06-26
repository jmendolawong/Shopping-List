$(function (){
    //Add items
    //prevent default form submission to server
    $('#js-shopping-list-form').submit(function(e){
        e.preventDefault();
        let entry = $(this).find('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${entry}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        )
    });

    //toggles between checked/unchecked. Listens for button click and adds strikethrough if not checked 
    //and removes strikethrough if already checked
    $('.shopping-item-toggle').click(function(e){
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    //Delete items
    //Need to use event delegation for dynamic items
    //Focus on the delete button and remove the parent li
    $('ul').on('click', '.shopping-item-delete', function(e) {
        $(this).closest('li').remove();
      });


})